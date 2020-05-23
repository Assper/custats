import { validateSync } from 'class-validator'
import { CommonResponse } from '../../common/common-response'

export function Validated(Wrapped) {
  return new Proxy(Wrapped, {
    construct(Target, args) {
      const target = new Target(...args)
      const errors = validateSync(target)
      if (errors && errors.length) {
        const details = errors
          .map((error) => Object.values(error.constraints || {}))
          .flat()

        throw CommonResponse.badRequest(...details)
      }

      return target
    }
  })
}

import {
  validateSync,
  isBoolean,
  isArray,
  registerDecorator
} from 'class-validator'
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

export function IsIntegrationsFilter(validationOptions) {
  return function (object, propertyName) {
    registerDecorator({
      name: 'isIntegrationsFilter',
      target: object.constructor,
      propertyName: propertyName,
      options: validationOptions,
      validator: {
        validate(value) {
          return (
            typeof value === 'object' &&
            (typeof value.publisher === 'undefined' ||
              isBoolean(value.publisher)) &&
            (typeof value.names === 'undefined' || isArray(value.names))
          )
        }
      }
    })
  }
}

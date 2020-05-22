import { isBoolean } from 'validator'

export function Validated(Wrapped) {
  return new Proxy(Wrapped, {
    construct(Target, args) {
      const target = new Target(...args)
      const prototype = Target.prototype

      Object.getOwnPropertyNames(target).forEach((property) => {
        if (Object.prototype.hasOwnProperty.call(prototype, `${property}Validator`)) {
          const value = target[property]
          prototype[`${property}Validator`](value)
        }
      })

      return target
    }
  })
}

export function IsArray({ response }) {
  return function (target, property, descriptor) {
    Object.defineProperty(target, `${property}Validator`, {
      value(value) {
        if (!Array.isArray(value)) throw Error(response || `${property} should be an array`)
        return value
      }
    })
  
    return descriptor
  }
}

export function IsBoolean({ response }) {
  return function (target, property, descriptor) {
    Object.defineProperty(target, `${property}Validator`, {
      value(value) {
        if (!isBoolean(`${value}`)) throw Error(response || `${property} should be boolean`)
        return value
      }
    })
  
    return descriptor
  }
}

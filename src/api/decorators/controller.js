import { router } from '../router'

function getMethodDescriptor(method, route, descriptor) {
  descriptor.value = {
    route,
    method,
    handler: descriptor.value
  }

  return descriptor
}

export function Controller(prefix = '') {
  return function () {
    return class extends Wrapped {
      constructor (...args) {
        super(...args)
        Object.getOwnPropertyNames(Wrapped.prototype).forEach((key) => {
          const descriptor = Object.getOwnPropertyDescriptor(Wrapped.prototype, key)
          if (typeof descriptor.value === 'object' && descriptor.value.route) {
            const { route, method, handler } = descriptor.value
            router[method](prefix + route, handler.bind(this))
          }
        })
      }
    }
  }
}

export function Get(route) {
  return function (target, property, descriptor) {
    return getMethodDescriptor('get', route, descriptor)
  }
}

export function Post(route) {
  return function (target, property, descriptor) {
    return getMethodDescriptor('post', route, descriptor)
  }
}

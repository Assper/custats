import {
  getMethodDescriptor,
  getJsonHandler,
  setControllerRoutes,
  setMiddlewareDescriptor
} from './helpers'

export function Controller(prefix = '') {
  return (Wrapped) =>
    class extends Wrapped {
      constructor(...args) {
        super(...args)
        setControllerRoutes(Wrapped.prototype, prefix, this)
      }
    }
}

export function Middleware(middleware) {
  return (target, property, descriptor) =>
    setMiddlewareDescriptor(middleware, descriptor)
}

export function Json(target, property, descriptor) {
  if (typeof descriptor.value === 'object') {
    const value = descriptor.value.handler
    descriptor.value.handler = getJsonHandler(value)
  } else {
    const value = descriptor.value
    descriptor.value = getJsonHandler(value)
  }

  return descriptor
}

export function Get(route) {
  return (target, property, descriptor) =>
    getMethodDescriptor('get', route, descriptor)
}

export function Post(route) {
  return (target, property, descriptor) =>
    getMethodDescriptor('post', route, descriptor)
}

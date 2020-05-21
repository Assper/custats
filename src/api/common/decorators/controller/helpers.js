import { config } from '../../../../config'
import { router } from '../../../router'

export function getResponseConfig() {
  return {
    validateBeforeBuild: config.env === 'development'
  }
}

export function setControllerRoutes(prototype, prefix, context) {
  Object.getOwnPropertyNames(prototype).forEach((key) => {
    const descriptor = Object.getOwnPropertyDescriptor(
      prototype,
      key
    )

    if (typeof descriptor.value === 'object' && descriptor.value.route) {
      const { route, method, handler } = descriptor.value
      router[method](prefix + route, handler.bind(context || this))
    }
  })
}

export function getMethodDescriptor(method, route, descriptor) {
  descriptor.value = {
    route,
    method,
    handler: descriptor.value
  }

  return descriptor
}

export function getJsonHandler(value) {
  return function(ctx, ...args) {
    ctx.set('Content-Type', 'application/json')
    return value.call(this, ctx, ...args)
  }
}

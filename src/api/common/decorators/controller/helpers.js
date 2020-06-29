import { router } from '@/api/router'
import { Middleware } from './controller'

export function setControllerRoutes(prototype, prefix, context) {
  Object.getOwnPropertyNames(prototype).forEach((key) => {
    const descriptor = Object.getOwnPropertyDescriptor(prototype, key)

    if (typeof descriptor.value === 'object' && descriptor.value.route) {
      const { route, method, handler, middlewares = [] } = descriptor.value
      router[method](
        prefix + route,
        ...middlewares,
        handler.bind(context || this)
      )
    }
  })
}

export function setMiddlewareDescriptor(middleware, descriptor) {
  const middlewares = Array.isArray(middleware) ? middleware : [middleware]
  if (Array.isArray(descriptor.value.middlewares)) {
    descriptor.value.middlewares.push(...middlewares)
  } else {
    descriptor.value.middlewares = middlewares
  }

  return descriptor
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
  return function (ctx, ...args) {
    ctx.set('Content-Type', 'application/json')
    return value.call(this, ctx, ...args)
  }
}

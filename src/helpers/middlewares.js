import { logger } from './logger'
import { HttpStatus } from './HttpStatus'

export async function errorHandler(ctx, next) {
  try {
    await next()
  } catch (err) {
    ctx.app.emit('error', err, ctx)
  }
}

export async function httpLogger(ctx, next) {
  await next()
  let level = 'error'
  if (ctx.status < HttpStatus.InternalError) level = 'warn'
  if (ctx.status < HttpStatus.BadRequest) level = 'info'
  logger[level](`${ctx.request.method} ${ctx.status} - ${ctx.request.url}`)
}

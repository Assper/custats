import { logger } from './logger'
import { Response } from './response'
import { HttpStatus, ErrorTitle } from './enums'

export async function errorHandler(ctx, next) {
  try {
    await next()
  } catch (err) {
    const response = new Response()
      .errors()
      .push({ title: ErrorTitle.InternalError })
      .build()

    ctx.set('Content-Type', 'application/json')
    ctx.status = HttpStatus.InternalError
    ctx.body = response
    ctx.app.emit('error', err, ctx)
  }
}

export async function httpLogger(ctx, next) {
  const start = Date.now()
  await next()
  const end = Date.now() - start
  let level = 'error'
  if (ctx.status < HttpStatus.InternalError) level = 'warn'
  if (ctx.status < HttpStatus.BadRequest) level = 'info'
  logger[level](
    `${ctx.request.method} ${ctx.status} - ${ctx.request.url} (duration: ${end}ms)`
  )
}

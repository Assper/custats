import { config } from '@/config'
import { logger } from './logger'
import { Response } from './response'
import { HttpStatus, ErrorTitle } from './enums'

export async function errorHandler(ctx, next) {
  try {
    await next()
  } catch (err) {
    let status
    let response

    if (Array.isArray(err.errors) && err.errors.length) {
      status = err.errors[0].status || HttpStatus.InternalError
      response = err
    } else {
      status = HttpStatus.InternalError
      response = new Response()
        .errors()
        .push({ title: ErrorTitle.InternalError, status })
        .build()
    }

    ctx.set('Content-Type', 'application/json')
    ctx.status = status
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

export async function authGuard(ctx, next) {
  const token = ctx.cookies.get('accessToken')
  try {
    const data = await config.auth.googleClient.getTokenInfo(token)
    if (!config.auth.trustedEmails.includes(data.email)) {
      throw new Response().errors().push({
        title: ErrorTitle.AccessDenied,
        status: HttpStatus.AccessDenied
      })
    }

    return next()
  } catch (e) {
    throw new Response()
      .errors()
      .push({ title: ErrorTitle.Unauthorized, status: HttpStatus.Unauthorized })
      .build()
  }
}

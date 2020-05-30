import { resolve } from 'path'
import { createReadStream } from 'fs'
import Koa from 'koa'
import Router from 'koa-router'
import body from 'koa-body'
import helmet from 'koa-helmet'
import serve from 'koa-static'

import { HttpStatus } from './helpers/enums'
import { logger } from './helpers/logger'
import { errorHandler, httpLogger } from './helpers/middlewares'

import { ApiModule } from './api/api.module'

export const app = new Koa()
const router = new Router()
const api = new ApiModule()

router.get('*', (ctx) => {
  ctx.status = HttpStatus.Ok
  ctx.type = 'html'
  ctx.body = createReadStream(resolve(__dirname, '../public/index.html'))
})

app.use(errorHandler)
app.use(httpLogger)
app.use(helmet())
app.use(body())
app.use(serve(resolve(__dirname, '../public')))
app.use(api.router.routes())
app.use(router.routes())

app.on('error', (err, ctx) => {
  logger.error(err, ctx)
})

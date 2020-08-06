import passport from 'koa-passport'
import { authGuard } from '@/helpers/middlewares'
import {
  Controller,
  Get,
  Json,
  Middleware,
  Post
} from '@/api/common/decorators/controller'

@Controller('/auth')
class AuthController {
  constructor(service) {
    this.service = service
  }

  @Json
  @Middleware([
    passport.initialize(),
    passport.authenticate('google', { scope: ['email'] })
  ])
  @Get('/')
  auth() {}

  @Json
  @Middleware([
    passport.initialize(),
    passport.authenticate('google', { failureRedirect: '/auth' })
  ])
  @Get('/callback')
  async authCallback(ctx) {
    const { cookies, query } = ctx
    this.service.setAccessToken(cookies, query.code)
    ctx.redirect('/counters')
  }

  @Json
  @Middleware(authGuard)
  @Post('/logout')
  async logout(ctx) {
    this.service.removeAccessToken(ctx.cookies)
    ctx.body = {}
  }
}

export { AuthController }

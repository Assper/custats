import passport from 'koa-passport'
import {
  Controller,
  Get,
  Json,
  Middleware
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
}

export { AuthController }

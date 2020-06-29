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
    passport.authenticate('google', { scope: ['profile'] })
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
    ctx.cookies.set(
      'accessToken',
      ctx.query.code,
      this.service.getCoockieOptions()
    )
    ctx.redirect('/counters')
  }
}

export { AuthController }

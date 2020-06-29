import passport from 'passport'
import { AuthController } from './auth.controller'
import { AuthService } from './auth.service'
import { initStrategy } from './helpers/google.strategy'

export class AuthModule {
  constructor(config) {
    initStrategy(config.auth)

    this.config = config
    this.service = new AuthService()
    this.controller = new AuthController(this.service)
  }
}

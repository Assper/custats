import { HttpStatus } from '../helpers/enums'
import { router } from './router'
import { CommonResponse } from './common/common-response'
import { CountersModule } from './counters/counters.module'
import { AuthModule } from './auth/auth.module'
import { StreamModule } from './stream/stream.module'

export class ApiModule {
  constructor(config) {
    this.config = config
    this.router = router
    this.counters = new CountersModule(config)
    this.auth = new AuthModule(config)
    this.stream = new StreamModule(config)

    this.router.all('*', this.notFoundHandler)
  }

  notFoundHandler(ctx) {
    ctx.status = HttpStatus.NotFound
    ctx.body = new CommonResponse(this.config.response).notFound()
  }
}

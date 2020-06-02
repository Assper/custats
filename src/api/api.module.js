import { HttpStatus } from '../helpers/enums'
import { router } from './router'
import { CommonResponse } from './common/common-response'
import { CountersModule } from './counters/counters.module'

export class ApiModule {
  constructor(config) {
    this.config = config
    this.router = router
    this.counters = new CountersModule(config)

    this.router.all('*', this.notFoundHandler)
  }

  notFoundHandler(ctx) {
    ctx.status = HttpStatus.NotFound
    ctx.body = CommonResponse.notFound()
  }
}

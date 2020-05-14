import { router } from './router'
import { CountersModule } from './counters/counters.module'

export class ApiModule {
  constructor(config) {
    this.config = config
    this.router = router
    this.counters = new CountersModule()
  }
}

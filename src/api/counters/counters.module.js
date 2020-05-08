import { CountersController } from './counters.controller'
import { CountersService } from './counters.service'

export class CountersModule {
  constructor (config) {
    this.config = config
    this.service = new CountersService()
    this.controller = new CountersController(this.service)
  }
}

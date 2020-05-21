import { CountersController } from './counters.controller'
import { CountersService } from './counters.service'
import { CountersRepository } from './counters.repository'

export class CountersModule {
  constructor(config) {
    this.config = config
    this.repository = new CountersRepository()
    this.service = new CountersService(this.repository)
    this.controller = new CountersController(this.service)
  }
}

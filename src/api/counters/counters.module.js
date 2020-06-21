import { CountersController } from './counters.controller'
import { CountersService } from './counters.service'
import { CountersRepository } from './counters.repository'
import { CountersResponse } from './helpers/counters-response'

export class CountersModule {
  constructor(config) {
    this.config = config
    this.response = new CountersResponse(this.config.response)
    this.repository = new CountersRepository(this.config)
    this.service = new CountersService(this.repository)
    this.controller = new CountersController(this.service, this.response)
  }
}

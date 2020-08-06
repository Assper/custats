import { StreamController } from './stream.controller'
import { StreamService } from './stream.service'
import { StreamRepository } from './stream.repository'

export class StreamModule {
  constructor(config) {
    this.config = config
    this.repository = new StreamRepository(this.config)
    this.service = new StreamService(this.repository)
    this.controller = new StreamController(this.service)
  }
}

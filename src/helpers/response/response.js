import { DataBuilder } from './data.builder'
import { ErrorsBuilder } from './errors.builder'

export class Response {
  constructor(config = {}) {
    this.config = config
  }

  errors(response) {
    return new ErrorsBuilder(response, this.config)
  }

  data(response) {
    return new DataBuilder(response, this.config)
  }
}

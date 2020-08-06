import { AbstractBuilder } from './abstract.builder'

export class ErrorsBuilder extends AbstractBuilder {
  constructor(response, config) {
    super(response, config)
    this.response.errors = this.response.errors || []
    this.errors = this.response.errors
  }

  push(...errors) {
    this.errors.push(...errors)
    return this
  }
}

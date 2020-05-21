import { AbstractBuilder } from './abstract.builder'

export class DataBuilder extends AbstractBuilder {
  constructor(response, config) {
    super(response, config)
    this.response.data = this.response.data || {}
    this.data = this.response.data
  }

  type(type) {
    this.data.type = type
    return this
  }

  id(id) {
    this.data.id = id
    return this
  }

  attributes(attributes) {
    this.data.attributes = attributes
    return this
  }
}

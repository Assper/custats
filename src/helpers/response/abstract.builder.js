import { ResponseValidator } from './response.validator'

export class AbstractBuilder {
  constructor(response = {}, config) {
    this.response = response
    this.config = config || {
      validateBeforeBuild: false
    }
  }

  validateResponse(response) {
    const validator = new ResponseValidator(response)
    const isValid = !validator.getError()
    return !isValid ? validator.toJSON(true) : null
  }

  build() {
    if (this.config.validateBeforeBuild) {
      const error = this.validateResponse(this.response)
      if (error) throw new Error(`Invalid response object (${error})!`)
    }

    return this.response
  }
}

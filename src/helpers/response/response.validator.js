const errorMessages = {
  type: (type) => `Response should be an object but got ${type}`,
  invalid: 'Response should be a valid JSON object',
  confilct: 'Response can\'t contain data and errors at the same time',
  empty: 'Response should contain data or errors object'
}

export class ResponseValidator {
  constructor(response) {
    this.response = response
    this.errors = this.validate(response)
  }

  validate(response) {
    const errors = []
    const responseType = typeof response

    if (responseType !== 'object') {
      errors.push(errorMessages.type(responseType))
    } else {
      if (response.data && response.errors) {
        errors.push(errorMessages.confilct)
      } else if (!response.data && !response.errors) {
        errors.push(errorMessages.empty)
      }
    }

    try {
      JSON.stringify(response)
    } catch (e) {
      errors.push(errorMessages.invalid)
    }

    return errors
  }

  getError() {
    return this.errors.length ? this.errors[0] : null
  }

  toJSON(pretty = false) {
    if (pretty) {
      return JSON.stringify(this.errors, null, '\t')
    }

    return JSON.stringify(this.errors)
  }
}

export class CountersError {
  errorsTitles = Object.freeze({
    InternalError: 'Internal error',
    BadRequest: 'Bad request',
    NotFound: 'Not found'
  })

  constructor(error, logErrors = false) {
    if (logErrors) console.error(error)
    const data = (error.response && error.response.data) || error
    this.error = data.errors || data
  }

  getMessageByTitle(title) {
    return this.errorsTitles[title] || this.errorsTitles.InternalError
  }

  getMessage() {
    if (this.error instanceof Error) {
      return this.error.message
    }

    const isErrorsList = Array.isArray(this.error)
    if (isErrorsList && this.error.length > 1) {
      return this.error.map(
        ({ detail, title }) => detail || this.getMessageByTitle(title)
      )
    }

    if (isErrorsList && this.error.length) {
      const { detail, title } = this.error[0]
      return detail || this.getMessageByTitle(title)
    }

    return this.errorsTitles.InternalError
  }
}

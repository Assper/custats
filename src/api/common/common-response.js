import { v1 as uuidv1 } from 'uuid'
import { Response } from '@/helpers/response'
import { HttpStatus, ErrorTitle } from '@/helpers/enums'

export class CommonResponse {
  constructor(config) {
    this.config = config
  }

  internalError() {
    const error = {
      id: uuidv1(),
      title: ErrorTitle.InternalError,
      status: HttpStatus.InternalError
    }

    return new Response(this.config).errors().push(error).build()
  }

  notFound() {
    const error = {
      id: 'not-found',
      title: ErrorTitle.NotFound,
      status: HttpStatus.NotFound
    }

    return new Response(this.config).errors().push(error).build()
  }

  badRequest(...details) {
    const errors = details.map((detail) => ({
      id: uuidv1(),
      detail,
      title: ErrorTitle.BadRequest,
      status: HttpStatus.BadRequest
    }))

    return new Response(this.config)
      .errors()
      .push(...errors)
      .build()
  }
}

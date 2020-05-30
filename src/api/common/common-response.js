import { v1 as uuidv1 } from 'uuid'
import { Response } from '../../helpers/response'
import { HttpStatus, ErrorTitle } from '../../helpers/enums'

export class CommonResponse {
  static internalError() {
    const error = {
      id: uuidv1(),
      title: ErrorTitle.InternalError,
      status: HttpStatus.InternalError
    }

    return new Response().errors().push(error).build()
  }

  static notFound() {
    const error = {
      id: 'not-found',
      title: ErrorTitle.NotFound,
      status: HttpStatus.NotFound
    }

    return new Response().errors().push(error).build()
  }

  static badRequest(...details) {
    const errors = details.map((detail) => ({
      id: uuidv1(),
      detail,
      title: ErrorTitle.BadRequest,
      status: HttpStatus.BadRequest
    }))

    return new Response()
      .errors()
      .push(...errors)
      .build()
  }
}

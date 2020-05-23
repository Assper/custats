import { Response } from '../../../helpers/response'
import { CommonResponse } from '../../common/common-response'

export class CountersResponse extends CommonResponse {
  static getUsersCount(id, quantity) {
    return new Response()
      .data()
      .type('counter')
      .id(id)
      .attributes({ quantity })
      .build()
  }
}

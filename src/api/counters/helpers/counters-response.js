import { Response } from '@/helpers/response'
import { CommonResponse } from '@/api/common/common-response'

export class CountersResponse extends CommonResponse {
  getUsersCount(id, quantity) {
    return new Response()
      .data()
      .type('counter')
      .id(id)
      .attributes({ quantity })
      .build()
  }
}

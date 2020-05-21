import { HttpStatus } from '../../helpers/enums'
import { Response } from '../../helpers/response'
import { Get, Controller, Json } from '../common/decorators/controller'

@Controller('/counters')
class CountersController {
  constructor(countersService) {
    this.countersService = countersService
  }

  @Json
  @Get('/')
  async countAllUsers(ctx) {
    const users = await this.countersService.countAllUsers()
    ctx.status = HttpStatus.Ok
    ctx.body = new Response()
      .data()
      .type('counter')
      .id('users-counter')
      .attributes({ quantity: users })
      .build()
  }
}

export { CountersController }

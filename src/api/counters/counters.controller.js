import { HttpStatus } from '../../helpers/enums'
import { Response } from '../../helpers/response'
import { Get, Controller, Json } from '../common/decorators/controller'
import { CountUsersFilterDto } from './dto/count-users-filter.dto'

@Controller('/counters')
class CountersController {
  constructor(countersService) {
    this.countersService = countersService
  }

  @Json
  @Get('/users/all')
  async countAllUsers(ctx) {
    const users = await this.countersService.countAllUsers()
    ctx.status = HttpStatus.Ok
    ctx.body = new Response()
      .data()
      .type('counter')
      .id('all-users-counter')
      .attributes({ quantity: users })
      .build()
  }

  @Json
  @Get('/users')
  async countUsers(ctx) {
    const countUsersFilterDto = new CountUsersFilterDto(ctx.query)
    const users = await this.countersService.countUsers(countUsersFilterDto)
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

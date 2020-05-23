import { HttpStatus } from '../../helpers/enums'
import { Get, Controller, Json } from '../common/decorators/controller'
import { CountUsersFilterDto } from './dto/count-users-filter.dto'
import { CountersResponse } from './helpers/counters-response'

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
    ctx.body = CountersResponse.getUsersCount('all-users-counter', users)
  }

  @Json
  @Get('/users')
  async countUsers(ctx) {
    const countUsersFilterDto = new CountUsersFilterDto(ctx.query)
    const users = await this.countersService.countUsers(countUsersFilterDto)
    ctx.status = HttpStatus.Ok
    ctx.body = CountersResponse.getUsersCount('users-counter', users)
  }
}

export { CountersController }

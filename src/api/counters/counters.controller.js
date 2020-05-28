import { HttpStatus } from '../../helpers/enums'
import { Get, Controller, Json } from '../common/decorators/controller'
import { CommonResponse } from '../common/common-response'
import { CountUsersFilterDto } from './dto/count-users-filter.dto'
import { CountersResponse } from './helpers/counters-response'
import { getObjectFromQueryOrReject } from './helpers/utils'

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
    const { filters: encode } = ctx.query
    const filters =
      encode &&
      getObjectFromQueryOrReject(encode, CommonResponse.badRequest, [
        'Filters param should be valid'
      ])
    const countUsersFilterDto = new CountUsersFilterDto(filters)
    const users = await this.countersService.countUsers(countUsersFilterDto)
    ctx.status = HttpStatus.Ok
    ctx.body = CountersResponse.getUsersCount('users-counter', users)
  }
}

export { CountersController }

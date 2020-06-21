import { HttpStatus } from '@/helpers/enums'
import { Get, Controller, Json } from '@/api/common/decorators/controller'

import { CountUsersFilterDto } from './dto/count-users-filter.dto'
import { getObjectFromQueryOrReject } from './helpers/utils'

@Controller('/counters')
class CountersController {
  constructor(service, response) {
    this.response = response
    this.service = service
  }

  @Json
  @Get('/users/all')
  async countAllUsers(ctx) {
    const users = await this.service.countAllUsers()
    ctx.status = HttpStatus.Ok
    ctx.body = this.response.getUsersCount('all-users-counter', users)
  }

  @Json
  @Get('/users')
  async countUsers(ctx) {
    const { filters: encode } = ctx.query
    const filters =
      encode &&
      getObjectFromQueryOrReject(encode, this.response.badRequest, [
        'Filters param should be valid'
      ])
    const countUsersFilterDto = new CountUsersFilterDto(filters)
    const users = await this.service.countUsers(countUsersFilterDto)
    ctx.status = HttpStatus.Ok
    ctx.body = this.response.getUsersCount('users-counter', users)
  }
}

export { CountersController }

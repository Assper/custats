import { HttpStatus } from '../../helpers/HttpStatus'
import { Get, Controller } from '../decorators/controller'

@Controller('/counters')
class CountersController {
  constructor(countersService) {
    this.countersService = countersService
  }

  @Get('/')
  async getAllUsersCount(ctx) {
    ctx.status = HttpStatus.Ok
    ctx.body = await this.countersService.getAllUsersCount()
  }
}

export { CountersController }

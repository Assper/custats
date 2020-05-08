import { HttpStatus } from '../../helpers/HttpStatus'
import { Get, Controller } from '../decorators/controller'

@Controller('/counters')
export class CountersController {
  constructor (countersService) {
    this.countersService = countersService
  }

  @Get('/')
  getAllUsers (ctx) {
    ctx.status = HttpStatus.Ok
    ctx.body = this.countersService.getUsersCount()
  }
}

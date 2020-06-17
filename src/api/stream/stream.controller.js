import { HttpStatus } from '@/helpers/enums'
import { Get, Controller, Json } from '@/api/common/decorators/controller'

@Controller('/stream')
class StreamController {
  constructor(streamService) {
    this.streamService = streamService
  }

  @Json
  @Get('/users/data/json')
  async getUsersByPublisher(ctx) {
    const users = await this.streamService.getUsersByPublisher()
    ctx.status = HttpStatus.Ok
    ctx.body = users
  }
}

export { StreamController }

import { IsBoolean } from 'class-validator'
import {
  Validated,
  IsIntegrationsFilter
} from '../../common/decorators/validation'

@Validated
class CountUsersFilterDto {
  @IsIntegrationsFilter({ message: 'Integrations filter should be valid' })
  integrations

  @IsBoolean({ message: 'imported should be boolean' })
  imported

  constructor(params = {}) {
    this.integrations = params.integrations || {}
    this.imported = params.imported === 'true'
  }
}

export { CountUsersFilterDto }

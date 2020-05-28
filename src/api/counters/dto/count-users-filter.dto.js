import { IsBoolean } from 'class-validator'
import {
  Validated,
  IsIntegrationsFilter,
  IsDateRangeFilter
} from '../../common/decorators/validation'

@Validated
class CountUsersFilterDto {
  @IsIntegrationsFilter({ message: 'Integrations filter should be valid' })
  integrations

  @IsDateRangeFilter({ message: 'Date filer should be valid' })
  date

  @IsBoolean({ message: 'imported should be boolean' })
  imported

  constructor(params = {}) {
    this.integrations = params.integrations || {}
    this.date = params.date || {}
    this.imported = params.imported === 'true'
  }
}

export { CountUsersFilterDto }

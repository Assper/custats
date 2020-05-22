import { IsArray, IsBoolean, Validated } from '../../common/decorators/validation'

@Validated
class CountUsersFilterDto {
  @IsArray({ message: 'integrationsNames should be an array' })
  integrationsNames

  @IsBoolean({ message: 'integrationsPublisherOnly should be boolean' })
  integrationsPublisherOnly

  constructor(params) {
    this.integrationsNames = params.integrationsNames || []
    this.integrationsPublisherOnly = params.integrationsPublisherOnly || false
  }
}

export { CountUsersFilterDto }

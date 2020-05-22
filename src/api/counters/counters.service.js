export class CountersService {
  constructor(countersRepository) {
    this.countersRepository = countersRepository
  }

  countAllUsers() {
    return this.countersRepository.countAllUsers()
  }

  countUsers(countUsersFilterDto) {
    const filters = {
      integrations: {
        names: countUsersFilterDto.integrationsNames,
        publisherOnly: countUsersFilterDto.integrationsPublisherOnly
      }
    }

    return this.countersRepository.countUsers(filters)
  }
}

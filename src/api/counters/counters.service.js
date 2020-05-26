export class CountersService {
  constructor(countersRepository) {
    this.countersRepository = countersRepository
  }

  countAllUsers() {
    return this.countersRepository.countAllUsers()
  }

  countUsers(countUsersFilterDto) {
    return this.countersRepository.countUsers({ ...countUsersFilterDto })
  }
}

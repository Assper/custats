export class CountersService {
  constructor(repository) {
    this.repository = repository
  }

  countAllUsers() {
    return this.repository.countAllUsers()
  }

  countUsers(countUsersFilterDto) {
    return this.repository.countUsers({ ...countUsersFilterDto })
  }
}

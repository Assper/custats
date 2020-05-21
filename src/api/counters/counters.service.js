export class CountersService {
  constructor(countersRepository) {
    this.countersRepository = countersRepository
  }

  countAllUsers() {
    return this.countersRepository.countAllUsers()
  }
}

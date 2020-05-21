export class CountersService {
  constructor(countersRepository) {
    this.countersRepository = countersRepository
  }

  getAllUsersCount() {
    return this.countersRepository.getAllUsersCount()
  }
}

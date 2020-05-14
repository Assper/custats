import { CountersRepository } from './counters.repository'

export class CountersService {
  constructor() {
    this.countersRepository = new CountersRepository()
  }

  getAllUsersCount() {
    return this.countersRepository.getAllUsersCount()
  }
}

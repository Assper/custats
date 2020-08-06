export class StreamService {
  constructor(streamRepository) {
    this.streamRepository = streamRepository
  }

  getUsersByPublisher() {
    return this.streamRepository.getUsersByPublisher()
  }
}

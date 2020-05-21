import { Connect } from '../common/decorators/db'

@Connect
class CountersRepository {
  async getAllUsersCount() {
    const { auth } = this.config.database
    const { users } = this.config.collection.auth
    const db = await this.client.connectTo(auth)
    const collection = db.collection(users)
    return collection.estimatedDocumentCount()
  }
}

export { CountersRepository }

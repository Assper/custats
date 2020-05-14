import { Connect } from '../decorators/db'

@Connect
class CountersRepository {
  constructor () {
    this.dbAuth = this.config.database.auth
    this.collectUsers = this.config.collection.auth.users
  }

  async getAllUsersCount() {
    const db = await this.client.connectTo(this.dbAuth)
    const collection = db.collection(this.collectUsers)
    const docs = await collection.find({}).toArray()
    return docs.length
  }
}

export { CountersRepository }

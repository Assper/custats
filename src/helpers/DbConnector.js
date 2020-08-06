import Promise from 'bluebird'
import { MongoClient, Collection } from 'mongodb'

Promise.promisifyAll(Collection.prototype)
Promise.promisifyAll(MongoClient)

export class DbConnector {
  static client = null
  static mongoConfig = {
    useNewUrlParser: true,
    useUnifiedTopology: true
  }

  constructor(config) {
    if (!DbConnector.client) {
      this.client = new MongoClient(config.url, DbConnector.mongoConfig)
      DbConnector.client = this.client
    } else {
      this.client = DbConnector.client
    }
  }

  async connectTo(dbname) {
    if (!this.client.isConnected()) {
      await this.client.connect()
    }

    return this.client.db(dbname)
  }
}

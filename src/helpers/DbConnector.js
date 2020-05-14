import Promise from 'bluebird'
import { MongoClient, Collection } from 'mongodb'
import { config } from '../config'

Promise.promisifyAll(Collection.prototype)
Promise.promisifyAll(MongoClient)

export class DbConnector {
  static client = null
  static mongoConfig = {
    useNewUrlParser: true,
    useUnifiedTopology: true
  }

  constructor() {
    if (!DbConnector.client) {
      this.client = new MongoClient(config.db.url, mongoConfig)
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

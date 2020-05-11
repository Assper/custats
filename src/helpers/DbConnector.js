import { promisify } from 'util'
import { MongoClient } from 'mongodb'
import { config } from '../config'

export class DbConnector {
  static self = null

  constructor () {
    this.client = new MongoClient(config.db)
    this.connect = promisify(this.client.connect)
    DbConnector.self = this
  }

  static instance () {
    return DbConnector.self || new DbConnector()
  }
}

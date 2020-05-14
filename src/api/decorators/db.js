import { DbConnector } from '../../helpers/DbConnector'
import { config } from '../../config'

export function Connect(Repository) {
  return class extends Repository {
    constructor(...args) {
      super(...args)
      this.config = config.db
      this.client = new DbConnector()
    }
  }
}

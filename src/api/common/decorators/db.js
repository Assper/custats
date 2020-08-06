import { DbConnector } from '@/helpers/DbConnector'

export function Connect(Repository) {
  return class extends Repository {
    constructor(config, ...args) {
      super(...args)
      this.config = config.db
      this.client = new DbConnector(this.config)
    }
  }
}

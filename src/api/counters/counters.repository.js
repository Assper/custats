import { CommonQuery } from '../common/common-query'

class CountersRepository extends CommonQuery {
  async countAllUsers() {
    const { database, collection } = this.config
    const db = await this.client.connectTo(database.auth)
    const coll = db.collection(collection.auth.users)
    return coll.estimatedDocumentCount()
  }

  async countUsers(filters) {
    const { database, collection } = this.config
    const integrationsIds = await this.getIntegrationsIds(filters.integrations)
    const authorsIds = await this.getAuthorsIds({ integrationsIds })

    const filter = { uuid: { $in: authorsIds } }
    if (filters.imported) {
      filter.disqusUsername = { $exists: true, $ne: '' }
    }

    const { date } = filters
    if (date && Object.keys(date).length) {
      filter.signUpDate = {}
      if (date.from) filter.signUpDate.$gte = date.from
      if (date.to) filter.signUpDate.$lte = date.to
    }

    const db = await this.client.connectTo(database.auth)
    const coll = db.collection(collection.auth.users)
    return coll.countDocuments(filter)
  }
}

export { CountersRepository }

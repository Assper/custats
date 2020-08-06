import { CommonQuery } from '@/api/common/common-query'

class CountersRepository extends CommonQuery {
  async countAllUsers() {
    const { database, collection } = this.config
    const db = await this.client.connectTo(database.auth)
    const coll = db.collection(collection.auth.users)
    return coll.estimatedDocumentCount()
  }

  async countUsers({ integrations, imported, publisher, date }) {
    const { database, collection } = this.config
    const integrationsIds = await this.getIntegrationsIds({
      names: integrations,
      publisher
    })
    const authorsIds = await this.getAuthorsIds({ integrationsIds })
    if (!authorsIds.length) return 0

    const filter = { uuid: { $in: authorsIds } }
    if (imported) {
      filter.disqusUsername = { $and: [{ $ne: '' }, { $ne: null }] }
    }

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

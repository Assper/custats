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
    const integrationsIds = (
      await this.getIntegrationsIds(filters.integrations)
    ).map(({ uuid }) => uuid)
    const authorsIds = (await this.getAuthorsIds({ integrationsIds })).map(
      ({ authorId }) => authorId
    )

    const filter = { uuid: { $in: authorsIds } }
    if (filters.imported) {
      filter.disqusUsername = { $exists: true, $ne: '' }
    }

    const db = await this.client.connectTo(database.auth)
    const coll = db.collection(collection.auth.users)
    return coll.countDocuments(filter)
  }
}

export { CountersRepository }

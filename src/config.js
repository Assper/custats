export const config = {
  port: parseInt(process.env.PORT),
  db: {
    url: process.env.MONGO_DB,
    database: {
      auth: 'auth'
    },
    collection: {
      auth: {
        users: 'users'
      }
    }
  }
}

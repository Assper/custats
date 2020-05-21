export const config = {
  port: parseInt(process.env.PORT),
  env: process.env.NODE_ENV,
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

export const config = {
  port: parseInt(process.env.PORT) || 4444,
  env: process.env.NODE_ENV || 'test',
  db: {
    url: process.env.MONGO_TEST_DB || 'localhost:27015',
    database: {
      auth: 'custats-auth',
      comments: 'custats-comments',
      integrations: 'custats-integrations'
    },
    collection: {
      auth: {
        users: 'users'
      },
      comments: {
        authors: 'authors'
      },
      integrations: {
        integrations: 'integrations'
      }
    }
  }
}

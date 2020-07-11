export const config = {
  port: parseInt(process.env.PORT),
  env: process.env.NODE_ENV,
  response: {
    validateBeforeBuild: process.env.NODE_ENV === 'development'
  },
  auth: {
    trustedEmails: ['@insticator.com'],
    googleId: process.env.GOOGLE_ID,
    googleSecret: process.env.GOOGLE_SECRET,
    callbackURL: `${process.env.ENV_URL}:${process.env.PORT}/api/auth/callback`
  },
  db: {
    url: process.env.MONGO_DB,
    database: {
      auth: 'auth',
      comments: 'comments',
      integrations: 'integrations'
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

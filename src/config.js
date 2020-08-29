import { OAuth2Client } from 'google-auth-library'

const callbackURL = `${process.env.ENV_URL}:${process.env.PORT}/api/auth/callback`
const googleId = process.env.GOOGLE_ID
const googleSecret = process.env.GOOGLE_SECRET

export const config = {
  port: parseInt(process.env.PORT),
  env: process.env.NODE_ENV,
  response: {
    validateBeforeBuild: process.env.NODE_ENV === 'development'
  },
  auth: {
    trustedEmails: ['@insticator.com', 'theassper@gmail.com'],
    googleId,
    googleSecret,
    callbackURL,
    googleClient: new OAuth2Client(googleId, googleSecret, callbackURL)
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

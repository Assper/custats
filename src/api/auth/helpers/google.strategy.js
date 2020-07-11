import passport from 'passport'
import { Strategy } from 'passport-google-oauth20'
import { Response } from '@/helpers/response'
import { HttpStatus, ErrorTitle } from '@/helpers/enums'

function authCallback(emails) {
  return (access, refresh, profile, cb) => {
    const isValidEmail = emails.some((email) =>
      profile._json.email.includes(email)
    )
    if (!isValidEmail) {
      const errorResponse = new Response()
        .errors()
        .push({
          title: ErrorTitle.Unauthorized,
          status: HttpStatus.Unauthorized
        })
        .build()

      return cb(errorResponse)
    }

    return cb(null, { access, refresh, profile })
  }
}

export function initStrategy({
  googleId,
  googleSecret,
  callbackURL,
  trustedEmails
}) {
  const config = {
    clientID: googleId,
    clientSecret: googleSecret,
    callbackURL
  }

  passport.use(new Strategy(config, authCallback(trustedEmails)))
  passport.serializeUser((user, cb) => cb(null, JSON.stringify(user)))
  passport.deserializeUser((user, cb) => cb(null, JSON.parse(user)))
}

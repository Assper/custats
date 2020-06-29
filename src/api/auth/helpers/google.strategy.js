import passport from 'passport'
import { Strategy } from 'passport-google-oauth20'

function authCallback(access, refresh, profile, cb) {
  return cb(null, { access, refresh, profile })
}

export function initStrategy({ googleId, googleSecret, callbackURL }) {
  const config = {
    clientID: googleId,
    clientSecret: googleSecret,
    callbackURL
  }

  passport.use(new Strategy(config, authCallback))
  passport.serializeUser((user, cb) => cb(null, JSON.stringify(user)))
  passport.deserializeUser((user, cb) => cb(null, JSON.parse(user)))
}

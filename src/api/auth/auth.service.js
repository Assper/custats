export class AuthService {
  tokens = Object.freeze({
    access: 'accessToken',
    refresh: 'refreshToken'
  })

  getCoockieOptions() {
    return {
      expires: 0,
      httpOnly: true,
      secure: false,
      overwrite: true,
      signed: false,
      sameSite: true
    }
  }

  setToken(cookies, token, type) {
    cookies.set(type, token, this.getCoockieOptions())
  }

  setAccessToken(cookies, token) {
    this.setToken(cookies, token, this.tokens.access)
  }

  setRefreshToken(cookies, token) {
    this.setToken(cookies, token, this.tokens.refresh)
  }
}

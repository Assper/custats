export class AuthService {
  getCoockieOptions() {
    return {
      httpOnly: false,
      secure: false,
      overwrite: true,
      signed: false,
      sameSite: true
    }
  }
}

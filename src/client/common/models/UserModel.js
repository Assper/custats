import { Model } from '../decorators/model'

@Model
class UserModel {
  login() {
    this.actions.login()
  }

  logout() {
    this.actions.logout()
  }
}

export { UserModel }

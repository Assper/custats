import { NAME } from '../reducer'

export class CountersModel {
  constructor({ actions, state, ...props }) {
    this.props = props
    this.actions = actions
    this.state = state
  }

  addIntegration(value) {
    console.log(value)
    this.actions.getUsersCount({ count: this.state[NAME].usersCount + 1 })
  }
}

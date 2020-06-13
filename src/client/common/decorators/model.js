export function Model(Wrapped) {
  return class extends Wrapped {
    constructor({ actions, state, ...props }, ...args) {
      super(...args)
      this.props = props
      this.actions = actions
      this.state = state
    }
  }
}

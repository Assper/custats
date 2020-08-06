import React from 'react'
import { useStore } from 'react-redux'

import { useActions } from '../hooks/useActions'

export function withReducer(actions, deps) {
  return (Wrapped) => (props) => {
    const store = useStore()
    const bindedActions = useActions(actions, deps)
    return <Wrapped {...props} actions={bindedActions} state={store.getState()} />
  }
}


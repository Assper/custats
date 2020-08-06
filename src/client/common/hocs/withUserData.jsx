import React from 'react'
import { useSelector, Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { useActions } from '../hooks/useActions'
import { actions as userActions, reducer } from '../reducers/user'

const store = createStore(reducer, applyMiddleware(thunk))

function WithUserData({ Wrapped, wrappedProps }) {
  const state = useSelector(state => state)
  const actions = useActions(userActions)
  return <Wrapped {...wrappedProps} {...actions} {...state} />
}

export function withUserData(Wrapped) {
  return (props) => (
    <Provider store={store}>
      <WithUserData Wrapped={Wrapped} wrappedProps={props} />
    </Provider>
  )
}


import { types } from './constants'

const initialState = {
  integrations: []
}

export function reducer(state = initialState, action) {
  switch (action.type) {
    case types.SET_INTEGRATIONS:
      return {
        ...state,
        integrations: action.payload
      }

    default:
      return { ...state }
  }
}

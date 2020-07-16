import { types } from './constants'

const initialState = {
  isLogged: false
}

export function reducer(state = initialState, action) {
  switch (action.type) {
    case types.LOGIN:
      return {
        ...state,
        isLogged: true
      }

    case types.LOGOUT:
      return {
        ...state,
        isLogged: false
      }

    default:
      return { ...state }
  }
}

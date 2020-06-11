import { types } from './constants'

const initialState = {
  name: '',
  usersCount: 0
}

export function reducer(state = initialState, action) {
  switch (action.type) {
    case types.GET_USERS_COUNT:
      return {
        ...state,
        usersCount: action.payload
      }

    default:
      return { ...state }
  }
}

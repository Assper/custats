import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { reducer as countersReducer, NAME as COUNTERS_NAME } from './reducer'

export const reducer = combineReducers({
  [COUNTERS_NAME]: countersReducer
})

export const store = createStore(reducer, applyMiddleware(thunk))

import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'

import anecReducer from './reducers/anecdoteReducer'
import filterReducer from './reducers/filterReducer'
import notiReducer from './reducers/notiReducer'

const reducer = combineReducers({
  anec: anecReducer,
  filter: filterReducer,
  noti: notiReducer
})

const store = createStore(reducer, composeWithDevTools(applyMiddleware(thunk)))

export default store
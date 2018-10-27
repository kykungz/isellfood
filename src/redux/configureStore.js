import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'

import counter from './modules/counter'

const reducer = combineReducers({
  counter,
})

const configureStore = () => {
  const middlewares = [thunk]
  const store = createStore(
    reducer /* preloadedState, */,
    composeWithDevTools(applyMiddleware(...middlewares)),
  )

  return store
}

export default configureStore

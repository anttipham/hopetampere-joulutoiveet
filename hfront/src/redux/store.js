import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import wishReducer from './wishReducer'
import emailReducer from './emailReducer'

const reducer = combineReducers({
  emails: emailReducer,
  wishes: wishReducer,
})

const store = createStore(
  reducer,
  applyMiddleware(thunk)
)

// debug
if (process.env.NODE_ENV === 'development') {
  store.subscribe(() => {
    const storeNow = store.getState()
    console.log(storeNow)
  })
}

export default store
import { combineReducers } from 'redux'
import { HYDRATE } from 'next-redux-wrapper'
import testReducer from './testReducer'

const combinedReducer = combineReducers({
  testReducer,
})
const reducer = (state = combinedReducer, action) => {
  if (action.type === HYDRATE) {
    return {
      ...state,
      ...action.payload,
    }
  }

  return combinedReducer(state, action)
}
export default reducer

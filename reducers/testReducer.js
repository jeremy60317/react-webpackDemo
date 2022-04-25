import * as actionTypes from '../constants'
import { HYDRATE } from 'next-redux-wrapper'

const INITIAL_STATE = {
  data: null,
  text: '',
}

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case HYDRATE: {
      return { ...state, ...action.payload }
    }
    case actionTypes.FETCH_LIST_API_SAGA_SUCCESS:
      return { ...state, data: { ...action.apiData } }
    case actionTypes.TEST_ACTION_TEXT:
      return {
        ...state,
        text: action.txt,
      }
    default:
      return { ...state }
  }
}

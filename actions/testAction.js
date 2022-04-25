import * as actionTypes from '../constants'

export const fetchListApiSaga = () => ({
  type: actionTypes.FETCH_LIST_API_SAGA,
})

export const fetchListApiSuccess = (apiData) => ({
  type: actionTypes.FETCH_LIST_API_SAGA_SUCCESS,
  apiData,
})

export const testActionText = (txt) => ({
  type: actionTypes.TEST_ACTION_TEXT,
  txt,
})

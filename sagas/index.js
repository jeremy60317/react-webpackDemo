import { all, call, delay, put, take, takeLatest } from 'redux-saga/effects'
import * as actionTypes from '../constants'
import * as testSaga from './testSaga.js'

function* rootSaga() {
  yield all([
    takeLatest(actionTypes.FETCH_LIST_API_SAGA, testSaga.fetchListApiSaga),
  ])
}

export default rootSaga

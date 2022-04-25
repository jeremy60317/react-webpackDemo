import { call, put, select } from 'redux-saga/effects'
import { fetchListApiSuccess } from '../actions/testAction'

export function* fetchListApiSaga(action) {
  try {
    const res = yield fetch(
      `https://g1api.finlogix.com/v1/post/analysis?per_page=12&page=1`
    )
    const data = yield res.json()
    yield put(fetchListApiSuccess(data))
  } catch (err) {
    console.log('err')
  }
  // console.log('fetchListApiSaga')
  // const url = `https://g1api.finlogix.com/v1/post/analysis?per_page=12&page=1`
  // const res = yield call(fetch, url)
  // const json = yield res.json()
  // if (res && res.status === 200) {
  //   console.log('200')
  //   yield put(fetchListApiSuccess(json))
  // }
}

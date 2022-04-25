import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { END } from 'redux-saga'
import { wrapper } from '../store'
import * as testAction from '../actions/testAction'

const Home = () => {
  const dispatch = useDispatch()
  const testReducer = useSelector((state) => state.testReducer)
  useEffect(() => {
    //test useEffect
    dispatch(testAction.testActionText('909090'))
  }, [])
  return <div>{testReducer.text}</div>
}

export const getServerSideProps = wrapper.getServerSideProps(
  async ({ store }) => {
    console.log('store', store)
    store.dispatch(testAction.fetchListApiSaga())

    await store.sagaTask.toPromise()
  }
)

export default Home

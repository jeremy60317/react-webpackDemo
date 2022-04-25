import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { END } from 'redux-saga'
import { wrapper } from '../store'
import * as testAction from '../actions/testAction'

const Home = () => {
  const dispatch = useDispatch()
  const testReducer = useSelector((state) => state.testReducer)
  const {
    data: { data },
  } = testReducer

  useEffect(() => {
    //test useEffect
    dispatch(testAction.testActionText('909090'))
  }, [])

  return (
    <div>
      {data.map((itm) => (
        <div key={itm.title}>{itm.title}</div>
      ))}
    </div>
  )
}

export const getServerSideProps = wrapper.getServerSideProps(
  async ({ store }) => {
    console.log('store', store.getState())
    const testReducer = store.getState().testReducer
    if (testReducer.data === null) {
      console.log('hihi')
      store.dispatch(testAction.fetchListApiSaga())
      store.dispatch(END)
    }
    await store.sagaTask.toPromise()
  }
)

export default Home

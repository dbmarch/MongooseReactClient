import { takeLatest, put, call, select} from 'redux-saga/effects';
import {errorExample} from '../actions'
import {GET_EXAMPLE, POST_EXAMPLE} from '../actions/action-types'
import axios from '../axios'
import {getPostExampleData} from '../selectors'

function *postExample () {
  console.info ("postExample")
  try {
      const data = yield select(getPostExampleData)
      const response = yield call(axios.post, 'example', data);
      console.info ("requestUrl returns ", response)
      // yield put (setMessage(response.data))
 } catch (e) {
      console.info ('Exception', e);
      if (e.response) {
        yield put(errorExample(e));
      } else {
        yield put(errorExample('Network Error'))
      }
      return;
  }
}

function *getExample () {
  console.info ("getExample")
  try {
      const response = yield call(axios.get, 'example');
      console.info ("requestUrl returns ", response)
      const data = response.data
      // yield put (setMessage(response.data))
 } catch (e) {
      console.info (e);
      if (e.response) {
        yield put(errorExample(e));
      } else {
        yield put(errorExample('Network Error'))
      }
      return;
  }
}

export function* exampleFormSaga() {
  console.info ("exampleFormSaga")
  yield takeLatest(POST_EXAMPLE, postExample)
  yield takeLatest(GET_EXAMPLE, getExample)
}
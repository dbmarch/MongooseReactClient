import { takeLatest, put, call, select} from 'redux-saga/effects';
import {setFailed, setMessage} from '../reducers'
import {FETCH_JSON_HELLO} from '../actions/action-types'
import {getUrl} from '../selectors'


function *fetchJsonMessage () {
  console.info ("fetchJsonMessage")
  try {
      const url = yield select (getUrl)
      const response = yield call(fetch, url);
      console.info ("response", response)
      const responseBody = response.json();
      console.info ('responseBody', responseBody)
  } catch (e) {
      console.info (e);
      // yield put(setFailed(e));
      return;
  }

  // console.info (responseBody);
  // yield put(setRecords(responseBody);
}

export function* fetchJsonSaga() {
  yield takeLatest(FETCH_JSON_HELLO, fetchJsonMessage);
}
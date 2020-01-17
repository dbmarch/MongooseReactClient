import { takeLatest, put, call, select} from 'redux-saga/effects';
import {setFailed, setMessage} from '../reducers'
import {FETCH_JSON_HELLO} from '../actions/action-types'
import {getUrl} from '../selectors'
import axios from 'axios'


axios.defaults.baseURL = 'http://localhost:8000/';
axios.defaults.headers.get['Accept'] = 'application/json';


const requestUrl = async (url) => {
  console.info ("requestUrl ", url)
  

  try {
    const response = await axios.get('json')
    console.info ('response: ', response)
    return response
  } catch( err ) {
    console.info (err);
    return 'error'
  }

}


function *fetchJsonMessage () {
  console.info ("fetchJsonMessage")
  try {
      const url = yield select (getUrl)
      const response = yield call(requestUrl, url);
      console.info ("requestUrl returns ", response)
      // const response = yield call(fetch, url);
      // console.info ("response", response)
      // const responseBody = response.json();
      // console.info ('responseBody', responseBody)
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
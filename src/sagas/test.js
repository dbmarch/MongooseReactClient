import { takeLatest, put, call, select} from 'redux-saga/effects';
import {setError, setMessage} from '../actions'
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
    throw err
  }

}


function *fetchJsonMessage () {
  console.info ("fetchJsonMessage")
  try {
      const url = yield select (getUrl)
      const response = yield call(requestUrl, url);
      console.info ("requestUrl returns ", response)
      yield put (setMessage(response.data))
 } catch (e) {
      console.info (e);
      yield put(setError(e));
      return;
  }
}

export function* fetchJsonSaga() {
  yield takeLatest(FETCH_JSON_HELLO, fetchJsonMessage);
}
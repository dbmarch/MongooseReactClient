import { takeLatest, put, call} from 'redux-saga/effects';
import {setSignalData} from '../actions'
import {FETCH_SIGNAL_DATA} from '../actions/action-types'
import axios from 'axios'

axios.defaults.baseURL = 'http://localhost:8000/';
axios.defaults.headers.get['Accept'] = 'application/json';

const requestUrl = async (url) => {
  console.info ("requestUrl ", url)
  
  try {
    return  await axios.get(url)
  } catch( err ) {
    console.info ("Axios exception", err);
    throw err
  }
}

function *fetchSignalData (action) {
  console.info ("fetchSignalData SAGA")
  try {
      const url = action.payload
      console.info ('url', url)
      const response = yield call(requestUrl, url);
      console.info ("requestUrl returns ", response)
      yield put (setSignalData(response.data))
 } catch (e) {
      console.info ( "Exception Occurred")
      console.info (e);
      return;
  }
}

export function* signalDataSaga() {
 console.info ("signalDataSaga")
  yield takeLatest(FETCH_SIGNAL_DATA, fetchSignalData);
}
import { takeLatest, put, call, select} from 'redux-saga/effects';
import {setGraphData} from '../actions'
import {FETCH_GRAPH_DATA} from '../actions/action-types'
import {getUrl} from '../selectors'
import axios from 'axios'

axios.defaults.baseURL = 'http://localhost:8000/';
axios.defaults.headers.get['Accept'] = 'application/json';

const requestUrl = async (url) => {
  console.info ("requestUrl ", url)
  
  try {
    const response = await axios.get('file/json')
    console.info ('response: ', response)
    return response
  } catch( err ) {
    console.info (err);
    throw err
  }
}


function *fetchGraphData () {
  console.info ("fetchJsonMessage")
  try {
      const url = yield select (getUrl)
      const response = yield call(requestUrl, url);
      console.info ("requestUrl returns ", response)
      yield put (setGraphData(response.data))
 } catch (e) {
      console.info (e);
      return;
  }
}

export function* graphDataSaga() {
  yield takeLatest(FETCH_GRAPH_DATA, fetchGraphData);
}
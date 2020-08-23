import { fork } from 'redux-saga/effects'
import {fetchJsonSaga} from './test'
import {exampleFormSaga} from './exampleFormSaga'
import {graphDataSaga} from './graphSaga'

export default function* rootSaga() {
	yield fork (fetchJsonSaga)
	yield fork (exampleFormSaga)
	yield fork (graphDataSaga)
}
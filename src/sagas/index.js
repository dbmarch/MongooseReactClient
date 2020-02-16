import { fork } from 'redux-saga/effects'
import {fetchJsonSaga} from './test'
import {exampleFormSaga} from './exampleFormSaga'

export default function* rootSaga() {
	yield fork (fetchJsonSaga)
	yield fork (exampleFormSaga)
}
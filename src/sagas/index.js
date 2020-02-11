// import { fork } from 'redux-saga/effects'

import {
	fetchJsonSaga
} from './test'


export default function* rootSaga() {
	yield(fetchJsonSaga())
}
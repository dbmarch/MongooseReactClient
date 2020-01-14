import { fork } from 'redux-saga/effects'

import {
	fetchJsonSaga
} from './test'

import {
	loginUserSaga,
	logoutSaga
} from './authenticate'

export default function* rootSaga() {
	yield(fetchJsonSaga())
}
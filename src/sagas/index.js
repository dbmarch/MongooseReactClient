import { fork } from 'redux-saga/effects'
import {
	loginUserSaga,
	logoutSaga
} from './authenticate'

export default function* rootSaga() {
	yield fork(loginUserSaga)
	yield fork(logoutSaga)
}
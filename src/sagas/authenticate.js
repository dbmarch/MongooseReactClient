import { takeLatest, select, put } from 'redux-saga/effects'

import {
	LOGIN_USER,
	// REGISTER_USER,
	// CONFIRM_USER,
	// RESEND_CONFIRMATION_CODE,
	GET_SIGNED_IN_USER,
	LOGOUT_USER,
} from '../actions/action-types'

import { getUser } from '../selectors'
import { setAuthorized } from '../actions'
// import { idTokenSelector } from '../selectors/authSelectors'
// import Promise from 'bluebird'
// import get from 'lodash/get'

// const loginAsync = user => {
// }


export function* doLoginUser() {
  console.info('doLoginUser')
  
  // const user = yield select(getUser)
  yield put (setAuthorized(true))

	// if (!user.username && !user.password) {
	// 	yield put(setAuthError('require username & password'))
	// 	return
	// }
	// console.info('user', user)

	// try {
	// 	const session = yield call(loginAsync, user)
	// 	yield put(setSession(session))
	// 	yield put(setAuthenticatedUser(userPool.getCurrentUser()))
	// 	const idToken = yield select(idTokenSelector)
	// 	yield call(obtainCredentialsAsync, idToken)
	// 	yield put(setAuthorized(session.isValid()))
	// 	console.info('Session: ', session)
	// } catch (err) {
	// 	yield put(setAuthError({ error: err.code, description: err.message }))
	// }
}



export function* doGetSignedInUser() {
	console.info('doGetSignedInUser')
	const user = yield select(getUser)

	if (!user.username) {
		console.error('user name is required ', user)
		return
	}

	// try {
	// 	const session = yield call(obtainSessionAsync)
	// 	console.info('Session', session)
	// 	yield put(setSession(session))
	// 	yield put(setAuthorized(session.isValid()))
	// 	console.info('currentUser = ', userPool.getCurrentUser())
	// } catch (err) {
	// 	console.error('Get signed in user failed ', err)
	// 	yield put(setAuthError({ error: err.code, description: err.message }))
	// }
}

function* doLogout() {
	console.info('doLogout')

	// try {
	// 	userPool.getCurrentUser().signOut()
	// } catch (err) {
	// 	console.info(err)
	// }
	try {
		yield put(setAuthorized(false))
		// yield put(setSession({}))
	} catch (err) {
		console.info(err)
	}
}

export function* loginUserSaga() {
	console.info('Saga-loginUser')
	yield takeLatest(LOGIN_USER, doLoginUser)
}

export function* getSignedInUserSaga() {
	console.info('Saga-getSignedInUser')
	yield takeLatest(GET_SIGNED_IN_USER, doGetSignedInUser)
}

export function* logoutSaga() {
	console.info('Saga-getSignedInUser')
	yield takeLatest(LOGOUT_USER, doLogout)
}
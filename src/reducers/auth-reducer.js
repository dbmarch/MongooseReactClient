import {
  SET_AUTHORIZED,
  SET_AUTH_ERROR,
  LOGIN_USER,
  LOGOUT_USER,
} from '../actions/action-types'

import { combineReducers } from 'redux'

// Saves the access token
const isAuthenticated = (state = false, action = {}) => {
	switch (action.type) {
    case LOGIN_USER:
    case LOGOUT_USER:
      return false;

		case SET_AUTHORIZED:
			return action.payload
		default:
			return state
	}
}

// Saves the error
const authError = (state = null, action = {}) => {
	switch (action.type) {
		case SET_AUTH_ERROR:
			return action.payload
		default:
			return state
	}
}


export default combineReducers({
	authError,
	isAuthenticated,
})
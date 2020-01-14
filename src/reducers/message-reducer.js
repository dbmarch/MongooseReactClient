import {
  FETCH_JSON_HELLO,
  SET_ERROR,
  SET_MESSAGE,
} from '../actions/action-types'

import { combineReducers } from 'redux'

const setError = (state = null, action = {}) => {
	switch (action.type) {
		case SET_ERROR:
			return action.payload
		default:
			return state
	}
}

const url = (state = null, action = {}) => {
	switch (action.type) {
		case FETCH_JSON_HELLO:
			return action.payload
		default:
			return state
	}
}


const message = (state = null, action = {}) => {
	switch (action.type) {
		case SET_MESSAGE:
			return action.payload
		default:
			return state
	}
}

export default combineReducers({
	setError,
  url,
  message
})
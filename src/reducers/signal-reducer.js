import {
  FETCH_SIGNAL_DATA,
  SET_SIGNAL_DATA
} from '../actions/action-types'

import { combineReducers } from 'redux'

const initialUrl = ''
const url = (state = initialUrl, action = {}) => {
	switch (action.type) {
		case FETCH_SIGNAL_DATA:
			return action.payload
		default:
			return state
	}
}


const initialData = {}
const data = (state = initialData, action = {}) => {
	switch (action.type) {
		case SET_SIGNAL_DATA:
      return action.payload
    case FETCH_SIGNAL_DATA:
      return initialData
		default:
			return state
	}
}

const initialLoading = false
const loading = (state = initialLoading, action = {}) => {
	switch (action.type) {
		case SET_SIGNAL_DATA:
      return false
    case FETCH_SIGNAL_DATA:
      return true
		default:
			return state
	}
}

export default combineReducers({
  url,
	data,
	loading
})
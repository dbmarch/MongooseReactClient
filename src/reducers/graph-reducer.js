import {
  FETCH_GRAPH_DATA,
  SET_GRAPH_DATA
} from '../actions/action-types'

import { combineReducers } from 'redux'

const initialUrl = ''
const url = (state = initialUrl, action = {}) => {
	switch (action.type) {
		case FETCH_GRAPH_DATA:
			return action.payload
		default:
			return state
	}
}


const initialData = {}
const data = (state = initialData, action = {}) => {
	switch (action.type) {
		case SET_GRAPH_DATA:
      return action.payload
    case FETCH_GRAPH_DATA:
      return initialData
		default:
			return state
	}
}

export default combineReducers({
  url,
  data
})
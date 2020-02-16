import {
  GET_EXAMPLE,
  POST_EXAMPLE,
  ERROR_EXAMPLE
} from '../actions/action-types'

import { combineReducers } from 'redux'

const error = (state = null, action = {} ) => {
  switch(action.type){
    case ERROR_EXAMPLE:
      return action.payload
    
    case GET_EXAMPLE:
    case POST_EXAMPLE:
    default:
      return state
  }
}

const postExample = (state = null, action = {}) => {
	switch (action.type) {
		case POST_EXAMPLE:
			return action.payload
		default:
			return state
	}
}

const example = (state = null, action = {}) => {
	switch (action.type) {
		case POST_EXAMPLE:
    case GET_EXAMPLE:
			return action.payload
		default:
			return state
	}
}

export default combineReducers({
  // setError,
  postExample,
  example,
  error
})
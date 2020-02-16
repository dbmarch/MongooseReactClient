import { combineReducers } from 'redux'
import auth from './auth-reducer'
import message from './message-reducer'
import example from './example-reducer'

const reducer = combineReducers({
	auth,
	message,
	example,
})

export default reducer
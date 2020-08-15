import { combineReducers } from 'redux'
import auth from './auth-reducer'
import message from './message-reducer'
import example from './example-reducer'
import config from './config-reducer'

const reducer = combineReducers({
	auth,
	message,
	example,
	config
})

export default reducer
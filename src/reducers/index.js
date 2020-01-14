import { combineReducers } from 'redux'
import auth from './auth-reducer'
import message from './message-reducer'

const reducer = combineReducers({
	auth,
	message,
})

export default reducer
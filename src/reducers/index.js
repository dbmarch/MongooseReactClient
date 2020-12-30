import { combineReducers } from 'redux'
import auth from './auth-reducer'
import message from './message-reducer'
import example from './example-reducer'
import config from './config-reducer'
import graph from './graph-reducer'
import signal from './signal-reducer'

const reducer = combineReducers({
	auth,
	message,
	example,
	config,
	graph,
	signal
})

export default reducer
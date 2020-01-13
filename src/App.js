import React, { Component } from 'react'
import { connect } from 'react-redux'
import './App.css'
import Navigation from './navigation/navigation'
import { Route, Switch, withRouter } from 'react-router-dom'
import { isAuthenticated } from './selectors'

import Home from './pages/home-page'
import WebSocketPage from './pages/ws-page'

export const serverURI = 'http://localhost:8000'

class App extends Component {
	render() {
		return (
			<React.Fragment>
				<Navigation />
				<div className="page">
					<Switch>
						<Route exact path="/" component={Home} />
						<Route path="/login" component={Home} />
						<Route path="/websocket" component={WebSocketPage} />
						<Route component={Home} />
					</Switch>
				</div>
				</React.Fragment>

		)
	}
}
const mapStateToProps = state => {
	return {
		isAuthenticated: isAuthenticated(state),
	}
}

export default withRouter(
	connect(
		mapStateToProps,
		null
	)(App)
)
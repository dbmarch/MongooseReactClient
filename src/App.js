import React, { Component } from 'react'
import { connect } from 'react-redux'
import './App.css'
import Navigation from './navigation/navigation'
import { Route, Switch, withRouter } from 'react-router-dom'
import { isAuthenticated } from './selectors'

import Home from './pages/home-page'
import GraphPage from './pages/graph-page'
import Graph2Page from './pages/graph2-page'
import WebSocketPage from './pages/ws-page'
import SignalPage from './pages/signal-page'

export const serverURI = 'http://localhost:8000'

class App extends Component {
	render() {
		return (
			<React.Fragment>
				<Navigation />
					<Switch>
						<Route exact path="/" component={Home} />
						<Route path='/graph' component={GraphPage} />
						<Route path='/graph2' component={Graph2Page} />
						<Route path='/signal' component={SignalPage} />
						<Route path="/login" component={Home} />
						<Route path="/websocket" component={WebSocketPage} />
						<Route component={Home} />
					</Switch>
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
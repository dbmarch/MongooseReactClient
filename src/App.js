import React, { Component } from 'react'
import { connect } from 'react-redux'
import './App.css'
import Navigation from './navigation/navigation'
import { Route, Switch, withRouter } from 'react-router-dom'
import { isAuthenticated } from './selectors'

import Home from './pages/home-page'

class App extends Component {
	render() {
		return (
			<div className="page">
				<Navigation />
				<Switch>
					<Route exact path="/" component={Home} />
					<Route path="/login" component={Home} />
					<Route component={Home} />
				</Switch>
			</div>
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
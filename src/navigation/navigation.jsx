import React from 'react'
import { connect } from 'react-redux'
import { NavLink } from 'react-router-dom'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import NavDropdown from 'react-bootstrap/NavDropdown'
// import NavDropdown.Item from 'react-bootstrap/NavDropdown.Item'
import { getSignedInUser } from '../actions'
import { isAuthenticated, getAuthenticatedUser } from '../selectors'
import get from 'lodash/get'
import { logoutUser } from '../actions'

// import NavDropdown from 'react-bootstrap/NavDropdown'

const Navigation = ({ isAuthenticated, authenticatedUser, logout }) => {
	return (
		<Navbar style={{ backgroundColor: '#e0e0e0' }} variant="light" expand="lg" fixed="top" sticky="top">
			<Navbar.Brand>BRAND</Navbar.Brand>

			<Nav.Link as={NavLink} to="/" eventKey="1">
				Home{' '}
			</Nav.Link>

			<Nav.Link as={NavLink} to="/graph" eventKey="1">
				Graph{' '}
			</Nav.Link>


			<Nav.Link as={NavLink} to="/websocket" eventKey="1">
				WebSocket{' '}
			</Nav.Link>


			{!isAuthenticated && (
				<Nav.Link as={NavLink} to="/login" eventKey="4" className="ml-auto mr-4">
					Sign-In
				</Nav.Link>
			)}

			{isAuthenticated && (
				<React.Fragment>
					<NavDropdown
						id="nav-account"
						title={get(authenticatedUser, 'username', '---')}
						className="ml-auto mr-4"
						alignRight
					>
						<NavDropdown.Item as={'div'} eventKey="4.1">
							<Nav.Link as={NavLink} to="/account">
								Manage Account
							</Nav.Link>
						</NavDropdown.Item>
						<NavDropdown.Divider />
						<NavDropdown.Item as={'div'} eventKey="4.2" onClick={logout}>
							<Nav.Link as={NavLink} to="/">
								Logout
							</Nav.Link>
						</NavDropdown.Item>
					</NavDropdown>
					{/* <div style={{ margin: '0 3rem' }} /> */}
				</React.Fragment>
			)}
		</Navbar>
	)
}
const mapStateToProps = state => {
	return {
		isAuthenticated: isAuthenticated(state),
		authenticatedUser: getAuthenticatedUser(state),
	}
}

const mapDispatchToProps = dispatch => ({
	getSignedInUser: () => dispatch(getSignedInUser(null)),
	logout: () => dispatch(logoutUser(null)),
})

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(Navigation)
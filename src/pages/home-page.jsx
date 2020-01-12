import React from 'react'
import { connect } from 'react-redux'


const HomePage = () => {


	return (
		<div>
			<h2>Home Page</h2>

		</div>
	)
}

const mapStateToProps = state => {
	return {

	}
}

const mapDispatchToProps = dispatch => ({})

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(HomePage)
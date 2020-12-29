import React from 'react'
import { connect } from 'react-redux'
import { Container, Row, Col} from 'react-bootstrap'
import SignalForm from '../containers/signalForm'

import './signal-page.css'

const SignalPage = () => {
  return (
    <Container fluid className="signal-page-frame">
       <Row>
          <Col xs={2} className="signal-page-left">      
            <div className="mt-4">
             <SignalForm onSubmit = {(data)=>{console.info ("Data: ", data)}}/>
             </div>
          </Col>
          <Col  className="signal-page-right">
             GRAPH
          </Col> 
      </Row>
    </Container>
  )
}

const mapStateToProps = state => {
  return {
  }
}

const mapDispatchToProps = dispatch => ({
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SignalPage)




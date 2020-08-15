import React, {useEffect} from 'react'
import { connect } from 'react-redux'
import {Row, Col, Container, Button, ButtonToolbar} from 'react-bootstrap'
import Alert from 'react-bootstrap/Alert'
import {serverURI} from '../App.js'
import {getJsonMessage, getExampleError, getConfiguration} from '../selectors'
import {fetchJsonHello, postExample, saveConfiguration} from '../actions'
import ExampleForm from '../containers/exampleForm'
import ConfigFileForm from '../containers/configFileForm'

const HomePage = ({jsonMessage, fetchJsonHello, postExample, exampleError, saveConfiguration, config }) => {

  useEffect( () => {
    console.info ('fetch ', `${serverURI}/json`)
    fetchJsonHello(`${serverURI}/json`)
  }, [ fetchJsonHello ]
 )

  const handleSubmit= (formData) => {
    console.info ("Submit Form:", formData )
    // Post the data to the server
    postExample(formData)
  }

  const handleConfig= (configData) => {
    console.info ("Config:",  configData)
    saveConfiguration(configData)
  }

  console.info ("ExampleError: ", exampleError )

  return (
      <div className = "page">
       <Container className = 'home-page-frame'>
        <Container className='home-page-top' >
          <ExampleForm onSubmit = {handleSubmit}/>
        </Container>
        { exampleError && (
          <Alert variant="danger">
					  <div>ERROR: {exampleError} </div>
  				</Alert> )}
          
          <ConfigFileForm onSubmit= {handleConfig} config={config}/>

        <Container className='home-page-bottom' >
        <Row>
            <ButtonToolbar className='button-tray'>
              <Button variant = 'outline-primary' onClick = {()=> fetchJsonHello(`${serverURI}/json`)} >JSON!</Button>
              <Button variant = 'outline-success'>Hello</Button>
            </ButtonToolbar>
          </Row>
          <Row>
            <Col>
              <p>Response:</p>
            </Col>
            <Col xs={9}>
              <p>{JSON.stringify(jsonMessage)}</p>
            </Col>
          </Row>
      </Container>
      </Container>      
    </div>
  )
}

const mapStateToProps = state => {
  return {
    jsonMessage:     getJsonMessage(state),
    exampleError:    getExampleError(state),
    config:          getConfiguration(state)
  }
}

const mapDispatchToProps = dispatch => ({
  fetchJsonHello:     (url) => dispatch(fetchJsonHello(url)),
  postExample:        (data) => dispatch(postExample(data)),
  saveConfiguration:  (data) => dispatch(saveConfiguration(data))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HomePage)




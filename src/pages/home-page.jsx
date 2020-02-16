import React, {useEffect} from 'react'
import { connect } from 'react-redux'
import {Row, Col, Container, Button, ButtonToolbar} from 'react-bootstrap'
import Alert from 'react-bootstrap/Alert'
import {serverURI} from '../App.js'
import {getJsonMessage, getExampleError} from '../selectors'
import {fetchJsonHello, postExample} from '../actions'
import ExampleForm from '../containers/exampleForm'


const HomePage = ({jsonMessage, fetchJsonHello, postExample, exampleError }) => {

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

  }
}

const mapDispatchToProps = dispatch => ({
  fetchJsonHello: (url) => dispatch(fetchJsonHello(url)),
  postExample: (data) => dispatch(postExample(data))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HomePage)



// If we want to just access the URL in this function vs using a saga and store:
 //   useEffect(() => {
//     const getJson = async () =>  {
//         console.info ("Fetching /json")
//         try {
//             const response = await fetch(`${serverURI}/json`, {
//               method: 'GET',
//               headers: {
//                   Accept: 'application/json',
//                   'Content-Type': 'application/json',
//               }
//           })
//           console.info ('awaiting response')
//           const data = await response.json()
//           console.info ('have response:', data)
//         } catch (err) {
//           console.info ("Fetch Failed", err);
//         }
//     }

//     getJson()

// }, [])

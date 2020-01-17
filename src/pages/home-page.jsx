import React, {useEffect} from 'react'
import { connect } from 'react-redux'
import {Row, Col, Container, Button, ButtonToolbar} from 'react-bootstrap'
import {serverURI} from '../App.js'
import {getJsonMessage} from '../selectors'
import {fetchJsonHello} from '../actions'


const HomePage = ({jsonMessage, fetchJsonHello }) => {
  // const [message, setMessage] = useState("---")
  useEffect( () => {
    console.info ('fetch ', `${serverURI}/json`)
    fetchJsonHello(`${serverURI}/json`)
  }, [ fetchJsonHello ]
 )

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



  return (
      <div className = "page">
       <Container className = 'home-page-frame'>
        <Container className='home-page-top' >
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
        <Container className='home-page-bottom' >
          <Row>
            <Col>1 of 2</Col>
            <Col xs={9}>2 of 2</Col>
          </Row>
      </Container>
      </Container>      
    </div>
  )
}

const mapStateToProps = state => {
  return {
    jsonMessage:     getJsonMessage(state)

  }
}

const mapDispatchToProps = dispatch => ({
  fetchJsonHello: (url) => dispatch(fetchJsonHello(url))

})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HomePage)
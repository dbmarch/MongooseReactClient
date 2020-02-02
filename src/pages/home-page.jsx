import React, {useEffect} from 'react'
import { connect } from 'react-redux'
import {Row, Col, Container, Button, ButtonToolbar, Badge, DropdownButton, Dropdown, InputGroup, FormControl, Form} from 'react-bootstrap'
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
            <Col>
          <h2>Some Input</h2>
          </Col>
          <DropdownButton id="dropdown-basic-button" title="Dropdown button">
            <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
            <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
            <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
          </DropdownButton>
          </Row>
        <div>
        
        <Form>
        <fieldset>
        <Form.Row>
          <Col>
          <Form.Group as={Row}>
            <Form.Label as="legend" column sm={4}>
              Radios
            </Form.Label>
                <Col sm={5}>
                  <Form.Check
                    type="radio"
                    label="Radio 1"
                    name="formHorizontalRadios"
                    id="formHorizontalRadios1"
                  />
                  <Form.Check
                    type="radio"
                    label="Radio 2"
                    name="formHorizontalRadios"
                    id="formHorizontalRadios2"
                  />
                  <Form.Check
                    type="radio"
                    label="Radio 3"
                    name="formHorizontalRadios"
                    id="formHorizontalRadios3"
                  />
                </Col>
          </Form.Group>
          </Col>
          <Col>
            <Form.Group as={Row} controlId="formHorizontalCheck">
              <Form.Label as="legend" column sm={4}>
                  Checkboxes
                </Form.Label>
              <Col sm={{ span: 5, offset: 1 }}>
                <Form.Check label="Checkbox 1" />
                <Form.Check label="Checkbox 2" />
                <Form.Check label="Checkbox 3" />
              </Col>
            </Form.Group>
            </Col>
          </Form.Row>
        </fieldset>  
      </Form>
   <br/>
   <Form>
      <Form.Group as={Row}>
        <Col sm={{ span: 10, offset: 9 }}>
          <Button type="submit">Submit</Button>
        </Col>
      </Form.Group>
    </Form>      
  </div>
 </Container>
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
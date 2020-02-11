import React, {useEffect, useState} from 'react'
import { connect } from 'react-redux'
import {Row, Col, Container, Button, ButtonToolbar, DropdownButton, Dropdown, Form} from 'react-bootstrap'
import {serverURI} from '../App.js'
import {getJsonMessage} from '../selectors'
import {fetchJsonHello} from '../actions'
import RadioGroup from '../components/radioGroup/radioGroup'
import CheckboxGroup from '../components/checkboxGroup/checkboxGroup'
import TextBox from '../components/textBox/textBox'


const radioItemList = [
  { name: "Radio Option 1", value: "value1"}, 
  { name: "Radio Option 2", value: "value2"},
  { name: "Radio Option 3", value: "value3"},
]
const defaultRadioItem = radioItemList[0].value

const checkedItemList = [
  { name: "Checkbox 1", value: "cbvalue1"}, 
  { name: "Checkbox 2", value: "cbvalue2"},
  { name: "Checkbox 3", value: "cbvalue3"},
  { name: "Checkbox 4", value: "cbvalue4"},
]
const defaultCheckedItem = []

const HomePage = ({jsonMessage, fetchJsonHello }) => {
  // const [message, setMessage] = useState("---")
  const [radioOption,setRadioOption] = useState(defaultRadioItem)
  const [checkedOption,setCheckedOption] = useState(defaultCheckedItem)
  const [text, setText] = useState('')

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

  const handleSubmit= () => {
    const formData = {
      radioOption,
      checkedOption,
      text
    }
    console.info ("Submit Form", formData )
  }

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
        
        <Form onSubmit = {e => {e.preventDefault()}}>
        <fieldset>
        <Form.Row>
          <RadioGroup
            groupName = "Radio Options" 
            list = {radioItemList}
            value = {radioOption}
            onChange = { (value) => {
              console.info('Radio=', value) 
              setRadioOption(value)
              }} 
            />

          <CheckboxGroup
            groupName = "Checkbox Options" 
            list = {checkedItemList}
            value = {checkedOption}
            onChange = { (value) => {
              console.info('checked=', value) 
              setCheckedOption(value)
              }} 
            />
          </Form.Row>
          <Form.Row>
            <TextBox name = "label" placeholder="Description" onChange = { (value) => {
              console.info('NewText = ', value)
              setText(value)
            }}>Some Text</TextBox>
          </Form.Row>
        </fieldset>  
      </Form>
   <br/>
      <Form.Group as={Row}>
        <Col sm={{ span: 10, offset: 9 }}>
          <Button type="submit" onClick={handleSubmit}>Submit</Button>
        </Col>
      </Form.Group>
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
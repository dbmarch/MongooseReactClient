import React, {useState} from 'react'
import { connect } from 'react-redux'
import {Row, Col, Container, Button, Form} from 'react-bootstrap'
import RadioGroup from '../components/radioGroup/radioGroup'
import CheckboxGroup from '../components/checkboxGroup/checkboxGroup'
import TextBox from '../components/textBox/textBox'
import DropdownGroup from '../components/dropdownGroup/dropdownGroup'

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

const dropdownList = [
  { name: "ITEM 1", value: "item1"}, 
  { name: "ITEM 2", value: "item2"},
  { name: "ITEM 3", value: "item3"},
  { name: "ITEM 4", value: "item4"},
]

const ExampleForm = ({onSubmit}) => {

  const [radioOption,setRadioOption] = useState(defaultRadioItem)
  const [checkedOption,setCheckedOption] = useState(defaultCheckedItem)
  const [text, setText] = useState('')
  const [dropdownValue, setDropdownValue] = useState('')
  
  const handleSubmit= () => {
    const formData = {
      radioOption,
      checkedOption,
      text, 
      dropdownValue
    }
    // console.info ("Submit Form", formData )
    onSubmit(formData)
  }

  return (
        <Container className='example-form' >
          <Row>
            <Col>
              <h2>Some Input</h2>
            </Col>
            <DropdownGroup 
              list = {dropdownList} 
              onChange = {value=>setDropdownValue(value)}
              />
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
  )
}

const mapStateToProps = state => {
  return {
    // jsonMessage:     getJsonMessage(state)

  }
}

const mapDispatchToProps = dispatch => ({
  // fetchJsonHello: (url) => dispatch(fetchJsonHello(url))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ExampleForm)
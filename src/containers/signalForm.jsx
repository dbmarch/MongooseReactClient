import React, {useState} from 'react'
import {Row,Container, Button, Form} from 'react-bootstrap'
import RadioGroup from '../components/radioGroup/radioGroup'
import TextBox from '../components/textBox/textBox'

const mixItemList = [
  { name: "freq1", value: "f1"}, 
  { name: "freq2", value: "f2"}, 
  { name: "Mix",  value: "mix"},

]
const defaultMixItem = mixItemList[0].value

const SignalForm = ({initialValue, onSubmit}) => {
  
  const [mixOption,setMixOption] = useState(defaultMixItem)
  const [freq1, setFreq1] = useState(initialValue.freq1)
  const [freq2, setFreq2] = useState(initialValue.freq2)
  const [samples,setSamples] = useState (initialValue.samples)
  
  
  const handleSubmit= () => {
    const formData = {
      mixOption,
      freq1,
      freq2,
      samples
    }
    // console.info ("Submit Form", formData )
    onSubmit(formData)
  }

  return (
        <Container className='signal-form' >
          <div>
            <Form onSubmit = {e => {e.preventDefault()}}>
            <fieldset>
            <Form.Row>
                <TextBox 
                  name = "Freq 1" 
                  placeholder="Freq In Hz" 
                  value={freq1}
                  defaultValue={freq1}
                  onChange = { 
                        (value) => {
                          console.info('Freq 1 = ', value) 
                          setFreq1(value)
                        }
                       }
                  >Freq 1</TextBox>
              </Form.Row>
              <Form.Row>
                <TextBox 
                  name = "Freq 2" 
                  placeholder="Freq In Hz" 
                  value={freq2} 
                  defaultValue={freq2}                  
                  onChange = { (value) => {
                  console.info('Freq 2 = ', value)
                  setFreq2(value)
                }}>Freq 2</TextBox>
              </Form.Row>

            <Form.Row>
              <div className="mx-auto">
              <RadioGroup
                groupName = "Mixer" 
                list = {mixItemList}
                value = {mixOption}
                onChange = { (value) => {
                  console.info('Mixer =', value) 
                  setMixOption(value)
                  }} 
                />
                </div>
              </Form.Row>
              <Form.Row>
                <TextBox name = "samples" 
                  placeholder="# Samples"
                  defaultValue={samples}
                  onChange = { (value) => {
                  console.info('Samples = ', value)
                  setSamples(value)
                }}># Samples</TextBox>
              </Form.Row>
            </fieldset>  
            
          </Form>
          <br/>
          <Form.Group as={Row}>
             <div className="mx-auto">
              <Button type="submit" onClick={handleSubmit}>Submit</Button>
             </div>
          </Form.Group>
        </div>
      </Container>
  )
}

export default SignalForm

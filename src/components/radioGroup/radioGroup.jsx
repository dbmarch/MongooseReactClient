import React, {useState} from 'react'
import {Col, Form} from 'react-bootstrap'
import './radioGroup.css'

const RadioGroup = ({groupName, list, value, onChange}) => {
  const [radioOption,setRadioOption] = useState(value)
  // list = [{name, value}, ...]
  
 const handleOnChange= (value) => {
    setRadioOption(value)
    onChange(value)
 }

 return (
   <div className='radio-group-container'>
     <Col>
     <Form.Group >
        <Form.Label as="legend" className="radio-group-label">
          {groupName}
        </Form.Label>
          {list.map((item)=>
            <Form.Check 
            type="radio"
            name={groupName}
            label={item.name}
            value ={item.value}
            id = {item.value}
            key={item.value}
            checked= {radioOption === item.value}
            onChange={()=>handleOnChange(item.value)}
            />
          )}
      </Form.Group>
      </Col>
   </div>
  )
}

export default RadioGroup;
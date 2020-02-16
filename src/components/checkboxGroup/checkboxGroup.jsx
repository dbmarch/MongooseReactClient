import React, {useState} from 'react'
import {Col, Form} from 'react-bootstrap'
import {remove} from 'lodash'
import './checkboxGroup.css'

const CheckboxGroup = ({groupName, list, value, onChange}) => {
  const [checkboxOption,setCheckboxOption] = useState(value)
  // list = [{name, value}, ...]
  // value = [ str, str, str] 
  
 const handleOnChange= (value) => {

    if (checkboxOption.includes (value))  {
      const newValue = remove(checkboxOption, item=>item !== value)
      setCheckboxOption(newValue)
      onChange(newValue)
    } else {
      const newValue = [...checkboxOption, value ]
      setCheckboxOption(newValue)
      onChange(newValue)
    }
 }

 return (
   <div className='checkbox-group-container'>
     <Col>
     <Form.Group >
        <Form.Label as="legend" className="checkbox-group-label">
          {groupName}
        </Form.Label>
          {list.map((item)=>
            <Form.Check 
            type="checkbox"
            name={groupName}
            label={item.name}
            value ={item.value}
            id = {item.value} 
            key={item.value}
            checked= {checkboxOption.includes(item.value) }
            onChange={()=>handleOnChange(item.value)}
            />
          )}
      </Form.Group>
      </Col>
   </div>
  )
}

export default CheckboxGroup;
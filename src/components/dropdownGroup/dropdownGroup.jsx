import React, {useState} from 'react'
import {DropdownButton, Dropdown} from 'react-bootstrap'


const DropdownGroup = ({list, onChange}) => {
  const [selected, setSelected] = useState({name: 'Choose', value: ''})

  const handleDropdown = (value) => {
    setSelected(value)
    onChange(value.value)
  }

  return (<div>
    <DropdownButton 
      variant = "outline-primary"
      id="dropdown-basic-button" 
      alignRight
      title={selected.name}>
         {list.map((item, index)=>
          <Dropdown.Item 
            eventKey={index} 
             onSelect = {()=>handleDropdown(item)}
             key = {index} >
              {item.name} 
            </Dropdown.Item>
        )} 
    </DropdownButton>
  </div>)
}

export default DropdownGroup
import React, {useState, useRef} from 'react'
import {InputGroup, FormControl} from 'react-bootstrap'
import './textBox.css'



const TextBox = ({name, placeholder, onChange}) => {
  const textElement = useRef('hi')

  const handleOnBlur = () => {
    onChange(textElement.current.value)
  }

  return (
    <div className="textbox-container">
      <InputGroup size="sm" className="mb-3">
        <InputGroup.Prepend>
          <InputGroup.Text id="inputGroup-sizing-sm">{name}</InputGroup.Text>
        </InputGroup.Prepend>
        <FormControl 
            aria-label="Small" 
            aria-describedby="inputGroup-sizing-sm" 
            placeholder={placeholder}
            onBlur = { handleOnBlur }
            ref = {textElement}
            />
     </InputGroup>
    </div>
  )
}

export default TextBox

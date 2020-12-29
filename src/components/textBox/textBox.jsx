import React, {useRef} from 'react'
import {InputGroup, FormControl} from 'react-bootstrap'
import './textBox.css'



const TextBox = ({name, placeholder, onChange, defaultValue}) => {
  const textElement = useRef("22")
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
            defaultValue={defaultValue}
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

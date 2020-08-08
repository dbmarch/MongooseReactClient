import React, {useState} from 'react'
import {Row, Col, Container, Button, ButtonToolbar} from 'react-bootstrap'
import FileLoad from '../components/FileLoad/FileLoad'
import FileSave from '../components/FileSave/FileSave'

const ConfigFileForm = ({onSubmit}) => {
  const [fileName,setFileName] = useState('')

  const handleSubmit= () => {
    const formData = {
    }
    console.info ("Submit Form", formData )
    onSubmit(formData)
  }

  const loadConfig = () =>{
    console.info ("LoadConfig")
  }


return (
  
  <Container className='form-container' >
    <Row>
      <ButtonToolbar className='button-tray'>
        <Button variant = 'outline-primary' onClick = {()=> loadConfig()} >LOAD</Button>
        <FileSave />
      </ButtonToolbar>
    </Row>
    <Row>
      <div className = 'drop-box'>
        <FileLoad />
      </div>
    </Row>
    <Row>
      <div> Filename {fileName}</div>
    </Row>
  </Container>
)
}


export default ConfigFileForm

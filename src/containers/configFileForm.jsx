import React from 'react'
import {Row, Container, ButtonToolbar} from 'react-bootstrap'
import FileLoad from '../components/FileLoad/FileLoad'
import JsonFileSave from '../components/JsonFileSave/JsonFileSave'

const ConfigFileForm = ({onSubmit, config}) => {
  const fileName = 'config.json'


  const handleSubmit= (formData) => {
    console.info ("Submit Form", formData )
    onSubmit(formData)
  }

return (
  <Container className='form-container' >
    <div>Configuration Save and Restore</div>
    <Row>
      <ButtonToolbar className='button-tray'>
        <JsonFileSave fileName={fileName} data={config}/>
        <FileLoad onUpload={handleSubmit}/>
      </ButtonToolbar>
    </Row>
    <Row>
    </Row>
  </Container>
)
}



export default ConfigFileForm

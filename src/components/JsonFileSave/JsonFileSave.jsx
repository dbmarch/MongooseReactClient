import React from 'react'
import {Button} from 'react-bootstrap'
import FileSaver from 'file-saver';

const JsonFileSave = ({fileName, data }) => {
  const textBlob = new Blob ([JSON.stringify(data)], {type: "application/json"})
  const saveConfig = () =>{
    console.info ("SaveConfig")
    FileSaver.saveAs(textBlob, fileName)
  }

  return (
    <Button variant = 'outline-primary' onClick = {()=> saveConfig()} >Save/Download</Button>
  )
}


export default JsonFileSave
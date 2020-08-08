import React, {useCallback, useState} from 'react'
import {Button} from 'react-bootstrap'

import FileSaver from 'file-saver';

const FileSave = () => {
  const [filename, setFilename] = useState('<empty>')
  const jsonObject =  {
      "name": "test",
      "description": "Example data file",
      "version": 1,
      "data" : {
        "name" : "dataField"
      }
  }
  
  var blob = new Blob ([jsonObject], {type: "application/json"})
  const textBlob = new Blob ([JSON.stringify(jsonObject)], {type: "application/json"})
  const saveConfig = () =>{
    console.info ("SaveConfig")
    FileSaver.saveAs(textBlob, "myconfig.json")
  }

  return (
    <Button variant = 'outline-success' onClick = {()=> saveConfig()} >SAVE</Button>
  )
}


export default FileSave
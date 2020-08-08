import React, {useCallback, useState} from 'react'
import {useDropzone} from 'react-dropzone'

const FileLoad = () => {
  const [filename, setFilename] = useState('<empty>')
  const onDrop = useCallback(acceptedFiles => {
    // Do something with the files
    acceptedFiles = acceptedFiles.filter ( file => file.type === "application/json")
    console.info (acceptedFiles)
    console.info (`onDrop Received ${acceptedFiles.length} files`)
    acceptedFiles.forEach(file => {

      console.info (`Name: ${file.name}    Size: ${file.size}    Path: ${file.path}`)

      const reader = new FileReader()
 
      reader.onabort = () => console.log('file reading was aborted')
      reader.onerror = () => console.log('file reading has failed', reader.error)
      reader.onload = () => {
      // Do whatever you want with the file contents
        
      console.info ("reading file")
      try {
        const binaryStr = reader.result
          
          console.log(binaryStr)
          const jsonObject = JSON.parse(binaryStr)
        } catch (err) {
        console.info ("unable to load file: ", err)
      }
    }
    reader.readAsArrayBuffer(file)
   
  })
  }, [])
  const {getRootProps, getInputProps, isDragActive} = useDropzone({onDrop})
  return (
    <div {...getRootProps()}>
      <input {...getInputProps()} />
          <div>
          <p>Drag files here</p>
          <p> or</p>
          <p>Click to select files</p>
          </div>
          <div>
            {filename}
          </div>
     </div>
  )
}


export default FileLoad
import React, {useCallback} from 'react'
import {useDropzone} from 'react-dropzone'
import './FileLoad.css'

const FileLoad = ({onUpload}) => {
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
          const jsonObject = JSON.parse(reader.result)
          console.info ('jsonObject', jsonObject)
          onUpload(jsonObject)
        } catch (err) {
        console.info ("unable to load file: ", err)
      }
    }
    // reader.readAsArrayBuffer(file)
    reader.readAsText(file)
  })
  }, [onUpload])
  const {getRootProps, getInputProps, isDragActive} = useDropzone({onDrop})
  console.info ('isDragActive ', isDragActive)
  const dragStyle = isDragActive ? {
    backgroundColor: '#007bff',
    color: 'white'
  } : {}
  console.info(dragStyle)
  return (
    <div {...getRootProps()} className='drop-box' style={dragStyle}>
      <div>Drop files here</div>
      <div>Click File-Open</div>
      <input {...getInputProps()} />
     </div>
  )
}


export default FileLoad
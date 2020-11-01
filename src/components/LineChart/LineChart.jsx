import React from 'react'
import {XYPlot, LineSeries} from 'react-vis'
import Alert from 'react-bootstrap/Alert'

const LineChart = ({ data }) => {
  console.info ('data ', data)

  const haveData = Array.isArray(data) ? true : false

  console.info ("data is array ", haveData)
 
  return (
    <div className="App">
    {haveData &&
    <XYPlot height={300} width={300}>
      <LineSeries data={data} />
    </XYPlot>
   }
   <Alert show={!haveData} variant='warning'>
     Invalid Graph Data
    </Alert>
  </div>
  
  )
}

export default LineChart
import React, {useEffect, useState} from 'react'
import { connect } from 'react-redux'
import { Container, Row, Col} from 'react-bootstrap'
import SignalForm from '../containers/signalForm'
import {serverURI} from '../App.js'
import { LineChart, Line, XAxis, YAxis,
   Tooltip, CartesianGrid, Legend, 
   } from 'recharts';
import {  scaleLog } from 'd3-scale';
import {getSignalData, getSignalLoading} from '../selectors'
import {fetchSignalData} from '../actions'

import './signal-page.css'

// const data = [
//   { name: 'Page A', uv: 1000, pv: 2400, amt: 2400, uvError: [75, 20] },
//   { name: 'Page B', uv: 300, pv: 4567, amt: 2400, uvError: [90, 40] },
//   { name: 'Page C', uv: 280, pv: 1398, amt: 2400, uvError: 40 },
//   { name: 'Page D', uv: 200, pv: 9800, amt: 2400, uvError: 20 },
//   { name: 'Page E', uv: 278, pv: null, amt: 2400, uvError: 28 },
//   { name: 'Page F', uv: 189, pv: 4800, amt: 2400, uvError: [90, 20] },
//   { name: 'Page G', uv: 189, pv: 4800, amt: 2400, uvError: [28, 40] },
//   { name: 'Page H', uv: 189, pv: 4800, amt: 2400, uvError: 28 },
//   { name: 'Page I', uv: 189, pv: 4800, amt: 2400, uvError: 28 },
//   { name: 'Page J', uv: 189, pv: 4800, amt: 2400, uvError: [15, 60] },
// ]

const scale = scaleLog().base(10).nice()

const SignalPage = ({signalData, fetchSignalData, loading }) => {
  const [config,setConfig] = useState(1000)
  useEffect( () => {
    const url = `${serverURI}/file/signal`
    const {freq, samples} = config
    console.info ('freq ', freq)
    console.info ('samples ', samples)
    console.info ('fetch ', url)
    fetchSignalData(url)
  }, [ fetchSignalData,config ]
 )

  const onSubmit = (data)=>{
    console.info ("Data: ", data)
    setConfig(data)
  }

 
  console.info(config)
  return (
    <Container fluid className="signal-page-frame">
       <Row>
          <Col xs={2} className="signal-page-left">      
            <div className="mt-4">
             <SignalForm onSubmit = {onSubmit}/>
             </div>
          </Col>
          <Col  className="signal-page-right">
             GRAPH
             <div className='line-chart-wrapper'>

           <LineChart
            width={800}
            height={400}
            data={signalData}
            margin={{ top: 20, right: 20, bottom: 20, left: 20 }}
            syncId="test"
          >
            <CartesianGrid stroke='#f5f5f5'   />
            <Legend />
            <XAxis dataKey="name" axisLine={{ stroke: 'red' }} stroke='blue'/>
            <YAxis scale={scale} domain={[0.01, 'auto']} ticks={[0.01, 0.1, 1, 10, 100, 1000]} />
            <Tooltip />
            <Line type='monotone' dataKey='uv'  stroke='#ff7300' />
          </LineChart>
        </div>

          </Col> 
      </Row>
    </Container>
  )
}

const mapStateToProps = state => {
  return {
    graphData:       getSignalData(state),
    loading:         getSignalLoading(state),
  }
}

const mapDispatchToProps = dispatch => ({
  fetchSignalData:     (url) => dispatch(fetchSignalData(url)),  
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SignalPage)




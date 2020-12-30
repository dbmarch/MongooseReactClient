import React, {useEffect, useState} from 'react'
import { connect } from 'react-redux'
import { Container, Row, Col} from 'react-bootstrap'
import SignalForm from '../containers/signalForm'
import {serverURI} from '../App.js'
import { LineChart, Line, XAxis, YAxis,
   Tooltip, CartesianGrid, Legend, Brush
   } from 'recharts';
import {  scaleLog } from 'd3-scale';
import {getSignalData, getSignalLoading} from '../selectors'
import {fetchSignalData} from '../actions'
// import {exists} from 'lodash'
import Loader from 'react-loader-spinner'

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
  const [freq1, setFreq1] = useState (1100)
  const [freq2, setFreq2] = useState (1200)
  const [samples, setSamples] = useState (600)
  useEffect( () => {
    const url = `${serverURI}/file/signal?freq=${freq1}&samples=${samples}`
    console.info ('fetch ', url)
    fetchSignalData(url)
  }, [ fetchSignalData,freq1,samples ]
 )

  const onSubmit = (data)=>{
    console.info ("Data: ", data)
    setFreq1(parseInt(data.freq1))
    setFreq2(parseInt(data.freq2))
    setSamples(parseInt(data.samples))
  }
  console.info(freq1, freq2, samples)
  
  return (
    <>
    {loading && 
      <div className="signal-page-spinner">
        <Loader type="Circles" color="#00BFFF" height={200} width={200}/>
        </div>        
      }
    {!loading && 
      <Container fluid className="signal-page-frame">
       <Row>
          <Col xs={2} className="signal-page-left">      
            <div className="mt-4">
             <SignalForm initialValue={{freq1, freq2, samples}} onSubmit = {onSubmit}/>
             </div>
          </Col>
          <Col  className="signal-page-right">
             <div className='line-chart-wrapper mt-5' >
               <LineChart
                width={800}
                height={400}
                data={signalData}
                margin={{ top: 20, right: 20, bottom: 20, left: 20 }}
                syncId="test"
              >
                <CartesianGrid stroke='#f5f5f5'   />
                <Legend />
                <XAxis dataKey="x" axisLine={{ stroke: 'red' }} stroke='blue'/>
                <YAxis />
                <Tooltip />
                <Line type='monotone' dataKey='y'  stroke='#ff7300' />
                <Brush dataKey="name" height={30} />
              </LineChart>  
            </div>  
          </Col> 
        </Row>
     </Container>}
    </>
  )
}

const mapStateToProps = state => {
  return {
    signalData:       getSignalData(state),
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




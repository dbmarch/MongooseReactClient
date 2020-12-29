import React from 'react'
import { connect } from 'react-redux'
import { Container, Row, Col} from 'react-bootstrap'
import SignalForm from '../containers/signalForm'

// import {LineChart} from 'recharts'
import { ResponsiveContainer, LineChart, Line, XAxis, YAxis, ReferenceLine, ReferenceArea,
  ReferenceDot, Tooltip, CartesianGrid, Legend, Brush, ErrorBar, AreaChart, Area,
  Label, LabelList } from 'recharts';
import { scalePow, scaleLog } from 'd3-scale';
// import CustomLineDot from './CustomLineDot';
// import { changeNumberOfData } from './utils';

import './signal-page.css'

const data = [
  { name: 'Page A', uv: 1000, pv: 2400, amt: 2400, uvError: [75, 20] },
  { name: 'Page B', uv: 300, pv: 4567, amt: 2400, uvError: [90, 40] },
  { name: 'Page C', uv: 280, pv: 1398, amt: 2400, uvError: 40 },
  { name: 'Page D', uv: 200, pv: 9800, amt: 2400, uvError: 20 },
  { name: 'Page E', uv: 278, pv: null, amt: 2400, uvError: 28 },
  { name: 'Page F', uv: 189, pv: 4800, amt: 2400, uvError: [90, 20] },
  { name: 'Page G', uv: 189, pv: 4800, amt: 2400, uvError: [28, 40] },
  { name: 'Page H', uv: 189, pv: 4800, amt: 2400, uvError: 28 },
  { name: 'Page I', uv: 189, pv: 4800, amt: 2400, uvError: 28 },
  { name: 'Page J', uv: 189, pv: 4800, amt: 2400, uvError: [15, 60] },
];

const scale = scaleLog().base(10).nice();
const specifiedDomain = [0.01, 'auto'];
const specifiedTicks = [0.01, 0.1, 1, 10, 100, 1000];
const specifiedMargin = { top: 20, right: 20, bottom: 20, left: 20 };

const SignalPage = () => {
  const onSubmit = (data)=>{
    {console.info ("Data: ", data)}
  }

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
            width={400}
            height={400}
            data={data}
            margin={{ top: 20, right: 20, bottom: 20, left: 20 }}
            syncId="test"
          >
            <CartesianGrid stroke='#f5f5f5' verticalFill={['rgba(0, 0, 0, 0.2)', 'rgba(255, 255, 255, 0.3)']} horizontalFill={['#ccc', '#fff']} />
            <Legend />
            <XAxis dataKey="name" axisLine={{ stroke: 'red' }} />
            <YAxis scale={scale} domain={[0.01, 'auto']} ticks={[0.01, 0.1, 1, 10, 100, 1000]} />
            <Tooltip />
            <Line type='monotone' dataKey='uv'  stroke='#ff7300' />
          </LineChart>
        </div>

             <LineChart
              width={400}
              height={400}
              data={data}
              margin={{ top: 5, right: 20, left: 10, bottom: 5 }}
            >
              <XAxis dataKey="name" />
              <Tooltip />
              <CartesianGrid stroke="#f5f5f5" />
              <Line type="monotone" dataKey="uv" stroke="#ff7300" yAxisId={0} />
              <Line type="monotone" dataKey="pv" stroke="#387908" yAxisId={1} />
            </LineChart>

          </Col> 
      </Row>
    </Container>
  )
}

const mapStateToProps = state => {
  return {
  }
}

const mapDispatchToProps = dispatch => ({
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SignalPage)




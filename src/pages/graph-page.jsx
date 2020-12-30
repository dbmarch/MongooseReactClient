import React, {useEffect, useState} from 'react'
import { connect } from 'react-redux'
import { Container, Button} from 'react-bootstrap'
import {serverURI} from '../App.js'
import {getGraphData, getGraphLoading} from '../selectors'
import {fetchGraphData} from '../actions'
import LineChart from '../components/LineChart/LineChart'
import './graph-page.css'

const GraphPage = ({graphData, fetchGraphData, loading }) => {
  const [graph, setGraph] = useState(1)

  useEffect( () => {
    const url = `${serverURI}/file/graph${graph}`
    console.info ('fetch ', url)
    fetchGraphData(url)
  }, [ fetchGraphData, graph ]
 )
  console.info (loading)
  return (
      <div className = "page">
        {/* { loading && 
        <Spinner animation="border" />
        } */}
       {!loading && 
       <Container className = 'home-page-frame'>
         <Container className='home-page-top' >
          <LineChart data= {graphData} />
         </Container>

        <Container className='home-page-bottom' >
          <div> BOTTOM PANE</div>
          <Button  onClick={()=>{setGraph(graph === 1 ? 2 : 1)}}>TOGGLE</Button>
        </Container>
        </Container> }  
    </div>
  )
}

const mapStateToProps = state => {
  return {
    graphData:       getGraphData(state),
    loading:         getGraphLoading(state),
    
  }
}

const mapDispatchToProps = dispatch => ({
  fetchGraphData:     (url) => dispatch(fetchGraphData(url)),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(GraphPage)




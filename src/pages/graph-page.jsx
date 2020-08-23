import React, {useEffect} from 'react'
import { connect } from 'react-redux'
import { Container} from 'react-bootstrap'
import {serverURI} from '../App.js'
import {getGraphData} from '../selectors'
import {fetchGraphData} from '../actions'
import LineChart from '../components/LineChart/LineChart'
import './graph-page.css'

const GraphPage = ({graphData, fetchGraphData }) => {

  useEffect( () => {
    console.info ('fetch ', `${serverURI}/file/graph`)
    fetchGraphData(`${serverURI}/file/graph`)
  }, [ fetchGraphData ]
 )

  return (
      <div className = "page">
       <Container className = 'home-page-frame'>
         <Container className='home-page-top' >
          <LineChart data= {graphData} />
         </Container>

        <Container className='home-page-bottom' >
          <div> BOTTOM PANE</div>
        </Container>
      </Container>      
    </div>
  )
}

const mapStateToProps = state => {
  return {
    graphData:       getGraphData(state),
    
  }
}

const mapDispatchToProps = dispatch => ({
  fetchGraphData:     (url) => dispatch(fetchGraphData(url)),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(GraphPage)




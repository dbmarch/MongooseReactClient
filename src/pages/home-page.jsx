import React, {useEffect} from 'react'
import { connect } from 'react-redux'
import {Row, Col, Container, Button, ButtonToolbar} from 'react-bootstrap'
import {serverURI} from '../App.js'

const HomePage = () => {
  const message =  "Hello"

  useEffect(() => {
    const getJson = async () =>  {
        const response = await fetch(`${serverURI}/json`, {
            method: 'GET',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            }
        })

        const body = await response.json()
        console.info (body.items)
    }

    getJson()

}, [])



  return (
      <div className = "page">
       <Container className = 'home-page-frame'>
        <Container className='home-page-top' >
          <Row>
            <ButtonToolbar className='button-tray'>
              <Button variant = 'outline-primary' >JSON</Button>
              <Button variant = 'outline-success'>Hello</Button>
            </ButtonToolbar>
          </Row>
          <Row>
            <Col>
              <p>Response:</p>
            </Col>
            <Col xs={9}>
              <p>{message}</p>
            </Col>
          </Row>
        </Container>
        <Container className='home-page-bottom' >
          <Row>
            <Col>1 of 2</Col>
            <Col xs={9}>2 of 2</Col>
          </Row>
      </Container>
      </Container>      
    </div>
  )
}

const mapStateToProps = state => {
  return {

  }
}

const mapDispatchToProps = dispatch => ({})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HomePage)
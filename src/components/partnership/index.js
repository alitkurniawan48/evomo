import React from "react"
import { Container, Row, Col } from 'react-bootstrap'
import '../../styles/global.css'
import '../../styles/styles-2.css'

import lora from "../../images/lora.png"
import bb from "../../images/bb.png"
import gcp from "../../images/playcourt.png"
import antares from "../../images/antares.png"



class Index extends React.Component {

  render() {
    return (
      <Container>
        <Row className="space-top-25">
          <Col xs={6} md={{ span: 11, offset: 1 }}>
            <h1 className="txt-20 t-center">Partners</h1>
          </Col>
        </Row>
        <Row className="section-pad-2">
          <Col className="card-partner-2 " xs={6} md={{ span: 2, offset: 2 }}>
            <img className="center t-30" width={150} src={gcp} alt="Generic placeholder" />
          </Col>
          <Col className="card-partner-2" xs={6} md={{ span: 2 }}>
            <img className="center t" src={antares} alt="Generic placeholder" />
          </Col>
          <Col className="card-partner-2" xs={6} md={{ span: 2 }}>
            <img className="center t" src={bb} alt="Generic placeholder" />
          </Col>
          <Col className="card-partner-2" xs={6} md={{ span: 2 }}>
            <img className="center t" src={lora} alt="Generic placeholder" />
          </Col>
        </Row>
      </Container>
    )
  }
}

export default Index

import React from "react"
import { Container, Row, Col, Image } from "react-bootstrap"
import "../../styles/global.css"
import "../../styles/styles-2.css"
import tentang1 from "../../images/tim-evo-1.png"
import tentang2 from "../../images/tim-evo-2.png"
import tentang3 from "../../images/tim-evo-3.png"

class IndexThree extends React.Component {
  render() {
    return (
      <div>
        <Container fluid className="partition mthead space-bot">
          <Row className="space-top">
            <Col md={{ span: 10, offset: 1 }}>
              <h1 className="txt-header-2 center">Tim Evomo</h1>
            </Col>
          </Row>
          <br />
          <Row className="center-flex ">
            <Col xs={6} md={3}>
              <Image src={tentang1} rounded />
            </Col>
            <Col xs={6} md={3}>
              <Image src={tentang2} rounded />
            </Col>
            <Col xs={6} md={3}>
              <Image src={tentang3} rounded />
            </Col>
          </Row>
        </Container>
      </div>
    )
  }
}

export default IndexThree

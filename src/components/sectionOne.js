import React, { useState, useCallback } from "react"
import { Container, Row, Button, Col, Image } from "react-bootstrap"
import { navigate } from 'gatsby';
import "../styles/global.css"
import head from "../images/s1.png"
import telkom from "../images/Logo Telkom.svg"
import sierra from "../images/Logo Sierad.svg"
import ibr from "../images/Logo IBR 1.svg"

// Modal custom
import { ModalEmail } from "./ModalSectionOne"

//import video popup library
import ModalVideo from "react-modal-video"

function App() {
  const [visibleModal] = useState(false)
  const onShowHide = useCallback(() => {
    // setVisibleModal(prev => !prev)
    navigate("/register")
  }, [])
  return (
    <div>
      <ModalEmail show={visibleModal} onHide={onShowHide} />
      <Button variant="primary" onClick={onShowHide} className="d-block">
        Free Trial
      </Button>
      {/* <span id="result" /> */}
    </div>
  )
}

class SectionOne extends React.Component {
  constructor() {
    super()
    this.state = {
      isOpen: false,
    }
    this.openModal = this.openModal.bind(this)
  }

  openModal() {
    this.setState({ isOpen: true })
  }

  render() {
    return (
      <Container fluid className="partition mthead">
        <Row className="justify-content-md-center">
          <Col
            className="center-desc"
            md={{ span: 5, offset: 1, order: 1 }}
            large={6}
            xs={{ order: 12 }}
          >
            <h1 className="sb resp center-desc-text">
              Realtime Monitoring <br />
              Jadi Lebih Mudah
            </h1>
            <p className="resp center-desc-text">
              Ketahui kualitas lingkungan Anda <br />
              dengan integrasi antara sensor dan <br />
              sistem secara otomatis
            </p>
            <App />
            <div className="flex">
              <Image className="i1" src={telkom} />
              <Image className="i1" src={sierra} />
              <Image className="i1" src={ibr} />
            </div>
          </Col>
          <Col md={{ span: 6, order: 12 }} className="center-desc">
            <ModalVideo
              channel="youtube"
              isOpen={this.state.isOpen}
              videoId="_7MWdBbt5F4"
              onClose={() => this.setState({ isOpen: false })}
            />
            <Button variant="outline-light" onClick={this.openModal}>
              <img
                className="i1-mob mob-resp"
                src={head}
                width={500}
                height={372}
                alt="Generic placeholder"
              />
            </Button>
          </Col>
        </Row>
      </Container>
    )
  }
}

export default SectionOne

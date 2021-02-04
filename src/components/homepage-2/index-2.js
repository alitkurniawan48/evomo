import React from "react"
import { Container, Row, Button, Col, Image } from "react-bootstrap"
import "../../styles/global.css"
import "../../styles/styles-2.css"
import icon1 from "../../images/Icon 21.svg"
import icon2 from "../../images/Icon 22.svg"
import icon3 from "../../images/Icon 23.svg"
import icon4 from "../../images/Icon 24.svg"
import icon5 from "../../images/Icon 25.svg"
import vid from "../../images/vid2.png"
//import video popup library
import ModalVideo from "react-modal-video"

class IndexTwo extends React.Component {
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
      <Container fluid className="partition mt-head-2">
        <Row className="justify-content-md-center">
          <Col
            className="space-top center-desc"
            md={{ span: 5, offset: 1, order: 1 }}
            large={6}
            xs={{ order: 12 }}
          >
            <h1 className="sb resp center-desc-text txt-header-2">
              Evomo itu apa
            </h1>
            <p className="resp center-desc-text txt-desc-2">
              Software aplikasi untuk Pemantauan Kondisi Jarak Jauh <br />
              secara real-time yang memberikan Anda informasi  <br />mengenai
              kondisi yang ingin anda amati seperti suhu, <br />kelembaban,
              tekanan udara, jumlah debit air, integrasi cctv, <br />dan
              banyak indikator lainnya. Evomo bisa dimanfaatkan <br />untuk
              sektor manufaktur, pertanian, perkebunan, perikanan, peternakan, dan sektor lainnya
            </p>
          </Col>
          <Col md={{ span: 6, order: 12 }} className="center-desc space-top">
            <ModalVideo
              channel="youtube"
              isOpen={this.state.isOpen}
              videoId="_7MWdBbt5F4"
              onClose={() => this.setState({ isOpen: false })}
            />
            <Button variant="outline-light" onClick={this.openModal}>
              <img
                className="i1-mob mob-resp"
                src={vid}
                width={500}
                height={240}
                alt="Generic placeholder"
              />
            </Button>
          </Col>
        </Row>

        <Row className="justify-content-md-center space-top">
          <Col className="space-top center-desc" md={2} large={6}>
            <Image src={icon1} />
            <h3 className="resp center-desc-text txt-header-3">Connect</h3>
            <p className="resp center-desc-text txt-desc-2">
              Memasang sensor IoT pada setiap mesin produksi untuk membaca dan
              mencatat kinerja mesin
            </p>
          </Col>

          <Col className="space-top center-desc" md={2} large={6}>
            <Image src={icon2} />
            <h3 className="resp center-desc-text txt-header-3">Collect</h3>
            <p className="resp center-desc-text txt-desc-2">
              Data akan dikumpulkan pada cloud database Jeager dengan tingkat
              keamanan yang tinggi
            </p>
          </Col>

          <Col className="space-top center-desc" md={2} large={6}>
            <Image src={icon3} />
            <h3 className="resp center-desc-text txt-header-3">Analyze</h3>
            <p className="resp center-desc-text txt-desc-2">
              Data terkumpul akan dianalisis secara otomatis dan tersimpan
              secara historis
            </p>
          </Col>

          <Col className="space-top center-desc" md={2} large={6}>
            <Image src={icon4} />
            <h3 className="resp center-desc-text txt-header-3">Visualize</h3>
            <p className="resp center-desc-text txt-desc-2">
              Data terkumpul akan dianalisis secara otomatis dan tersimpan
              secara historis
            </p>
          </Col>

          <Col className="space-top center-desc" md={2} large={6}>
            <Image src={icon5} />
            <h3 className="resp center-desc-text txt-header-3">Act</h3>
            <p className="resp center-desc-text txt-desc-2">
              Visualisasi data dapat membantu Manajemen untuk meningkatkan
              performa produksi dan menciptakan lingkungan produksi yang lebih
              baik
            </p>
          </Col>
        </Row>
      </Container>
    )
  }
}

export default IndexTwo

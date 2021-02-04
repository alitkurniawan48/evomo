import React from "react"
import { Container, Row, Button, Col, Image } from "react-bootstrap"
import "../../styles/global.css"
import "../../styles/styles-2.css"
import sol1 from "../../images/solution1.png"
import sol2 from "../../images/solution2.png"
import sol3 from "../../images/solution3.png"
import sol4 from "../../images/solution4.png"
import mitra1 from "../../images/mitra1.png"
import mitra2 from "../../images/mitra2.png"

class IndexThree extends React.Component {
  state = {
    desc:
      "Solusi yang kami tawarkan untuk memudahkan Anda dalam memonitoring kondisi dan kinerja mesin, serta area di lingkungan pabrik Anda secara realtime, tepat, dan akurat",
    image: sol1,
  }

  handleManuf = () => {
    this.setState({
      desc:
        "Solusi yang kami tawarkan untuk memudahkan Anda dalam memonitoring kondisi dan kinerja mesin, serta area di lingkungan pabrik Anda secara realtime, tepat, dan akurat",
      image: sol1,
    })
  }

  handleAgri = () => {
    this.setState({
      desc:
        "Solusi yang kami tawarkan untuk memudahkan Anda dalam memonitoring kondisi dan kinerja mesin, serta area di lingkungan pabrik Anda secara realtime, tepat dan akurat",
      image: sol2,
    })
  }

  handleFish = () => {
    this.setState({
      desc:
        "Solusi yang kami tawarkan untuk memudahkan Anda dalam memonitoring kondisi dan kinerja mesin, serta area di lingkungan pabrik Anda secara realtime, tepat dan akurat",
      image: sol3,
    })
  }

  handleLife = () => {
    this.setState({
      desc:
        "Solusi yang kami tawarkan untuk memudahkan Anda dalam memonitoring kondisi dan kinerja mesin, serta area di lingkungan pabrik Anda secara realtime, tepat dan akurat",
      image: sol4,
    })
  }

  render() {
    return (
      <Container fluid className="partition mt-head-2 blog-mb">
        <Row className="justify-content-md-center mt-head-2">
          <Col
            className="center-desc"
            md={{ span: 4, offset: 1, order: 1 }}
            large={6}
            xs={{ order: 12 }}
          >
            <h1 className="sb resp center-desc-text txt-header-2">
              Solusi kami
            </h1>

            <Button className="btn-sol" variant="light" onClick={this.handleManuf}>
              Evomo for Manufacturing
            </Button>
            <Button className="btn-sol" variant="light" onClick={this.handleAgri}>
              Evomo for Agriculture
            </Button>
            <Button className="btn-sol" variant="light" onClick={this.handleFish}>
              Evomo for Fishery
            </Button>
            <Button className="btn-sol" variant="light" onClick={this.handleLife}>
              Evomo for Lifestock
            </Button>
          </Col>
          <Col md={{ span: 6, order: 12 }} className="center-desc">
            <br /> <br />
            <p className="resp center-desc-text pd-right">{this.state.desc}</p>
            <br />
            <Image width={586} height={177} src={this.state.image} />
          </Col>
        </Row>

        <Row className="justify-content-center align-items-center space-top">
          <Col md="{{ span: 6, offset: 3 }}">
            <h6 className="txt-header-2">
              Mereka yang telah menggunakan Evomo
            </h6>
          </Col>
        </Row>
        <Row className="justify-content-center align-items-center space-top-25 space-bot">
          <Col className="card-mitra" md={4}>
            <Image className="img-mitra space-top-25" src={mitra1} />
            <p className="resp txt-mitra-green">
              Pak Sudianto
              <br />
              Sierad Farm
            </p>
            <p className="resp txt-mitra">
              Sangat mempermudah pekerjaan, kami dapat mengukur suhu dan kelembaban kandang bisa dilakukan kapanpun dan dimanapun, pengolahan data bisa dilakukan dengan cepat senhingga pengoperasian kipas juga bisa dikontrol dengan tepat
            </p>
          </Col>

          <Col className="card-mitra" md={4}>
            <Image className="img-mitra space-top-25" src={mitra2} />

            <p className="resp txt-mitra-green">
              Agus Suyatni
              <br />
              Garudafood
            </p>
            <p className="resp txt-mitra">
              Membantu management dalam mendapatkan data secara real-time dan akurat dari lantai produksi. Tim planning dan engineering jadi punya gambaran yang lebih jelas untuk perbaikan produksi
            </p>
          </Col>
        </Row>
      </Container>
    )
  }
}

export default IndexThree

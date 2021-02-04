import React from "react"
import {
  Container,
  Row,
  Col,
  Card,
  Image,
  Button,
  CardDeck,
} from "react-bootstrap"
import "../../styles/global.css"
import "../../styles/styles-2.css"
import iwhite from "../../images/icon-white.png"
import idefault from "../../images/icon-default.png"
import igold from "../../images/icon-gold.png"

class IndexTwo extends React.Component {
  render() {
    return (
      <Container fluid>

        <Row className=" section-pad-2">
          <Col md={{ span: 10, offset: 1 }}>
            <h1 className="txt-header-2 space-top-25 center">
              Pilih paket yang tepat untuk Anda
            </h1>
          </Col>
        </Row>

        <Row className=" section-pad-2">
          <Col md={{ span: 10, offset: 1 }}>
            <CardDeck>
              <Card className="card-pricing-one">
                <Card.Body>
                  <Image src={iwhite} width={48} length={48} />
                  <Card.Title className="txt-header-3 white">
                    Starter
                  </Card.Title>
                  <Card.Text className="card-price-desc white">
                    Evomo gratis untuk semua produsen selama 30 hari pertama
                    untuk menguji sistem dan melihat cara kerjanya.
                  </Card.Text>
                  <br />
                  <br />
                  <Card.Subtitle className="txt-banner white">
                    Gratis
                  </Card.Subtitle>
                  <Card.Text className="card-price-desc white">
                    Coba gratis selama 30 hari
                  </Card.Text>
                  <Button href="/register/" className="btn-price-1" variant="light">
                    Mulai Uji Coba Gratis
                  </Button>
                </Card.Body>
              </Card>

              <Card className="card-pricing">
                <Card.Body>
                  <Image src={idefault} width={48} length={48} />
                  <Card.Title className="txt-header-3">Standart</Card.Title>
                  <Card.Text className="card-price-desc">
                    Lihat aktivitas mesin Anda dan akses data dari 10 mesin dan
                    5 indikator secara realtime.
                  </Card.Text>
                  <br />
                  <br />
                  <Card.Subtitle className="txt-banner black2">
                    Rp. 500.000 / mesin
                  </Card.Subtitle>
                  <Card.Text className="card-price-desc black2">
                    selama 30 hari
                  </Card.Text>
                  <Button href="/register/" className="btn-price-2" variant="success">
                    Gratis 30 hari
                  </Button>
                </Card.Body>
              </Card>

              <Card className="card-pricing">
                <Card.Body>
                  <Image src={igold} width={48} length={48} />
                  <Card.Title className="txt-header-3">Enterprise</Card.Title>
                  <Card.Text className="card-price-desc">
                    Untuk perusahaan dengan lebih dari 10 mesin, kami menawarkan
                    harga khusus per mesin.
                  </Card.Text>
                  <br />
                  <br />
                  <br />
                  <Card.Subtitle className="txt-banner black2">
                    Hubungi Kami
                  </Card.Subtitle>
                  <Card.Text className="card-price-desc black2"></Card.Text>
                  <Button className="btn-price-2" variant="primary">
                    Hubungi Kami
                  </Button>
                </Card.Body>
              </Card>
            </CardDeck>
          </Col>
        </Row>
      </Container>
    )
  }
}

export default IndexTwo

import React from "react"
import { Container, Card, Accordion, Row, Col } from "react-bootstrap"
import "../../styles/global.css"
import "../../styles/styles-2.css"

class Index extends React.Component {
  render() {
    return (
      <Container fluid className="partition mthead">
        <Row className=" section-pad-2">
          <Col md={{ span: 8, offset: 2 }}>
            <Accordion defaultActiveKey="0">
              <Card className="card-faqs">
                <Accordion.Toggle
                  as={Card.Header}
                  eventKey="0"
                  className="card-faqs btn-sol"
                >
                  Bagaimana cara kerja trial Evomo?
                </Accordion.Toggle>
                <Accordion.Collapse eventKey="0">
                  <Card.Body>
                    Anda dapat daftar terlebih dahulu untuk proses pengajuan
                    trial produk evomo, lalu mengisi form dengan lengkap dan
                    benar. Selanjutnya kami akan proses pengajuan anda terkait
                    trial produk evomo
                  </Card.Body>
                </Accordion.Collapse>
              </Card>
              <hr />
              <Card className="card-faqs">
                <Accordion.Toggle
                  as={Card.Header}
                  eventKey="1"
                  className="card-faqs btn-sol"
                >
                  Berapa lama periode trial dilakukan?
                </Accordion.Toggle>
                <Accordion.Collapse eventKey="1">
                  <Card.Body>
                    Periode uji coba atau trial berlangsung secara maksimal
                    selama 30 hari atau satu bulan
                  </Card.Body>
                </Accordion.Collapse>
              </Card>
              <hr />
              <Card className="card-faqs">
                <Accordion.Toggle
                  as={Card.Header}
                  eventKey="2"
                  className="card-faqs btn-sol"
                >
                  Sektor apa saja yang dapat melakukan trial?
                </Accordion.Toggle>
                <Accordion.Collapse eventKey="2">
                  <Card.Body>
                    Sektor yang dapat melakukan pengajuan trial yaitu sektor
                    manufaktur, pertanian, peternakan, dan perikanan
                  </Card.Body>
                </Accordion.Collapse>
              </Card>
              <hr />
              {/* <Card className="card-faqs">
                <Accordion.Toggle
                  as={Card.Header}
                  eventKey="3"
                  className="card-faqs btn-sol"
                >
                  Bagaimana cara melakukan demo produk?
                </Accordion.Toggle>
                <Accordion.Collapse eventKey="3">
                  <Card.Body></Card.Body>
                </Accordion.Collapse>
              </Card>
              <hr />
              <Card className="card-faqs">
                <Accordion.Toggle
                  as={Card.Header}
                  eventKey="4"
                  className="card-faqs btn-sol"
                >
                  Apakah saya dapat mengajukan trial lebih dari 1 produk?
                </Accordion.Toggle>
                <Accordion.Collapse eventKey="4">
                  <Card.Body></Card.Body>
                </Accordion.Collapse>
              </Card>
              <hr /> */}
            </Accordion>
          </Col>
        </Row>
      </Container>
    )
  }
}

export default Index

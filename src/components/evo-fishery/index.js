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
                                    Cara melihat kondisi di lahan
                </Accordion.Toggle>
                                <Accordion.Collapse eventKey="0">
                                    <Card.Body>
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
                                    Menambahkan indikator untuk perikanan
                </Accordion.Toggle>
                                <Accordion.Collapse eventKey="1">
                                    <Card.Body>

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
                                    Demo Produk
                </Accordion.Toggle>
                                <Accordion.Collapse eventKey="2">
                                    <Card.Body>

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
                                    Cara trial produk Evo Fishery
                </Accordion.Toggle>
                                <Accordion.Collapse eventKey="2">
                                    <Card.Body>
                                        Buka halaman Beranda pada website &gt; Klik Uji Coba Gratis &gt; Isi Data Registrasi &gt; Submit &gt; Tim Marketing Kami akan mengirim username dan password untuk akses Evomo ke email user
                                    </Card.Body>
                                </Accordion.Collapse>
                            </Card>
                            <hr />
                            <Card className="card-faqs">
                                <Accordion.Toggle
                                    as={Card.Header}
                                    eventKey="3"
                                    className="card-faqs btn-sol"
                                >
                                    Melihat sensor yang tidak aktif
                </Accordion.Toggle>
                                <Accordion.Collapse eventKey="3">
                                    <Card.Body>

                                    </Card.Body>
                                </Accordion.Collapse>
                            </Card>
                            <hr />

                        </Accordion>
                    </Col>
                </Row>
            </Container>
        )
    }
}

export default Index

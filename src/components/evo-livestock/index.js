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
                                    Mengubah nama sensor atau device
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
                                        Buka Halaman Beranda pada website &gt; klik Demo Produk &gt; Input Email
                                        dan No. Telepon &gt; Klik OK &gt; Tim Marketing Kami akan mengirim username
                                        dan password untuk akses Evomo ke email user
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
                                    Cara trial produk Evo Livestock
                </Accordion.Toggle>
                                <Accordion.Collapse eventKey="3">
                                    <Card.Body>
                                        Buka halaman Beranda pada website &gt; Klik Uji Coba Gratis &gt; Isi Data Registrasi &gt; Submit &gt; Tim Marketing Kami akan mengirim username dan password untuk akses Evomo ke email user
                                    </Card.Body>
                                </Accordion.Collapse>
                            </Card>
                            <hr />
                            <Card className="card-faqs">
                                <Accordion.Toggle
                                    as={Card.Header}
                                    eventKey="5"
                                    className="card-faqs btn-sol"
                                >
                                    Mengunduh laporan harian/mingguan/bulanan
                </Accordion.Toggle>
                                <Accordion.Collapse eventKey="5">
                                    <Card.Body>
                                        Pilih menu Data Cut Off &gt; Input Device &gt; Input Indikator &gt; Input Periode &gt; Input Waktu &gt; Unduh
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

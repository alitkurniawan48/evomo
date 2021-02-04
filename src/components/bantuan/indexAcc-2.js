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
                                    Lupa username
                </Accordion.Toggle>
                                <Accordion.Collapse eventKey="0">
                                    <Card.Body>
                                        Buka halaman Beranda pada website &gt; Klik Sign In &gt; Klik Lupa Username &gt; Input Email dan No. Telepon &gt; Submit &gt; Tim Marketing Kami akan mengirimkan email yang berisi username yang Anda gunakan sesuai dengan email yang terdaftar
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
                                    Lupa Password
                </Accordion.Toggle>
                                <Accordion.Collapse eventKey="1">
                                    <Card.Body>
                                        Buka halaman Beranda pada website &gt; Klik Sign In &gt; Klik Lupa Password &gt; Input Email dan No. Telepon &gt; Submit &gt; Tim Marketing Kami akan mengirimkan email yang berisi link untuk akses ke akun Anda
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
                                    Reset Password
                </Accordion.Toggle>
                                <Accordion.Collapse eventKey="2">
                                    <Card.Body>
                                        Buka halaman Beranda pada website &gt; Klik Sign In &gt; Klik Lupa Password &gt; Input Email dan No. Telepon &gt; Submit &gt; Tim Marketing Kami akan mengirimkan email dengan link pemulihan password &gt; User klik Link yang sudah dikirimkan via Email oleh Tim Marketing Kami &gt; Membuka halaman Reset Password &gt; Input Password Baru dan Konfirmasi Password Baru &gt; Reset
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
                                    Masuk ke akun
                </Accordion.Toggle>
                                <Accordion.Collapse eventKey="3">
                                    <Card.Body>
                                        Buka halaman Beranda pada website &gt; Klik Sign In &gt; Masukkan Username/Email &gt; Masukkan Password &gt; Klik “Masuk”
                                    </Card.Body>
                                </Accordion.Collapse>
                            </Card>
                            <hr />
                            <Card className="card-faqs">
                                <Accordion.Toggle
                                    as={Card.Header}
                                    eventKey="4"
                                    className="card-faqs btn-sol"
                                >
                                    Keluar dari akun
                </Accordion.Toggle>
                                <Accordion.Collapse eventKey="4">
                                    <Card.Body>
                                        Buka halaman Beranda pada website &gt; Klik Sign out
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

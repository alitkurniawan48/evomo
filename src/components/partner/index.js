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
                                    Cara mengajukan kerjasama dengan Evomo
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
                                    Program kerjasama
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
                                    Trial Produk Evomo
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
                                    eventKey="3"
                                    className="card-faqs btn-sol"
                                >
                                    Keluar dari aplikasi
                </Accordion.Toggle>
                                <Accordion.Collapse eventKey="3">
                                    <Card.Body>

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
                                    Device dan Software
                </Accordion.Toggle>
                                <Accordion.Collapse eventKey="4">
                                    <Card.Body>

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
                                    Apa itu Evomo Partnership?
                </Accordion.Toggle>
                                <Accordion.Collapse eventKey="5">
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

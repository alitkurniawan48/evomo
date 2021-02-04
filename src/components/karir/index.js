import React from "react"
import {Container, Row, Form, Button, FormControl, Col,  Card, Accordion} from 'react-bootstrap'
import '../../styles/global.css'
import '../../styles/styles-2.css'

class Index extends React.Component {
    
    render() {
        return(
        <Container className="partition mthead" fluid>
            <Row className=" center">
                <Form inline>
                    <Col md={{ span: 10, offset: 1 }} sm={6}>
                        <FormControl
                            type="text"
                            placeholder="Cari.."
                            className="searchbar"
                            size = "lg"
                        />
                        <Button className="btn-subs btn-search" size="lg" variant="success">
                            Cari
                        </Button>
                    </Col>

                </Form>
            </Row>

            <Row className="section-pad-2">
                <Col md={{ span: 10, offset: 1 }}>
                    <Accordion defaultActiveKey="">
                    <Card className="card-faqs">
                        <Accordion.Toggle
                        as={Card.Header}
                        eventKey="0"
                        className="card-faqs btn-sol flex left" 
                        >
                        UI Designer
                        <p className="txt-20 normal right">Full time</p>
                        </Accordion.Toggle>
                        <Accordion.Collapse eventKey="0">
                        <Card.Body>
                        <b>Persyaratan :</b><br/>
                        - Min. S1 atau sederajat dari Jurusan Desain Komunikasi Visual, Desain Grafis atau sejenisnya<br/>
                        - Memiliki pengalaman min. 1 tahun di industri kreatif<br/>
                        - Memiliki pengetahuan tentang desain dan teknologi<br/>
                        - Menguasai software desain (Adobe Family)<br/>
                        - Menguasai software prototyping (Adobe XD, Figma)<br/>
                        - Kreatif dan inovatif<br/>
                        - Mampu beradaptasi dengan sistem kerja Agile<br/>
                        <br/><br/>
                        <b>Deskripsi pekerjaan :</b><br/>
                        - Membuat tampilan antarmuka pengguna untuk versi website dan mobile<br/>
                        - Membuat prototyping terkait produk digital<br/>
                        - Menentukan elemen desain yang ada pada setiap produk<br/>
                        - Membuat design system<br/>

                        <Button className="btn-subs btn-apply space-top-25 float-right" size="lg" variant="success">
                            Apply
                        </Button>
                        </Card.Body>
                        </Accordion.Collapse>
                    </Card>
                    
                    <hr/>
                    <Card className="card-faqs">
                        <Accordion.Toggle
                        as={Card.Header}
                        eventKey="1"
                        className="card-faqs btn-sol flex left" 
                        >
                        UX Designer
                        <p className="txt-20 normal right">Full time</p>
                        </Accordion.Toggle>
                        <Accordion.Collapse eventKey="1">
                        <Card.Body>
                        Coming Soon!

                        <Button className="btn-subs btn-apply space-top-25 float-right" size="lg" variant="success">
                            Apply
                        </Button>
                        </Card.Body>
                        </Accordion.Collapse>
                    </Card>

                    <hr/>
                    <Card className="card-faqs">
                        <Accordion.Toggle
                        as={Card.Header}
                        eventKey="2"
                        className="card-faqs btn-sol flex left" 
                        >
                        Backend Engineer
                        <p className="txt-20 normal right">Full time</p>
                        </Accordion.Toggle>
                        <Accordion.Collapse eventKey="2">
                        <Card.Body>
                        Coming Soon!

                        <Button className="btn-subs btn-apply space-top-25 float-right" size="lg" variant="success">
                            Apply
                        </Button>
                        </Card.Body>
                        </Accordion.Collapse>
                    </Card>

                </Accordion>
                </Col>
            </Row>

            



        </Container>
        )
    }
}
export default Index

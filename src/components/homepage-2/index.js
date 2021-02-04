import React from "react"
import { Link } from "gatsby"
import { Container, Row, Button, Col, Image } from 'react-bootstrap'
import '../../styles/global.css'
import '../../styles/styles-2.css'
import gf from "../../images/Logo Garudafood.svg"
import ibr from "../../images/Logo IBR.svg"
import nutri from "../../images/Logo Nutricia.svg"
import sierrad from "../../images/Logo Sierad-01.svg"
import home from "../../images/homepage2.png"



class Index extends React.Component {




    render() {
        return (
            <Container fluid className="partition mthead">
                <Row className="justify-content-md-center">
                    <Col className="center-desc" md={{ span: 5, offset: 1, order: 1 }} large={6} xs={{ order: 12 }}>

                        <h1 className="sb resp center-desc-text t-30">Revolusi Industri 4.0</h1>
                        <p className="resp center-desc-text">
                            Aplikasi software kami dapat membantu perusahaan anda dalam memaksimalkan dan meningkatkan efisiensi proses produksi di era Industri 4.0 ini
                    </p>
                        <Link to="/register" target="blank">
                            <Button className="space-between" variant="success">Uji Coba Gratis!</Button>
                        </Link>
                        <Button className="space-between" variant="outline-success">Lihat Demo</Button>
                    </Col>
                    <Col md={{ span: 6, order: 12 }} className="center-desc" >
                        <img className="i1-mob mob-resp" src={home} width={531} height={490} alt="Generic placeholder" />
                    </Col>
                </Row>
                <Row className="space-top ">
                    <Col xs={6} md={{ span: 1, offset: 2 }}>
                        <Image className="" src={nutri} />
                    </Col>
                    <Col xs={6} md={{ span: 1, offset: 1 }}>
                        <Image className="" src={ibr} />
                    </Col>
                    <Col xs={6} md={{ span: 1, offset: 1 }}>
                        <Image className="" src={gf} />
                    </Col>
                    <Col xs={6} md={{ span: 1, offset: 1 }}>
                        <Image className="" src={sierrad} />
                    </Col>
                </Row>

            </Container>
        )
    }
}

export default Index

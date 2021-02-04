import React from "react"
import { Container, Row, Col } from 'react-bootstrap'
import { Link } from "gatsby"
import '../../styles/global.css'
import '../../styles/styles-2.css'

import manuf from "../../images/Evo Manufacture.png"
import agri from "../../images/Evo Agriculture.png"
import livestock from "../../images/Evo Livestock.png"
import fishery from "../../images/Evo Fishery.png"



class Index extends React.Component {

    render() {
        return (
            <Container fluid>
                <Row className="space-top-25">
                    <Col xs={6} md={{ span: 2, offset: 1 }}>
                        <h1 className="txt-20">Partners</h1>
                    </Col>
                </Row>
                <Row className="section-pad-2">
                    <Col className="card-partner-2 " xs={6} md={{ span: 2, offset: 2 }}>
                        <Link to="/evo-manufacture"><img className="center t" src={manuf} alt="Evo Manufacture" /></Link>
                    </Col>
                    <Col className="card-partner-2" xs={6} md={{ span: 2 }}>
                        <Link to="/evo-agriculture"><img className="center t" src={agri} alt="Evo Agriculture" /></Link>
                    </Col>
                    <Col className="card-partner-2" xs={6} md={{ span: 2 }}>
                        <Link to="/evo-livestock"><img className="center t" src={livestock} alt="Evo Livestock" /></Link>
                    </Col>
                    <Col className="card-partner-2" xs={6} md={{ span: 2 }}>
                        <Link to="/evo-fishery"><img className="center t" src={fishery} alt="Evo Fishery" /></Link>
                    </Col>
                </Row>

                <Row className="space-top-25">
                    <Col xs={6} md={{ span: 2, offset: 1 }}>
                        <h1 className="txt-20">Other</h1>
                    </Col>
                </Row>
                <Row className="section-pad-2">
                    <Col className="card-partner-2 " xs={6} md={{ span: 2, offset: 2 }}>
                        <Link to="/bantuan-account/"><h4 className="txt-20 space-top-50 t-center">Account</h4></Link>
                    </Col>
                    <Col className="card-partner-2" xs={6} md={{ span: 2 }}>
                        <h4 className="txt-20 space-top-50 t-center">Partner</h4>
                    </Col>
                </Row>
            </Container>
        )
    }
}

export default Index

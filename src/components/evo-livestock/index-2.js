import React from "react"
import { Container, Row, Col } from 'react-bootstrap'
import { Link } from "gatsby"
import '../../styles/global.css'
import '../../styles/styles-2.css'



class IndexTwo extends React.Component {

    render() {
        return (
            <Container className="bg-bantuan" fluid>
                {/* ROW 1 */}
                <Row className="section-pad-2">
                    <Col md={{ span: 10, offset: 1 }} >
                        <h1 className="txt-header-2 white center mob-resp"> Evo Livestock</h1>
                        <Link to="/bantuan/"><p className="txt-header-3 white center">Bantuan</p></Link>
                    </Col>
                </Row>


            </Container>
        )
    }
}

export default IndexTwo

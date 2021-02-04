import React from "react"
import {Container, Row, Col} from 'react-bootstrap'
import '../../styles/global.css'
import '../../styles/styles-2.css'



class IndexTwo extends React.Component {
    
    render() {
        return( 
        <Container className="bg-faqs" fluid>
            {/* ROW 1 */}
            <Row className="section-pad-2">
                <Col md={{ span: 10, offset: 1 }} >
                    <h1 className="txt-header-2 white center mob-resp">Frequently Asked Questions</h1>          
                </Col>
            </Row>
            

        </Container>
        )
    }
}

export default IndexTwo

import React from "react"
import {Container, Row, Col, Card} from 'react-bootstrap'
import '../../styles/global.css'
import '../../styles/styles-2.css'
import webinar4 from "../../images/webinar_4.jpeg"
import webinar3 from "../../images/webinar_3.jpeg"
import webinar2 from "../../images/webinar_2.jpeg"




class IndexTwo extends React.Component {
    
    render() {
        return( 
        <Container>
            <Row className="justify-content-md-center section-pad-2" fluid>
                <Col md={{ span: 3,  order: 1 }} sm={12}>
                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={webinar4} width={320} height={320} />
                        <Card.Body>
                        <Card.Title className="txt-20 normal grey center">Seminar</Card.Title>
                         
                        </Card.Body>
                        
                    </Card>                
                </Col>
                <Col md={{ span: 3,  order: 1 }} sm={12}>
                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={webinar3} width={320} height={320} />
                        <Card.Body>
                        <Card.Title className="txt-20 normal grey center">Seminar</Card.Title>                         
                        </Card.Body>
                        
                    </Card>                
                </Col>
                <Col md={{ span: 3,  order: 1 }} sm={12}>
                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={webinar2}  width={320} height={320}/>
                        <Card.Body>
                        <Card.Title className="txt-20 normal grey center">Seminar</Card.Title>                         
                        </Card.Body>
                        
                    </Card>                
                </Col>
            </Row> 


        </Container>
        )
    }
}

export default IndexTwo

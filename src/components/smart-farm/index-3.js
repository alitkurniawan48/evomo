import React from "react"
import {Container, Row, Col, Image} from 'react-bootstrap'
import '../../styles/global.css'
import '../../styles/styles-2.css'
import sol1 from "../../images/f-sol1.svg"
import sol2 from "../../images/f-sol2.svg"
import sol3 from "../../images/f-sol3.svg"

 


class IndexThree extends React.Component {
    

    render() {
        return( 
        <Container fluid className="partition mt-head-2">
            <Row>                      
                <Col md={{ span: 10, offset: 1 }}>
                    <h1 className="txt-header-2 sb resp center-desc-text">Solusi yang ditawarkan Evomo</h1>                
                </Col>
            </Row>

            <Row className="space-top-25">                      
                <Col md={{ span: 1, offset: 1 }}>
                    <br/>
                    <Image  className="center" src={sol1}  />         
                </Col>
                <Col md={{ span: 7, offset: 1 }}>
                    <h3 className="sb resp center-desc-text txt-header-3">Smart Sense</h3>
                    <p className="resp center-desc-text txt-desc-2">
                    Smart Sense adalah salah satu solusi utama EVOMO smart farming dengan tujuh sensor. Sistem monitoring otomatis ini 
                    memungkinkan setiap peternak untuk mengetahui kondisi lingkungan ternak untuk menghitung tingkat index stress pada ternak.  
                    </p>      
                </Col>
            </Row>

            <Row className="space-top-25">                      
                <Col md={{ span: 1, offset: 1 }}>
                    <br/>
                    <Image  className="center" src={sol2}  />         
                </Col>
                <Col md={{ span: 7, offset: 1 }}>
                    <h3 className="sb resp center-desc-text txt-header-3">Smart Fan</h3>
                    <p className="resp center-desc-text txt-desc-2">
                    Smart Fan membantu peternak untuk menghindari tingkat stress level yang tinggi dan meningkatkan kualitas pertumbuhan pertenakan di kandang tertutup secara otomatis,
                    dengan mengatur kecepatan kipas pada waktu yang tepat, meminimalkan resiko tingkat index stress dan pemborosan lainnya.  
                    </p>      
                </Col>
            </Row>

            <Row className="space-top-25">                      
                <Col md={{ span: 1, offset: 1 }}>
                    <br/>
                    <Image  className="center" src={sol3}  />         
                </Col>
                <Col md={{ span: 7, offset: 1 }}>
                    <h3 className="sb resp center-desc-text txt-header-3">Smart Eye</h3>
                    <p className="resp center-desc-text txt-desc-2">
                    Smart Eye meningkatkan kesadaran peternak untuk melakukan aksi dengan adanya data-data prediktif yang dilihat melalui handphone, 
                    tablet atau laptop, terhubung dengan internet. Sehingga memudahkan peternak untuk memantau kandang di mana saja dan kapan saja secara realtime.  
                    </p>      
                </Col>
            </Row>
            
              
        </Container>
        )
    }
}

export default IndexThree

import React from "react"
import {Container, Row, Col} from 'react-bootstrap'
import '../styles/global.css'
import image1 from "../images/s3.png"
import image2 from "../images/s4.png"
import image3 from "../images/s5.png"

const SectionThree = () =>{
    
    return(

    <Container fluid className="partition">        
            {/* ROW 1 */}
            <Row className="justify-content-md-center mb3 center-desc">
                <Col md={{ span: 6, order: 12}} className="center-desc">
                    <img src= {image1} width={500} height={372} className="ml-3 mob-resp" alt="Generic placeholder"
                    />
                </Col>
                <Col md={{ span: 5, offset: 1 }} className="cont3 center-desc content-index-3">
                    <h1 className="head1 center-desc-text">Ketahui sekarang, <br/>bukan nanti</h1>
                    <p className="resp center-desc-text">
                    Udara terlalu lembab? Listrik tidak stabil? atau pH air tidak sesuai? Evomo menginformasikan kondisi secara <b>realtime</b> apapun yang sedang terjadi dengan cepat.                </p>
                
                </Col>
            </Row>  
            
            {/* ROW 2 */}
            <Row className="justify-content-md-center mb3  center-desc">
                <Col md={5} large={6} className="center-desc">
                    <img src= {image2} width={500} height={372} className="ml-3 mob-resp" alt="Generic placeholder"
                    />
                </Col>
                <Col md={{ span: 5, offset: 1 }} className="cont3 center-desc content-index-3">
                    <h1 className="head1 center-desc-text">Data yang tepat dan akurat</h1>
                    <p className="resp center-desc-text">Data adalah yang terpenting untuk Anda. Evomo menampilkan informasi yang <b>valid</b> dan bernilai yang Anda butuhkan.</p>
                </Col>             
            </Row>

            {/* ROW 3 */}
            <Row className="justify-content-md-center mb3 center-desc">
                 <Col md={{ span: 6, order: 12}} className="center-desc">
                    <img src= {image3} width={500} height={372} className="ml-3 mob-resp" alt="Generic placeholder"
                    />
                </Col>
                <Col md={{ span: 5, offset: 1 }} className="cont3 center-desc content-index-3">
                    <h1 className="head1 center-desc-text">Bawa data Anda ke level selanjutnya</h1>
                    <p className="resp center-desc-text">
                    Mendapatkan pemahaman yang lebih dalam <br/>dengan adanya analisis dan metriks sebagai <b>sistem pendukung keputusan</b> Anda.</p>
                
                </Col>
                
            </Row>  
        </Container>
        
    )
}

export default SectionThree


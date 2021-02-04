import React from "react"
import {Container, Row,  Col, Image} from 'react-bootstrap'
import '../../styles/global.css'
import '../../styles/styles-2.css'
import home from "../../images/farm-1.png"
import section2 from "../../images/farm-2.png"
import scrollTo from 'gatsby-plugin-smoothscroll';

import icon1 from "../../images/f-icon1.svg"
import icon2 from "../../images/f-icon2.svg"
import icon3 from "../../images/f-icon3.svg"
import icon4 from "../../images/f-icon4.svg"
import arrow from "../../images/arrow-down.png"


   


class Index extends React.Component {
    
    render() {
        return( 
        <Container fluid className="partition mthead">
            <Row className="justify-content-md-center">      
                <Col className="center-desc" md={{ span: 4, offset: 1, order: 1 }} large={6} xs={{order: 12}}>
                <br/><br/><br/><br/><br/><br/><br/>
                    <h1 className="sb resp center-desc-text">Evomo <br/>Smart Farming</h1>
                </Col>
                <Col md={{span:7, order:12}} className="center-desc" >
                    <img className="i1-mob mob-resp" src= {home} width={684} height={500} alt="Generic placeholder"/>
                </Col>
            </Row>  
            <Image className="center" src={arrow} onClick={() => scrollTo('#section-two')}/>
                
            <br/><br/><br/><br/><br/><br/>
            <Row className="justify-content-md-center ">      
                <Col className="center-desc" md={{ span: 5, offset: 1, order: 1 }} large={6} xs={{order: 12}}>
                    <h1 id="section-two" className="txt-header-2 sb resp center-desc-text">Evomo Smart Farming</h1>
                    <p className="resp center-desc-text">
                    Solusi Evomo Smart Farming menyediakan solusi IoT terintegrasi yang memungkinkan peternak dapat memanfaatkan sensor, 
                    dan sistem pemantauan untuk mengumpulkan informasi, mengontrol berbagai parameter di pertenakan mereka dan menganalisis 
                    data secara cepat untuk membuat keputusan berdasarkan informasi.<br/> <br/> Solusi perternakan cerdas ini memastikan hewan yang dipelihara 
                    dengan baik sesuai dengan nilai standar. Data yang dikumpulkan dari sensor disimpan di cloud dan dapat dengan mudah diakses menggunakan HP, 
                    tablet atau Laptop. Solusi ini ditujukan untuk meningkatkan produktivitas dan kualitas pertenakan, mengurangi biaya tenaga kerja dan 
                    menjaga agar hasil panen maksimal. 
                    </p>
                </Col>
                <Col md={{span:5, offset: 1, order:12}} className="center-desc" >
                    <img className="i1-mob mob-resp" src= {section2} width={400} height={400} alt="Generic placeholder"/>
                </Col>                
            </Row>  
               
            <br/><br/><br/><br/><br/><br/>
            <Row className="justify-content-md-center ">                      
                <h1 className="txt-header-2 sb resp center-desc-text">Mengapa memilih Evomo?</h1>                
            </Row>
            
            <Row className="justify-content-md-center">
                <Col className="space-top center-desc" md= { 2 } large={6}>
                    <Image  className="center" src={icon1}  />
                    <br/>
                    <h3 className="sb resp center-desc-text txt-header-3 center">Pengaturan proses yang lebih baik</h3>
                    <p className="resp center-desc-text txt-desc-2 center">
                       Membantu untuk meningkatkan hasil panen memungkinkan peternaki untuk merencanakan distribusi proses yang lebih baik.  
                    </p>                  
                </Col>

                <Col className="space-top center-desc" md= { 3} large={6}>
                    <Image  className="center" src={icon2}  />
                    <br/>
                    <h3 className="sb resp center-desc-text txt-header-3 center">Menjaga kondisi lingkungan <br/>sesuai standar</h3>
                    <p className="resp center-desc-text txt-desc-2 center">
                        Membantu menjaga kondisi lingkungan yang sempurna untuk pertumbuhan ternak yang optimal.
                    </p>                  
                </Col>

                <Col className="space-top center-desc" md= { 3 } large={6}>
                    <Image  className="center" src={icon3}  />
                    <br/>
                    <h3 className="sb resp center-desc-text txt-header-3 center">Peningkatan<br/> efisiensi bisnis</h3>
                    <p className="resp center-desc-text txt-desc-2 center">
                    Sistem pelacakan proses dari ternak masuk hingga panen. Peningkatan kualitas, menurunkan tingkat stress ternak. 
                    Mendapatkan pengaturan yang lebih baik selama proses ternak dan mempertahankan standar kualitas lingkungan ternak
                     melalui otomatisasi.
                    </p>                  
                </Col>

                <Col className="space-top center-desc" md= { 2 } large={6}>
                    <Image  className="center" src={icon4}  />
                    <br/>
                    <h3 className="sb resp center-desc-text txt-header-3 center">Memberikan<br/> aksi lebih cepat</h3>
                    <p className="resp center-desc-text txt-desc-2 center">
                    Mampu melihat penyimpangan dalam proses pertumbuhan ternak berarti risiko gagal panen dapat dikurangi. 
                    </p>                  
                </Col>
            </Row>  
        </Container>


        )
    }
}

export default Index

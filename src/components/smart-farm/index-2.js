import React from "react"
import {Container, Row, Col} from 'react-bootstrap'
import '../../styles/global.css'
import '../../styles/styles-2.css'



class IndexTwo extends React.Component {
    
    render() {
        return( 
        <Container className="bg-blue w-100">
            {/* ROW 1 */}
            <Row className=" section-pad-2">
                <Col md={{ span: 10, offset: 1 }}>
                    <h1 className="txt-header-2 white">Evomo Panel</h1>          
                    <p className="txt-desc-white">
                        Evomo Panel adalah komponen kunci dari EVOMO Smart Farming. Memungkinkan produsen pertanian untuk secara efektif mengelola, 
                        mengendalikan dan menghasilkan laporan di berbagai sistem otomatis.
                    </p>
                    <ul className="txt-desc-white">
                        <li>Dapat di integrasikan dengan vendor dan device apapun dan keampuan yang dapat disesuaikan</li>
                        <li>Pengembangan sistem yang efektif</li>
                        <li>Terintegritas</li>
                    </ul>
                </Col>
            </Row>
            

        </Container>
        )
    }
}

export default IndexTwo

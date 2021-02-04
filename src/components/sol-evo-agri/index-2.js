import React from "react"
import { Container, Row, Col, Card, CardDeck, Badge } from "react-bootstrap"
import "../../styles/global.css"
import "../../styles/styles-2.css"
import "../../styles/styles-3.css"

class Index extends React.Component {
    render() {
        return (
            <Container fluid>
                <Row className="section-pad-2 ">
                    <Col md={{ span: 10, offset: 1 }}>
                        <h1 className="txt-header-2 g-banner">
                            Revolusi Monitoring</h1>
                        <p className="p2-sol-evo g-banner"><i>Ciptakan Hasil Panen Terbaik</i></p>
                        <p className="txt-20 normal">Dengan kekuatan teknologi monitoring, Evo Agriculture hadir untuk memantau, menganalisis, dan mengoptimalkan hasil panen pertanian, sehingga membantu petani meningkatkan profit dari hasil panen dan mengurangi resiko cacat panen.</p>
                    </Col>
                </Row>

                <Row>
                    <Col md={{ span: 10, offset: 1 }}>
                        <h1 className="txt-header-2 g-banner">
                            Evo Agriculture</h1>
                        <p className="txt-20 normal">
                            <b>Evo Agriculture akan memudahkan memonitoring kondisi lingkungan pertanian secara real-time melalui aplikasi di smartphone  kapanpun dan dimanapun, dengan memberikan analisis data yang akurat.</b>  Sehingga petani  dapat mengambil tindakan secara cepat dan tepat terhadap kondisi tanaman yang berbeda-beda sesuai dengan kebutuhan tanaman.<br />
                            Evo Agriculture membantu petani melakukan monitoring dengan parameter :
                        </p>
                    </Col>
                </Row>


                <Row className="space-top-25">
                    <Col md={{ span: 10, offset: 1 }} className="center-flex">

                        <CardDeck>

                            <Card border="light" style={{ width: '28rem' }} className="padding-card">
                                <Card.Body>
                                    <Card.Title className="txt-20 g-banner">
                                        Kualitas Air</Card.Title>
                                    <Card.Text className="farm-desc">
                                        <b>VWC</b> (Volumetric Water Content)<br />
                                        <b>EC</b> (Electrical Conductivity)<br />
                                        <b>Moisture</b><br />
                                        <b>Temperature</b></Card.Text>
                                </Card.Body>
                            </Card>

                            <Card border="light" style={{ width: '28rem' }} className="padding-card">
                                <Card.Body>
                                    <Card.Title className="txt-20 g-banner">
                                        Kualitas Udara</Card.Title>
                                    <Card.Text className="farm-desc">
                                        <b>UV Solar PAR</b> <i>(Photosynthetically active radiation)</i><br />
                                        <b>CO2</b><br />
                                        <b>Angin</b><br />
                                        <b>Pluviometer</b><br />
                                        <b>Tekanan</b><br />
                                        <b>Kelembapan</b></Card.Text>
                                </Card.Body>
                            </Card>

                            <Card border="light" style={{ width: '28rem' }} className="padding-card">
                                <Card.Body>
                                    <Card.Title className="txt-20 g-banner">
                                        Air</Card.Title>
                                    <Card.Text className="farm-desc">
                                        <b>ES</b><br />
                                        <b>TDS</b> (Total Dissolved Oxygen)<br />
                                        <b>PH</b> (Derajat Keasaman)<br />
                                        <b>DO</b> (Dissolved Oxygen) terlarut<br />
                                        <b>Temperature</b><br />
                                        <b>ORP</b> (Oxidation Reduction Potensial)</Card.Text>
                                </Card.Body>
                            </Card>
                        </CardDeck>
                    </Col>
                </Row>

                <Row className="space-top-25">
                    <Col md={{ span: 10, offset: 1 }} className="flex">
                        <h1 className="txt-header-2">
                            Implementasi &nbsp;</h1><h1 className="txt-header-2 green">
                            Evo Agriculture</h1>
                    </Col>

                    <Col md={{ span: 10, offset: 1 }} className="center-flex">

                        <CardDeck>

                            <Card border="light" style={{ width: '28rem' }} className="padding-card-2 border-green-right">
                                <Card.Body>
                                    <Card.Title className="txt-20 g-banner">
                                        Device</Card.Title>
                                    <Card.Text className="farm-desc">
                                        Sensor<br />
                                        Actuator<br />
                                        Electronic Device
                                      </Card.Text>
                                </Card.Body>
                            </Card>

                            <Card border="light" style={{ width: '28rem' }} className="padding-card-2">
                                <Card.Body>
                                    <Card.Title className="txt-20 g-banner">
                                        Internet</Card.Title>
                                    <Card.Text className="farm-desc">
                                        LPWA<br />
                                        NB-IoT<br />

                                    </Card.Text>
                                </Card.Body>
                            </Card>

                            <Card border="light" style={{ width: '28rem' }} className="padding-card-2 border-green-left">
                                <Card.Body>
                                    <Card.Title className="txt-20 g-banner">
                                        Application</Card.Title>
                                    <Card.Text className="farm-desc">
                                        Monitoring<br />
                                        Automation<br />
                                        Insight<br />
                                        Recommendation
                                      </Card.Text>
                                </Card.Body>
                            </Card>

                        </CardDeck>
                    </Col>

                </Row>

                <Row className="space-top-25">
                    <Col md={{ span: 10, offset: 1 }} className="flex">
                        <h1 className="txt-header-2">
                            Kelebihan &nbsp;</h1><h1 className="txt-header-2 green">
                            Evo Agriculture</h1>
                    </Col>

                    <Col md={{ span: 10, offset: 1 }} className="center-flex">

                        <CardDeck>

                            <Card border="light" style={{ width: '28rem' }} className="padding-card-2 border-green-right">
                                <Card.Body>
                                    <Card.Title className="txt-20 g-banner">
                                        Meningkatkan Keuntungan</Card.Title>
                                </Card.Body>
                            </Card>

                            <Card border="light" style={{ width: '28rem' }} className="padding-card-2">
                                <Card.Body>
                                    <Card.Title className="txt-20 g-banner">
                                        Mampu menurunkan biaya operasional</Card.Title>
                                </Card.Body>
                            </Card>

                            <Card border="light" style={{ width: '28rem' }} className="padding-card-2 border-green-left">
                                <Card.Body>
                                    <Card.Title className="txt-20 g-banner">
                                        Meningkatkan kualitas dan kuantitas panen</Card.Title>
                                </Card.Body>
                            </Card>

                        </CardDeck>
                    </Col>

                </Row>

                <Col md={{ span: 10, offset: 1 }} className="space-top-25">
                    <h2><Badge variant="success" className="badge-20 bg-green full-width"><b>Menciptakan Hasil Panen Terbaik</b></Badge></h2>
                </Col>

                <Row className="section-pad-2">
                    <Col md={{ span: 10, offset: 1 }}>
                        <p className="txt-20 g-banner"><i>Teknologi Evomo #Revolusi Monitoring</i></p>
                        <p>- Mempermudah monitoring lahan pertanian secara real time<br />
                        - Membantu petani melakukan pertanian secara cerdas dengan mengambil data real time<br />
                        - Adanya data analisa yang tepat dan akurat berdasarkan sensor yang dipasang dalam lahan pertanian.</p>
                    </Col>
                </Row>





            </Container>
        )
    }
}

export default Index

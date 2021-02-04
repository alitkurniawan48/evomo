import React from "react"
import { Container, Row, Col, Badge, Card, CardDeck } from "react-bootstrap"
import "../../styles/global.css"
import "../../styles/styles-2.css"
import "../../styles/styles-3.css"

class Index extends React.Component {
    render() {
        return (
            <Container fluid>
                <Row className="section-pad-2 ">
                    <Col md={{ span: 10, offset: 1 }}>
                        <h1 className="txt-header-2 grey">
                            Tantangan Industri Manufaktur di Indonesia</h1>
                        <h2><Badge variant="secondary" className="badge-20">Kegagalan mesin saat produksi</Badge> <Badge variant="secondary" className="badge-20 bg-grey">Efiesiensi dan efektifitas menurun</Badge></h2>
                        <h2><Badge variant="secondary" className="badge-20">Kesulitan dalam mengontrol kinerja mesin</Badge> <Badge variant="secondary" className="badge-20 bg-grey">SDM yang rendah</Badge></h2>
                        <h2><Badge variant="secondary" className="badge-20">Penurunan Return on Investment (ROI)</Badge></h2>

                    </Col>
                </Row>

                <Row>
                    <Col md={{ span: 10, offset: 1 }}>
                        <h1 className="txt-header-2 grey">
                            Revolusi Monitoring</h1>
                        <p className="p2-sol-evo"><i>Membantu Meningkatkan Awareness Untuk Menciptakan Performance Manufaktur</i></p>
                        <p className="txt-20 normal">Dengan kekuatan teknologi monitoring, Evo Manufakturing hadir untuk memantau, menganalisis, dan mengoptimalkan kinerja mesin produksi, sehingga dapat meningkatkan awareness pekerja terhadap kinerja setiap mesin, sehingga menciptakan nilai performance yang tinggi .

</p>
                    </Col>
                </Row>

                <Row className="space-top-25">
                    <Col md={{ span: 10, offset: 1 }}>
                        <h1 className="txt-header-2 grey">
                            Evo Manufacture</h1>
                        <p className="txt-20 normal"><b>Evo Manufacture merupakan solusi bagi industri manufaktur yang mengalami kendala dalam pengelolaan OEE (Overall Equipment Effectiveness) pada mesin produksi.</b> Pemanfaatan teknologi monitoring akan memberikan kemudahan  bagi industri manufaktur dalam mendapatkan data historis mesin secara cepat dan akurat, sehingga performance mesin pun akan meningkat.

</p>
                    </Col>
                </Row>

                <Row className=" space-top-25">
                    <Col md={{ span: 10, offset: 1 }} className="center-flex">
                        <CardDeck>
                            <Card border="light" style={{ width: '28rem' }} className="padding-card">
                                <Card.Body>
                                    <Card.Title className="txt-20 grey">
                                        Real time OEE Monitoring</Card.Title>
                                    <Card.Text className="farm-desc">
                                        Memberikan informasi mengenai proses produksi dari sudut pandang mesin, lini produksi, pabrik, dan perusahaan secara real-time</Card.Text>
                                </Card.Body>
                            </Card>

                            <Card border="light" className="padding-card" style={{ width: '28rem' }}>
                                <Card.Body>
                                    <Card.Title className="txt-20 grey">
                                        Analysis</Card.Title>
                                    <Card.Text className="farm-desc">
                                        Membantu Departemen terkait untuk melakukan improvement berdasarkan data yang valid dan akurat</Card.Text>
                                </Card.Body>
                            </Card>

                            <Card border="light" style={{ width: '28rem' }} className="padding-card">
                                <Card.Body>
                                    <Card.Title className="txt-20 grey">
                                        Total Loss</Card.Title>
                                    <Card.Text className="farm-desc">
                                        Menyajikan loss total yang terjadi pada proses produksi</Card.Text>
                                </Card.Body>
                            </Card>
                        </CardDeck>
                    </Col>
                </Row>

                <Row className="space-top-25">
                    <Col md={{ span: 10, offset: 1 }} className="center-flex">

                        <CardDeck>
                            <Card border="light" style={{ width: '28rem' }} className="padding-card">
                                <Card.Body>
                                    <Card.Title className="txt-20 grey">
                                        Pareto Graphic</Card.Title>
                                    <Card.Text className="farm-desc">
                                        Menyajikan data dan informasi ke dalam grafis pareto untuk mempermudah proses analisa dan pengambilan keputusan</Card.Text>
                                </Card.Body>
                            </Card>

                            <Card border="light" style={{ width: '28rem' }} className="padding-card">
                                <Card.Body>
                                    <Card.Title className="txt-20 grey">
                                        Report</Card.Title>
                                    <Card.Text className="farm-desc">
                                        Menghasilkan laporan nilai OEE sesuai dengan periode yang diinginkan untuk mempermudah dan mempercepat proses pelaporan</Card.Text>
                                </Card.Body>
                            </Card>
                        </CardDeck>
                    </Col>
                </Row>

                <Row className="space-top-25">
                    <Col md={{ span: 10, offset: 1 }} className="flex">
                        <h1 className="txt-header-2">
                            Kelebihan &nbsp;</h1><h1 className="txt-header-2 grey">
                            Evo Manufacture</h1>
                    </Col>

                    <Col md={{ span: 10, offset: 1 }} className="center-flex">

                        <CardDeck>

                            <Card border="light" style={{ width: '28rem' }} className="padding-card border-grey-right">
                                <Card.Body>
                                    <Card.Title className="txt-20 grey">
                                        Meningkatkan Kualitas Performance Mesin</Card.Title>
                                </Card.Body>
                            </Card>

                            <Card border="light" style={{ width: '28rem' }} className="padding-card-2">
                                <Card.Body>
                                    <Card.Title className="txt-20 grey">
                                        Mengurangi biaya perbaikan mesin</Card.Title>
                                </Card.Body>
                            </Card>

                            <Card border="light" style={{ width: '28rem' }} className="padding-card-2 border-grey-left">
                                <Card.Body>
                                    <Card.Title className="txt-20 grey">
                                        Mengidentifikasi kerugian yang disebabkan proses mesin
(true prosess losses)</Card.Title>
                                </Card.Body>
                            </Card>

                        </CardDeck>
                    </Col>

                    <Col md={{ span: 10, offset: 1 }} className="space-top-25">
                        <h2><Badge variant="secondary" className="badge-20 full-width"><b>Return on Investment (ROI)</b></Badge></h2>
                    </Col>

                    <Col md={{ span: 10, offset: 1 }} className="space-top-25">
                        <p className="txt-20 grey"><i>Teknologi Evomo #Revolusi Monitoring</i></p>
                        <p>- OEE adalah titik awal untuk meningkatkan digitalisasi manufaktur<br />
                        - Meningkatkan awareness pekerja terhadap performa mesin secara real time<br />
                        - Kinerja proses produksi dapat diketahui dan dapat ditingkatkan ke tingkat maksimalnya.</p>
                    </Col>
                </Row>





            </Container>
        )
    }
}

export default Index

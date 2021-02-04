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
                        <h1 className="txt-header-2 blue">
                            Tantangan Industri Manufaktur di Indonesia</h1>
                        <h2><Badge variant="secondary" className="badge-20 bg-blue">Perubahan iklim yang ekstrem</Badge> <Badge variant="secondary" className="badge-20 bg-blue-2">Biaya produksi yang besar</Badge></h2>
                        <h2><Badge variant="secondary" className="badge-20 bg-blue-2">Kesulitan dalam menentukan kualitas air</Badge> <Badge variant="secondary" className="badge-20 bg-blue">Produktivitas menurun</Badge></h2>
                        <h2><Badge variant="secondary" className="badge-20 bg-blue">Kesulitan dalam menentukan kualitas dan kuantitas pakan ikan</Badge></h2>

                    </Col>
                </Row>

                <Row>
                    <Col md={{ span: 10, offset: 1 }}>
                        <h1 className="txt-header-2 blue">
                            Revolusi Monitoring</h1>
                        <p className="p2-sol-evo blue"><i>Membantu Petambak Meningkatkan Hasil Budidaya</i></p>
                        <p className="txt-20 normal">Dengan kekuatan teknologi monitoring, Evo-Fishery hadir untuk memantau, menganalisis, dan mengoptimalkan hasil budidaya perikanan, sehingga membantu petambak meningkatkan profit dari hasil panen dan menciptakan budidaya yang berkelanjutan.</p>
                    </Col>
                </Row>

                <Row className="space-top-25">
                    <Col md={{ span: 10, offset: 1 }}>
                        <h1 className="txt-header-2 blue">
                            Evo Fishery</h1>
                        <p className="txt-20 normal"><b>Evo Fishery akan memudahkan memonitoring kondisi lingkungan budidaya perikanan secara real time melalui aplikasi di smartphone  kapanpun dan dimanapun.</b> Kompleksitas yang menjadi penyebab kegagalan budidaya dapat diminimalisir dengan menggunakan teknologi yang membantu petambak mengambil langkah pencegahan.
                        <br /><br />    Evo Fishery memberikan analisis data yang akurat dalam menentukan kondisi lingkungan pada budidaya perikanan. Berikut parameter yang tersedia di Evo Fishery :</p>
                    </Col>
                </Row>



                <Row className="space-top-25">
                    <Col md={{ span: 10, offset: 1 }} className="center-flex">

                        <CardDeck>

                            <Card border="light" style={{ width: '28rem' }} className="padding-card">
                                <Card.Body>
                                    <Card.Title className="txt-20 blue">
                                        Kualitas Air</Card.Title>
                                    <Card.Text className="farm-desc">
                                        Oksigen terlarut<br />
                            Salinitas<br />
                            pH<br />
                            Temperatur<br />
                            Kekeruhan</Card.Text>
                                </Card.Body>
                            </Card>

                            <Card border="light" style={{ width: '28rem' }} className="padding-card">
                                <Card.Body>
                                    <Card.Title className="txt-20 blue">
                                        Pakan</Card.Title>
                                    <Card.Text className="farm-desc">
                                        Kualitas<br />
                            Kuantitas<br /></Card.Text>
                                </Card.Body>
                            </Card>

                            <Card border="light" style={{ width: '28rem' }} className="padding-card">
                                <Card.Body>
                                    <Card.Title className="txt-20 blue">
                                        Kualitas Udara</Card.Title>
                                    <Card.Text className="farm-desc">
                                        Angin<br />
                            Temperatur<br />
                           Cahaya<br />
                            Kelembapan</Card.Text>
                                </Card.Body>
                            </Card>


                        </CardDeck>
                    </Col>
                </Row>

                <Row className="space-top-25">
                    <Col md={{ span: 10, offset: 1 }} className="flex">
                        <h1 className="txt-header-2">
                            Implementasi &nbsp;</h1><h1 className="txt-header-2 blue">
                            Evo Fishery</h1>
                    </Col>

                    <Col md={{ span: 10, offset: 1 }} className="center-flex">

                        <CardDeck>

                            <Card border="light" style={{ width: '28rem' }} className="padding-card-2 border-blue-right">
                                <Card.Body>
                                    <Card.Title className="txt-20 blue">
                                        Pemasangan</Card.Title>
                                    <Card.Text className="farm-desc">Proses Pemasangan Sensor di Lokasi yang telah Disepakati</Card.Text>
                                </Card.Body>
                            </Card>

                            <Card border="light" style={{ width: '28rem' }} className="padding-card-2">
                                <Card.Body>
                                    <Card.Title className="txt-20 blue">
                                        Akses</Card.Title>
                                    <Card.Text className="farm-desc">Mendapatkan Akses untuk Masuk ke Evo Fishery</Card.Text>
                                </Card.Body>
                            </Card>

                            <Card border="light" style={{ width: '28rem' }} className="padding-card-2 border-blue-left">
                                <Card.Body>
                                    <Card.Title className="txt-20 blue">
                                        Device</Card.Title>
                                    <Card.Text className="farm-desc">Monitoring Kondisi Sekitar Secara Realtime dari Perangkat yang Diinginkan</Card.Text>
                                </Card.Body>
                            </Card>

                        </CardDeck>
                    </Col>

                </Row>

                <Row className="space-top-25">
                    <Col md={{ span: 10, offset: 1 }} className="flex">
                        <h1 className="txt-header-2">
                            Kelebihan &nbsp;</h1><h1 className="txt-header-2 blue">
                            Evo Fishery</h1>
                    </Col>

                    <Col md={{ span: 10, offset: 1 }} className="center-flex">

                        <CardDeck>

                            <Card border="light" style={{ width: '28rem' }} className="padding-card-2 border-blue-right">
                                <Card.Body>
                                    <Card.Title className="txt-20 blue">
                                        Memudahkan dalam mengambil keputusan</Card.Title>
                                </Card.Body>
                            </Card>

                            <Card border="light" style={{ width: '28rem' }} className="padding-card-2">
                                <Card.Body>
                                    <Card.Title className="txt-20 blue">
                                        Mampu menurunkan biaya operasional</Card.Title>
                                </Card.Body>
                            </Card>

                            <Card border="light" style={{ width: '28rem' }} className="padding-card-2 border-blue-left">
                                <Card.Body>
                                    <Card.Title className="txt-20 blue">
                                        Meningkatkan kualitas dan kuantitas panen</Card.Title>
                                </Card.Body>
                            </Card>

                        </CardDeck>
                    </Col>
                </Row>

                <Col md={{ span: 10, offset: 1 }} className="space-top-25">
                    <h2><Badge variant="secondary" className="badge-20 bg-blue full-width"><b>Menciptakan Budidaya yang Berkelanjutan</b></Badge></h2>
                </Col>


                <Row className="section-pad-2">
                    <Col md={{ span: 10, offset: 1 }}>
                        <p className="txt-20 blue"><i>Teknologi Evomo #Revolusi Monitoring</i></p>
                        <p>- Melakukan monitoring lingkungan tambak secara real time<br />
                        - Mendapatkan informasi yang tepat dan akurat untuk memudahkan manajemen kualitas air, udara dan jumlah pakan <br />
                        - Mengukur DO, temperatur, pH, salinitas dan pengukuran lainnya dilingkungan tambak.</p>
                    </Col>
                </Row>



            </Container>
        )
    }
}

export default Index

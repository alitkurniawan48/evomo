import React from "react"
import { Container, Row, Col, Card, Table, CardDeck } from 'react-bootstrap'
import '../../styles/global.css'
import '../../styles/styles-2.css'
import './partner.css'



class Index extends React.Component {

    render() {
        return (
            <Container fluid>
                <Row className="space-top">
                    <Col xs={6} md={{ span: 11, offset: 1 }}>
                        <h1 className="txt-20 g-banner">General Bussiness Plan (On Cloud)*</h1>
                    </Col>

                    <Col md={{ span: 10, offset: 1 }}>
                        <Table className="table-sm">
                            <thead>
                                <tr>
                                    <th className="none"></th>
                                    <th className="bg-evomo txt-banner t-center mg-thead-1 mg-thead">Free (60 Hari)</th>
                                    <th className="bg-green txt-banner t-center mg-thead-1 mg-thead">Standard</th>
                                    <th className="bg-blue txt-banner t-center mg-thead-1 mg-thead">Enterprise</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <th className="table-bus-g green txt-header-3">Device (Nodes/Sensor/Machine)</th>
                                    <td className="mg-thead-1 txt-header-3 t-center fw-400">3 Devices</td>
                                    <td className="mg-thead-1 txt-header-3 t-center fw-400">10 Devices</td>
                                    <td className="mg-thead-1 txt-header-3 t-center fw-400"> &gt; 10 Devices</td>
                                </tr>
                            </tbody>
                            <tbody>
                                <tr>
                                    <th className="table-bus-g green txt-header-3">Indikator / Device</th>
                                    <td className="mg-thead-1 txt-header-3 t-center fw-400">3</td>
                                    <td className="mg-thead-1 txt-header-3 t-center fw-400">5 Indikator / Device</td>
                                    <td className="mg-thead-1 txt-header-3 t-center fw-400">5 Indikator / Device</td>
                                </tr>
                            </tbody>

                            <tbody>
                                <tr>
                                    <th className="table-bus-g green txt-header-3">Historical Data</th>
                                    <td className="mg-thead-1 txt-header-3 t-center fw-400">1 Bulan</td>
                                    <td className="mg-thead-1 txt-header-3 t-center fw-400">36 Bulan historical data</td>
                                    <td className="mg-thead-1 txt-header-3 t-center fw-400">36 Bulan historical data</td>
                                </tr>
                            </tbody>

                            <tbody>
                                <tr>
                                    <th className="table-bus-g green txt-header-3">Download Data</th>
                                    <td className="mg-thead-1 txt-header-3 t-center fw-400">.csv</td>
                                    <td className="mg-thead-1 txt-header-3 t-center fw-400">.csv and .pdf</td>
                                    <td className="mg-thead-1 txt-header-3 t-center fw-400">.csv and .pdf</td>
                                </tr>
                            </tbody>

                            <tbody>
                                <tr>
                                    <th className="table-bus-g green txt-header-3">Email Reporting</th>
                                    <td className="mg-thead-1 txt-header-3 t-center fw-400">Daily</td>
                                    <td className="mg-thead-1 txt-header-3 t-center fw-400">Daily, Weekly, Monthly </td>
                                    <td className="mg-thead-1 txt-header-3 t-center fw-400">Daily, Weekly, Monthly </td>
                                </tr>
                            </tbody>

                            <tbody>
                                <tr>
                                    <th className="table-bus-g green txt-header-3">Interval Data Send</th>
                                    <td className="mg-thead-1 txt-header-3 t-center fw-400">Up to 15 Menit</td>
                                    <td className="mg-thead-1 txt-header-3 t-center fw-400">Up to 5 Menit</td>
                                    <td className="mg-thead-1 txt-header-3 t-center fw-400">Up to 5 Menit</td>
                                </tr>
                            </tbody>
                            <tbody>
                                <tr>
                                    <th className="table-bus-g green txt-header-3">Alert</th>
                                    <td className="mg-thead-1 txt-header-3 t-center fw-400">Email</td>
                                    <td className="mg-thead-1 txt-header-3 t-center fw-400">Email, SMS, Telegram</td>
                                    <td className="mg-thead-1 txt-header-3 t-center fw-400">Email, SMS, Telegram</td>
                                </tr>
                            </tbody>

                            <tbody>
                                <tr>
                                    <th className="table-bus-g green txt-header-3">Alert Receipt</th>
                                    <td className="mg-thead-1 txt-header-3 t-center fw-400">1</td>
                                    <td className="mg-thead-1 txt-header-3 t-center fw-400">10</td>
                                    <td className="mg-thead-1 txt-header-3 t-center fw-400">Unlimited</td>
                                </tr>
                            </tbody>
                            <thead>
                                <tr>
                                    <th className="none"></th>
                                    <th className="bg-evomo txt-banner t-center mg-thead-1 mg-thead">Rp. 0,- <p className="card-price-desc white">Per-Bulan Per-Device</p></th>
                                    <th className="bg-green txt-banner t-center mg-thead-1 mg-thead">Rp. 300.000,-<p className="card-price-desc white">Per-Bulan Per-Device</p></th>
                                    <th className="bg-blue txt-banner t-center mg-thead-1 mg-thead">Rp. 250.000,-<p className="card-price-desc white">Per-Bulan Per-Device</p></th>
                                </tr>
                            </thead>

                        </Table>
                    </Col>
                </Row>

                <Row className="space-top">
                    <Col xs={6} md={{ span: 11, offset: 1 }}>
                        <h1 className="txt-20 g-banner">General Bussiness Plan (On Premise)*</h1>
                    </Col>
                </Row>
                <Row>
                    <Col md={{ span: 5, offset: 1 }}>
                        <CardDeck>
                            <Card className="card-pricing-one t-center">
                                <Card.Body>
                                    <Card.Subtitle className="txt-banner white">One Time Charge</Card.Subtitle>
                                    <br />

                                    <Card.Text className="card-price-desc white">Unlimited Device Nodes/Sensor/Machine</Card.Text>
                                    <Card.Text className="card-price-desc white">5 Indikator/Device</Card.Text>
                                    <Card.Text className="card-price-desc white">Unlimited Historical Data</Card.Text>
                                    <Card.Text className="card-price-desc white">Download data in .csv and .pdf</Card.Text>
                                    <Card.Text className="card-price-desc white">Daily, Weekly, Monthly email reporting</Card.Text>
                                    <Card.Text className="card-price-desc white">5 minute interval data send</Card.Text>
                                    <Card.Text className="card-price-desc white">Alert Email, SMS, and Telegram</Card.Text>
                                    <Card.Text className="card-price-desc white">Unlimited Alert Receipt</Card.Text>

                                </Card.Body>
                            </Card>

                        </CardDeck>
                    </Col>
                    <Col md={5} className="space-top">
                        <h4 className="grey">Catatan</h4>
                        <p className="card-price-desc grey">Sebagai tambahan untuk biaya layanan, customer wajib membayar biaya-biaya dibawah ini:</p>
                        <p className="card-price-desc grey"><b>Biaya Instalasi (One Time Charge)</b> <br />Rp. 18.000.000,-</p>
                        <p className="card-price-desc grey"><b>Biaya On Side Training of Trainer</b> <br />Rp. 13.500.000,-</p>
                        <p className="card-price-desc grey"><b>Biaya Support & Maintenance</b>
                            <br />Merujuk ke dalam paket Support & Maintenance</p>

                    </Col>
                </Row>

                <Row className="space-top">
                    <Col xs={6} md={{ span: 11, offset: 1 }}>
                        <h1 className="txt-20 g-banner">Paket Support & Maintenance</h1>
                    </Col>

                    <Col md={{ span: 10, offset: 1 }}>
                        <Table className="table-sm">
                            <thead>
                                <tr>
                                    <th className="bg-green txt-banner t-center mg-thead-1 mg-thead">Support & <br />Maintenance</th>
                                    <th className="bg-green txt-banner t-center mg-thead-2 mg-thead">Deskripsi</th>
                                    <th className="bg-green txt-banner t-center mg-thead-3 mg-thead">Biaya Langganan</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td className="mg-thead-1 farm-desc txt-header-3 t-center pd-thead1">On Cloud</td>
                                    <td className="mg-thead-2 farm-desc">- Periodic* minor updates and maintenance of engine<br />
                                    - 1 bussiness day guarantee responses for all issues<br />
                                    - 6h responses for critical issues<br />
                                    &nbsp; (Weekend & Weekdays, 9-17, GMT+7)<br />
                                    - Close technical support during on boarding & integration<br />
                                    &nbsp; phase<br />
                                    - All support will only be rendered during operating hours only<br />
                                    &nbsp; (Weekdays, 9-17, GMT+7)</td>
                                    <td className="mg-thead-3 t-center pd-thead1">10% Harga Device</td>
                                </tr>

                                <tr>
                                    <td className="mg-thead-1 txt-header-3 t-center pd-thead1">On Premised</td>
                                    <td className="mg-thead-2">- Periodic* minor updates and maintenance of engine<br />
                                    - 1 bussiness day guarantee responses for all issues<br />
                                    - 6h responses for critical issues<br />
                                    &nbsp; (Weekend & Weekdays, 9-17, GMT+7)<br />
                                    - Close technical support during on boarding & integration
                                    phase<br />
                                    - All support will only be rendered during operating hours only<br />
                                    &nbsp; (Weekdays, 9-17, GMT+7)</td>
                                    <td className="mg-thead-3 t-center pd-thead3">Free <br /><br />Tahun Pertama

Tahun Kedua dikenakan biaya Man-Days Per-Visit</td>
                                </tr>
                            </tbody>
                        </Table>
                    </Col>
                </Row>


            </Container>
        )
    }
}

export default Index

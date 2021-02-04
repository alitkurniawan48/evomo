import React from "react"
import { Container, Row, Col } from "react-bootstrap"
import "../../styles/global.css"
import "../../styles/styles-2.css"
import tentang1 from "../../images/about-evomo-1.png"
import tentang2 from "../../images/about-evomo-2.png"
import tentang3 from "../../images/about-evomo-3.png"
import tentang4 from "../../images/about-evomo-4.png"

class Index extends React.Component {
  render() {
    return (
      <Container fluid className="partition mthead">
        <Row className="section-pad-2 ">
          <Col md={{ span: 10, offset: 1 }}>
            <p className="farm-desc">
              <b>Evomo adalah salah satu startup di Program Digital Amoeba </b>
              yang merupakan sebuah program inkubasi startup yang dibentuk oleh
              PT. Telkom Indonesia <br />
              <br />
              Evomo menciptakan solusi bagi industri Manufaktur dan Agribisnis
              untuk meningkatkan produktivitas menggunakan teknologi Internet of
              Things, Big Data, dan Robotic Process Automation. Kami siap
              membantu bisnis Anda bertransformasi di era Industri 4.0
            </p>
            <br />
            <h1 className="txt-header-2 space-top-25">
              Tingkatkan Produktivitas bisnismu bersama Evomo
            </h1>
            <p className="farm-desc">
              Evomo menyediakan solusi pantau kondisi dalam sektor pertanian,
              perikanan, peternakan, pembangunan dan area publik berdasarkan
              indikator yang Anda tentukan.
            </p>
          </Col>
        </Row>

        <Row>
          <Col md={{ span: 5, offset: 1 }} className="center-desc">
            <img
              className="i1-mob mob-resp"
              src={tentang1}
              width={502}
              height={200}
              alt="Evo-Manufacturing"
            />
          </Col>
          <Col
            className="center-desc"
            md={{ span: 5, order: 1 }}
            large={6}
            xs={{ order: 12 }}
          >
            <p className="txt-header-3 blue">Evo Manufacturing</p>
            <p className="center-desc-text">
              Evomo mengembangkan inovasi industri 4.0 dengan layanan Total
              Productive Maintenance (TPM) berupa pemantauan produksi secara
              real time, pelacakan downtime, dan visualisasi data produksi untuk
              meningkatkan efisiensi dan produktivitas bisnis Anda.
            </p>
          </Col>
        </Row>
        <Row className="space-top">
          <Col className="center-desc" md={{ span: 5, offset: 1 }}>
            <p className="txt-header-3 blue">Evo Agriculture</p>
            <p className="center-desc-text">
              Evomo mengembangkan inovasI industri 4.0 agriculture dengan
              menyediakan sensor untuk menghitung parameter pertanian seperti
              kelembaban tanah, suhu, maupun pH air yang dirancang dan akan
              dianalisis pada platform Evomo untuk membantu meningkatkan
              produktivitas lahan, bahan, dan hasil panen pertanian.
            </p>
          </Col>
          <Col md={4} className="center-desc">
            <img
              className="i1-mob mob-resp"
              src={tentang2}
              width={502}
              height={200}
              alt="Evo-Agriculture"
            />
          </Col>
        </Row>
        <Row className="space-top">
          <Col md={{ span: 5, offset: 1 }} className="center-desc">
            <img
              className="i1-mob mob-resp"
              src={tentang3}
              width={502}
              height={200}
              alt="Evo-Livestock"
            />
          </Col>
          <Col
            className="center-desc"
            md={{ span: 5, order: 1 }}
            large={6}
            xs={{ order: 12 }}
          >
            <p className="txt-header-3 blue">Evo Livestock</p>
            <p className="center-desc-text">
              Evomo mengembangkan inovasI industri 4.0 livestock dengan
              menyediakan sensor untuk menghitung parameter peternakan seperti
              kecepatan angin, berat ternak, maupun berat makanan ternak yang
              dirancang dan akan dianalisis pada platform Evomo untuk membantu
              meningkatkan produksi peternakan dan efisiensi penggunaan bahan.
            </p>
          </Col>
        </Row>
        <Row className="space-top">
          <Col className="center-desc" md={{ span: 5, offset: 1 }}>
            <p className="txt-header-3 blue">Evo Fishery</p>
            <p className="center-desc-text">
              Evomo mengembangkan inovasI industri 4.0 perikanan, dilengkapi
              dengan sensor yang dapat mengetahui kondisi kualitas air dan
              parameter lainnya dengan lebih mudah. Sehingga Anda dapat
              mengawasi industri perikanan Anda dimanapun dan kapanpun melalui
              platform Evomo.
            </p>
          </Col>
          <Col md={4} className="center-desc">
            <img
              className="i1-mob mob-resp"
              src={tentang4}
              width={502}
              height={200}
              alt="Evo-Agriculture"
            />
          </Col>
        </Row>
      </Container>
    )
  }
}

export default Index

import React from "react"
import { Row, Col } from "react-bootstrap"
import "../styles/global.css"
import image1 from "../images/ck1.png"
import image2 from "../images/ck2.png"
import image3 from "../images/ck3.png"
import image4 from "../images/ck4.png"

const FiturSectionOne = () => {
  return (
    <div>
      <div className="partition">
        <Row className="justify-content-md-center section-pad">
          <Col className="center-horizontal">
            <h1 className="sb center resp">Lihat bagaimana Evomo bekerja</h1>
          </Col>
        </Row>
      </div>

      <div className="partition">
        {/* <Row className="justify-content-md-center mb3">  */}
        <div className="card-cara-kerja mb3">
          <img
            src={image1}
            width={500}
            height={372}
            className="ml-3 mob-resp"
            alt="Generic placeholder"
          />
          <p className="center resp">
            Mengetahui bagaimana Evomo dapat
            <br /> membantu memudahkan pemantauan Anda
          </p>
        </div>
        {/* </Row>   */}
        <div className="card-cara-kerja mb3">
          {/* <Row className="justify-content-md-center mb3"> */}
          {/* <Col md= {5} xs={6}> */}
          <img
            src={image2}
            width={500}
            height={372}
            className="ml-3 mob-resp"
            alt="Generic placeholder"
          />
          <p className="center resp">
            Proses pemasangan sensor di lokasi yang <br />
            telah disepakati
          </p>
          {/* </Col>      */}
          {/* </Row>   */}
        </div>
        <div className="card-cara-kerja mb3">
          {/* <Row className="justify-content-md-center mb3"> */}
          {/* <Col md= {5} xs={6}> */}
          <img
            src={image3}
            width={500}
            height={372}
            className="ml-3 mob-resp"
            alt="Generic placeholder"
          />
          <p className="center resp">
            Mendapatkan akses untuk masuk ke <br />
            sistem Evomo
          </p>
          {/* </Col>             */}
          {/* </Row>   */}
        </div>
        <div className="card-cara-kerja mb3">
          {/* <Row className="justify-content-md-center mb3"> */}
          {/* <Col md= {5} xs={6}> */}
          <img
            src={image4}
            width={500}
            height={372}
            className="ml-3 mob-resp"
            alt="Generic placeholder"
          />
          <p className="center resp">
            Dapat memantau kondisi sekitar secara
            <br />
            <i> realtime</i> dari perangkat yang diinginkan
          </p>
          {/* </Col>             */}
          {/* </Row>   */}
        </div>
      </div>
    </div>
  )
}

export default FiturSectionOne

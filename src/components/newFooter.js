import React from "react"
import { Navbar, Button, Form, FormControl, Container, Row, Col } from "react-bootstrap"
import { Link } from "gatsby"
import "../styles/styles-2.css"
import logo from "../images/header-evomo.svg"
import logoJeager from "../images/logo-jeager.png"
import mail from "../images/mail.svg"
import phone from "../images/phone.svg"
import fb from "../images/fb.svg"
import yt from "../images/yt.svg"
import linkedin from "../images/linkedin.svg"
import insta from "../images/insta.svg"

const Footer = () => {
  return (
    <div>
      <Container fluid className="partition mt-head-2">
        <Row className="justify-content-md-center mt-head-2">
          <Col
            className="center-desc"
            md={{ span: 11, order: 1 }}
            large={6}
            xs={{ order: 12 }}
          >
            <Navbar>
              <Navbar.Brand href="/homepage-2">
                {" "}
                <img src={logo} width="auto" height="auto" alt="Logo Evomo" />
              </Navbar.Brand>
              <Navbar.Toggle />
              <Navbar.Collapse className="justify-content-end">
                <Form inline>
                  {/* <h3 className="txt-footer-b">Berlangganan berita kami </h3> */}
                  <FormControl
                    type="text"
                    placeholder="Masukkan email Anda"
                    className=" mr-sm-2"
                  />
                  <Button className="btn-subs" variant="success">
                    Kirim
                  </Button>
                </Form>
              </Navbar.Collapse>
            </Navbar>
          </Col>
        </Row>

        <Row className="justify-content-md-center mt-head-2 space-bot-15">
          <Col md={2}>
            <h3 className="txt-footer-b space-bot-10">Solusi Kami </h3>
            <Link className="link-footer" to="/evo-manufacture-solusi">
              <h3 className="txt-footer-b normal space-bot-10">
                Evomo for Manufacture
            </h3>
            </Link>
            <Link className="link-footer" to="/evo-agriculture-solusi">
              <h3 className="txt-footer-b normal space-bot-10">
                Evomo for Agriculture
            </h3>
            </Link>
            <Link className="link-footer" to="/evo-fishery-solusi">
              <h3 className="txt-footer-b normal space-bot-10">
                Evomo for Fishery
            </h3>
            </Link>
            <h3 className="txt-footer-b normal">Evomo for Livestock</h3>
          </Col>

          <Col md={2}>
            <h3 className="txt-footer-b space-bot-10">Use Case </h3>
            <h3 className="txt-footer-b normal space-bot-10">
              Food & Beverage
            </h3>
            <h3 className="txt-footer-b normal space-bot-10">Tekstil</h3>
            <h3 className="txt-footer-b normal space-bot-10">Kosmetik</h3>
            <h3 className="txt-footer-b normal space-bot-10">Pakan Ternak </h3>
            <h3 className="txt-footer-b normal ">Properti </h3>
          </Col>

          <Col md={2}>
            <h3 className="txt-footer-b space-bot-10">Company </h3>
            <Link className="link-footer" to="/tentang-evomo"><h3 className="txt-footer-b normal space-bot-10">Tentang Kami</h3></Link>
            <Link className="link-footer" to="/event"><h3 className="txt-footer-b normal space-bot-10">
              Event & Webinar
            </h3></Link>
            <Link className="link-footer" to="/karir"><h3 className="txt-footer-b normal space-bot-10">Karir</h3></Link>
            <Link className="link-footer" to="/partnership"><h3 className="txt-footer-b normal space-bot-10">Partner</h3></Link>
            <Link className="link-footer" to="/bantuan"><h3 className="txt-footer-b normal ">Bantuan </h3></Link>
          </Col>

          <Col md={3}>
            <h3 className="txt-footer-b space-bot-10">
              Terhubung dengan Kami{" "}
            </h3>
            <img
              src={logoJeager}
              width="auto"
              height="auto"
              alt="Logo Jeager"
            />
            <h3 className="txt-footer-b normal space-bot-15">
              Jl. Sisingamangaraja No.4, Selong, Kec. Kby. Baru, Kota Jakarta
              Selatan, DKI Jakarta 12110
            </h3>
            <h3 className="txt-footer-b normal space-bot-15">
              <img src={mail} alt="Mail" /> &nbsp; evomo.jeager@gmail.com
            </h3>
            <h3 className="txt-footer-b normal">
              <img src={phone} alt="Mail" /> &nbsp; +6282211776239
            </h3>
          </Col>
          <Col md={2}>
            <h3 className="txt-footer-b">Ikuti kami di sini </h3>
            <Link className="link-footer" to="https://www.linkedin.com/company/jeager-manufacturingsolution/" target="blank"><h3 className="txt-footer-b normal space-bot-15">
              <img src={linkedin} alt="Mail" /> &nbsp; Evomo_id
            </h3></Link>
            <Link className="link-footer" href="https://www.youtube.com/channel/UCOHfXUOEO6EEBQYqMpbfwTA" target="blank"><h3 className="txt-footer-b normal space-bot-15">
              <img src={yt} alt="Mail" /> &nbsp;Evomo
            </h3></Link>
            <Link className="link-footer" href="https://www.instagram.com/evomo_id/" target="blank"><h3 className="txt-footer-b normal space-bot-15">
              <img src={insta} alt="Mail" /> &nbsp;@evomo_id
            </h3></Link>
            <Link className="link-footer" href="https://www.facebook.com/evomo.io" target="blank"><h3 className="txt-footer-b normal space-bot-15">
              <img src={fb} alt="Mail" /> &nbsp; Evomo
            </h3></Link>
          </Col>
        </Row>
        <br />
        <hr />
      </Container>

      <Row className="justify-content-md-center space-bot-50">
        <Col md={2}>
          {" "}
          <h3 className="txt-footer-b normal space-bot-10">
            © Evomo by Jeager - 2020
          </h3>
        </Col>
        <Col md={2}>
          {" "}
          <h3 className="txt-footer-b normal space-bot-10">
            Persyaratan Layanan
          </h3>
        </Col>
        <Col md={2}>
          {" "}
          <Link className="link-footer" to="/privacy-policy"><h3 className="txt-footer-b normal space-bot-10">
            Kebijakan Privasi
          </h3></Link>
        </Col>
        <Col md={1}>
          {" "}
          <Link className="link-footer" to="/faqs"><h3 className="txt-footer-b normal space-bot-10">FAQ</h3></Link>
        </Col>
        <Col md={{ span: 2, offset: 2 }}>
          {" "}
          {/* <h3 className="txt-footer-b normal space-bot-10">
            © Evomo by Jeager - 2020
          </h3> */}
        </Col>
      </Row>
    </div>
  )
}

export default Footer

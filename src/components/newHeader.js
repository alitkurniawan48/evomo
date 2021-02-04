import React from "react"
import { Navbar, Nav, Button, NavDropdown } from "react-bootstrap"
import logo from "../images/header-evomo.svg"
import "../styles/styles-2.css"

const Header = () => (
  <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
    <Navbar.Brand href="/">
      {" "}
      <img src={logo} width="auto" height="auto" alt="React Bootstrap logo" />
    </Navbar.Brand>
    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
    <Navbar.Collapse id="responsive-navbar-nav justify-content-end">
      <Nav className="mr-auto"></Nav>
      <Nav>
        <NavDropdown className="header-text-drop" title="Solusi" >
          <h3 className="txt-header-3 mg-25">Solusi Kami</h3>
          <NavDropdown.Item href="/evo-manufacture-solusi">Evomo untuk Manufaktur</NavDropdown.Item>
          <NavDropdown.Item href="/evo-agriculture-solusi">Evomo untuk Pertanian</NavDropdown.Item>
          <NavDropdown.Item href="/evo-fishery-solusi">Evomo untuk Perikanan</NavDropdown.Item>
          <NavDropdown.Item href="">Evomo untuk Peternakan</NavDropdown.Item>

        </NavDropdown>
        <Nav.Link className="header-text" href="">
          Use Case
        </Nav.Link>
        <Nav.Link className="header-text" href="">
          Hardware
        </Nav.Link>
        <Nav.Link className="header-text" href="/blog">
          Blog
        </Nav.Link>
        <Nav.Link className="header-text" href="/pricing/">
          Pricing
        </Nav.Link>
        <NavDropdown className="header-text-drop" title="Company" >
          <h3 className="txt-header-3 mg-25">Company</h3>
          <NavDropdown.Item href="/tentang-evomo/">Tentang Evomo</NavDropdown.Item>
          <NavDropdown.Item href="/event/">Event & Webinar</NavDropdown.Item>
          <NavDropdown.Item href="/karir/">Karir</NavDropdown.Item>
          <NavDropdown.Item href="/partnership/">Partners</NavDropdown.Item>
          <NavDropdown.Item href="/bantuan/">Bantuan</NavDropdown.Item>
        </NavDropdown>
        <Nav.Link href="/register/">
          {" "}
          <Button variant="success" className="btn-header" size="sm">
            Uji Coba Gratis!
          </Button>
        </Nav.Link >
        <Nav.Link className="header-text" href="/login/">
          Sign In
        </Nav.Link>
      </Nav>
    </Navbar.Collapse>
  </Navbar>
)

export default Header

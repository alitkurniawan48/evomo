import React, { useState, useCallback } from "react"
import { Container, Row, Col, Button } from 'react-bootstrap'
import { navigate } from 'gatsby';
import '../styles/global.css'
import { ModalEmail } from "./ModalSectionOne";

const Subscribe = () => {
  const [visibleModal] = useState(false);
  const onShowHide = useCallback(() => {
    navigate("/register")
  }, [])
  return (
    <>
      <ModalEmail show={visibleModal} onHide={onShowHide} />
      <Container className="bg-blue w-100 ">
        {/* ROW 1 */}
        <Row className="justify-content-md-center section-pad-2">
          <Col md={{ span: 5, offset: 1 }}>
            <h5 className="txt-subs white">Pantau Kondisi Lebih Mudah</h5>
          </Col>

          <Col md={6} sm={6} className="m-auto">
            <Button variant="outline-primary white mls25" onClick={onShowHide}>Free Trial</Button>
          </Col>
        </Row>
      </Container>
    </>

  )
}

export default Subscribe


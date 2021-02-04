import React, { useState, useCallback } from "react"
import { Container, Row, Col, Button } from 'react-bootstrap'
import '../styles/global.css'
import '../styles/styles-2.css'
import { ModalEmail } from "./ModalSectionOne";


const Subscribe = () => {
  const [visibleModal, setVisibleModal] = useState(false);
  const onShowHide = useCallback(() => {
    setVisibleModal((prev) => (!prev))
  }, [])
  return (
    <>
      <ModalEmail show={visibleModal} onHide={onShowHide} />
      <Container className="bg-green w-100 ">
        {/* ROW 1 */}
        <Row className="section-pad-2">
          <Col md={{ span: 5, offset: 1 }}>
            <h5 className="txt-banner">Solusi monitoring yang lebih mudah</h5>
          </Col>

          <Col md={6} className="">
            <Button variant="outline-success white ml25" href="/register/">Lihat Demo</Button>
            <Button variant="light g-banner mg-25" href="/register/" target="blank">Uji Coba Gratis!</Button>

          </Col>
        </Row>
      </Container>
    </>

  )
}

export default Subscribe


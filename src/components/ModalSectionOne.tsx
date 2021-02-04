import React, { memo, useCallback, useState } from "react"
import { Modal, Spinner, Button, Form } from "react-bootstrap"
// api trial request
import { requestTrialApi } from "../config/api"

type Status = "success" | "failed" | ""
type ModalSectionProps = {
  show: boolean
  onHide: () => void
  status: Status
  message?: String
}

const ModalSection = memo((props: ModalSectionProps) => {
  const { show, onHide, status, message } = props
  return (
    <Modal show={show} onHide={onHide} centered>
      <Modal.Title className="center">
        {status === "success" ? "Success" : "Error"}
      </Modal.Title>
      <Modal.Body className="center">
        <p>{message}</p>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="primary" onClick={onHide}>
          OK
        </Button>
      </Modal.Footer>
    </Modal>
  )
})

type ModalLoadingProps = {
  show: boolean
}
const ModalLoading = memo((props: ModalLoadingProps) => {
  const { show } = props
  return (
    <Modal size="sm" show={show} onHide={() => {}} centered>
      <Modal.Title className="center">Request Data</Modal.Title>
      <Modal.Body className="center">
        <Spinner animation="border" variant="success" />
      </Modal.Body>
    </Modal>
  )
})
type ModalEmailProps = {
  show: boolean
  onHide: () => void
}
export const ModalEmail = memo((props: ModalEmailProps) => {
  const { show, onHide } = props
  const [state, setState] = useState({
    isFetch: false,
    isError: false,
    isSuccess: false,
    message: "",
  })

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    onHide()
    try {
      const headers = {
        "Content-Type": "application/x-www-form-urlencoded",
        Accept: "application/json, text/plain, */*",
      }
      const dataRequest = new URLSearchParams({
        // @ts-ignore
        username: e.target.email.value,
        auto: "true",
        clientname: "Guest",
      })
      setState(prev => ({ ...prev, isFetch: true, isError: false }))
      const requestSubs = await requestTrialApi(dataRequest, headers)
      setState(prev => ({
        ...prev,
        isFetch: false,
        isSuccess: true,
        isError: false,
        message: requestSubs.data.message,
      }))
    } catch (error) {
      if (error?.response?.status === 400) {
        setState(prev => ({
          ...prev,
          isFetch: false,
          isSuccess: true,
          isError: true,
          message: error.response.data.message,
        }))
        return
      }
      setState(prev => ({
        ...prev,
        isFetch: false,
        isSuccess: true,
        isError: true,
        message: "Network Error",
      }))
    }
  }
  const onHideSucess = useCallback(() => {
    if (state.isError === false) {
      window.location.href = "http://35.240.228.215/"
      setState(prev => ({ ...prev, isSuccess: false }))
      return
    }
    setState(prev => ({ ...prev, isSuccess: false }))
  }, [state])
  return (
    <>
      <ModalLoading show={state.isFetch} />
      <ModalSection
        show={state.isSuccess}
        onHide={onHideSucess}
        status={state.isError ? "failed" : "success"}
        message={state.message}
      />
      <Modal show={show} onHide={onHide}>
        <Modal.Header closeButton>
          <Modal.Title>Saya Mau Coba Sekarang!</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>
            Kirimkan e-mail Anda agar dapat langsung uji coba di aplikasi Evomo.
          </p>
          <Form id="subscribe_form" onSubmit={handleSubmit}>
            <Form.Group controlId="exampleForm.ControlInput1">
              <Form.Label>Email</Form.Label>
              <Form.Control
                name="email"
                type="email"
                placeholder="name@example.com"
                required
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={onHide}>
            Close
          </Button>
          <Button variant="primary" type="submit" form="subscribe_form">
            Submit
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  )
})

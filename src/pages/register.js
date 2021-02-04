import React from "react"
import { Link } from "gatsby"
import { RegisterForm } from "../components"
import logo from "../images/Color.svg"

const register = () => {
  return (
    <div
      style={{
        marginTop: 12,
      }}
    >
      <div className="ml-auto col-md-11"
        style={{
          marginLeft: 165,
        }}>
        <Link to="/">
          <img src={logo} width="auto" height="auto" alt="React Bootstrap logo" />
        </Link>
      </div>
      <div className="ml-auto mb-0">
        <RegisterForm />
      </div>
    </div>
  )
}

export default register

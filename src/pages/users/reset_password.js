import React, { useEffect, useState } from "react"

import qs from "querystring"
import { useLocation } from "@reach/router"
// import { navigate } from "gatsby"

import Request from "../../config/api"

import logo from "../../images/Color.svg"

const DoneResetPassword = () => {
    return (
      <div>
        <div>
          <div style={{ marginTop: 12 }}>
            <div style={{ marginLeft: 165 }}>
              <img src={logo} width="auto" height="auto" alt="React Bootstrap logo" />
            </div>
          </div>
        </div>
        <div className="d-flex align-items-center flex-column">
          <div>
            <div style={{ maxWidth: 475, margin: 'auto', marginTop: 60, }} className="d-flex align-items-left flex-column">
              <p className="mb-0" style={{ fontWeight: 600, fontSize: 28, marginTop: 0, marginLeft: 0, }}>
                Berhasil!
                    </p>
              <div style={{ fontSize: 14, marginTop: 24 }}>
                <span>Password Anda telah berhasil diubah. Masuk kembali ke Evomo</span>
              </div>
            </div>
            <div className="d-flex align-items-left flex-column" style={{ fontSize: 14, marginTop: 24, }}>
              <a href="/login/" style={{ color: "#147444" }}>Sign in</a>
            </div>
            <div className="mt-5 d-flex form-footer">
              <span className="mr-2">©Evomo 2020</span>
              <span className="mr-2">Kebijakan Privasi </span>
              <span className="mr-2">Persyaratan Layanan</span>
            </div>
          </div> 
        </div>
      </div >
    )
  }

const ResetPassword = () => {
  const { search } = useLocation()
  const [showSuccess, setShowSuccess] = useState(false)
  const [resetToken, setToken] = useState("")
  const [form, setForm] = useState({
    password: "",
    passwordConfirmation: "",
  })

  const setFormValue = value => {
    // setIsWrongPassword(false);
    setForm({
      ...form,
      ...value,
    })
  }

  useEffect(() => {
    const query = qs.parse(search)
    const token = query["?token"]

    if (token) {
      setToken(token)
      console.log(token)
    }
  })

  const handleResetPassword = e => {
    e.preventDefault()

    const { password } = form
    const config = {
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
        Authorization: `Bearer ${resetToken}`,
      },
    }
    const body = qs.stringify({ password })

    Request.post("users/reset_password", body, config)
      .then(result => {
        // Do something
        // navigate("/recoveryResetPassword/")
        setShowSuccess(true);
        
      })
      .catch(err => {
        // Do something
        const newErr = JSON.stringify(err)
        // setIsWrongPassword(true)
        console.log(newErr)
      })
  }

  if (showSuccess) {
    return <DoneResetPassword />
  }

  return (
    <div>
      <div>
        <div style={{ marginTop: 12 }}>
          <div style={{ marginLeft: 165 }}>
            <img
              src={logo}
              width="auto"
              height="auto"
              alt="React Bootstrap logo"
            />
          </div>
        </div>
      </div>
      <div className="d-flex align-items-center flex-column">
        <div>
          <div
            style={{ maxWidth: 475, margin: "auto", marginTop: 60 }}
            className="d-flex align-items-left flex-column"
          >
            <p
              className="mb-0"
              style={{
                fontWeight: 600,
                fontSize: 28,
                marginTop: 0,
                marginLeft: 0,
              }}
            >
              Reset Password Anda
            </p>
          </div>
          <div
            className="d-flex align-items-center flex-column"
            style={{ marginTop: 24 }}
          >
            <form onSubmit={handleResetPassword} style={{ width: 472 }}>
              <div class="form-group">
                <label for="password">Password Baru</label>
                <input
                  type="password"
                  class="form-control"
                  onChange={({ target: { value } }) => {
                    setFormValue({ password: value })
                  }}
                  placeholder="Masukkan password baru"
                />
                {/* {isWrongPassword && (
                  <div>
                    <i class="fas fa-exclamation-circle"></i>
                    <small style={{ color: "#F04249" }}>Kata sandi Anda tidak cukup kuat. Kata sandi Anda setidaknya harus 10 karakter.</small>
                  </div>
                )} */}
                <div style={{ color: "#808080" }}>
                  <span style={{ fontSize: 11 }}>
                    Kata sandi Anda harus setidaknya 10 karakter. Sertakan huruf
                    kapital, angka / simbol untuk membuatnya lebih aman
                  </span>
                </div>
                <label for="no_hp" style={{ marginTop: 24 }}>
                  Konfirmasi Password Baru
                </label>
                <input
                  type="password"
                  onChange={({ target: { value } }) => {
                    setFormValue({ passwordConfirmation: value })
                  }}
                  class="form-control"
                  placeholder="Ulangi password baru"
                />
                {/* {isWrongPassword && (
                  <div>
                    <i class="fas fa-exclamation-circle"></i>
                    <small style={{ color: "#F04249" }}>Kata sandi tidak sesuai. Ulangi lagi.</small>
                  </div>
                )} */}
              </div>
              <button
                style={{
                  background: "#E1F3E5",
                  marginTop: 24,
                  marginBottom: 16,
                  color: "#147444",
                }}
                type="submit"
                class="w-100 btn"
              >
                Reset
              </button>
            </form>
          </div>
          <div className="mt-5 d-flex form-footer">
            <span className="mr-2">©Evomo 2020</span>
            <span className="mr-2">Kebijakan Privasi </span>
            <span className="mr-2">Persyaratan Layanan</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ResetPassword

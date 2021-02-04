import React, { useState, useEffect } from "react"
import { Link } from "gatsby"
import qs from "querystring"
import { navigate } from "gatsby"
import queryString from "query-string"
import { useLocation } from "@reach/router"

import Request from "../config/api"

import logo from "../images/Color.svg"


const PassRecovery = ({ email = '' } = {}) => {
  return (
    <div>
      <div>
        <div style={{ marginTop: 12 }}>
          <div style={{ marginLeft: 165 }}>
            <Link to="/">
              <img src={logo} width="auto" height="auto" alt="React Bootstrap logo" />
            </Link>
          </div>
        </div>
      </div>
      <div className="d-flex align-items-center flex-column">
        <div>
          <div style={{ maxWidth: 475, margin: 'auto', marginTop: 24, }} className="d-flex align-items-left flex-column">
            <p className="mb-0" style={{ fontWeight: 600, fontSize: 28, marginTop: 0, marginLeft: 0, }}>
              Cek Email Anda
                  </p>
            <div style={{ fontSize: 14, marginTop: 24 }}>
              <span>Email dengan instruksi reset password dikirim ke <b>{email}</b> Jika Anda tidak melihat email di kotak masuk Anda, ingatlah untuk mencoba folder spam Anda juga. Setelah Anda mereset password Anda, Anda dapat memulai dengan Evomo.</span>
            </div>
          </div>
          <div className="d-flex align-items-left flex-column" style={{ fontSize: 14, marginTop: 24, }}>
            <a href="https://evomo.id/" style={{ color: "#147444" }}>Kembali ke Beranda</a>
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

const ForgetPassword = () => {
  const { search } = useLocation()
  const [showSuccess, setShowSuccess] = useState(false)

  const [resetToken, setToken] = useState('')

  const [form, setForm] = useState({
    email: "",
    no_hp: "",
  })

  useEffect(() => {
    const query = queryString.parse(search);
    const { token = false } = query || {}

    if (token) {
      navigate(`/resetPassword?token=${token}`)
    }
  })

  const [isWrongPassword, setIsWrongEmailNohp] = useState(false);

  const setFormValue = value => {
    setIsWrongEmailNohp(false);
    setForm({
      ...form,
      ...value,
    })
  }

  const handleLogin = e => {
    e.preventDefault()
    const config = {
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
        'Authorization': 'Basic amVhZ2VyOlRlbGtvbTEyMw=='
      },
    }

    Request.post(
      "users/forget/password",
      qs.stringify({ ...form, source: "https://evomo.id" }),
      config
    )
      .then(result => {
        // Do something
        // console.log(result)
        // navigate("/passwordRecovery/")
        setShowSuccess(true);
      })
      .catch((err) => {
        // Do something
        setIsWrongEmailNohp(true)
        console.log(err)
      })
  }

  if (showSuccess) {
    return <PassRecovery email={form.email} />
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
              Lupa password
            </p>
            <div style={{ fontSize: 14 }}>
              <span>
                Masukkan alamat email dan nomor telepon Anda di bawah ini dan
                kami akan mengirimkan tautan untuk mengatur ulang kata sandi ke
                email Anda.
              </span>
            </div>
          </div>
          <div
            className="d-flex align-items-center flex-column"
            style={{ marginTop: 24 }}
          >
            <form onSubmit={handleLogin} style={{ width: 472 }}>
              <div class="form-group">
                <label for="email">Email</label>
                <input
                  onChange={({ target: { value } }) => {
                    setFormValue({ email: value })
                  }}
                  type="email"
                  class="form-control"
                  placeholder="Masukkan email Anda"
                />
                <label for="no_hp" style={{ marginTop: 24 }}>
                  No. Telepon
                </label>
                <input
                  type="tel"
                  onChange={({ target: { value } }) => {
                    setFormValue({ no_hp: value })
                  }}
                  class="form-control"
                  placeholder="Masukkan nomor telepon Anda"
                />
                {isWrongPassword && (
                  <div>
                    <i class="fas fa-exclamation-circle"></i>
                    <small style={{ color: "#F04249" }}>Email atau No. Telepon tidak sesuai</small>
                  </div>
                )}
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
                Kirim
              </button>
            </form>
          </div>
          <div
            className="d-flex align-items-left flex-column"
            style={{ color: "#159957", fontSize: 14, marginTop: 24 }}
          >
            <a href="/login" style={{ color: "#147444" }}>
              Kembali ke Sign In
            </a>
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

export default ForgetPassword

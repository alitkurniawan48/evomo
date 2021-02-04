import React, { useState, useEffect } from "react"
import { Link } from "gatsby"
import qs from 'querystring'
// import { navigate } from "gatsby"
import queryString from "query-string"
import { useLocation } from "@reach/router"

import Request from '../config/api'

import logo from "../images/Color.svg"

const UsernameRecovery = ({ email = '' } = {}) => {
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
              <span>Email dengan informasi username dikirim ke <b>{email}</b>. Jika Anda tidak melihat email di kotak masuk Anda, ingatlah untuk mencoba folder spam Anda juga. Masuk kembali ke Evomo dengan username atau email Anda.</span>
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

const ForgetUsername = () => {
  const [showSuccess, setShowSuccess] = useState(false)

  const [form, setForm] = useState({
    email: '',
    no_hp: '',
  });

  const [isWrongPassword, setIsWrongEmailNohp] = useState(false);

  const setFormValue = (value) => {
    setIsWrongEmailNohp(false);
    setForm({
      ...form,
      ...value
    });
  }

  const handleLogin = (e) => {
    e.preventDefault();
    const config = {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',

      }
    }

    Request.post(
      "users/forget/username",
      qs.stringify({ ...form, source: "https://evomo.id" }),
      config
    )

    Request.post('users/forget/username', qs.stringify(form), config)
      .then((result) => {
        // Do something
        // navigate("/usernameRecovery/")
        setShowSuccess(true);
      })
      .catch((err) => {
        // Do something
        setIsWrongEmailNohp(true)
        console.log(err)
      })
  }

  if (showSuccess) {
    return <UsernameRecovery email={form.email} />
  }

  return (
    <div>
      <div>
        <div style={{ marginTop: 12 }}>
          <div style={{ marginLeft: 165 }}>
            <img src={logo} href="https://evomo.id/" width="auto" height="auto" alt="React Bootstrap logo" />
          </div>
        </div>
      </div>
      <div className="d-flex align-items-center flex-column">
        <div>
          <div style={{ maxWidth: 475, margin: 'auto', marginTop: 60, }} className="d-flex align-items-left flex-column">
            <p className="mb-0" style={{ fontWeight: 600, fontSize: 28, marginTop: 0, marginLeft: 0, }}>
              Lupa Username
                  </p>
            <div style={{ fontSize: 14 }}>
              <span>Masukkan alamat email dan nomor telepon Anda di bawah ini dan kami akan mengirimkan username ke email Anda.</span>
            </div>
          </div>
          <div className="d-flex align-items-center flex-column" style={{ marginTop: 24 }}>
            <form onSubmit={handleLogin} style={{ width: 472 }}>
              <div class="form-group">
                <label for="email">Email</label>
                <input
                  onChange={({ target: { value } }) => {
                    setFormValue({ email: value });
                  }}
                  type="email"
                  class="form-control"
                  placeholder="Masukkan email Anda"
                />
                <label for="no_hp" style={{ marginTop: 24 }}>No. Telepon</label>
                <input
                  onChange={({ target: { value } }) => {
                    setFormValue({ no_hp: value });
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
                style={{ background: "#E1F3E5", marginTop: 24, marginBottom: 16, color: "#147444" }}
                type="submit"
                class="w-100 btn"
              >
                Kirim
              </button>
            </form>
          </div>

          <div className="d-flex align-items-left flex-column" style={{ color: "#159957", fontSize: 14, marginTop: 24, }}>
            <a href="/login" style={{ color: "#147444" }}>Kembali ke Sign In</a>
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

export default ForgetUsername

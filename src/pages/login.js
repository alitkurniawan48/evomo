import React, { useState } from "react"
import { Link } from "gatsby"
import qs from 'querystring'
import { navigate } from "gatsby"

import Request from '../config/api'

import logo from "../images/Color.svg"


const Login = () => {
  const [form, setForm] = useState({
    username: '',
    password: '',
  });

  const [isWrongPassword, setIsWrongPassword] = useState(false);

  const setFormValue = (value) => {
    setIsWrongPassword(false);
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
        'Authorization': 'Basic amVhZ2VyOlRlbGtvbTEyMw=='
      }
    }

    Request.post('login', qs.stringify(form), config)
      .then((result) => {
        // Do something
        navigate("https://dashboard.evomo.id/")
      })
      .catch((err) => {
        // Do something
        setIsWrongPassword(true)
        console.log(err)
      })
  }

  return (
    <div>
      <div>
        <div className="ml-auto col-md-12"
          style={{ marginTop: 12 }}>
          <div style={{ marginLeft: 165 }}>
            <Link to="/">
              <img src={logo} width="auto" height="auto" alt="React Bootstrap logo" />
            </Link>
          </div>
        </div>
      </div>
      <div className="d-flex align-items-center flex-column">
        <div>
          <div style={{ maxWidth: 600, margin: 'auto', marginTop: 60, }} className="d-flex align-items-left flex-column">
            <p className="mb-0" style={{ fontWeight: 600, fontSize: 28, marginTop: 0, marginLeft: 0, }}>
              Masuk ke akun Anda
                </p>
          </div>
          <div className="d-flex align-items-center flex-column" style={{ marginTop: 24 }}>
            <form onSubmit={handleLogin} style={{ width: 472 }}>
              <div class="form-group">
                <div style={{ marginTop: 24 }} className="d-flex justify-content-between">
                  <label for="position">Username atau Email</label>
                  <a
                    href="/forget-username"
                    style={{ color: "#159957", fontSize: 12 }}
                  >
                    Lupa Username ?
                  </a>
                </div>
                <input
                  onChange={({ target: { value } }) => {
                    setFormValue({ username: value });
                  }}
                  type="username"
                  class="form-control"
                  placeholder="Masukkan username atau email Anda"
                />
              </div>
              <div class="form-group">
                <div style={{ marginTop: 24 }} className="d-flex justify-content-between">
                  <label for="position">password</label>
                  <a
                    href="/forget-password"
                    style={{ color: "#159957", fontSize: 12 }}
                  >
                    Lupa Password ?
                  </a>
                </div>
                <input
                  onChange={({ target: { value } }) => {
                    setFormValue({ password: value });
                  }}
                  type="password"
                  class="form-control"
                  placeholder="Masukkan password Anda"
                />
                {isWrongPassword && (
                  <div>
                    <i class="fas fa-exclamation-circle"></i>
                    <small style={{ color: "#F04249" }}>Email atau Password tidak sesuai</small>
                  </div>
                )}
              </div>
              <button
                style={{ background: "#E1F3E5", marginTop: 24, marginBottom: 16, color: "#147444" }}
                type="submit"
                class="w-100 btn"
              >
                Masuk
            </button>
            </form>
          </div>

          <div className="d-flex align-items-left flex-column" style={{ fontSize: 14, marginTop: 24, }}>
            <span style={{ marginRight: 10 }}>Belum Punya Akun? <a href="/register" style={{ color: "#147444" }}>Sign up </a></span>
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
export default Login  
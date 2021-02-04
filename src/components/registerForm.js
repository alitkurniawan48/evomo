import React, { useState } from "react"
import qs from 'querystring'
// import { navigate } from "gatsby"

import Request from '../config/api'
// import logo from "../images/Color.svg"

const RegistDone = () => {
  return (
    <div className="">
      <div style={{ maxWidth: 600, margin: 'auto', marginTop: 24, }} className="mt-5 d-flex flex-column align-self-center">
        <p className="mb-0" style={{ fontWeight: 600, fontSize: 28, marginTop: 24, marginLeft: 0, }}>
          Registrasi Berhasil
          </p>
        <div style={{ fontSize: 14, marginTop: 24, }}>
          <span style={{ marginRight: 10, marginLeft: 0, marginTop: 24, }}>Akun Anda telah berhasil didaftarkan.</span>
        </div>
        <div style={{ fontSize: 14, marginTop: 24, }}>
          <span style={{ marginRight: 10 }}>
            <b>
              Kami akan mengirimkan username dan password Evomo Anda
              melalui email yang telah didaftarkan dalam waktu 1 x 24 jam.
                  </b>
          </span>
        </div>
        <div style={{ fontSize: 14, marginTop: 24, }}>
          <span style={{ marginRight: 10 }}>Ada pertanyaan? Silahkan hubungi</span>
          <a href="hello@jeager.io/" style={{ color: "#155799" }}>hello@jeager.io</a>
        </div>
        <div style={{ fontSize: 14, marginTop: 24, }}>
          <span style={{ marginRight: 10 }}>Kembali ke <a href="/" style={{ color: "#155799" }}>Beranda</a></span>
        </div>
        <div className="mt-5 d-flex form-footer">
          <span className="mr-2">©Evomo 2020</span>
          <span className="mr-2">Kebijakan Privasi </span>
          <span className="mr-2">Persyaratan Layanan</span>
        </div>
      </div>
    </div>
  )
}

const RegisterForm = () => {

  const [showSuccess, setShowSuccess] = useState(false)
  const [form, setForm] = useState({
    clientname: '',
    industry: '',
    name: '',
    email: '',
    role: '',
    phone: '',
    isSubscribe: '',
    isDevice: '',
  });

  const [isWrongEmail, setIsWrongEmail] = useState(false);

  const validateEmail = (email) => {
    if (/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(email))
      return true
    return false
  }

  const setFormValue = (value) => {
    const { email = null } = value || {}

    if (email) {
      validateEmail(email) ? setIsWrongEmail(false) : setIsWrongEmail(true)
    }

    setForm({
      ...form,
      ...value
    });
  }

  const handleRegister = (e) => {
    e.preventDefault();
    const config = {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        'Authorization': 'Basic amVhZ2VyOlRlbGtvbTEyMw=='
      }
    }

    if (validateEmail(form.email)) {
      Request.post('register', qs.stringify(form), config)
        .then((result) => {
          // Do something
          // navigate("/registDone")
          setShowSuccess(true);

        })
        .catch((err) => {
          // Do something
          console.log(err)
        })
    } else {
      setIsWrongEmail(true)
    }
  }

  if (showSuccess) {
    return <RegistDone />
  }

  return (
    <div className="m-auto d-flex align-items-center flex-column">
      <div>
        <p className="mb-0" style={{ fontWeight: 600, fontSize: 28, marginTop: 40, }}>
          Mulai uji coba Evomo gratis Anda
        </p>
        <div style={{ fontSize: 14 }}>
          <span style={{ marginRight: 10 }}>Sudah punya akun?</span>
          <a href="/login/" style={{ color: "#159957" }}>Sign in</a>
        </div>
      </div>
      <div style={{ marginTop: 24 }}>
        <form onSubmit={handleRegister} style={{ width: 472 }}>
          <div class="form-group">
            <label for="companyName">Nama Perusahaan</label>
            <input onChange={({ target: { value } }) => {
              setFormValue({ clientname: value });
            }} class="form-control" placeholder="Masukkan Nama Perusahaan Anda" />
          </div>
          <div class="form-group">
            <label for="industry">Jenis Industri</label>
            <select class="custom-select" >
              <option value="Agrikultur" style={{ font: "Poppins" }}>Agrikultur</option>
              <option value="Manufaktur" style={{ font: "Poppins" }}>Manufaktur</option>
              <option value="Perikanan" style={{ font: "Poppins" }}>Perikanan</option>
              <option value="Perternakan" style={{ font: "Poppins" }}>Perternakan</option>
              <option value="Lainnya" style={{ font: "Poppins" }}>Lainnya</option>
            </select>
          </div>
          <div class="form-group">
            <label for="name">Nama Lengkap</label>
            <input
              onChange={({ target: { value } }) => {
                setFormValue({ name: value });
              }}
              class="form-control"
              placeholder="Masukkan Nama Lengkap Anda"
            />
          </div>
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
            {isWrongEmail && (
              <div>
                <i class="fas fa-exclamation-circle"></i>
                <small style={{ color: "#F04249" }}>Tolong masukkan email yang benar.</small>
              </div>
            )}
          </div>
          <div class="form-group">
            <label for="position">Jabatan</label>
            <input
              onChange={({ target: { value } }) => {
                setFormValue({ role: value });
              }}
              class="form-control"
              placeholder="Masukkan Jabatan Anda"
            />
          </div>
          <div class="form-group">
            <label for="contact">Nomor Telepon</label>
            <input
              onChange={({ target: { value } }) => {
                setFormValue({ phone: value });
              }}
              class="form-control"
              placeholder="Masukkan Nomor Telepon Anda"
            />
          </div>
          <small>
            <b>
              Termasuk hardware Evomo?
            </b>
          </small>
          <div style={{ position: "static" }}>
            <div style={{ marginTop: 15, marginLeft: 20 }} class="form-group form-check">
              <input
                type="checkbox"
                class="form-check-input"
                id="exampleCheck1"
                defaultChecked={false}
                onChange={({ target: { checked } }) => {
                  setFormValue({ isDevice: checked });
                }}
              />
              <span for="exampleCheck1">
                Ya, Saya ingin membeli hardware Evomo juga
            </span>
            </div>
            <div style={{ marginTop: 10, marginLeft: 20 }} class="form-group form-check">
              <input
                type="checkbox"
                class="form-check-input"
                id="exampleCheck1"
                defaultChecked={false}
                onChange={({ target: { checked } }) => {
                  setFormValue({ isDevice: checked });
                }}
              />
              <span for="exampleCheck1">
                Tidak, Kami memiliki hardware sendiri
            </span>
            </div>
          </div>
          <div style={{ marginTop: 40 }} class="form-group form-check">
            <input
              type="checkbox"
              class="form-check-input"
              id="exampleCheck1"
              defaultChecked={false}
              onChange={({ target: { checked } }) => {
                setFormValue({ isSubscribe: checked });
              }}
            />
            <span for="exampleCheck1">
              Dapatkan email dari Evomo tentang pembaruan produk, berita
              industri, dan acara. Jika Anda berubah pikiran, Anda dapat
              berhenti berlangganan kapan saja. Kebijakan Privasi.
            </span>
          </div>
          <button
            disabled={isWrongEmail}
            style={{ background: "#E1F3E5", marginTop: 16, marginBottom: 16, color: "#147444" }}
            type="submit"
            class="w-100 btn"
          >
            Selesaikan Pendaftaran Uji Coba
          </button>
          <small>
            Dengan mengklik "Selesaikan pendaftaran uji coba", Anda menyetujui
            Persyaratan Layanan dan Kebijakan Privasi Evomo.
          </small>
        </form>
        <div className="mt-5 d-flex form-footer">
          <span className="mr-2">©Evomo 2020</span>
          <span className="mr-2">Kebijakan Privasi </span>
          <span className="mr-2">Persyaratan Layanan</span>
        </div>
      </div>
    </div>
  )
}

export default RegisterForm

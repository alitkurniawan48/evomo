import React from "react"
import "../styles/styles.scss"

import Header from "../components/newHeader"
import Index from "../components/privacy-policy/index"
import IndexTwo from "../components/privacy-policy/index-2"
import Banner from "../components/banner"
import Footer from "../components/newFooter"
import favicon from "../images/icon.png"
import Helmet from "react-helmet"

const IndexPage = () => (
  <div>
    <Helmet>
      <link rel="icon" href={favicon} />
    </Helmet>
    <Header />

    <IndexTwo />
    <Index />

    <Banner />

    <Footer />
  </div>
)

export default IndexPage

import React from "react"
import "../styles/styles.scss"

import Header from "../components/newHeader"
import Index from "../components/pricing/index"
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

    <Index />

    <Banner />

    <Footer />
  </div>
)

export default IndexPage

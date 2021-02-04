import React from "react"
import "../styles/styles.scss"

import Header from "../components/newHeader"
import Index from "../components/tentang-evomo/index"
import IndexTwo from "../components/tentang-evomo/index-2"
import IndexThree from "../components/tentang-evomo/index-3"
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
    <IndexThree />
    <Banner />

    <Footer />
  </div>
)

export default IndexPage

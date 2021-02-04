import React from "react"
import "../styles/styles.scss"

import Header from "../components/newHeader"
import Index from "../components/homepage-2/index"
import IndexTwo from "../components/homepage-2/index-2"
import IndexThree from "../components/homepage-2/index-3"
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
    <IndexTwo />
    <IndexThree />
    <Banner />

    <Footer />
  </div>
)

export default IndexPage

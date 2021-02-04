import React from "react"
import "../styles/styles.scss"

import Header from "../components/newHeader"
import Index from "../components/smart-farm/index"
import IndexTwo from "../components/smart-farm/index-2"
import IndexThree from "../components/smart-farm/index-3"
import Subscribe from "../components/subscribe"
import Footer from "../components/footer"
import favicon from "../images/icon.png"
import Helmet from "react-helmet"


const IndexPage = () => (
  <div>
    <Helmet>
      <link rel="icon" href={favicon} />
    </Helmet>
    <Header />

    <Index />
    <br />
    <br />
    <IndexTwo />
    <IndexThree />

    <br />
    <br />
    <br />
    <br />
    <Subscribe />

    <Footer />
  </div>
)

export default IndexPage

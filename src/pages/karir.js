import React from 'react'
import "../styles/styles.scss"

import Header from "../components/newHeader"
import IndexTwo from "../components/karir/index-2"
import Index from "../components/karir/index"
import Banner from "../components/banner"
import Footer from "../components/newFooter"
import favicon from "../images/icon.png"
import Helmet from "react-helmet"

function karir() {
    return (
        <div>
            <Helmet>
               <link rel="icon" href={favicon} />
            </Helmet>
            <Header />

            <IndexTwo />
            <Index/>
            <Banner />

            <Footer />
        </div>
    )
}

export default karir

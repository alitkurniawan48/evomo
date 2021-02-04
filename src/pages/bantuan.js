import React from 'react'
import "../styles/styles.scss"

import Header from "../components/newHeader"
import IndexTwo from "../components/bantuan/index-2"
import Index from "../components/bantuan/index"
import Banner from "../components/banner"
import Footer from "../components/newFooter"
import favicon from "../images/icon.png"
import Helmet from "react-helmet"

function bantuan() {
    return (
        <div>
            <Helmet>
                <link rel="icon" href={favicon} />
            </Helmet>
            <Header />

            <Index />
            <IndexTwo />
            <br /><br /><br />
            <Banner />

            <Footer />
        </div>
    )
}

export default bantuan

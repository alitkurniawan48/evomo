import React from 'react'
import "../styles/styles.scss"

import Header from "../components/newHeader"
import Index from "../components/bantuan/indexAcc-1"
import IndexTwo from "../components/bantuan/indexAcc-2"
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

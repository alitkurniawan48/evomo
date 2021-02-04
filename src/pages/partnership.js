import React from 'react'
import "../styles/styles.scss"

import Header from "../components/newHeader"
import IndexTwo from "../components/partnership/index-2"
import Index from "../components/partnership/index"
import IndexThree from "../components/partnership/index-3"
import Banner from "../components/banner"
import Footer from "../components/newFooter"
import favicon from "../images/icon.png"
import Helmet from "react-helmet"

function partnership() {
    return (
        <div>
            <Helmet>
                <link rel="icon" href={favicon} />
            </Helmet>
            <Header />

            <IndexTwo />
            <Index />
            <IndexThree />
            <br /><br /><br />
            <Banner />

            <Footer />
        </div >
    )
}

export default partnership

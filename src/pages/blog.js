import React from 'react'
import "../styles/styles.scss"

import Header from "../components/newHeader"
import IndexTwo from "../components/blog/index-2"
import Index from "../components/blog/index"
// import IndexTes from "../components/blog/index-tes"
import Banner from "../components/banner"
import Footer from "../components/newFooter"
import favicon from "../images/icon.png"
import Helmet from "react-helmet"

function blog() {
    return (
        <div>
            <Helmet>
                <link rel="icon" href={favicon} />
            </Helmet>
            <Header />

            {/* <IndexTes /> */}
            <Index />
            <IndexTwo />

            <Banner />

            <Footer />
        </div>
    )
}

export default blog

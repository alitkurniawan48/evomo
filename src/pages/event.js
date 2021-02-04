import React from 'react'
import "../styles/styles.scss"

import Header from "../components/newHeader"
import IndexTwo from "../components/event/index-2"
import Index from "../components/event/index"
import Banner from "../components/banner"
import Footer from "../components/newFooter"
import favicon from "../images/icon.png"
import Helmet from "react-helmet"

function event() {
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

export default event

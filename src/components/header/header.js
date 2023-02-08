import React from 'react'
import Logo from '../../assets/images/logo-header.svg'
import Navbar from '../navbar/navbar'

function header() {
    return (
        <header>
            <div className="container-logo">
                <img src={Logo} alt="kasa logo" className="header-logo" />
            </div>
            <Navbar />
        </header>
    )
}

export default header

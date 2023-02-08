import React from 'react'
import Logo from '../../assets/images/logo-footer.svg'

function footer() {
    return (
        <footer>
            <div className="footer-container-logo">
                <img src={Logo} alt="kasa logo" />
            </div>
            <div className="footer-text">© 2020 Kasa. All rights reserved</div>
        </footer>
    )
}

export default footer

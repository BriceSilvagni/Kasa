import React from 'react'
import { Link } from 'react-router-dom'

function navbar() {
    return (
        <nav>
            <ul className="navigation">
                <li>
                    <Link to="/">Accueil</Link>
                </li>
                <li>
                    <Link to="/about">A propos</Link>
                </li>
            </ul>
        </nav>
    )
}

export default navbar

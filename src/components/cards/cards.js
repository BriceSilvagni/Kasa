import React from 'react'
import { Link } from 'react-router-dom'
import { logementsList } from '../../assets/logements'

function cards() {
    return (
        <ul className="container-cards">
            {logementsList.map((logement) => (
                <li key={logement.id}>
                    <div className="container-card">
                        <Link to={`/logement/${logement.id}`}>
                            <div className="card">
                                <img
                                    src={logement.pictures[0]}
                                    alt={logement.location}
                                    className="lodgingPict"
                                ></img>
                                <div className="lodging-title">
                                    {logement.title}
                                </div>
                            </div>
                        </Link>
                    </div>
                </li>
            ))}
        </ul>
    )
}

export default cards

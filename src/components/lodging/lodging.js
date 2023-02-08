import React from 'react'
import { Link } from 'react-router-dom'
import { logementsList } from '../../assets/logements'

function ShowLogementsList() {
    return (
        <div>
            <ul className="container-cards">
                {logementsList.map((logement) => (
                    <li key={logement.id}>
                        <div className="container-card">
                            <Link to="/{logement.id}">
                                <div className="card">
                                    <img
                                        src={logement.pictures[0]}
                                        alt={logement.location}
                                        className="lodging-img"
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
        </div>
    )
}

export default ShowLogementsList

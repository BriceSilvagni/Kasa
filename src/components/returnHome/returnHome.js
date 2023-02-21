import { Link } from 'react-router-dom'
import Home from '../../pages/home/home'

function returnHome() {
    return (
        <div className="container-returnHome">
            <Link to={Home}>
                <p>Retourner sur la page d'accueil</p>
            </Link>
        </div>
    )
}

export default returnHome

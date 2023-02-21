import ReturnHome from '../../components/returnHome/returnHome'

function error() {
    return (
        <main id="main-error">
            <div className="container-error">
                <p className="wc">404</p>
                <p className="text-error">Oups! La page que vous demandez n'existe pas.</p>
            </div>
            <ReturnHome />
        </main>
    )
}

export default error
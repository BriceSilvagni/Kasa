function banner({ Banner, FigcaptionClass, AltPict, Slogan }) {
    return (
        <figure className="container-banner">
            <img src={Banner} alt={AltPict} className="bannerPict" />
            <figcaption className={FigcaptionClass}>
                <h1>{Slogan}</h1>
            </figcaption>
        </figure>
    )
}

export default banner

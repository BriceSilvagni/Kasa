function banner({ Banner, FigcaptionClass, Slogan }) {
    return (
        <figure className="container-banner">
            <img src={Banner} alt="Banner pict" className="pict" />
            <figcaption className={FigcaptionClass}>
                <h1>{Slogan}</h1>
            </figcaption>
        </figure>
    )
}

export default banner

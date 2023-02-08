import BannerPict from '../../assets/images/banner.jpg'

function banner() {
    return (
        <div className="container-banner">
            <img src={BannerPict} alt="Banner pict" className="pict" />
        </div>
    )
}

export default banner

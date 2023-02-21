import Cards from '../../components/cards/cards'
import Banner from '../../components/banner/banner'
import BannerPict from '../../assets/images/banner.jpg'



function home() {
    return (
        <main>
            <Banner Banner={BannerPict} Slogan="Chez vous, partout et ailleurs" />
            <Cards />
        </main>
    )
}

export default home

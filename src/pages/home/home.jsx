import ShowLogementsList from '../../components/lodging/lodging'
import Banner from '../../components/banner/banner'
import BannerPict from '../../assets/images/banner.jpg'



function home() {
    return (
        <main>
            <Banner Banner={BannerPict} Slogan="Chez vous, partout et ailleurs" />
            <ShowLogementsList />
        </main>
    )
}

export default home

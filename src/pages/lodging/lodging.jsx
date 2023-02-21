import { useState, useEffect } from "react";
import { useParams } from "react-router-dom"
import Error from '../../pages/error/error'
import { logementsList } from '../../assets/logements'
import Carousel from "../../components/carousel/carousel"
import Tags from '../../components/tags/tags'
import Host from '../../components/host/host'
import Collapse from '../../components/collapse/collapse'
import Rating from '../../components/rating/rating'

function Lodging() {
    const { id } = useParams()
    const foundLodging = logementsList.find((object) => object.id === id)
    const [item, setItem] = useState();

    useEffect(() => {setItem(foundLodging)})
        // redirect si foundItem is undefined
        if (!item) {
            return <Error />
        }

    return (
        <main>
            <Carousel />
            <section className="info-blocks">
                <div className="block-left">
                    <div className='block-lodging-title'><p>{foundLodging.title}</p></div>
                    <div className='block-lodging-location'>{foundLodging.location}</div>
                    <Tags lodging={foundLodging} />
                </div>
                <div className="block-right">
                    <Host name={foundLodging.host.name} pict={foundLodging.host.picture} />              
                    <Rating score={foundLodging.rating} />               
                </div>
            </section>
            <div className="collapses-container lodging">
            <Collapse collapseClass="lodging " title="Description" description={foundLodging.description} />
            <Collapse collapseClass="lodging equipments " title="Équipements"
                description= {<ul>{foundLodging.equipments.map((equipment, index) => (
                    <li key={`${equipment}-${index}`}>
                        {equipment}
                    </li>              
                ))}</ul>} />
            </div>
        </main>
    )
}

export default Lodging
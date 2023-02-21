import { useParams } from 'react-router-dom'
import React, { useState } from 'react'
import { logementsList } from '../../assets/logements'
import ArrowLeft from '../../assets/images/ArrowLeft.svg'
import ArrowRight from '../../assets/images/ArrowRight.svg'

function Carousel() {
    const { id } = useParams()
    const foundItem = logementsList.find((object) => object.id === id)
    const pictures = foundItem.pictures
    const length = pictures.length

    const [current, setCurrent] = useState(0)

    const nextPict = () => {
        setCurrent(current === pictures.length - 1 ? 0 : current + 1)
    }

    const prevPict = () => {
        setCurrent(current === 0 ? pictures.length - 1 : current - 1)
    }

    return (
        <div className="carousel-container">
            {length > 1 && (
                <button className="arrowPrev">
                    <img src={ArrowLeft} onClick={prevPict} alt="fleche" />
                </button>
            )}
            {length > 1 && (
                <button className="arrowNext">
                    <img src={ArrowRight} onClick={nextPict} alt="fleche" />
                </button>
            )}
            {pictures.map((img, index) => {
                return (
                    <div key={index}>
                        {index === current && (
                            <img
                                src={img}
                                alt="Photos du logement"
                                className="slider-image"
                            />
                        )}
                        {index === current && (
                            <strong className="carousel-counter">
                                {current + 1}/{pictures.length}
                            </strong>
                        )}
                    </div>
                )
            })}
        </div>
    )
}

export default Carousel

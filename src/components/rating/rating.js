import Star from '../../assets/images/star.svg'
import StarGrey from '../../assets/images/stargrey.svg'

function rating(props) {
    const score = props.score
    const range = [1, 2, 3, 4, 5]
    return (
        <div className="stars-area">
            {range.map((rangeElement) =>
                score >= rangeElement ? (
                    <img
                        key={rangeElement.toString()}
                        src={Star}
                        alt="star"
                    ></img>
                ) : (
                    <img
                        key={rangeElement.toString()}
                        src={StarGrey}
                        alt="star"
                    ></img>
                )
            )}
        </div>
    )
}

export default rating

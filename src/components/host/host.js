function Host(props) {
    return (
        <div className="block-right-up">
            <div className="block-right-upName">
                <p>{props.name}</p>
            </div>
            <div className="hostPict-container">
                <img
                    src={props.pict}
                    alt={props.name + ' pict'}
                    className="pict"
                ></img>
            </div>
        </div>
    )
}

export default Host

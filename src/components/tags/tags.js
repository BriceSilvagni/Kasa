function tags(props) {
    return (
        <div className="block-lodging-tags">
            {
                <ul>
                    {props.lodging.tags.map((tag, index) => (
                        <li key={`${tag}-${index}`}>{tag}</li>
                    ))}
                </ul>
            }
        </div>
    )
}

export default tags

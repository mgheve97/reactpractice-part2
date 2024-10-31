
export default function Star(props){
    const starIcon = props.isFilled ? "star-filled.png": "star-empty.png"
    
    /**
     * Challenge:
     * If the star is filled, add an aria-label of "Unmark as favorite".
     * Otherwise, use the aria-label of "Mark as favorite".
     */

    const labelMark = props.isFilled ? "Unmark as favorite": "Mark as favorite"

    return(
        <button
            onClick={props.handleClick}
            aria-label={labelMark}
            aria-pressed={props.isFilled}
            className="favorite-button"
        >
            <img 
                src={`images/${starIcon}`} 
                alt="star icon"
                className='card-favorite'
            />
        </button>
        
    )
}
export default function Count(props){

    console.log("Count Component Rendered")
    return(
        <div className="counter--count">
            <h2>{props.number}</h2>
        </div>
    )    
}
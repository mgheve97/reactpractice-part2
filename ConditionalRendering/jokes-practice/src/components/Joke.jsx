import { useState } from "react";

export default function Joke(props){
    /**
     * Challenge:
     * - Create state `isShown` (boolean, default to `false`)
     * - Add a button that toggles the value back and forth
     */

    const [isShown, setisShown] = useState(false)

    function showPunchline(){
        setisShown(prevShow => !prevShow)
    }

    return(
        <>
            {props.setup && <h3>Setup: {props.setup}</h3>}
            {isShown && <p>Punchline: {props.punch}</p>}
            <button onClick={showPunchline}>
                {isShown ? "Hide": "Show"} Punchline
            </button>
            <hr />
        </>
    );
}
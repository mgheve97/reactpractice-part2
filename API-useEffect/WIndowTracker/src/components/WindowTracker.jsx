import { useEffect, useState } from "react"

export default function WindowTracker(){
    /**
     * Challenge:
     * 1. Create state called `windowWidth`, default to 
     *    `window.innerWidth`
     * 2. When the window width changes, update the state
     * 3. Display the window width in the h1 so it updates
     *    every time it changes
     */

    const [windowWidth, setwindowWidth] = useState(window.innerWidth)
    

    useEffect(()=>{ 
        function watchWidth(){
            console.log("Showing Width...")
            setwindowWidth(window.innerWidth)
        }
        window.addEventListener("resize", watchWidth)

        return () => {
            console.log("Cleaning Up....")
            window.removeEventListener("Resize", watchWidth)
        }

    }, [])
    
    return(
        <h1>Window: width: {windowWidth}</h1>
    )
}
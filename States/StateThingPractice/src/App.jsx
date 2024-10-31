import { useState } from 'react'
import './App.css'

function App() {

  const [thingArray, setThingArray] = useState(["Thing 1", "Thing 2"])
    /**
     * Challenge: See if you can do it all again by yourself :)
     */
      
    function addItem() {
      // Build from scratch :)
      setThingArray(prevThingArray => [...prevThingArray, `Thing ${prevThingArray.length + 1}`])
  }

  const thingElement = thingArray.map(thing => <p key={thing}>{thing}</p>)


  return (
      <div>
          <button onClick={addItem}>Add Item</button>
          {thingElement}
      </div>
  )
}

export default App

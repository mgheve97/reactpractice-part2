import { useState } from 'react'
import './App.css'

function App() {

  const [isGoingOut, setisGoingOut] = useState(true)

  
  
  function handleClick(){
    setisGoingOut(prevState => !prevState)
  } 

  return (
    <div className="state">
      <h1 className="state--title">Do I feel like going out tonight?</h1>
      <button className="state--value" onClick={handleClick}>
        <h2>{isGoingOut ? "Yes": "No"}</h2>
      </button>
    </div>
  )
}

export default App

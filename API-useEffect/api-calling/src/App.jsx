import { useState } from 'react'
import './App.css'
import { useEffect } from 'react'

function App() {
  const [starWarsData, setStarWarsData] = useState({})
  const [count, setCount] = useState(1)


  
  /* Side Effect */
  useEffect(() => {
    fetch(`https://swapi.dev/api/people/${count}`)
      .then(res => res.json())
      .then(data => setStarWarsData(data))

  }, [count])
  
  return (
    <div>
      <h2>The Count is {count}</h2>
      <button onClick={() => setCount(prevCount => prevCount+1)}>Get Next Character</button>
      <pre>{JSON.stringify(starWarsData, null, 2)}</pre>
      
      
    
    </div>
  )
}

export default App

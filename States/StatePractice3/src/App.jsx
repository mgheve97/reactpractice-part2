import { useState } from 'react'
import './App.css'
import Count from './component/Count'

function App() {

  /**
   * Challenge:
   * - Create a new component named Count
   *    - It should receive a prop called `number`, whose value
   *      is the current value of our count
   *    - Have the component render the whole div.counter--count
   *      and display the incoming prop `number`
   *    - Replace the div.counter--count below with an instance of
   *      the new Count component
   */

  const [count, setCount] = useState(0)

  function addCount(){
    setCount(prevCount => prevCount + 1)
  }

  function minusCount(){
    if(count <= 0){
      setCount(prevCount => prevCount)
    }

    else{
      setCount(prevCount => prevCount - 1)
    }
  }

  console.log("App Component Rendered")

  return (
    <div className="counter">
      <button className="counter--minus" onClick={minusCount}>–</button>
      <Count number={count}/>
      <button className="counter--plus" onClick={addCount}>+</button>
    </div>
  )
}

export default App

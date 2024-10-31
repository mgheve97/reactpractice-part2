import { useState } from 'react'
import './App.css'
import WindowTracker from './components/WindowTracker'

function App() {
  const [show, setShow] = useState(true)

  function handleSubmit(){
    setShow(prevShow => !prevShow)
  }

  /**
     * Challenge:
     * 1. Create state called `show`, default to `true`
     * 2. When the button is clicked, toggle `show`
     * 3. Only display `<WindowTracker>` if `show` is `true`
     */

  return (
    <div className="container">
      <button onClick={handleSubmit}>
        Toggle WindowTracker
      </button>
      {show && <WindowTracker/>}
    </div>
  )
}

export default App

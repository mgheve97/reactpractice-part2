import { useState } from 'react'
import './App.css'
import Body from './components/Body'
import Header from './components/Header'

export default function App() {

  const [user, setUser] = useState("Gheve")

  return (
    <main>
      <Header
        name = {user}
      />
      <Body 
        name = {user}
      />
    </main>  
  )
}

import { useState } from 'react'
import './App.css'
import Joke from './components/Joke'
import jokesdata from './components/jokesdata'

function App() {

    const jokeElements = jokesdata.map(joke => {
        return <Joke setup={joke.setup} punch={joke.punchline} />
    })

  return (
    <>
      <div>
        {jokeElements}
      </div>
    </>

      /* <Joke 
          punch = "He just ransomware!"
          vote = {5}
          pun = {true}
      />

      <Joke 
          setup = "How did the hacker escape the police?"
          punch = "He just ransomware!"
          vote = {1}
          pun = {true}
      />
      <Joke 
          setup = "Why don't pirates travel on mountain roads?"
          punch = "Scurvy."
          vote = {8}
          pun = {true}
      />
      <Joke 
          setup = "What's the best thing about Switzerland?"
          punch = "I don't know, but the flag is a big plus!"
          vote = {6}
          pun = {true}
      />
      <Joke 
          setup = "I got my daughter a fridge for her birthday."
          punch = "I can't wait to see her face light up when she opens it."      
          vote = {2}
          pun = {true}
      />
      <Joke 
          setup = "Why do bees stay in the hive in the winter?"
          punch = "Swarm."      
          vote = {10}
          pun = {true}
      /> */
  )
}

export default App

import { useState } from 'react'
import './App.css'
import Star from './components/Star'

function App() {
  const [contact, setcontact] = useState({
    firstname: "Gheve",
    lastname: "Mombay",
    phone: "+63 967-816-1485",
    email: "mombaygheve97@gmail.com",
    isFavorite: false
  })

  /**
     * Challenge: Move the star image into its own component (Star)
     * - It should receive a prop called `isFilled` that it
     *   uses to determine which icon it will display
     * - Import and render that component, passing the value of
     *   `isFavorite` to the new `isFilled` prop.
     * - Don't worry about the abiliity to flip this value quite yet.
     *   Instead, you can test if it's working by manually changing
     *   `isFavorite` in state above.
     */

  /* const [isFavorite, setisFavorite] = useState(contact.isFavorite) */


  function toggleFavorite(){
    setcontact(prevContact => {
      return {
        ...prevContact,
        isFavorite: !prevContact.isFavorite
      }
    })
    console.log("Toggle Favorite Complete")
  }

  return(
    <main>
      <article className="card">
        <img src="images/user.png" alt="profile-pic" className='card-image' />
        <div className="card-info">
            <Star isFilled = {contact.isFavorite} handleClick={toggleFavorite}/>
            <h2 className="card-name">
              {contact.firstname} {contact.lastname}
            </h2>
            <p className="card-contact">{contact.phone}</p>
            <p className="card-contact">{contact.email}</p>   
        </div>
      </article>
    </main>
  )
}

export default App

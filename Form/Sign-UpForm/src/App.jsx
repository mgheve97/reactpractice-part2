import { useState } from 'react'
import './App.css'

function App() {
    /**
   * Challenge: Connect the form to local state
   * 
   * 1. Create a state object to store the 4 values we need to save.
   * 2. Create a single handleChange function that can
   *    manage the state of all the inputs and set it up
   *    correctly
   * 3. When the user clicks "Sign up", check if the 
   *    password & confirmation match each other. If
   *    so, log "Successfully signed up" to the console.
   *    If not, log "passwords to not match" to the console.
   * 4. Also when submitting the form, if the person checked
   *    the "newsletter" checkbox, log "Thanks for signing
   *    up for our newsletter!" to the console.
   */

  const [signUpData, setsignUpData] = useState(
    {
      email: "",
      password: "",
      confirmpass: "",
      newsletter: true
    }
  )

  console.log(signUpData)

  function handleChange(event){
    const {name, value, type, checked} = event.target 
    setsignUpData(prevsignUpData => ({
        ...prevsignUpData,
        [name]: type === "checkbox" ? checked : value 
    }))
  }

  function handleSubmit(event){
    event.preventDefault()
    signUpData.password === signUpData.confirmpass ? console.log("Successfully signed up") : console.log("Passwords do not match")
    if (signUpData.newsletter){
      console.log("Thanks for signing up for our Newsletter!")
    } 
  }

  return (
    <div className='main-container'>
      <div className='wallpaper'>
        <h1 className="formtitle">Notice Board</h1>
        <form className='notif-form'>
          <p>
          /**
            * Challenge: Connect the form to local state
            * 
            * 1. Create a state object to store the 4 values we need to save.
            * 2. Create a single handleChange function that can
            *    manage the state of all the inputs and set it up
            *    correctly
            * 3. When the user clicks "Sign up", check if the 
            *    password & confirmation match each other. If
            *    so, log "Successfully signed up" to the console.
            *    If not, log "passwords to not match" to the console.
            * 4. Also when submitting the form, if the person checked
            *    the "newsletter" checkbox, log "Thanks for signing
            *    up for our newsletter!" to the console.
            */

          </p>

        </form>
      </div>

      <div className='form-container'>
        <form className="signupform" onSubmit={handleSubmit}>
        <h1 className="formtitle">Sign Up!</h1>
          <input 
            type="text" 
            placeholder='Email Address'
            name='email'
            value={signUpData.email}
            onChange={handleChange}
            className='inputform'
            />

          <input 
            type="text" 
            placeholder='Password'
            name='password'
            value={setsignUpData.password}
            onChange={handleChange}
            className='inputform'
          />

          <input 
            type="text" 
            placeholder='Confirm Password'
            name='confirmpass'
            value={setsignUpData.confirmpass}
            onChange={handleChange}
            className='inputform'
          />

          <div className='newsletter-notif'>
            <input 
              type="checkbox" 
              name="newsletter" 
              id="newsletter"
              checked={signUpData.newsletter}
              onChange={handleChange} 
            />
            <label htmlFor="newsletter">I want to join the newsletter</label>  
          </div> 

          <button className='submit-btn'>Submit</button>

        </form>
      </div>
    </div>
    
  )
}

export default App

import { useState } from 'react'
import './App.css'

function App() {

  const [personalData, setpersonalData] = useState([]) 

  const [formData, setFormData] = useState(
    {
      firstName: "", 
      lastName: "", 
      email: "", 
      comment: "",
      isRobot: false,
      gender: "",
      relationship: "",
      honorifics: "",
    }
  )

  console.log(formData)

  function handleChange(event){
    const {name, value, type, checked} = event.target
    setFormData(prevFormData => {
      return {
        ...prevFormData,
        [name]: type === "checkbox" ? checked : value
      }
    })
  }

  function handleSubmit(event){
    event.preventDefault()
    setpersonalData([...personalData, formData])
    console.log(personalData)
  }

  return (
    <form onSubmit={handleSubmit}>
      {/* Dropdown List */}
      <label className='text-format'>Honorifics:
        <select 
          id="honorifics" 
          value={formData.honorifics}
          onChange={handleChange}
          name="honorifics"
        >
          <option value="">-- Choose --</option>
          <option value="Mr.">Mr.</option>
          <option value="Ms.">Ms.</option>
          <option value="Mrs.">Mrs.</option>
          <option value="Dr.">Dr.</option>
          <option value="Engr.">Engr.</option>
        </select>
      </label>

      {/* TextBox */}
      <label className='text-format'>First Name: 
        <input 
          type="text" 
          onChange={handleChange}
          name='firstName'
          value={formData.firstName}
        />
      </label>
      
      <label className='text-format'> Last Name:
        <input 
          type="text" 
          onChange={handleChange} 
          name='lastName'
          value={formData.lastName}
        />
      </label>

      <label className='text-format'>Email Address:
        <input 
          type="text" 
          placeholder='Email'
          onChange={handleChange} 
          name='email'
          value={formData.email}
        />
      </label>
      
      {/* Comment Box */}
      <label className='text-format'>Comments: 
        <textarea
          placeholder='Type your comment...'
          onChange={handleChange}
          name='comment' 
          value={formData.comment} 
        />
      </label>

      <fieldset>
        <legend>Gender</legend>
        <input 
          type="radio" 
          name="gender" 
          id="Male" 
          value="Male" 
          checked={formData.gender === "Male"}
          onChange={handleChange}
        />
        <label htmlFor="Male">Male</label>
        <br />

        <input 
          type="radio" 
          name="gender" 
          id="Female" 
          value="Female" 
          checked={formData.gender === "Female"}
          onChange={handleChange}
        />
        <label htmlFor="Female">Female</label>
        <br />
      </fieldset>

      {/* Check Box */}
      <input 
        type="checkbox" 
        name='isRobot' 
        id="isRobot" 
        checked={formData.isRobot} 
        onChange={handleChange}
      />
      {/* Label for CheckBox */}
      <label htmlFor="isRobot">Are you a Robot?</label>
      
      {/* Radio Button for Relationship */}
      <fieldset>
        <legend>Relationship Status</legend>
        <input 
          type="radio" 
          name="relationship" 
          id="Single" 
          value="Single" 
          checked={formData.relationship === "Single"}
          onChange={handleChange}
        />
        <label htmlFor="Single">Single</label>
        <br />

        <input 
          type="radio" 
          name="relationship" 
          id="Married" 
          value="Married" 
          checked={formData.relationship === "Married"}
          onChange={handleChange}
        />
        <label htmlFor="Married">Married</label>
        <br />

        <input 
          type="radio" 
          name="relationship" 
          id="Burned"
          value="Burned"  
          checked={formData.relationship === "Burned"}
          onChange={handleChange}
        />
        <label htmlFor="Burned">Burned to Death</label>
        <br />

        <input 
          type="radio" 
          name="relationship" 
          id="Non-existence" 
          value="Non-existence" 
          checked={formData.relationship === "Non-existence"}
          onChange={handleChange}
        />
        <label htmlFor="Non-existence">Who U?</label>
        <br />
      </fieldset>

      <button type="submit">Submit</button>

      {/* Information Field */}
      {personalData.length >0 && (
      <fieldset>
        <legend>Person Infomation</legend>{
          personalData.map((data, index) => (
            <div key={index}>
              <p>Name: {data.honorifics} {data.firstName} {data.lastName}</p>
              <p>Email Address:  {data.email}</p>
              <p>Gender:  {data.gender}</p>
              <p>Comments: {data.comment}</p>
              <p>Relationship Status: {data.relationship}</p>
            </div>
          ))
        }
      </fieldset>
    )}   
    </form>
  )
}

export default App

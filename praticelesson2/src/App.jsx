import './App.css'

export default function App() {
  const thingsArray = ["Thing 1", "Thing 2"]

  const newthingsarray = thingsArray.map(things => <p>{things}</p>)
    
  /**
 * Challenge: Add an event listener to the button so when
 * it is clicked, it adds another thing to our array
 * 
 * Hint: use the array length + 1 to determine the number
 * of the "Thing" being added. Also, have you event listener
 * console.log(thingsArray) after adding the new item to the
 * array
 * 
 * Spoiler: the page won't update when new things get added
 * to the array!
 */

  function handleClick(){

    const countlength = thingsArray.length+1
    const newArray = thingsArray.push('Thing' + countlength)

    console.log(thingsArray)
  }
  
  return (
      <div>
          <button onClick={handleClick}>Add Item</button>
          {newthingsarray}
      </div>
  )
}

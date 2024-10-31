# Interactive Web Apps in React

### Recap

- Static Websites
- Resusable Components

## Static Web Pages vs Dynamic Web Apps

### Static Web Pages

- Read-only, no changes to data
- Examples
  - Blogs
  - News Sites
  - Recipes
  - etcs.

### Dynamic Web Apps

- Read-write: ability to change data
- Highly interactive
- Displays your data
- Examplaes
  - Bank website
  - Airbnb
  - etc.

# What we'll learn

- Events listeners
- State
- Conditional rendering
- Forms
- Side effects

# States

### **Props**

- refers to the properties being passed into a component in order for it to work correctly, similar to how a function recieves parameters: "from above".
- A component recieving props is not allowed to modify those props.
  (I.e. they are "immutable")

### **State**

- refers to values that are managed by the component, similar to variables declared inside a function.
- Any time you have changing values that should be saved/displayed, you'll likely be using state.

# Passing data to Components

![alt text](image.png)

# Forms

# Side Effects

### What are React's primary task?

- Work with the DOM/browser to render UI to the page

- Manage state for us between render cycles (i.e. state values are "remembered" from one render to the next)

- Keep the UI updated whenever state changes occur

### Why can't React handle on its own?

- (Out)side effect!
  - localSTorage
  - API/database interaction
  - Subscriptions (e.g. web sockets)
  - Syncing 2 different internal states together
  - Basically anything that React isn't in charge of

### useEffect()

- useEffect takes a function as its parameter.
  - If that function returns something, it needs to be a cleanup function.
    - Otherwise, it should return nothing.
  - If we make it an async function, it automatically retuns a promise instead of a function or nothing.
- Therefore, if you want to use async operations inside of useEffect,you need to define the function separately inside of the callback function.

### UseEffect Quiz

1. What is a "side effect" in React? What are some examples?

- Any code that affects an outside system.
- local storage, API, websockets, two states to keep in sync

2. What is NOT a "side effect" in React? Examples?

- Anything that React is in charge of.
  - Maintaining state, keeping the UI in sync with the data,
    render DOM elements

3. When does React run your useEffect function? When does it NOT run
   the effect function?

- As soon as the component loads (first render)
- On every re-render of the component (assuming no dependencies array)
- Will NOT run the effect when the values of the dependencies in the
  array stay the same between renders

4. How would you explain what the "dependecies array" is?

- Second paramter to the useEffect function
- A way for React to know whether it should re-run the effect

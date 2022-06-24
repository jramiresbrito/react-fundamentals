// Basic Forms
// http://localhost:3000/isolated/exercise/06.js

import * as React from 'react'

function UsernameForm({ onSubmitUsername }) {
  const [name, setName] = React.useState(null)

  const inputRef = React.useRef()

  function handleChange() {
    let userName = inputRef.current.value

    setName(userName.toLowerCase())
  }

  // 🐨 add a submit event handler here (`handleSubmit`).
  function handleSubmit(event) {
    event.preventDefault()

    // solution 1
    // let inputElement = event.target.elements[0]
    // let userName = inputElement.value

    // if (userName.length < 1) return;

    // onSubmitUsername(userName)

    // inputElement.value = ''
    // inputElement.focus()

    // solution 2
    let inputElement = inputRef.current

    if (inputElement.value.length < 1) return
    onSubmitUsername(inputElement.value)

    inputElement.value = ''
    inputElement.focus()
  }
  // 💰 Make sure to accept the `event` as an argument and call
  // `event.preventDefault()` to prevent the default behavior of form submit
  // events (which refreshes the page).
  // 📜 https://developer.mozilla.org/en-US/docs/Web/API/Event/preventDefault
  //
  // 🐨 get the value from the username input (using whichever method
  // you prefer from the options mentioned in the instructions)
  // 💰 For example: event.target.elements[0].value
  // 🐨 Call `onSubmitUsername` with the value of the input

  // 🐨 add the onSubmit handler to the <form> below

  // 🐨 make sure to associate the label to the input.
  // to do so, set the value of 'htmlFor' prop of the label to the id of input
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="username">Username:</label>
        <input id="username" type="text" ref={inputRef} onChange={handleChange} value={name} />
      </div>
      <button type="submit">Submit</button>
    </form>
  )
}

function App() {
  const onSubmitUsername = username => alert(`You entered: ${username}`)
  return <UsernameForm onSubmitUsername={onSubmitUsername} />
}

export default App

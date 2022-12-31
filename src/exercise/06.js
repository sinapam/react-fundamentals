// Basic Forms
// http://localhost:3000/isolated/exercise/06.js

import * as React from 'react'

function UsernameForm({onSubmitUsername}) {
  const inputRef = React.useRef(null)
  const [error, setError] = React.useState(null)

  function handleSubmit(event) {
    event.preventDefault()
    const username = inputRef.current.value
    onSubmitUsername(username)
  }

  function handleChange(event) {
    const value = event.target.value
    const isValid = value === value.toLowerCase()
    setError(isValid ? null : 'Username must be lower case')
  }

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Username:</label>
        <input ref={inputRef} onChange={handleChange} type="text" />
      </div>
      <div role="alert">{error}</div>
      <button disabled={error} type="submit">
        Submit
      </button>
    </form>
  )
}

function App() {
  const onSubmitUsername = username => alert(`You entered: ${username}`)
  return <UsernameForm onSubmitUsername={onSubmitUsername} />
}

export default App

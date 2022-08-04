import {useState} from 'react'
import axios from 'axios'

const App = () => {
  const [input, setInput] = useState({
    first_name: '',
    last_name: '',
    email: ''
  })

  const handleInputChange = (evt) => {
    setInput(prev => ({...prev, [evt.target.name]: evt.target.value}))
  }

  const handleSubmit = async (evt) => {
    evt.preventDefault()
    try {
      let result = await axios('http://localhost:8080/users', {
        method: 'POST',
        data: JSON.stringify(input),
        headers: {
          'Content-Type': 'application/json'
        }
      })
      console.log(result)
    } catch(err) {
      console.log(err)
    }
  }

  return (
    <div>
      <h1>Register A New User</h1>
      <form onSubmit={handleSubmit}>
        <label>First name:</label>
        <input name="first_name" value={input.first_name} onChange={handleInputChange} />
        <label>Last name:</label>
        <input name="last_name" value={input.last_name} onChange={handleInputChange} />
        <label>Email:</label>
        <input name="email" value={input.email} onChange={handleInputChange} />
        <input type="submit" />
      </form>
    </div>
  )
}

export default App
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Login = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const navigate = useNavigate()

  const handleLogin = (e) => {
    e.preventDefault()

    if (email === 'example@gmail.com' && password === 'password') {
      localStorage.setItem('isLoggedIn', 'true')
      navigate('/Header')
    } else {
      alert('Invalid credentials')
    }
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <form className="bg-white p-8 rounded shadow-md" onSubmit={handleLogin}>
        <input
        className="mb-4 p-2 border border-gray-300 rounded w-full"
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
        className="mb-4 p-2 border border-gray-300 rounded w-full"
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button className="bg-blue-500 text-white p-2 rounded hover:bg-blue-600" type="submit">
          Login
        </button>
      </form>
    </div>
  )
}

export default Login

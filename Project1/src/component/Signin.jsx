import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Signin = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const navigate = useNavigate();
  
  const handleLogin = () => {
    if (email === '' || password === '') {
      alert('Please enter both email and password');
      return;
    }
    // Add your login logic here
    navigate('/Header'); // Navigate to Header component after successful login
  };

  return (
    <div>
        <input type="text" placeholder="Username" />
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
        <button onClick={handleLogin}>Login</button>
    </div>
  )
}

export default Signin

import { useState } from 'react'
import './App.css'
import Header from './component/Header'
import Login from './component/Login'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Signin from './component/Signin'
import Dashboard from './component/Dashboard'
import PasswordGen from './component/PasswordGen'

function App() {
  const [count, setCount] = useState(0)

  return (
   <BrowserRouter>
      <Routes>
        {/* <Route path='/' element={<Login/>}/>
        <Route path='/Signin' element={<Signin/>}/>
        <Route path='/Header' element={<Header/>}/> */}
        {/* <Route path='/' element={<Dashboard/>}/> */}
        <Route path='/PasswordGen' element={<PasswordGen/>}/>
      </Routes>
   </BrowserRouter>
  )
}

export default App

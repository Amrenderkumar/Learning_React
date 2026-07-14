import React from 'react'
import Dashboard from './Dashboard'

const Header = () => {
  return (
    <div>
      <nav className='flex p-4  items-center justify-between bg-gray-100 '>
        <div className='ml-3'>
          <img className='h-10 w-10' src="bahu.png" alt="Logo" />
        </div>
        <ul className='align-middle space-x-4 ml-4 gap-5 hidden md:flex'>
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
        <button className='hidden md:block bg-blue-500 text-white px-4 py-2 rounded-2xl'>Login</button>
        <button className="md:hidden text-2xl">
          ☰
        </button>
      </nav>
      <Dashboard />
    </div>
  )
}

export default Header

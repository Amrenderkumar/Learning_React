import React from 'react'
import Profile from '/brcm.png'

const Card = () => {
  return (
    <div className='card'>
      <img src={Profile} alt="Profile" />
      <h2>Amrender</h2>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus, dolore.</p>
    </div>
  )
}

export default Card

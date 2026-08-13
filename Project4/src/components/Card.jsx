import React from 'react'

const Card = () => {
  return (
    <div>
      <div className='bg-red-400 text-black p-4'>
        <h1>card title</h1>
        <div className='p-1 size-2 bg-amber-200 absolute'>
          <div className='text-2xl font-black'>card content</div>
        </div>
        <div>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facilis eum possimus laboriosam ratione eos quidem, repellat unde atque. Laboriosam excepturi debitis odio enim quaerat voluptates deleniti, eaque nemo sunt voluptatibus!</p>
        </div>
      </div>
    </div>
  )
}

export default Card

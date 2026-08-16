import React from 'react'

const Child = () => {
 
    const Data = {
        name: "John",
        age: 30,
        address: {
            street: "123 Main St",
            city: "New York",
            state: "NY"
        }
    }

  return (
    <div>
      <h2>{Data.name}</h2>
      <p>Age: {Data.age}</p>
      <p>Address: {Data.address.street}, {Data.address.city}, {Data.address.state}</p>
    </div>
  )
}

export default Child

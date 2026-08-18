import React from 'react'

const Child = () => {
 
    const Data = [
        {
            name: "John",
            age: 30,
            address: {
                street: "123 Main St",
                city: "New York",
                state: "NY"
            }
        },
        {
          name: "nana",
          age: 45,
          address: {
              street: "123 Main st",
              city: "India",
              state: "Haryana"
          }
        },
        {
          name: "Ravi",
          age: 20,
          address: {
              street: "123 Main st",
              city: "India",
              state: "Haryana"
          }
        }
    ]

  return (
    <div>
      {Data.filter((item) => item.age > 25).map((item, index) => (
        <div key={index}>
          <h2>{item.name}</h2>
            <p>Age: {item.age}</p>
            <p>Address: {item.address.street}, {item.address.city}, {item.address.state}</p>
        </div>
      ))}
    </div>
  )
}

export default Child

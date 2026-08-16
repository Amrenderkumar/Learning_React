import React from 'react'
import Child from './Child'

const Head = () => {

    const NewNob = [
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
            name: "Jane",
            age: 25,
            address: {
                street: "456 Oak Ave",
                city: "Los Angeles",
                state: "CA"
            }
        }
    ]

    return (
        <div>
            <Child />
            <h1>NewNob Data</h1>
            <div>
                {NewNob.map((item, index) => (
                <div key={index}>
                    <h2>{item.name}</h2>
                    <p>Age: {item.age}</p>
                    <p>Address: {item.address.street}, {item.address.city}, {item.address.state}</p>
                </div>
            ))}
            </div>
        </div>
    )
}

export default Head

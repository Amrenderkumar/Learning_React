import React from 'react'

const List = () => {

    const Fruits = [
        {
            name: "Apple",
            Calries: 34
        },
        {
            name: "Bannana",
            Calries: 98
        },
        {
            name: "Papaya",
            Calries: 23
        },
        {
            name: "Coconent",
            Calries: 87
        },
        {
            name: "Grapes",
            Calries: 56
        }
    ]

    const bestfruits = Fruits.filter((fruit) => fruit.Calries > 50);

    const latestfruit = bestfruits.map((bestfruit, idx) => (
        <li key={idx}>{bestfruit.name} &nbsp;<b>{bestfruit.Calries}</b></li>
        
    ))
  return (
    <p>{latestfruit}</p>
  )
}

export default List

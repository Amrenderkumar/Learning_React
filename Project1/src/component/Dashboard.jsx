import React from 'react'
import Card from './Card'

const Dashboard = () => {
  return (
    <div className='flex  items-center bg-amber-950'>
       <h1 className='flex justify-center items-center'>This is the Dashboard</h1>
       <div>
       <Card name="John Doe" title="Modern Design Solutions" btn="Learn More" views="234" image="https://picsum.photos/400/300?random=90" />
       <Card name="Jane Smith" title="Innovative UI Components" btn="Get Started" views="156" image="https://picsum.photos/400/300?random=91" />

       </div>
    </div>
  )
}

export default Dashboard

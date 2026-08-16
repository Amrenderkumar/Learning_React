import React from 'react'

const Head = () => {
    return (
        <div>
            <div className='flex flex-col items-center justify-center space-y-4'>
                <div >
                    <h1 className='bg-gradient-to-r from-blue-300 to-purple-900 p-4 text-white'>Welcome to My React App</h1>
                </div>
                <div>
                    <p className='bg-gradient-to-r from-yellow-300 to-purple-900 p-4 text-white'>This is the header section of my React app.</p>
                </div>
                <div>
                    <button className=' bg-gradient-to-r from-green-300 to-blue-500 text-white p-2 rounded ' >Click Me</button>
                </div>
            </div>
            <div>
                <img src="https://wallpapers.com/images/hd/ikea-in-shopping-mall-6kggi26himgb9g07.jpg" alt="Placeholder" className=' rounded-lg shadow-lg border-4 border-white ' />
            </div>
             <div>
                <img src="https://wallpapers.com/images/hd/ikea-in-shopping-mall-6kggi26himgb9g07.jpg" alt="Placeholder" className='blur-3xl rounded-lg shadow-lg border-4 border-white ' />
            </div>
        </div>
    )
}

export default Head

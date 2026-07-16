import React, { useState } from 'react'

const Weather = () => {
  const [inputValue, setInputValue] = useState('')
  const [city, setCity] = useState('')
  const [country, setCountry] = useState('')
  const [temperature, setTemperature] = useState(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  const getWeather = async () => {
    const parts = inputValue.split(',')
    const cityName = parts[0]?.trim()
    const countryName = parts[1]?.trim() || ''

    if (!cityName) {
      setError('Please enter a city name')
      setTemperature(null)
      return
    }

    setLoading(true)
    setError('')
    setCity(cityName)
    setCountry(countryName)

    try {
      const geoResponse = await fetch(
        `https://geocoding-api.open-meteo.com/v1/search?name=${encodeURIComponent(cityName)}&country=${encodeURIComponent(countryName)}&count=1&language=en&format=json`
      )
      const geoData = await geoResponse.json()
      const location = geoData.results?.[0]

      if (!location) {
        throw new Error('City not found')
      }

      const weatherResponse = await fetch(
        `https://api.open-meteo.com/v1/forecast?latitude=${location.latitude}&longitude=${location.longitude}&current=temperature_2m&timezone=auto`
      )
      const weatherData = await weatherResponse.json()

      setTemperature(weatherData.current?.temperature_2m ?? null)
    } catch (err) {
      setError('Unable to fetch weather for this city')
      setTemperature(null)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className='bg-black min-h-screen w-screen flex flex-col justify-center items-center px-4'>
      <h1 className='text-white text-4xl mb-6'>Weather App</h1>
      <div className='w-full max-w-md bg-gray-800 p-6 rounded-lg shadow-md'>
        <div className='bg-white max-w-md mx-auto rounded-2xl overflow-hidden'>
          <input
            type='text'
            value={inputValue}
            placeholder='City, Country'
            onChange={(e) => setInputValue(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && getWeather()}
            className='outline-none w-full px-3 py-2'
          />
        </div>

        <button
          onClick={getWeather}
          className='mt-4 bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600'
        >
          {loading ? 'Loading...' : 'Get Weather'}
        </button>

        <div className='flex justify-center mt-4'>
          <p className='text-white text-lg'>City: {city || '---'}</p>
        </div>
        <div className='flex justify-center mt-4'>
          <p className='text-white text-lg'>Country: {country || '---'}</p>
        </div>
        <div className='flex justify-center mt-4'>
          <p className='text-white text-lg'>
            Temperature: {loading ? 'Loading...' : temperature !== null ? `${temperature} °C` : '---'}
          </p>
        </div>
        {error && (
          <div className='flex justify-center mt-4'>
            <p className='text-red-400 text-sm'>{error}</p>
          </div>
        )}
      </div>
    </div>
  )
}

export default Weather

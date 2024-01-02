/* eslint-disable react/no-unknown-property */

import { Canvas } from '@react-three/fiber'
import { Suspense, useEffect, useState } from 'react'

import MainScene from './MainScene'
import './index.css'

const apiKey = import.meta.env.VITE_APIKEY
let location = "Paris"

function App() {
  
  const [weatherData, setWeatherData] = useState(null)
  const [getWeather, setGetWeather] = useState(false)
  

    const getTemperature = async () => {
      try{
        const response = await fetch(`https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${location}&aqi=no`)
        const data = await response.json()
        return setWeatherData(data)
      } catch (error) {
        console.log(error)
      }
    }
    
    useEffect(() => {
      getTemperature()
    }, [getWeather])
    
  function runWeather(loc){
    setGetWeather(!getWeather)
    location = loc
  }

  return (
    <>
    <Suspense fallback={<h1>Loading.............</h1>}>
      <Canvas performance={{ min: 0.5 }} shadows frameloop="demand">
        <color attach="background" args={['pink']}/>
        { weatherData && <MainScene changeLocation={runWeather} weatherData={weatherData} /> }
      </Canvas>
    </Suspense>
    </>
  )
}

export default App

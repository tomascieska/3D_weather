/* eslint-disable react/no-unknown-property */

import { Canvas } from '@react-three/fiber'
import { Suspense, useEffect, useState } from 'react'

import MainScene from './MainScene'
import './index.css'

const apiKey = import.meta.env.VITE_APIKEY
let location = "Paris"

function App() {
  
  const [weatherData, setWeatherData] = useState()
  const [getWeather, setGetWeather] = useState(false)
 
useEffect(() => {
  async function getTemperature () {
    const response = await fetch(`http://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${location}&aqi=no`)
    const data = await response.json()
    console.log(data)
    return setWeatherData(data)
  }
  getTemperature()
  
},[getWeather])  


// getWeather
function runWeather (loc){
  setGetWeather(!getWeather)
  location = loc
}
// camera={{fov: 20, near: 0.1, far: 2000, position: [0, 0, 1000]}}
// camera={{fov: 20, near: 0.1, far: 2000, position: [0, 10, 150]}}
  return (
    <>
    <Canvas shadows >
      <color attach="background" args={['#3a86ff']}/>
      <Suspense fallback={null}>
        <MainScene changeLocation={runWeather} weatherData={weatherData} /> 
      </Suspense>
    </Canvas>
    </>
  )
}

export default App

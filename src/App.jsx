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
    
    // useEffect(() => {
    //   fetch(`https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${location}&aqi=no`)
    //     .then(res => res.json())
    //     .then(
    //       (result) => {
    //         setWeatherData(result);
    //       }
    //     )
    // }, [getWeather])

    
  function runWeather(loc){
    setGetWeather(!getWeather)
    location = loc
  }

  return (
    <>
    <Canvas shadows frameloop="demand">
      <color attach="background" args={['pink']}/>
      <Suspense fallback={null}>
       { weatherData && <MainScene changeLocation={runWeather} weatherData={weatherData} /> }
      </Suspense>
    </Canvas>
    </>
  )
}

export default App

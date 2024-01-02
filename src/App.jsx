/* eslint-disable react/no-unknown-property */

import { Canvas } from '@react-three/fiber'
import { Suspense, useEffect, useState } from 'react'
import { FaRegArrowAltCircleDown } from "react-icons/fa";


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
    <nav>
      <h3>3d weather forecast</h3>
    </nav>
      <div className='header'>
        <div className='left-hero'>
          <h1>Get Weather Forecast</h1>
          <h2>in 3D dimentional experience. </h2> 
              <FaRegArrowAltCircleDown size={50}/>
        </div>
        <div className='right-hero'>
          <img src="/img/hero.jpg" alt="3d london weather now" />
        </div>
      </div>
      <Canvas performance={{ min: 0.5 }} shadows frameloop="demand">
        <color attach="background" args={['lightblue']}/>
      <Suspense>
        { weatherData && <MainScene changeLocation={runWeather} weatherData={weatherData} /> }
      </Suspense>
      </Canvas>
    </>
  )
}

export default App

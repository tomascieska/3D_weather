/* eslint-disable react/no-unknown-property */

import { Canvas } from '@react-three/fiber'
import { Suspense, useEffect, useState } from 'react'

import MainScene from './MainScene'
import './index.css'
import { MeshStandardMaterial } from 'three'
import { BigBen } from './components/locations/BigBen'
import Lights from './Lights'
import { OrbitControls } from '@react-three/drei'

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
      <div className='header'>
        <h1>loading</h1>
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

/* eslint-disable react/no-unknown-property */

import { Canvas } from '@react-three/fiber'
import { useEffect, useState } from 'react'

import MainScene from './MainScene'
import './index.css'

const apiKey = import.meta.env.VITE_APIKEY
let location = "London"

function App() {
  
  const [weatherData, setWeatherData] = useState()
  const [getWeather, setGetWeather] = useState(false)
 
useEffect(() => {
  async function getTemperature () {
    const response = await fetch(`http://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${location}&aqi=no`)
    const data = await response.json()
    console.log(data)
    console.log(data.current.feelslike_c)
    return setWeatherData(data)
  }
  getTemperature()
  
},[getWeather])  

function runWeather (loc){
  setGetWeather(!getWeather)
  location = loc
}



// camera={{fov: 20, near: 0.1, far: 2000, position: [0, 0, 1000]}}
  return (
    <>
    <Canvas shadows camera={{fov: 20, near: 0.1, far: 2000, position: [0, 0, 200]}}>
        <ambientLight intensity={1}/>
        <pointLight castShadow intensity={20} position={[0, 2, 3]} color={'red'}/>
        <pointLight castShadow intensity={20} position={[0, 3, 2]} color={'red'}/>
      <color attach="background" args={['#171720']}/>
      <MainScene changeLocation={runWeather} weatherData={weatherData} /> 
    </Canvas>
    </>
  )
}

export default App

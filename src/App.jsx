/* eslint-disable react/no-unknown-property */

import { Canvas } from '@react-three/fiber'
import { useEffect, useState } from 'react'

import MainScene from './MainScene'
import './index.css'

const apiKey = import.meta.env.VITE_APIKEY

function App() {
  
  const [weatherData, setWeatherData] = useState()
 
useEffect(() => {
  async function getTemperature () {
    const response = await fetch(`http://api.weatherapi.com/v1/current.json?key=${apiKey}&q=Klaipeda&aqi=no`)
    const data = await response.json()
    console.log(data.current.feelslike_c)
    return setWeatherData(data)
  }
  getTemperature()
  
},[])  

// camera={{fov: 20, near: 0.1, far: 2000, position: [0, 0, 1000]}}
  return (
    <>
    <Canvas shadows >
        <ambientLight intensity={1}/>
        <pointLight castShadow intensity={20} position={[0, 2, 3]} color={'red'}/>
        <pointLight castShadow intensity={20} position={[0, 3, 2]} color={'red'}/>
      <color attach="background" args={['#171720']}/>
      <MainScene weatherData={weatherData} />
    </Canvas>
    </>
  )
}

export default App

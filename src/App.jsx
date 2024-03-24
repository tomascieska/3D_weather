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

    function scroll(){
      document.documentElement.scrollTop = document.documentElement.scrollHeight;
      console.log("scroll")
    }

  return (
    <>
    <nav>
      <h3>3D Weather Forecasta</h3>
      <p> <strong> V0.1 beta </strong> - <i>build by Tomas Cieska</i></p>
      <div className='nav-right'>
       <p><a href="#">About the project</a></p> 
       <p><a href="#">Contact</a></p> 
      </div>
    </nav>
      <div className='header'>
        <div className='left-hero'>
          <h1 className='h1'>Get Weather Forecast`s</h1>
          <h2>3D dimentional experience.</h2> 
        </div>
        <div className='right-hero'>
          <img src="/img/hero.jpg" alt="3d london weather now" />
        </div>
        <div className={"icon"}>
          <FaRegArrowAltCircleDown onClick={scroll} size={50}/>
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

/* eslint-disable react/no-unknown-property */

import { Canvas } from '@react-three/fiber'
import { Suspense, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { FaRegArrowAltCircleDown } from "react-icons/fa";

import MainScene from './MainScene'
import './index.css'


let location = "Paris"

function App() {
  
  const [weatherData, setWeatherData] = useState(null)
  const [getWeather, setGetWeather] = useState(false)
  

    const getTemperature = async () => {
      try{
        const response = await fetch(`/.netlify/functions/weather?location=${encodeURIComponent(location)}`)
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
      <h3>3D Weather Forecast</h3>
      <p>  <i> Build  and designed by Tomas Cieska (V0.1 beta) </i></p>
      <div className='nav-right'>
       <p><a href="#">About the project</a></p>
       <p><a href="#">Contact</a></p>
       <p><Link to="/v2">Try v2</Link></p>
      </div>
    </nav>
      <div className='header'>
        <div className='left-hero'>
          <h1 className='h1'>Get Weather Forecast`s</h1>
          <h2>3D experience.</h2> 
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

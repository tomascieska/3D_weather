/* eslint-disable react/no-unknown-property */
import { useEffect, useState } from "react"
import Floor from "./Floor"
import Time from "./Time"
import CloudSky from "./CloudSky"
import World from "./World"


const MainScene = ({weatherData}) => {

    const [celcius, setCelcius] = useState()
    const [location, setLocation] = useState()
    
    useEffect(() => {
        setCelcius(weatherData.current.feelslike_c)
    }, [weatherData])

    useEffect(() => {
        setLocation(weatherData.location.name)
    })
    
    console.log(celcius)

  return (
    <group>
        <ambientLight intensity={1}/>
        <pointLight castShadow intensity={20} position={[0, 2, 3]} color={'red'}/>
        <pointLight castShadow intensity={20} position={[0, 3, 2]} color={'red'}/>
        <spotLight castShadow intensity={20} position={[0, 5, 10]} color={'blue'}/>
        <directionalLight castShadow intensity={0.2} position={[4, 2, 3]} color={'blue'}/>
        
        <Time size={2} color={'purple'} location={location}/>
        <Time size={3} color={'black'}/>
        <CloudSky celcius={celcius} />
        <World />
        <Floor />
    </group>
    )
}

export default MainScene
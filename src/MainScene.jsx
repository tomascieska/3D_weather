/* eslint-disable react/no-unknown-property */
// import { PerspectiveCamera, OrbitControls } from '@react-three/drei'
import { useEffect, useState, useRef } from "react"
import Time from "./Time"
import CloudSky from "./CloudSky"
import World from "./World"

const MainScene = ({weatherData, changeLocation}) => {

    const [celcius, setCelcius] = useState()
    const [location, setLocation] = useState()

console.log(weatherData)

    useEffect(() => {
        setCelcius(weatherData.current.feelslike_c)
    }, [weatherData])

    useEffect(() => {
        setLocation(weatherData.location.name)
    },[weatherData])
    


  return (
    <group>
            {/* <PerspectiveCamera makeDefault position={[0, 30, 100]}/> */}
            {/* <OrbitControls ref={orbitControlsRef}/> */}
            {/* <OrbitControls /> */}
        <ambientLight intensity={2}/>
        <pointLight castShadow intensity={20} position={[0, 5, 3]} color={'red'}/>
        <pointLight castShadow intensity={20} position={[0, 5, 2]} color={'red'}/>
        <spotLight castShadow intensity={20} position={[0, 5, 10]} color={'blue'}/>
        <directionalLight castShadow intensity={0.2} position={[4, 2, 3]} color={'blue'}/>

        <Time size={2} color={'purple'} location={location}/>

        
       
        <World changeLocation={changeLocation} data={weatherData}/>
    </group>
    )
}

export default MainScene
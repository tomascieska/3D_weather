/* eslint-disable react/no-unknown-property */
import { useEffect, useRef, useState } from "react"
import Floor from "./Floor"
import Time from "./Time"
import { Float, Stars, Sky } from "@react-three/drei"
import { useFrame } from "@react-three/fiber"
import CloudSky from "./CloudSky"


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
    const ref = useRef()

    useFrame(() => {
        ref.current.rotation.y += 0.005
        // ref.current.rotation.y += 0.001
        // ref.current.rotation.z += 0.001
    })

  return (
    <group ref={ref} >
        <ambientLight intensity={1}/>
        <pointLight castShadow intensity={20} position={[0, 2, 3]} color={'red'}/>
        <pointLight castShadow intensity={20} position={[0, 3, 2]} color={'red'}/>
        <spotLight castShadow intensity={20} position={[0, 5, 10]} color={'blue'}/>
        <directionalLight castShadow intensity={0.2} position={[4, 2, 3]} color={'blue'}/>
        <Time size={2} color={'purple'} location={location}/>
        {/* <Time size={3} color={'black'}/> */}
        <Float>
        <Stars />
        <Sky distance={450000} sunPosition={[0, 1, 0]} inclination={0} azimuth={0.25} />
        </Float>
        <CloudSky celcius={celcius} />
        <Floor />
    </group>
    )
}

export default MainScene
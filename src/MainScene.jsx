/* eslint-disable react/prop-types */
/* eslint-disable react/no-unknown-property */
// import { PerspectiveCamera, OrbitControls } from '@react-three/drei'
import { useEffect, useState, useRef } from "react"
import { useFrame } from "@react-three/fiber"
import { CameraControls} from "@react-three/drei"

import Screen from "./Screen"
import Lights from "./Lights"
import Ground from "./Ground"
import CloudSky from "./CloudSky"

import { EifelTower } from "./EifelTower"
import { London } from "./London"

const MainScene = ({weatherData, changeLocation}) => {

    const [celcius, setCelcius] = useState()
    const [location, setLocation] = useState()

    const meshFitCameraRef = useRef()
    const controls = useRef()
    const spinRef = useRef()
    const parisRef = useRef()

    useEffect(() => {
        setCelcius(weatherData.current.feelslike_c)
        setLocation(weatherData.location.name)
        
    }, [parisRef])

//world spining
    useFrame(() => {
        spinRef.current.rotation.y -= 0.005
        // parisRef.current.rotation.y += 0.1
        console.log(parisRef)
    })

// CAMERA CONTOLS ########
const intro = async () => {
  controls.current.dolly(-100)
  controls.current.smoothTime = 1
  fitCamera()
}

useEffect(() => {
  intro()
},[])

useEffect(() => {
  fitCamera();
  window.addEventListener("resize", fitCamera);
  return () => window.removeEventListener("resize", fitCamera);
}, []);

const fitCamera = async () => {
  controls.current.fitToBox(meshFitCameraRef.current, true)
//   controls.current.rotate(degToRad(5), 10, false) 
//   controls.current.setLookAt(10, 5, 30,  0, 20, 30, true)
} 
// ########
  return (
    <group>
        <CameraControls ref={controls}/>

        <mesh ref={meshFitCameraRef} 
            position={[18, 15, 95]}
            >
            <boxGeometry args={[22, 8, 10]}/>
            <meshBasicMaterial transparent opacity={0.8} visible={false} color={"orange"} />
        </mesh>

        <CloudSky celcius={celcius}/>
        <Lights />

        <group ref={spinRef}>
            <group ref={parisRef}>
                <EifelTower position={[0, 0, 80]} />
            </group>
            <London scale= {0.3} position={[80, 8, 0]}/>
            <Ground changeLocation={changeLocation}/>
        </group>
        <Screen size={2} color={'purple'} changeLocation={changeLocation} data={weatherData} celcius={celcius} location={location}/>       
    </group>
    )
}

export default MainScene
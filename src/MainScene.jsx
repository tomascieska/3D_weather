/* eslint-disable react/prop-types */
/* eslint-disable react/no-unknown-property */
// import { PerspectiveCamera, OrbitControls } from '@react-three/drei'
import { useEffect, useState, useRef } from "react"
import { useFrame } from "@react-three/fiber"
import { CameraControls} from "@react-three/drei"
import { degToRad } from "three/src/math/MathUtils"

import Time from "./Screen"
import World from "./World"
import Lights from "./Lights"
import Ground from "./Ground"
import CloudSky from "./CloudSky"
import { EifelTower } from "./EifelTower"

const MainScene = ({weatherData, changeLocation}) => {

    const [celcius, setCelcius] = useState()
    const [location, setLocation] = useState()

    const meshFitCameraRef = useRef()
    const controls = useRef()
    const spinRef = useRef()


    useEffect(() => {
        setCelcius(weatherData.current.feelslike_c)
        setLocation(weatherData.location.name)
        
    }, [weatherData])


//world spining
    useFrame(() => {
        spinRef.current.rotation.y += 0.001
    })


// CAMERA CONTOLS ########
const intro = async () => {
  controls.current.dolly(-100)
  controls.current.smoothTime = 1
  fitCamera()
}

  console.log(  controls.current)

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
        <CameraControls  ref={controls}/>

        <mesh ref={meshFitCameraRef} 
            position={[18, 15, 15]}
            // rotation={[-10, 0, 0]}
            >
            <boxGeometry args={[22, 8, 10]}/>
            <meshBasicMaterial transparent opacity={0.8} visible={false} color={"orange"} />
        </mesh>


        <CloudSky celcius={celcius}/>
        <Lights />
        <group ref={spinRef} >
            <EifelTower/>
            <Ground />
        </group>
        <Time size={2} color={'purple'} data={weatherData} celcius={celcius} location={location}/>       
        <World changeLocation={changeLocation} data={weatherData}/>
    </group>
    )
}

export default MainScene
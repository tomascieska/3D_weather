/* eslint-disable react/prop-types */
/* eslint-disable react/no-unknown-property */
// import { PerspectiveCamera, OrbitControls } from '@react-three/drei'
import { useEffect, useState, useRef } from "react"
import { useFrame } from "@react-three/fiber"
import { CameraControls} from "@react-three/drei"
import { degToRad, radToDeg } from "three/src/math/MathUtils"

import Screen from "./Screen"
import Lights from "./Lights"
import Ground from "./Ground"
import CloudSky from "./CloudSky"
import Animo from "./Animo"

import { EifelTower } from "./EifelTower"
// import { Landmark } from "./Landmark"

const MainScene = ({weatherData, changeLocation}) => {

    const [celcius, setCelcius] = useState()
    const [location, setLocation] = useState()
    const [start, setStart] = useState()

    const meshFitCameraRef = useRef()
    const controls = useRef()
    const spinRef = useRef()

    useEffect(() => {
        setCelcius(weatherData.current.feelslike_c)
        setLocation(weatherData.location.name)
    },[])

function spinRight() {
  spinRef.current.rotation.y += degToRad(-90)
  checkLocation()
}

function spinLeft() {
  spinRef.current.rotation.y -= degToRad(-90)
  checkLocation()
}

async function checkLocation(){
  console.log(radToDeg(spinRef.current.rotation.y))
  
  if(spinRef.current.rotation.y === degToRad(-360)){
    spinRef.current.rotation.y = 0
  }
  if(spinRef.current.rotation.y === degToRad(360)){
    spinRef.current.rotation.y = 0
  }
  if(spinRef.current.rotation.y === degToRad(0)){
    return changeLocation("Paris")
    }

  if(spinRef.current.rotation.y === degToRad(-90) ||
     spinRef.current.rotation.y === degToRad(90)){
     return changeLocation("London")
    }

  if(spinRef.current.rotation.y === degToRad(-180) ||
     spinRef.current.rotation.y ===degToRad(180)){
     return changeLocation("Tokyo")
    }

    if(spinRef.current.rotation.y === degToRad(-270) ||
       spinRef.current.rotation.y === degToRad(270)){
      return changeLocation("New York")
    } 
}

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
{/* button */}

        <mesh position={[30, 15, 90]} onClick={() => spinRight()} >
          <boxGeometry args={[5, 3, -0.5]}/>
          <meshPhongMaterial color={"blue"}/>
        </mesh>

        <mesh position={[30, 10, 90]} onClick={() => spinLeft()} >
          <boxGeometry args={[5, 3, -0.5]}/>
          <meshPhongMaterial color={"red"}/>
        </mesh>

        <group ref={spinRef}>
            {/* <Landmark position={[0, 0, 0]}/> */}
            <EifelTower position={[0, 0, 80]} />
            {/* <London scale= {0.3} position={[80, 8, 0]}/> */}
            <Animo />
            <Ground changeLocation={changeLocation}/>
        </group>
        {/* <Animo/> */}
        <Screen size={2} color={'purple'} changeLocation={changeLocation} data={weatherData} celcius={celcius} location={location}/>       
    </group>
    )
}

export default MainScene
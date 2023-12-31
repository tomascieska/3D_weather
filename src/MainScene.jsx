/* eslint-disable react/prop-types */
/* eslint-disable react/no-unknown-property */
// import { PerspectiveCamera, OrbitControls } from '@react-three/drei'
import { useEffect, useState, useRef } from "react"
import { CameraControls, Sky} from "@react-three/drei"
import { useSpring, animated, config } from '@react-spring/three'
import { DirectionArrow } from './DirectionArrow'
import { degToRad, radToDeg } from "three/src/math/MathUtils"

import Screen from "./Screen"
import Lights from "./Lights"
import Ground from "./Ground"
import CloudSky from "./CloudSky"
import Locations from "./Locations"
import { useFrame } from "@react-three/fiber"


const MainScene = ({weatherData, changeLocation}) => {

    const [celcius, setCelcius] = useState()
    const [location, setLocation] = useState()
    const [rightBtn, setRightBtn] = useState(false)
    const [leftBtn, setLeftBtn] = useState(false)

    const meshFitCameraRef = useRef()
    const controls = useRef()
    const spinRef = useRef()
   
    useEffect(() => {
      setCelcius(weatherData.current.feelslike_c)
      setLocation(weatherData.location.name)
  },[])

//ROTATE WORLD

    function moveRight() {

      setRightBtn(true)
      setLeftBtn(false)
      spinRef.current.rotation.y += degToRad(24)
      checkLocation()
      console.log("move right position" + radToDeg(spinRef.current.rotation.y))
    }
    
    function moveLeft() {
      setRightBtn(false)
      setLeftBtn(true)
      spinRef.current.rotation.y -= degToRad(24)
      checkLocation()
      console.log("move right left" + Math.round(radToDeg(spinRef.current.rotation.y))  +"  ------  "+ -24)
    }
 
    // useFrame(() => {
    //   controls.current.position.x += 200 * Math.cos( (Math.PI * 2) / 14)
    //   controls.current.position.z += 200 * Math.sin( (Math.PI * 2) / 14)
    //   fitCamera()
    // })

// CHECK LOCATION
async function checkLocation(){
  let currentRotationY = Math.round(radToDeg(spinRef.current.rotation.y))

  if(currentRotationY <= -360){
     currentRotationY = 0
  }
  if(currentRotationY >= 360){
     currentRotationY = 0
  }

  if(currentRotationY === 0){

    // meshFitCameraRef.current.position.y = 21
    // meshFitCameraRef.current.position.x = 10
    // meshFitCameraRef.current.position.z = 210
    fitCamera()
    return changeLocation("Paris")
    }

  if(currentRotationY === -24){
    meshFitCameraRef.current.position.x = 0
    meshFitCameraRef.current.position.y = -5
    meshFitCameraRef.current.position.z = -15
    controls.current.rotate(0.2, 0, 0) 
     fitCamera()
     return changeLocation("Salisbury")
    }

  if(currentRotationY === -48){
     return changeLocation("London")
    }

    if(currentRotationY === -72){
      return changeLocation("Giza")
    } 

    if(currentRotationY === -96){
      return changeLocation("Mexico City")
    }
    if(currentRotationY === -120){
      return changeLocation("Rio de Janeiro")
    } 

    if(currentRotationY === -144){
      return changeLocation("New York")
    } 

    if(currentRotationY === -168){
      return changeLocation("Washington")
    } 

    if(currentRotationY === -192){
      return changeLocation("Toronto")
    } 

    if(currentRotationY === -216){
      return changeLocation("Sydney")
    }
    
    if(currentRotationY === -240){
      return changeLocation("Tokyo")
    } 

    if(currentRotationY === -264){
      return changeLocation("Agra")
    }
    
    if(currentRotationY === -288){
      return changeLocation("Dubai")
    }

    if(currentRotationY === -312){
      return changeLocation("Pisa")
    }

    if(currentRotationY === -336){
      return changeLocation("Rome")
    }    

}

//ANIMATIONS
    const {sizeRight, sizeLeft} = useSpring({
      sizeRight: rightBtn ? 0.9 : 1.2,
      sizeLeft: leftBtn ? 0.9 : 1.2,
      config: config.wobbly,
    })

// CAMERA CONTOLS ########
const intro = async () => {
  controls.current.dolly(40)
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
  controls.current.rotate(0.2, 0, 0) 
//   controls.current.setLookAt(10, 5, 30,  0, 20, 30, true)
} 
// ########

  return (
    <group>
        <CameraControls ref={controls}/>
{/* camera view */}
    <group position={[85, 15, 220]}>

        <mesh ref={meshFitCameraRef}>
            <boxGeometry args={[30, 15, 1]}/>
            <meshBasicMaterial transparent opacity={0.5} visible={false} color={"orange"} />
        </mesh>

        {/* BUTTONS */}
        <group position={[12, 0, -30]} rotation={[0, 0, 0]}>
          <Screen size={2} color={'purple'} changeLocation={changeLocation} data={weatherData} celcius={celcius} location={location}/>

          <group scale={2} position={[-5, -6, 1]}>
            <animated.group scale={sizeLeft}>
              <DirectionArrow rotation={[-Math.PI/2, 0, 0]} position-x={3} onClick={() => moveRight()} />
            </animated.group>
            <animated.group scale={sizeRight}>
              <DirectionArrow rotation={[Math.PI/2, 0, -Math.PI]} onClick={() => moveLeft()} />
            </animated.group>
          </group>    
        </group>
    </group>

        <Sky />
        <CloudSky celcius={celcius}/>
        <Lights />

        <group position={[0, 0, 0]} ref={spinRef}>
          <Locations />
          <Ground changeLocation={changeLocation}/>
        </group>
    </group>
    )
}

export default MainScene
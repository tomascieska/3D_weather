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
function resetRotationY(){
    let currentRotationY = Math.round(radToDeg(spinRef.current.rotation.y))
        if(currentRotationY === -360){
          spinRef.current.rotation.y = 0
          console.log(currentRotationY)
          console.log("yes")
        }
        if(currentRotationY === 360){
          spinRef.current.rotation.y = 0
        }
}

    function moveRight() {
      resetRotationY()
      setRightBtn(true)
      setLeftBtn(false)
      spinRef.current.rotation.y += degToRad(24)
      checkLocation()
      console.log("move right position" + Math.round(radToDeg(spinRef.current.rotation.y)))
    }
    
    function moveLeft() {
      resetRotationY()
      setRightBtn(false)
      setLeftBtn(true)
      spinRef.current.rotation.y -= degToRad(24)
      checkLocation()
      console.log("move right left" + Math.round(radToDeg(spinRef.current.rotation.y)))
    }
 
    // useFrame(() => {
    //   controls.current.position.x += 200 * Math.cos( (Math.PI * 2) / 14)
    //   controls.current.position.z += 200 * Math.sin( (Math.PI * 2) / 14)
    //   fitCamera()
    // })

// CHECK LOCATION
async function checkLocation(){
  let currentRotationY = Math.round(radToDeg(spinRef.current.rotation.y))

  if(currentRotationY === -360){
    currentRotationY = 0
    console.log(currentRotationY)
    console.log("yes")
  }
  if(currentRotationY >= 360){
     currentRotationY = 0
  }
  if(currentRotationY === 0){
    meshFitCameraRef.current.position.x = 0
    meshFitCameraRef.current.position.y = 0
    meshFitCameraRef.current.position.z = 8
    fitCamera()
    return changeLocation("Paris")
    }

  if(currentRotationY === -24 ||
    currentRotationY === 336){
    meshFitCameraRef.current.position.x = 0
    meshFitCameraRef.current.position.y = -5
    meshFitCameraRef.current.position.z = -15
     fitCamera()
     return changeLocation("Salisbury")
    }

  if(currentRotationY === -48 ||
      currentRotationY === 312){
    meshFitCameraRef.current.position.x = 10
    meshFitCameraRef.current.position.y = -5
    meshFitCameraRef.current.position.z = -5
    fitCamera()
     return changeLocation("London")
    }

    if(currentRotationY === -72 ||
        currentRotationY === 288){
      meshFitCameraRef.current.position.x = 1
      meshFitCameraRef.current.position.y = -1
      meshFitCameraRef.current.position.z = -15
      fitCamera()
      return changeLocation("Giza")
    } 

    if(currentRotationY === -96 ||
        currentRotationY === 264){
      meshFitCameraRef.current.position.x = 10
      meshFitCameraRef.current.position.y = 2
      meshFitCameraRef.current.position.z = 0
      fitCamera()            
      return changeLocation("Mexico City")
    }
    if(currentRotationY === -120 ||
        currentRotationY === 240){
      meshFitCameraRef.current.position.x = 8
      meshFitCameraRef.current.position.y = 10
      meshFitCameraRef.current.position.z = -10
      fitCamera()
      return changeLocation("Rio de Janeiro")
    } 

    if(currentRotationY === -144 ||
        currentRotationY === 216){
      meshFitCameraRef.current.position.x = 10
      meshFitCameraRef.current.position.y = 1
      meshFitCameraRef.current.position.z = -10
      fitCamera()
      return changeLocation("New York")
    } 

    if(currentRotationY === -168 ||
        currentRotationY === 192){
      meshFitCameraRef.current.position.x = 2
      meshFitCameraRef.current.position.y = -4
      meshFitCameraRef.current.position.z = -10
      fitCamera()
      return changeLocation("Washington")
    } 

    if(currentRotationY === -192 ||
        currentRotationY === 168){
      meshFitCameraRef.current.position.x = 10
      meshFitCameraRef.current.position.y = 2
      meshFitCameraRef.current.position.z = -10
      fitCamera()
      return changeLocation("Toronto")
    } 

    if(currentRotationY === -216 ||
        currentRotationY === 144){
      meshFitCameraRef.current.position.x = 5
      meshFitCameraRef.current.position.y = -3
      meshFitCameraRef.current.position.z = -15
      fitCamera()
      return changeLocation("Sydney")
    }
    
    if(currentRotationY === -240 ||
        currentRotationY === 120){
      meshFitCameraRef.current.position.x = 5
      meshFitCameraRef.current.position.y = 3
      meshFitCameraRef.current.position.z = -10
      fitCamera()        
      return changeLocation("Tokyo")
    } 

    if(currentRotationY === -264 ||
        currentRotationY === 96){
      meshFitCameraRef.current.position.x = 5
      meshFitCameraRef.current.position.y = -3
      meshFitCameraRef.current.position.z = -10
      fitCamera() 
      return changeLocation("Agra")
    }
    
    if(currentRotationY === -288 ||
        currentRotationY === 72){
      meshFitCameraRef.current.position.x = 2
      meshFitCameraRef.current.position.y = 9
      meshFitCameraRef.current.position.z = -9
      fitCamera() 
      return changeLocation("Dubai")
    }

    if(currentRotationY === -312 ||
        currentRotationY === 48){
      meshFitCameraRef.current.position.x = 10
      meshFitCameraRef.current.position.y = 0
      meshFitCameraRef.current.position.z = -5
      fitCamera()         
      return changeLocation("Pisa")
    }

    if(currentRotationY === 24 ||
      currentRotationY === -336){
      meshFitCameraRef.current.position.x = 0
      meshFitCameraRef.current.position.y = 5
      meshFitCameraRef.current.position.z = -10
      fitCamera()      
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
            <meshBasicMaterial transparent opacity={0.2} visible={false} color={"orange"} />
        </mesh>

        {/* BUTTONS */}
        <group position={[12, 0, -30]} rotation={[0, 0, 0]}>
          <Screen size={2} color={'purple'} changeLocation={changeLocation} data={weatherData} celcius={celcius} location={location}/>

          <group scale={2} position={[-5, -6, 1]}>
            <animated.group scale={sizeLeft}>
              <DirectionArrow rotation={[-Math.PI/2, 0, 0]} position-x={3} onClick={() => moveLeft()} />
            </animated.group>
            <animated.group scale={sizeRight}>
              <DirectionArrow rotation={[Math.PI/2, 0, -Math.PI]} onClick={() => moveRight()} />
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
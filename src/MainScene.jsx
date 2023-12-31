/* eslint-disable react/prop-types */
/* eslint-disable react/no-unknown-property */
// import { PerspectiveCamera, OrbitControls } from '@react-three/drei'
import { useEffect, useState, useRef } from "react"
import { CameraControls, Sky} from "@react-three/drei"
import { useSpring, animated, config } from '@react-spring/three'
import { DirectionArrow } from './DirectionArrow'
import { degToRad, radToDeg } from "three/src/math/MathUtils"
import { useFrame } from "@react-three/fiber"

import Screen from "./Screen"
import Lights from "./Lights"
import Ground from "./Ground"
import CloudSky from "./CloudSky"
import Locations from "./Locations"


const MainScene = ({weatherData, changeLocation}) => {

    const [celcius, setCelcius] = useState()
    const [location, setLocation] = useState()
    const [rightBtn, setRightBtn] = useState(false)
    const [leftBtn, setLeftBtn] = useState(false)
    const [currentRotation, setCurrentRotation] = useState()

    const meshFitCameraRef = useRef()
    const controls = useRef()
    const spinRef = useRef()

    // useFrame(() => {
    //   spinRef.current.rotation.y -= 0.005
      
    // })
    
    useEffect(() => {
      setCelcius(weatherData.current.feelslike_c)
      setLocation(weatherData.location.name)
  },[])
    
  // LOCATION CHECKING
async function checkLocation(){
  
  if(spinRef.current.rotation.y <= degToRad(-360)){
    spinRef.current.rotation.y = 0
  }
  if(spinRef.current.rotation.y >= degToRad(360)){
    spinRef.current.rotation.y = 0
  }
  if(spinRef.current.rotation.y === 0){

    // meshFitCameraRef.current.position.y = 21
    // meshFitCameraRef.current.position.x = 10
    // meshFitCameraRef.current.position.z = 210
    fitCamera()
    return changeLocation("Paris")
    }

  if(spinRef.current.rotation.y ===  Math.floor(-Math.PI / 7.5) )
    {
    meshFitCameraRef.current.position.x = 0
    meshFitCameraRef.current.position.y = -5
    meshFitCameraRef.current.position.z = -15
    controls.current.rotate(0.2, 0, 0) 
     fitCamera()
     return changeLocation("Salisbury")
    }

  if(spinRef.current.rotation.y === degToRad(-48) ||
     spinRef.current.rotation.y === degToRad(48)
  ){
     return changeLocation("London")
    }

    if(spinRef.current.rotation.y === Math.PI / -1.875
    ){
      return changeLocation("Egipt")
    } 
}

  useEffect(() => {
    setCurrentRotation(spinRef.current.rotation.y)
  },[currentRotation]) 

    const {sizeRight, sizeLeft} = useSpring({
      sizeRight: rightBtn ? 0.9 : 1.2,
      sizeLeft: leftBtn ? 0.9 : 1.2,
      config: config.wobbly,
    })

    function moveRight() {
      setRightBtn(true)
      setLeftBtn(false)
      spinRef.current.rotation.y -=  Math.PI / 7.5
      checkLocation()
      console.log("move right position" + radToDeg(spinRef.current.rotation.y))
      console.log( Math.floor(-Math.PI / 7.5))
    }
    
    function moveLeft() {
      setRightBtn(false)
      setLeftBtn(true)
      spinRef.current.rotation.y += Math.PI / 7.5
      checkLocation()
      console.log("move right left" + radToDeg(spinRef.current.rotation.y))
    }

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
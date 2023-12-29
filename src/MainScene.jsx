/* eslint-disable react/prop-types */
/* eslint-disable react/no-unknown-property */
// import { PerspectiveCamera, OrbitControls } from '@react-three/drei'
import { useEffect, useState, useRef } from "react"
import { CameraControls} from "@react-three/drei"
import { useSpring, animated, config } from '@react-spring/three'
import { DirectionArrow } from './DirectionArrow'
import { degToRad } from "three/src/math/MathUtils"

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
    //   spinRef.current.rotation.y += 0.002
      
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
  if(spinRef.current.rotation.y === degToRad(0)){

    meshFitCameraRef.current.position.y = 21
    meshFitCameraRef.current.position.x = 10
    meshFitCameraRef.current.position.z = 110
    fitCamera()
    return changeLocation("Paris")
    }

  if(spinRef.current.rotation.y === degToRad(90) ||
     spinRef.current.rotation.y === degToRad(-270)
  ){
    meshFitCameraRef.current.position.y = 14
    meshFitCameraRef.current.position.x = 6
    meshFitCameraRef.current.position.z = 100
    fitCamera()
     return changeLocation("London")
    }

  if(spinRef.current.rotation.y ===degToRad(180) || 
     spinRef.current.rotation.y ===degToRad(-180)
  ){
     return changeLocation("Tokyo")
    }

    if(spinRef.current.rotation.y === degToRad(270) ||
       spinRef.current.rotation.y === degToRad(-270)
    ){
      return changeLocation("New York")
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
        spinRef.current.rotation.y += (Math.PI /4)
      checkLocation()
      console.log(spinRef.current.rotation.y)
    }
    
    function moveLeft() {
      setRightBtn(false)
      setLeftBtn(true)
        spinRef.current.rotation.y -= (Math.PI /4)
      checkLocation()
    }

// CAMERA CONTOLS ########
const intro = async () => {
  controls.current.dolly(50)
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

        <mesh ref={meshFitCameraRef} position={[18, 15, 95]}>
            <boxGeometry args={[22, 8, 10]}/>
            <meshBasicMaterial transparent opacity={0.8} visible={false} color={"orange"} />
        </mesh>

        <CloudSky celcius={celcius}/>
        <Lights />

        <group position={[0, 0, 0]} ref={spinRef}>
          <Locations />
          <Ground changeLocation={changeLocation}/>
        </group>
        <Screen size={2} color={'purple'} changeLocation={changeLocation} data={weatherData} celcius={celcius} location={location}/>       
        {/* BUTTONS */}
        <group position={[30, 8, 90]} rotation={[0, -0.3, 0]}>
            
          <animated.group scale={sizeLeft}>
              <DirectionArrow rotation={[-Math.PI/2, 0, 0]} position-x={3} onClick={() => moveRight()} />
          </animated.group>

          <animated.group scale={sizeRight}>
              <DirectionArrow rotation={[Math.PI/2, 0, -Math.PI]} onClick={() => moveLeft()} />
            </animated.group>

        </group>
    </group>
    )
}

export default MainScene
/* eslint-disable react/prop-types */
/* eslint-disable react/no-unknown-property */
// import { PerspectiveCamera, OrbitControls } from '@react-three/drei'
import { useEffect, useState, useRef } from "react"
import { CameraControls} from "@react-three/drei"
import { useSpring, animated, config } from '@react-spring/three'
import { DirectionArrow } from './DirectionArrow'
import { degToRad, radToDeg } from "three/src/math/MathUtils"

import Screen from "./Screen"
import Lights from "./Lights"
import Ground from "./Ground"
import CloudSky from "./CloudSky"
import { EifelTower } from "./components/locations/EifelTower"
import { ArcDeTriomphe } from "./components/locations/ArcDeTriomphe"
import { BigBen } from "./components/locations/BigBen"
import { BurjKhalifa } from "./components/locations/BurjKhalifa"
import { WhiteHouse } from "./components/locations/WhiteHouse"
import { Bisa } from "./components/locations/Bisa"
import { BurjAl_Arab } from "./components/locations/BurjAl_Arab"
import { CNTower } from "./components/locations/CNTower"
import { Colosseum } from "./components/locations/Colosseum"
import { Cristo_Reder } from "./components/locations/CristoReder"
import { EmpireState } from "./components/locations/EmpireState"
import { FlatironBuilding } from "./components/locations/FlatironBuilding"
import { LondonTower } from "./components/locations/LondonTower"
import { MesoamericanPyramid } from "./components/locations/MesoamericanPyramid"
import { NotreDameDeParis } from "./components/locations/NotreDameDeParis"
import { OneWorldTradeCenter } from "./components/locations/OneWorldTradeCenter"
import { Pyramid } from "./components/locations/Pyramid"
import { Stonehenge } from "./components/locations/Stonehenge"
import { SydneyOperaHouse } from "./components/locations/SydneyOperaHouse"
import { TajMahal } from "./components/locations/TajMahal"
import { TheStatueOfLiberty } from "./components/locations/TheStatueOfLiberty"
import { TokyoTower } from "./components/locations/TokyoTower"
import { WashingtonMonument } from "./components/locations/WashingtonMonument"

const MainScene = ({weatherData, changeLocation}) => {

    const [celcius, setCelcius] = useState()
    const [location, setLocation] = useState()
    const [rightBtn, setRightBtn] = useState(false)
    const [leftBtn, setLeftBtn] = useState(false)
    const [currentRotation, setCurrentRotation] = useState()

    const meshFitCameraRef = useRef()
    const controls = useRef()
    const spinRef = useRef()

    useEffect(() => {
      setCelcius(weatherData.current.feelslike_c)
      setLocation(weatherData.location.name)
  },[])
    
  // LOCATION CHECKING
async function checkLocation(){
  console.log(radToDeg(spinRef.current.rotation.y))
  
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

console.log(radToDeg(Math.PI * 2 / 14))

  return (
    <group>
        <CameraControls ref={controls}/>

        <mesh ref={meshFitCameraRef} position={[18, 15, 95]}>
            <boxGeometry args={[22, 8, 10]}/>
            <meshBasicMaterial transparent opacity={0.8} visible={false} color={"orange"} />
        </mesh>

        <CloudSky celcius={celcius}/>
        <Lights />
       
        <group position={[100, 0, 20]} ref={spinRef}>

          <WashingtonMonument position={[50, 0.8, 60]}/>
          <TokyoTower position={[-60, 0.8, 60]}/>
          <TheStatueOfLiberty position={[-45, 0.8, 60]}/>
          <TajMahal position={[-25, 0.8, 60]}/>
          <SydneyOperaHouse position={[30, 0.8, 60]}/>
          <Stonehenge position={[0, 0.8, 60]}/>
          <Pyramid position={[60, 0.8, 40]}/>
          <OneWorldTradeCenter position={[40, 0.8, 40]}/>
          <NotreDameDeParis position={[20, 0.8, 40]}/>
          <MesoamericanPyramid position={[-70, 0.8, 40]}/>
          <LondonTower position={[-50, 0.8, 40]}/>
          <FlatironBuilding position={[-35, 0.8, 40]}/>
          <EmpireState position={[-20, 0.8, 40]}/>
          <Cristo_Reder position={[0, 0.8, 40]} />
          <Colosseum position={[70, 0.8, 0]} />
          <CNTower position={[50, 0.8, 0]}/>
          <BurjAl_Arab position={[30, 0.8, 0]}/>
          <Bisa position={[0, 0.8, 0]}/>
          <BurjKhalifa position={[-80, 0.8, 0]}/>
          <WhiteHouse position={[-110, 0.8, 0]}/>
          <ArcDeTriomphe position={[-40, 0.8, 0]}/>
          <EifelTower position={[-20, 0.5, 0]}/>
          <BigBen position={[-60, 0.5, 0]} visible={true} />
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
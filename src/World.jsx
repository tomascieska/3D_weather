/* eslint-disable react/no-unknown-property */
/* eslint-disable react/prop-types */

import { CameraControls, Text} from "@react-three/drei"
import { useFrame } from "@react-three/fiber"
import { useEffect, useRef, useState } from "react"
import { degToRad, radToDeg } from "three/src/math/MathUtils"
import { useGLTF } from '@react-three/drei'
import { StatueOfLiberty } from "./statue_of_liberty"


const World = ({data, changeLocation, ...props}) => {

const [worldRotation, setWorldRotation] = useState()

const meshFitCameraRef = useRef()
const controls = useRef()
const worldSpinRef = useRef()

useEffect(() => {
  if(worldRotation > 0.01 < 1.5){
    changeLocation("Kaunas")
  } else if (worldRotation > 1.58){
    changeLocation("Palanga")
  } else if (worldRotation > 3.15){
    changeLocation("Vilnius")
  } else {
    console.log("ok")
  }
},[worldRotation % 2 === 0])


useFrame(() => {
  worldSpinRef.current.rotation.z += degToRad(0.4)
  worldRotation > 6.28 ? worldSpinRef.current.rotation.z = degToRad(0) : null
  setWorldRotation((worldSpinRef.current.rotation.z).toFixed(2)) 
})


// CAMERA CONTOLS ########
const intro = async () => {
  controls.current.dolly(-22)
  controls.current.smoothTime = 1
  // controls.current.dolly(20, true)
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
  controls.current.rotate(degToRad(-5), 0, false) 
  // controls.current.setLookAt(0,25,0, 0,10,0, true)
} 
//########

  return (  
<>
<CameraControls  ref={controls}/>
  <mesh onClick={() => changeLocation("Kybartai")} position={[-10, 20, -50]}>
    <boxGeometry args={[5, 5, -0.5]}/>
    <meshPhongMaterial color={"blue"}/>
  </mesh>

  <Text position={[-20, 0, 50]} fontSize={8}>
    {data.location.name}  {worldRotation}
  </Text>

  <mesh ref={meshFitCameraRef} 
    position={[0,25,0]}>
    <boxGeometry args={[20,15,1]}/>
    <meshBasicMaterial transparent opacity={0.5} color={"orange"} />
  </mesh>


  <group position={[0, 0, 0]} ref={worldSpinRef} scale={2}>
    {/* KLAIPED yellow */}
    <mesh position={[11, 0, 0]} receiveShadow>
      <boxGeometry args={[2, 1, 1]} />
      <meshPhongMaterial color={"yellow"}/>
    </mesh>
    <StatueOfLiberty scale={0.001} position={[0,10,0]}/>
    {/* LONDON - green */}
    {/* <mesh position={[0, 11 ,0]} receiveShadow>
      <boxGeometry args={[1, 2, 1]} />
      <meshPhongMaterial color={"green"}/>
    </mesh> */}

    {/* SIDNEY - blue*/}
    <mesh position={[-11, 0, 0]} receiveShadow>
      <boxGeometry args={[2, 1, 1]} />
      <meshPhongMaterial color={"blue"}/>
    </mesh>

    {/* NEW YOURK - pink */}
     <mesh position={[0, -11, 0]} receiveShadow>
      <boxGeometry args={[1, 2, 1]} />
      <meshPhongMaterial color={"pink"}/>
    </mesh>

{/* SPHERE */}
    <mesh receiveShadow>
        <sphereGeometry args={[10, 50, 50]}/>
        <meshPhongMaterial wireframe color={"red"}/>
    </mesh>

  </group>
</>      
)
}



export default World
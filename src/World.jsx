import { OrbitControls, Text } from "@react-three/drei"
import { useFrame } from "@react-three/fiber"
import { useEffect, useRef, useState } from "react"
import { degToRad, radToDeg } from "three/src/math/MathUtils"



const World = ({data, changeLocation}) => {


const [worldRotation, setWorldRotation] = useState()
const [cityPos, setCityPos] = useState()

const worldSpinRef = useRef()


useEffect(() => {
  // changeLocation("Vilnius")

  if(worldRotation > 0 < 1.57){
    changeLocation("Kaunas")
  } else if (worldRotation > 1 < 3.14){
    changeLocation("Palanga")
  } else if (worldRotation > 3){
    changeLocation("Vilnius")
  } else {
    console.log("ok")
  }
},[worldRotation % 2 === 1])

useFrame(() => {
  
  worldSpinRef.current.rotation.z += degToRad(0.4)
  worldRotation > 6.28 ? worldSpinRef.current.rotation.z = degToRad(0) : null
  setWorldRotation((worldSpinRef.current.rotation.z).toFixed(2))
 
  // location.country === "Lithuania" ? worldSpinRef.current.rotation.z += degToRad(0.4) : worldSpinRef.current.rotation.z -= degToRad(0.4) 
})

// changeLocation("Kybartai")



  return (  
<>
<mesh onClick={() => changeLocation("Kybartai")} position={[-10, 20, 0]}>
        <boxGeometry args={[5, 5, 0.5]}/>
        <meshPhongMaterial color={"blue"}/>
      </mesh>
<Text position={[-20, 0, 50]} fontSize={8}>
{data.location.name}  {worldRotation}
</Text>
  <group position={[0, 0, 0]} ref={worldSpinRef}>

    {/* KLAIPED yellow */}
    <mesh position={[11, 0, 0]} receiveShadow>
      <boxGeometry args={[2, 1, 1]} />
      <meshPhongMaterial color={"yellow"}/>
    </mesh>

    {/* LONDON - green */}
    <mesh position={[0, 11 ,0]} receiveShadow>
      <boxGeometry args={[1, 2, 1]} />
      <meshPhongMaterial color={"green"}/>
    </mesh>

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
  <OrbitControls />
</>      
  )
}

export default World
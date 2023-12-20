import { OrbitControls, Text } from "@react-three/drei"
import { useFrame } from "@react-three/fiber"
import { useRef, useState } from "react"
import { degToRad, radToDeg } from "three/src/math/MathUtils"



const World = () => {


const [worldRotation, setWorldRotation] = useState()
const worldSpinRef = useRef()

useFrame(() => {
  worldSpinRef.current.rotation.z += degToRad(1)
  setWorldRotation((worldSpinRef.current.rotation.z).toFixed(2))
})

  return (  
<>
<Text position={[-20, 0, 50]} fontSize={10}>
{worldRotation}
</Text>
  <group position={[0, 0, 0]} ref={worldSpinRef}>
    {/* KLAIPED */}
    <mesh position={[11, 0, 0]} receiveShadow>
      <boxGeometry args={[2, 1, 1]} />
      <meshPhongMaterial color={"yellow"}/>
    </mesh>

    {/* LONDON */}
    <mesh position={[0, 11 ,0]} receiveShadow>
      <boxGeometry args={[1, 2, 1]} />
      <meshPhongMaterial color={"green"}/>
    </mesh>

    {/* SIDNEY */}
    <mesh position={[11, 0, 0]} receiveShadow>
      <boxGeometry args={[2, 1, 1]} />
      <meshPhongMaterial color={"yellow"}/>
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
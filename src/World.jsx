import { PerspectiveCamera, OrbitControls } from '@react-three/drei'

const World = () => {
  return (
    
<>
    <PerspectiveCamera makeDefault position={[0, 30, 50]}/>
    <OrbitControls />
    <mesh
        // rotation={[-Math.PI /1.8, 0, 0]}
        position={[0, 0, 0]}
        receiveShadow
        >

        <boxGeometry args={[20, 10, 50]}/>
        <meshPhongMaterial color={"red"}/>
      </mesh>
</>      
  )
}

export default World
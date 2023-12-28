/* eslint-disable react/no-unknown-property */
/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.16 public/models/BigBenGLTF.gltf -o src/BigBenGLTF.jsx -k -K -r -T -R 512 --draco -s public 
Files: public/models/BigBenGLTF.gltf [3.77MB] > C:\Users\Tomas\Desktop\3Dweather\src\BigBenGLTF-transformed.glb [594.5KB] (84%)
*/

import { useGLTF } from '@react-three/drei'

export function BigBen(props) {
  const { nodes, materials } = useGLTF('/models/BigBen.glb')
  return (
    <group {...props} dispose={null}>
      <mesh>
          <boxGeometry args={[15, 0.2, 16,]}/>
          <meshPhongMaterial color={"#793f24"}/>
        </mesh>
      <group name="Scene">
        <mesh name="Big_Ben_big_ben_0" castShadow receiveShadow geometry={nodes.Big_Ben_big_ben_0.geometry} material={materials.big_ben} position={[1.966, 30, 1.966]} rotation={[-Math.PI / 2, 0, 0]} scale={0.15} />
      </group>
    </group>
  )
}

useGLTF.preload('/models/BigBen.glb')

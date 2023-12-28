/* eslint-disable react/no-unknown-property */
/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.16 public/models/Arc_de_Triomphe.gltf -o src/components/locations/ArcDeTriomphe.jsx -k -K -r -T -R 512 --draco -s public 
Files: public/models/Arc_de_Triomphe.gltf [1.59MB] > C:\Users\Tomas\Desktop\3Dweather\src\components\locations\Arc_de_Triomphe-transformed.glb [96.72KB] (94%)
*/

import { useGLTF } from '@react-three/drei'

export function ArcDeTriomphe(props) {
  const { nodes, materials } = useGLTF('/models/Arc_de_Triomphe.glb')
  return (
    <group {...props} dispose={null}>
      <group name="Scene">
        <mesh name="Arc_de_Triomphe_arc_de_triomphe_0" castShadow receiveShadow geometry={nodes.Arc_de_Triomphe_arc_de_triomphe_0.geometry} material={materials.arc_de_triomphe} position={[0, 8.5, 1.218]} rotation={[-Math.PI / 2, 0, 0]} scale={0.02} />
      </group>
    </group>
  )
}

useGLTF.preload('/models/Arc_de_Triomphe.glb')

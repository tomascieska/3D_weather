/* eslint-disable react/no-unknown-property */
/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.16 public/models/Cristo_Reder.gltf -o src/components/locations/CristoReder.jsx -k -K -r -T -R 512 --draco -s public 
Files: public/models/Cristo_Reder.gltf [1.08MB] > C:\Users\Tomas\Desktop\3Dweather\src\components\locations\Cristo_Reder-transformed.glb [117.42KB] (89%)
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export function Cristo_Reder(props) {
  const { nodes, materials } = useGLTF('/models/Cristo_Reder.glb')
  return (
    <group scale={1.2}{...props} rotation={[0, - Math.PI, 0]} {...props} dispose={null}>
      <group name="Scene">
        <mesh name="Cristo_Redentor_Cristo_Redentor_0" castShadow receiveShadow geometry={nodes.Cristo_Redentor_Cristo_Redentor_0.geometry} material={materials.Cristo_Redentor} rotation={[-Math.PI / 2, 0, -Math.PI / 2]} scale={0.02} />
      </group>
    </group>
  )
}

useGLTF.preload('/models/Cristo_Reder.glb')

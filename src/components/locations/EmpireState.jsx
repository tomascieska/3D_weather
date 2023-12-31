/* eslint-disable react/no-unknown-property */
/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.16 public/models/Empire_State.gltf -o src/components/locations/EmpireState.jsx -k -K -r -T -R 512 --draco -s public 
Files: public/models/Empire_State.gltf [2.25MB] > C:\Users\Tomas\Desktop\3Dweather\src\components\locations\Empire_State-transformed.glb [353.23KB] (84%)
*/

import { useGLTF } from '@react-three/drei'

export function EmpireState(props) {
  const { nodes, materials } = useGLTF('/models/Empire_State.glb')
  return (
    <group scale={1.2} rotation={[0, - Math.PI, 0]} {...props} dispose={null}>
      <group name="Scene">
        <mesh name="Empire_State_Building_empire_state_building_0" castShadow receiveShadow geometry={nodes.Empire_State_Building_empire_state_building_0.geometry} material={materials.empire_state_building} scale={0.03} />
        <mesh name="Empire_State_Building_glass_2_0" castShadow receiveShadow geometry={nodes.Empire_State_Building_glass_2_0.geometry} material={materials.glass_2} scale={0.01} />
      </group>
    </group>
  )
}

useGLTF.preload('/models/Empire_State.glb')

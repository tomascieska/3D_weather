/* eslint-disable react/no-unknown-property */
/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.16 public/models/BurjAl_Arab.gltf -o src/components/locations/BurjAl_Arab.jsx -k -K -r -T -R 512 --draco -s public 
Files: public/models/BurjAl_Arab.gltf [3.66MB] > C:\Users\Tomas\Desktop\3Dweather\src\components\locations\BurjAl_Arab-transformed.glb [272.89KB] (93%)
*/

import { useGLTF } from '@react-three/drei'

export function BurjAl_Arab(props) {
  const { nodes, materials } = useGLTF('/models/BurjAl_Arab.glb')
  return (
    <group scale={0.5} rotation={[0, - Math.PI /4, 0]} {...props} dispose={null}>
      <group name="Scene">
          <mesh name="Arc06__5_Burj_Al_Arab_Hotel_0" castShadow receiveShadow geometry={nodes.Arc06__5_Burj_Al_Arab_Hotel_0.geometry} material={materials['5_Burj_Al_Arab_Hotel']} position={[0.032, 21.107, 0.12]} rotation={[Math.PI, -0.064, Math.PI]} scale={[-0.04, 0.04, 0.04]} />
          <mesh name="Line01__7_Burj_Al_Arab_Hotel_0" castShadow receiveShadow geometry={nodes.Line01__7_Burj_Al_Arab_Hotel_0.geometry} material={materials['7_Burj_Al_Arab_Hotel']} position={[-0.53, 15.4, 0.8]} rotation={[-Math.PI / 2, 0, 3.056]} scale={0.04} />

        <mesh name="Object05__6_Burj_Al_Arab_Hotel_0" castShadow receiveShadow geometry={nodes.Object05__6_Burj_Al_Arab_Hotel_0.geometry} material={materials['6_Burj_Al_Arab_Hotel']} position={[0.038, 0, 0.308]} rotation={[-Math.PI / 2, 0, -0.173]} scale={0.04} />
        <mesh name="Shape57__4_Burj_Al_Arab_Hotel_0" castShadow receiveShadow geometry={nodes.Shape57__4_Burj_Al_Arab_Hotel_0.geometry} material={materials['4_Burj_Al_Arab_Hotel']} position={[0.038, 0, 0.308]} rotation={[-Math.PI / 2, 0, -0.173]} scale={0.04} />
        <mesh name="Shape58__2_Burj_Al_Arab_Hotel_0" castShadow receiveShadow geometry={nodes.Shape58__2_Burj_Al_Arab_Hotel_0.geometry} material={materials['2_Burj_Al_Arab_Hotel']} position={[0.038, 0, 0.308]} rotation={[-Math.PI / 2, 0, -0.173]} scale={0.04} />
        <mesh name="Shape59__3_Burj_Al_Arab_Hotel_0" castShadow receiveShadow geometry={nodes.Shape59__3_Burj_Al_Arab_Hotel_0.geometry} material={materials['3_Burj_Al_Arab_Hotel']} position={[0.038, 0, 0.308]} rotation={[-Math.PI / 2, 0, -0.173]} scale={0.04} />
        <mesh name="Star01__1_Burj_Al_Arab_Hotel_0" castShadow receiveShadow geometry={nodes.Star01__1_Burj_Al_Arab_Hotel_0.geometry} material={materials['1_Burj_Al_Arab_Hotel']} position={[0.038, 0, 0.308]} rotation={[-Math.PI / 2, 0, -0.173]} scale={0.04} />
        <instancedMesh args={[nodes.Line15__5_Burj_Al_Arab_Hotel_0.geometry, materials['5_Burj_Al_Arab_Hotel'], 6]} name="Line15__5_Burj_Al_Arab_Hotel_0" castShadow receiveShadow instanceMatrix={nodes.Line15__5_Burj_Al_Arab_Hotel_0.instanceMatrix} />
      </group>
    </group>
  )
}

useGLTF.preload('/models/BurjAl_Arab.glb')

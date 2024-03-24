/* eslint-disable react/no-unknown-property */
/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.16 public/models/low_poly_mobile_phone.glb -o src/components/locations/MobilePhone.jsx -k -K -r -T -R 512 --draco -s public 
Files: public/models/low_poly_mobile_phone.glb [60.86KB] > C:\Users\Tomas\Desktop\3Dweather\src\components\locations\low_poly_mobile_phone-transformed.glb [6.56KB] (89%)
*/

import { useGLTF } from '@react-three/drei'

export function MobilePhone(props) {
  const { nodes, materials } = useGLTF('/models/low_poly_mobile_phone.glb')
  return (
    <group scale={30}{...props} dispose={null}>
      <group name="Scene">
        <mesh name="Phone_Camera_PhoneCase_Mat_0" castShadow receiveShadow geometry={nodes.Phone_Camera_PhoneCase_Mat_0.geometry} material={materials.PhoneCase_Mat} position={[0.084, 0.515, -0.026]}  rotation={[1.572, 0, 0]} scale={[0.009, 0.01, 0.01]} />
        <mesh name="Phone_Case_PhoneFace_Mat_0" castShadow receiveShadow geometry={nodes.Phone_Case_PhoneFace_Mat_0.geometry} material-color="white" position={[0, 0.292, 0.003]} rotation={[1.572, 0, 0]} scale={0.01} />
        <mesh name="Power_Button_PhoneButton_Mat_0" castShadow receiveShadow geometry={nodes.Power_Button_PhoneButton_Mat_0.geometry} material={materials.PhoneButton_Mat} position={[0.152, 0.441, 0.005]} rotation={[1.572, 0, 0]} scale={[0.01, 0.01, 0.012]} />
      </group>  
    </group>
  )
}

useGLTF.preload('/models/low_poly_mobile_phone.glb')

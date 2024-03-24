/* eslint-disable react/prop-types */
/* eslint-disable react/no-unknown-property */
import { Text, Text3D, Image, RoundedBox } from "@react-three/drei"
import { useFrame } from "@react-three/fiber"
import { useState} from "react"
import { MobilePhone } from "./MobilePhone"


const Screen = ({data}) => {

    const [hours, setHours] = useState()
    const [minutes, setMinutes] = useState()
    const [seconds, setSeconds] = useState()

    const getHours = () => setHours(hours < 10 ? "0" + new Date(data.location.localtime).getHours() : new Date(data.location.localtime).getHours())
    const getMinutes = () => setMinutes(minutes < 10 ? "0" + new Date().getMinutes() : new Date().getMinutes())
    const getSeconds = () => setSeconds(seconds < 10 ? "0" + new Date().getSeconds() : new Date().getSeconds())
    
    useFrame(() => {
        getHours()
        getMinutes()
        getSeconds()
    })
  return (
<group position={[10, -15, 10]} visible={true}>

    <MobilePhone  />
    <mesh position={[-1, 10, 0]} castShadow receiveShadow >

        <Text3D position={[-3, 10, 1]} anchorX="top" anchorY="top" font={'fonts/Roboto_Regular.json'} size={1.2}
        smooth={0.01} lineHeight={3} bevelEnabled bevelThickness={0.1}>
        <meshPhongMaterial color={"Grey"}/>
          {data.location.name}
        </Text3D>

        <Text position={[-3, 9, 1]} anchorX="top" anchorY="top" font={'fonts/Roboto_Regular.json'}  fontSize={1}>
        <meshPhongMaterial color={"Black"}/>
         {data.location.country}        
        </Text>

        <group position={[-2, 4, 2]} >
         
          <Text position={[-0.5, 1, 0]} anchorX="top" anchorY="top" font={'fonts/Roboto_Regular.json'}  fontSize={0.8}>
          <meshPhongMaterial color={"black"}/>
          tempreture now:
          </Text>

          <Text position={[0, -0.5, -0.1]} anchorX="top" anchorY="top" font={'fonts/Roboto_Regular.json'}  fontSize={2.5}>
          <meshPhongMaterial color={"black"}/>
            {data.current.temp_c}c
          </Text>

          <Image  url={data.current.condition.icon} scale={5} position={[3, -6, 0]} />
            {/* <meshStandardMaterial color={"#2E4550"}/> */}
        </group>

        <Text position={[-2, -8, 1]} anchorX="top" anchorY="top" font={'fonts/Roboto_Regular.json'}  fontSize={0.7}>
        <meshPhongMaterial color={"black"}/>
        Local time: {hours}:{minutes}:{seconds} 
        </Text>
    </mesh>
</group>
  )
}

export default Screen
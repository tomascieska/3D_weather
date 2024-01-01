/* eslint-disable react/prop-types */
/* eslint-disable react/no-unknown-property */
import { Text, Text3D } from "@react-three/drei"
import { useFrame } from "@react-three/fiber"
import { useEffect, useState} from "react"
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
{/* 
        <mesh >
            <boxGeometry args={[30, 30, 1]}/>
            <meshBasicMaterial transparent opacity={0.5} visible={true} color={"white"} />
        </mesh> */}

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
          <mesh position={[3, -0.8, -1]}>
            <boxGeometry args={[8, 3.5, 1]}/>
            <meshStandardMaterial color={"#2E4550"}/>
          </mesh>
          <Text position={[-0.5, 0.2, 0]} anchorX="top" anchorY="top" font={'fonts/Roboto_Regular.json'}  fontSize={0.5}>
          <meshPhongMaterial color={"white"}/>
          tempreture now:
          </Text>
          <Text position={[0, -0.5, -0.1]} anchorX="top" anchorY="top" font={'fonts/Roboto_Regular.json'}  fontSize={2}>
          <meshPhongMaterial color={"white"}/>
          {data.current.temp_c} c
          </Text>
        </group>

        <Text position={[-2, -8, 1]} anchorX="top" anchorY="top" font={'fonts/Roboto_Regular.json'}  fontSize={0.7}>
        <meshPhongMaterial color={"grey"}/>
        Local time: {hours}:{minutes}:{seconds} 
        </Text>
    </mesh>
</group>
  )
}

export default Screen
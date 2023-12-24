/* eslint-disable react/prop-types */
/* eslint-disable react/no-unknown-property */
import { Text, Text3D } from "@react-three/drei"
import { useFrame } from "@react-three/fiber"
import { useEffect, useState} from "react"

const Screen = ({ data, changeLocation}) => {


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
<group
  position={[30, 15, 90]}
  rotation={[0, -0.3, 0]} >

        <mesh >
            <boxGeometry args={[30, 25, 1]}/>
            <meshBasicMaterial transparent opacity={0.1} visible={true} color={"grey"} />
        </mesh>

    <mesh position={[-12, 8, 1]} castShadow receiveShadow >

        <Text3D position={[-1, 1, 1]} anchorX="top" anchorY="top" font={'fonts/Roboto_Regular.json'} size={3}
        smooth={0.01} lineHeight={5} bevelEnabled bevelThickness={0.15}>
        <meshPhongMaterial color={"Grey"}/>
        {data.location.name}
        </Text3D>

        <Text position={[-1, 0, 1]} anchorX="top" anchorY="top" font={'fonts/Roboto_Regular.json'}  fontSize={1.5}>
        <meshPhongMaterial color={"Black"}/>
        {data.location.country}
        </Text>

        <Text position={[-1, -3, 1]} anchorX="top" anchorY="top" font={'fonts/Roboto_Regular.json'}  fontSize={2}>
        <meshPhongMaterial color={"black"}/>
        {data.current.temp_c} c
        {"\n"}
        {data.current.temp_f} f
        </Text>

        <Text position={[-1, -8, 1]} anchorX="top" anchorY="top" font={'fonts/Roboto_Regular.json'}  fontSize={1}>
        <meshPhongMaterial color={"grey"}/>
        Local time: {hours}:{minutes}:{seconds} 
        </Text>

      <mesh position={[10, -13, 2]} onClick={() => changeLocation("Berlin")} >
          <boxGeometry args={[5, 3, -0.5]}/>
          <meshPhongMaterial color={"blue"}/>
        </mesh>
    </mesh>
</group>
  )
}

export default Screen
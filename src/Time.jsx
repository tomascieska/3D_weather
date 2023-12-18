/* eslint-disable react/no-unknown-property */
import { Float, Text, Text3D } from "@react-three/drei"
import { useFrame } from "@react-three/fiber"
import { Suspense, useEffect, useRef, useState} from "react"

const Time = ({size, color, location}) => {


    const [hours, setHours] = useState()
    const [minutes, setMinutes] = useState()
    const [seconds, setSeconds] = useState()

    const getHours = () => setHours(hours < 10 ? "0" + new Date().getHours() : new Date().getHours())
    const getMinutes = () => setMinutes(minutes < 10 ? "0" + new Date().getMinutes() : new Date().getMinutes())
    const getSeconds = () => setSeconds(seconds < 10 ? "0" + new Date().getSeconds() : new Date().getSeconds())

    useFrame(() => {
        getHours()
        getMinutes()
        getSeconds()
    })


    const ref = useRef()

    useFrame(() => {
        ref.current.rotation.y += 0.01
        // ref.current.rotation.y += 0.001
        // ref.current.rotation.z += 0.001
    })

  return (

    
<Float
    speed={5}
>
    <mesh
        ref={ref}
        position={[-4, 6, -2 ]}
        castShadow
        receiveShadow 
        >
        <Text3D
        anchorX="middle"
        anchorY="middle"
        font={'fonts/Roboto_Regular.json'}
        size={size}
        height={0.7}
        smooth={0.05}         
         >
        {hours}:{minutes}:{seconds} 
        <meshPhongMaterial color={color}/>
        {location}
        </Text3D>
    </mesh>
</Float>
  )
}

export default Time
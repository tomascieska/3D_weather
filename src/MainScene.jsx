/* eslint-disable react/no-unknown-property */
// import { PerspectiveCamera, OrbitControls } from '@react-three/drei'
import { useEffect, useState, useRef } from "react"
import { useFrame } from '@react-three/fiber'
// import Floor from "./Floor"
import Time from "./Time"
// import CloudSky from "./CloudSky"
import World from "./World"
// import { Shoe_model } from "./Shoe_model"
// import { Earth } from "./Earth"

const MainScene = ({weatherData, changeLocation}) => {

    const [celcius, setCelcius] = useState()
    const [location, setLocation] = useState()
    
    // const orbitControlsRef = useRef(null)

    // useFrame((state) => {
    //     const { x, y } = state.mouse
    // })

    // useEffect(() => {
    //     if(orbitControlsRef.current){
    //         console.log(orbitControlsRef.current)
            
    //     }

    // },[])

    useEffect(() => {
        setCelcius(weatherData.current.feelslike_c)
    }, [weatherData])

    useEffect(() => {
        setLocation(weatherData.location.name)
    })
    
    console.log(celcius)

  return (
    <group>
            {/* <PerspectiveCamera makeDefault position={[0, 30, 100]}/> */}
            {/* <OrbitControls ref={orbitControlsRef}/> */}
            {/* <OrbitControls /> */}
        <ambientLight intensity={2}/>
        <pointLight castShadow intensity={20} position={[0, 5, 3]} color={'red'}/>
        <pointLight castShadow intensity={20} position={[0, 5, 2]} color={'red'}/>
        <spotLight castShadow intensity={20} position={[0, 5, 10]} color={'blue'}/>
        <directionalLight castShadow intensity={0.2} position={[4, 2, 3]} color={'blue'}/>
        {/* <Shoe_model /> */}
        <Time size={2} color={'purple'} location={location}/>

        <mesh onClick={changeLocation} position={[-10, 20, 0]}>
        <boxGeometry args={[5, 5, 0.5]}/>
        <meshPhongMaterial color={"blue"}/>
      </mesh>
       
        {/* <CloudSky celcius={celcius} /> */}
        {/* <Earth position={[0, 0, 0]}/> */}
        <World />
        {/* <Floor /> */}
    </group>
    )
}

export default MainScene
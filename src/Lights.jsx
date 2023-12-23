/* eslint-disable react/no-unknown-property */
const Lights = () => {
  return (
   
    <group>
        <ambientLight intensity={0.5}/>
        <directionalLight 
            intensity={5}
            position={[30, 10, 10]}
            color={'white'}
            castShadow
            shadow-mapSize-height={1000}
            shadow-mapSize-width={1000}
            shadow-camera-left={-20}
            shadow-camera-right={20}
            shadow-camera-top={50}
            shadow-camera-bottom={-20}
            />
            
        <pointLight intensity={5} position={[5, 20, 3]} color={'yellow'}/>
        <hemisphereLight args={["#ffbe0b", "#3a86ff", 0.5]}/>
    </group>

  )
}

export default Lights
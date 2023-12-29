/* eslint-disable react/no-unknown-property */
const Lights = () => {
  return (
   
    <group>
        <ambientLight intensity={0.5}/>
        <directionalLight 
            intensity={3}
            position={[80, 10, 20]}
            color={'white'}
            castShadow
            shadow-mapSize-height={1000}
            shadow-mapSize-width={1000}
            shadow-camera-left={-200}
            shadow-camera-right={200}
            shadow-camera-top={500}
            shadow-camera-bottom={-200}
            />
            
            <directionalLight 
            intensity={2}
            position={[10, 1000, 0]}
            color={'white'}
            castShadow/>
        <hemisphereLight args={["#ffbe0b", "#3a86ff", 1]}/>
    </group>

  )
}

export default Lights
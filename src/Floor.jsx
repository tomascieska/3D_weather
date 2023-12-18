/* eslint-disable react/no-unknown-property */

const Floor = () => {
  return (
<group>
  <mesh
        rotation={[-Math.PI / 2, 0, 0]}
        position={[0, 0, 0]}
        receiveShadow
        >
    <planeGeometry args={[100, 200]}/>
    <meshPhongMaterial color={"green"} />
  </mesh>
  
</group>

  )
}

export default Floor
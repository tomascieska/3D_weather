/* eslint-disable react/no-unknown-property */

const Floor = () => {
  return (
    <mesh
        rotation={[-Math.PI /1.8, 0, 0]}
        position={[0, 0, 0]}
        receiveShadow
        >
        <circleGeometry args={[10, 50]}/>
        <meshPhongMaterial color={"white"}/>
    </mesh>
  )
}

export default Floor
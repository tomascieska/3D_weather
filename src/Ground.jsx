/* eslint-disable react/no-unknown-property */

const Ground = () => {
  return (
    <mesh 
        scale={100}
        rotation={[-Math.PI /2, 0, 0]}
        receiveShadow
        >
        <circleGeometry args={[5,50]}/>
        <meshStandardMaterial color={"#00FF00"}/>
    </mesh>
  )
}

export default Ground
/* eslint-disable react/no-unknown-property */

const Ground = () => {


  return (
    <mesh
        scale={100}
        rotation={[-Math.PI /2, 0, 0]}
        receiveShadow
        >
        <circleGeometry args={[5,50]}/>
        <meshStandardMaterial color={"darkgreen"}/>
    </mesh>
  )
}

export default Ground
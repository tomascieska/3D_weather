/* eslint-disable react/no-unknown-property */
import { useSpring, animated, config } from "@react-spring/three"
import { useFrame } from "@react-three/fiber"
import { useRef, useState } from "react"


const Animo = () => {

  const [active, setActive] = useState(false)
  const myMesh = useRef() 


  const { scale } = useSpring({ 
    // scale: active ? 20 : 10,
    scale: active ? 20 : 10,
    config: config.wobbly, 
  
  })

  useFrame(({ clock }) => {
    const a = clock.getElapsedTime();
    myMesh.current.rotation.x = a;
    myMesh.current.rotation.y = a;
    myMesh.current.rotation.z = a;
  });

console.log(scale)

return (

  <animated.mesh position={[0, 10, 80]} scale={scale} onClick={() => setActive(!active)} ref={myMesh}>
  <boxGeometry />
  <meshPhongMaterial color="royalblue" />
</animated.mesh>
)

}

export default Animo
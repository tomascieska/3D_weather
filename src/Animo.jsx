/* eslint-disable react/no-unknown-property */
import { useSpring, animated, config } from "@react-spring/three"
import { useFrame } from "@react-three/fiber"
import { useRef, useState } from "react"


const Animo = () => {

  const [active, setActive] = useState(false)
  const myMesh = useRef() 

  

const {x} = useSpring({ 
    x: active ? 20 : 10,
      // from: {x: 1},
      // to: {x: 10},
      loop: true,
      delay: 1000,
      config: config.molasses,
  })

  useFrame(({ clock }) => {
    const a = clock.getElapsedTime();
    myMesh.current.rotation.x = a;
    myMesh.current.rotation.y = a;
    });

console.log(x)

return (

  <animated.mesh position={[0, 10, 80]} scale={x}  position-x={x} onClick={() => setActive(!active)} ref={myMesh}>
  <boxGeometry />
  <meshPhongMaterial color="royalblue" />
  </animated.mesh>
)

}

export default Animo
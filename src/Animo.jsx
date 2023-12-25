/* eslint-disable react/no-unknown-property */
import { useSpring, a } from "@react-spring/web"


const Animo = () => {

    const { x } = useSpring({
        to: { x: 100 },
        from: { x: 0 },
        loop: { reverse: true },
      })



return (
  <group>
  <a.group transform={x}>

  <mesh>
    <boxGeometry args={[15,15,15]} />
    <meshStandardMaterial color={"red"}/>
  </mesh>
</a.group>
</group>
)

}

export default Animo
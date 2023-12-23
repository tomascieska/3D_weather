/* eslint-disable react/no-unknown-property */
/* eslint-disable react/prop-types */
import { Text } from "@react-three/drei"

const World = ({data, changeLocation}) => {
  return (  
<>
  {/* <mesh onClick={() => changeLocation("Kybartai")} position={[-10, 20, -50]}>
    <boxGeometry args={[5, 5, -0.5]}/>
    <meshPhongMaterial color={"blue"}/>
  </mesh> */}
  <Text position={[-20, 0, 50]} fontSize={8}>
    {/* {data.location.name} */}
  </Text>
</>      
)
}



export default World
import { Clouds, Cloud, Float } from "@react-three/drei"
import { useEffect, useState } from "react"


const CloudSky = ({data}) => {

const [colorCloud, setcolorCloud] = useState(null)


  useEffect(() => {
    
      console.log("getting color")
      console.log(data.current.temp_c)

      if (data.current.temp_c > 10){
        return setcolorCloud("yellow")
      } else if (data.current.temp_c < 9.9){
        return setcolorCloud("grey")
      } else {
        return setcolorCloud("white")
      }

  },[data])

  return (
  <Float>
    <Clouds>
      <Cloud position={[-30, 20, -50]} segments={50} fade={10} bounds={[30, 10, 10]} volume={50} opacity={0.2} color={colorCloud} />
    </Clouds>
  </Float>

  )
}

export default CloudSky
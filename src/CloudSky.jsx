import { Clouds, Cloud, Float } from "@react-three/drei"


const CloudSky = ({celcius}) => {

  let colorCloud = ""
  console.log(celcius)

  function getCloud() {

    if (celcius > 10){
      return colorCloud = "yellow"
    } else if (celcius < 9.9){
      return colorCloud = "grey"
    } else {
      return colorCloud = "white"
    }
  }
  getCloud()
  
  return (
  <Float>

    <Clouds>
      <Cloud position={[-30, 20, -50]} segments={50} fade={10} bounds={[30, 10, 10]} volume={50} opacity={0.2} color={colorCloud} />
    </Clouds>
  </Float>

  )
}

export default CloudSky
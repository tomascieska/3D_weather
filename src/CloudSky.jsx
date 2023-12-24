import { Clouds, Cloud, Float } from "@react-three/drei"


const CloudSky = ({celcius}) => {

  let colorCloud = ""
  // console.log(celcius)

  function getCloud() {

    if (celcius > 5){
      return colorCloud = "yellow"
    } else if (celcius < 5){
      return colorCloud = "blue"
    } else {
      return colorCloud = "white"
    }
  }
  getCloud()
  
  return (
  <Float>
    <Clouds>
      <Cloud position={[-5, 30, 40]} segments={50} fade={10} bounds={[30, 10, 10]} volume={50} opacity={0.2} color={colorCloud} />
    </Clouds>
  </Float>
  )
}

export default CloudSky
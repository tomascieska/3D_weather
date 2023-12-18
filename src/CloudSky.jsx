import { Clouds, Cloud, Float } from "@react-three/drei"


const CloudSky = ({celcius}) => {

  let colorCloud = ""
  console.log(celcius)

  function getCloud() {

    if (celcius > 5){
      return colorCloud = "yellow"
    } else if (celcius < 5){
      return colorCloud = "blue"
    } else {
      return colorCloud = "green"
    }
  }
  getCloud()
  
  return (
  <Float>
    <Clouds position={[20, 5, -20]}>
      <Cloud rotation={[2, 1, 1]} position={[20, 5, -20]} segments={40} bounds={[10, 2, 2]} volume={10} color={colorCloud} />
      <Cloud position={[-10, 8, -20]} segments={20} bounds={[10, 20, 20]} volume={10} color={colorCloud} />
      <Cloud position={[10, 7, -10]} segments={2} seed={2} scale={5} volume={1} color={colorCloud} fade={10} />

      <Cloud position={[-20, 7, 0]} segments={20} seed={2} scale={5} volume={3} ccolor={colorCloud} fade={100} />
      <Cloud position={[-20, 7, 20]} segments={20} seed={2} scale={5} volume={1} color={colorCloud} fade={100} />
      <Cloud position={[-10, 7, 30]} segments={20} seed={2} scale={5} volume={1} color={colorCloud}fade={100} />
    </Clouds>
  </Float>
  )
}

export default CloudSky
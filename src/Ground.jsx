/* eslint-disable react/no-unknown-property */
import { useLoader } from "@react-three/fiber"
import { RepeatWrapping, TextureLoader } from "three"



const Ground = () => {
  const [colorMap, roughnessMap]= useLoader(TextureLoader, [
    '/img/water.jpg',
    '/img/water_gloss.png',
  ])
 
  const [colorMapRing, displacementMap, normalMap, roughnessMapRing, aoMap] = useLoader(TextureLoader, [
    // '/img/flat-cobble-moss-albedo.png',
    // '/img/flat-cobble-moss-height.png',
    // '/img/flat-cobble-moss-normal-ogl.png',
    // '/img/flat-cobble-moss-roughness.png',
    // '/img/flat-cobble-moss-ao.png',

    // '/img/sandyground1_Base_Color.png',
    // '/img/sandyground1_Height.png',
    // '/img/sandyground1_Normal.png',
    // '/img/sandyground1_Roughness.png',
    // '/img/sandyground1_Ambient_Occlusion.png',

    // '/img/pebbled_asphalt_albedo.png',
    // '/img/pebbled_asphalt_Height.png',
    // '/img/pebbled_asphalt_Normal.png',
    // '/img/pebbled_asphalt_Roughness.png',
    // '/img/pebbled_asphalt_ao.png',

    // '/img/green-shower-tile1_albedo.png',
    // '/img/green-shower-tile1_height.png',
    // '/img/green-shower-tile1_normal-ogl.png',
    // '/img/green-shower-tile1_roughness.png',
    // '/img/green-shower-tile1_albedo.png',

    '/img/dungeon-stone1-albedo2.png',
    '/img/dungeon-stone1-height.png',
    '/img/dungeon-stone1-normal.png',
    '/img/dungeon-stone1-roughness.png',
    '/img/dungeon-stone1-ao.png',
  ])
  
const x = 15
const y = 10

  colorMapRing.repeat.set(x, y);
  colorMapRing.wrapS = colorMapRing.wrapT = RepeatWrapping;

  displacementMap.repeat.set(x, y);
  displacementMap.wrapS = displacementMap.wrapT = RepeatWrapping;

  normalMap.repeat.set(x, y);
  normalMap.wrapS = normalMap.wrapT = RepeatWrapping;

  roughnessMapRing.repeat.set(x, y);
  roughnessMapRing.wrapS = roughnessMapRing.wrapT = RepeatWrapping;

  aoMap.repeat.set(x, y);
  aoMap.wrapS = aoMap.wrapT = RepeatWrapping;

  return (
<group>
    <mesh position={[0, 0.3, 0]} rotation={[-Math.PI/2, 0, 0]}>
      <ringGeometry args={[165, 220, 100, 0]}/>
      <meshStandardMaterial 
        map={colorMapRing}
        normalMap={normalMap}
        roughnessMap={roughnessMapRing}
        aoMap={aoMap}
        displacementMap={displacementMap}
        displacementScale={0.2}
      />
    </mesh>

    <mesh
        scale={100}
        rotation={[-Math.PI /2, 0, 0]}
        receiveShadow
        >
        <circleGeometry args={[5,50]}/>
        <meshStandardMaterial 
          map={colorMap}
          roughnessMap={roughnessMap}          
          />
    </mesh>
</group>
  )
}

export default Ground
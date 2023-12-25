/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.16 public/models/cartoony_landmarks.glb -o src/Landmark.jsx -k -K -r public 
Author: Harry Charalambous (https://sketchfab.com/charalamboscharalambous8)
License: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
Source: https://sketchfab.com/3d-models/cartoony-landmarks-24b9c74a214941e6a1068241eab1498c
Title: Cartoony Landmarks
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export function Landmark(props) {
  const { nodes, materials } = useGLTF('/models/cartoony_landmarks.glb')

 const model = useGLTF('/models/cartoony_landmarks.glb')

 model.scene.traverse((object) => {
  if(!object.isMesh){
    object.castShadow = true
  }
})
 console.log( model.scene)
  return (
    <group scale={100} {...props} dispose={null}>
      <group name="Sketchfab_Scene">
        <group name="Sketchfab_model" rotation={[-Math.PI / 2, 0, 0]}>
      <primitive object={model.scene}/>
          <group name="071aa99bfdbb4f5994c862281f0471fcfbx" rotation={[Math.PI / 2, 0, 0]} scale={0.01}>
            <group name="RootNode">
              <group name="S_LandmarksIndia_Minor_Landmarks">
                <group name="S_LandmarksS_Taj_Mahal">
                  <mesh name="S_LandmarksS_Taj_Mahal_S_LandmarksIndia_0" geometry={nodes.S_LandmarksS_Taj_Mahal_S_LandmarksIndia_0.geometry} material={materials.S_LandmarksIndia} />
                </group>
                <group name="S_LandmarksS_Arch">
                  <mesh name="S_LandmarksS_Arch_S_LandmarksIndia_0" geometry={nodes.S_LandmarksS_Arch_S_LandmarksIndia_0.geometry} material={materials.S_LandmarksIndia} />
                </group>
                <group name="S_LandmarksS_TempleV2">
                  <mesh name="S_LandmarksS_TempleV2_S_LandmarksIndia_0" geometry={nodes.S_LandmarksS_TempleV2_S_LandmarksIndia_0.geometry} material={materials.S_LandmarksIndia} />
                </group>
                <group name="S_LandmarksS_TempleV1">
                  <mesh name="S_LandmarksS_TempleV1_S_LandmarksIndia_0" geometry={nodes.S_LandmarksS_TempleV1_S_LandmarksIndia_0.geometry} material={materials.S_LandmarksIndia} />
                </group>
                <group name="S_LandmarksS_Trees">
                  <mesh name="S_LandmarksS_Trees_S_LandmarksTree_0" geometry={nodes.S_LandmarksS_Trees_S_LandmarksTree_0.geometry} material={materials.S_LandmarksTree} />
                </group>
                <group name="S_LandmarksS_Flagpole">
                  <mesh name="S_LandmarksS_Flagpole_S_LandmarksIndia_Flag_0" geometry={nodes.S_LandmarksS_Flagpole_S_LandmarksIndia_Flag_0.geometry} material={materials.S_LandmarksIndia_Flag} />
                </group>
              </group>
              {/* USA */}
              <group rotation={[0, 0, 0]} position={[-10, 0, 5]} name="S_LandmarksUSA_Minor_Landmarks">
                <group  name="S_LandmarksS_Lady_Liberty">
                  <mesh name="S_LandmarksS_Lady_Liberty_S_LandmarksUSA_0" geometry={nodes.S_LandmarksS_Lady_Liberty_S_LandmarksUSA_0.geometry} material={materials.S_LandmarksUSA} />
                </group>
                <group name="S_LandmarksS_Capitol_Building">
                  <mesh name="S_LandmarksS_Capitol_Building_S_LandmarksUSA_0" geometry={nodes.S_LandmarksS_Capitol_Building_S_LandmarksUSA_0.geometry} material={materials.S_LandmarksUSA} />
                </group>
                <group name="S_LandmarksS_The_Alamo_Monument">
                  <mesh name="S_LandmarksS_The_Alamo_Monument_S_LandmarksUSA_0" geometry={nodes.S_LandmarksS_The_Alamo_Monument_S_LandmarksUSA_0.geometry} material={materials.S_LandmarksUSA} />
                </group>
                <group name="S_LandmarksS_EmpireStateBuilding">
                  <mesh name="S_LandmarksS_EmpireStateBuilding_S_LandmarksUSA_0" geometry={nodes.S_LandmarksS_EmpireStateBuilding_S_LandmarksUSA_0.geometry} material={materials.S_LandmarksUSA} />
                </group>
                <group name="S_LandmarksS_Trees_1">
                  <mesh name="S_LandmarksS_Trees_S_LandmarksTree_0_1" geometry={nodes.S_LandmarksS_Trees_S_LandmarksTree_0_1.geometry} material={materials.S_LandmarksTree} />
                </group>
                <group name="S_LandmarksS_Flagpole_1">
                  <mesh name="S_LandmarksS_Flagpole_S_LandmarksUSA_Flag_0" geometry={nodes.S_LandmarksS_Flagpole_S_LandmarksUSA_Flag_0.geometry} material={materials.S_LandmarksUSA_Flag} />
                </group>
                <group name="S_LandmarksS_BuildingV1">
                  <mesh name="S_LandmarksS_BuildingV1_S_LandmarksUSA_0" geometry={nodes.S_LandmarksS_BuildingV1_S_LandmarksUSA_0.geometry} material={materials.S_LandmarksUSA} />
                </group>
                <group name="S_LandmarksS_BuildingV2">
                  <mesh name="S_LandmarksS_BuildingV2_S_LandmarksUSA_0" geometry={nodes.S_LandmarksS_BuildingV2_S_LandmarksUSA_0.geometry} material={materials.S_LandmarksUSA} />
                </group>
                <group name="S_LandmarksS_BuildingV3">
                  <mesh name="S_LandmarksS_BuildingV3_S_LandmarksUSA_0" geometry={nodes.S_LandmarksS_BuildingV3_S_LandmarksUSA_0.geometry} material={materials.S_LandmarksUSA} />
                </group>
                <group name="S_LandmarksS_BuildingV4">
                  <mesh name="S_LandmarksS_BuildingV4_S_LandmarksUSA_0" geometry={nodes.S_LandmarksS_BuildingV4_S_LandmarksUSA_0.geometry} material={materials.S_LandmarksUSA} />
                </group>
              </group>

              {/* UK */}
              <group rotation={[0, 1.6,0]} position={[70,0,30]} name="S_LandmarksUK_Minor_Landmarks">
                <group name="S_LandmarksS_Trees_2">
                  <mesh name="S_LandmarksS_Trees_S_LandmarksTree_0_2" geometry={nodes.S_LandmarksS_Trees_S_LandmarksTree_0_2.geometry} material={materials.S_LandmarksTree} />
                </group>
                <group name="S_LandmarksS_Tower_Bridge">
                  <mesh name="S_LandmarksS_Tower_Bridge_S_LandmarksUK_0" geometry={nodes.S_LandmarksS_Tower_Bridge_S_LandmarksUK_0.geometry} material={materials.S_LandmarksUK} />
                </group>
                <group name="S_LandmarksS_Flagpole_2">
                  <mesh name="S_LandmarksS_Flagpole_S_LandmarksUK_Flag_0" geometry={nodes.S_LandmarksS_Flagpole_S_LandmarksUK_Flag_0.geometry} material={materials.S_LandmarksUK_Flag} />
                </group>
                <group name="S_LandmarksS_Big_Ben">
                  <mesh name="S_LandmarksS_Big_Ben_S_LandmarksUK_0" geometry={nodes.S_LandmarksS_Big_Ben_S_LandmarksUK_0.geometry} material={materials.S_LandmarksUK} />
                </group>
                <group name="S_LandmarksS_Stonehenge">
                  <mesh name="S_LandmarksS_Stonehenge_S_LandmarksUK_0" geometry={nodes.S_LandmarksS_Stonehenge_S_LandmarksUK_0.geometry} material={materials.S_LandmarksUK} />
                </group>
                <group name="S_LandmarksS_Fortress_of_the_Tower_of_London">
                  <mesh name="S_LandmarksS_Fortress_of_the_Tower_of_London_S_LandmarksUK_0" geometry={nodes.S_LandmarksS_Fortress_of_the_Tower_of_London_S_LandmarksUK_0.geometry} material={materials.S_LandmarksUK} />
                </group>
              </group>
              <group name="S_LandmarksFrance_Minor_Landmarks">
                <group name="S_LandmarksS_Arch_de_Triomphe">
                  <mesh name="S_LandmarksS_Arch_de_Triomphe_S_LandmarksFrance_0" geometry={nodes.S_LandmarksS_Arch_de_Triomphe_S_LandmarksFrance_0.geometry} material={materials.S_LandmarksFrance} />
                </group>
                <group name="S_LandmarksS_Pantheon_De_Paris">
                  <mesh name="S_LandmarksS_Pantheon_De_Paris_S_LandmarksFrance_0" geometry={nodes.S_LandmarksS_Pantheon_De_Paris_S_LandmarksFrance_0.geometry} material={materials.S_LandmarksFrance} />
                </group>
                <group name="S_LandmarksS_Notre_Dame">
                  <mesh name="S_LandmarksS_Notre_Dame_S_LandmarksFrance_0" geometry={nodes.S_LandmarksS_Notre_Dame_S_LandmarksFrance_0.geometry} material={materials.S_LandmarksFrance} />
                </group>
                <group name="S_LandmarksS_Flagpole_3">
                  <mesh name="S_LandmarksS_Flagpole_S_LandmarksFranche_Flag_0" geometry={nodes.S_LandmarksS_Flagpole_S_LandmarksFranche_Flag_0.geometry} material={materials.S_LandmarksFranche_Flag} />
                </group>
                <group name="S_LandmarksS_Eiffel_Tower">
                  <mesh name="S_LandmarksS_Eiffel_Tower_S_LandmarksFrance_0" geometry={nodes.S_LandmarksS_Eiffel_Tower_S_LandmarksFrance_0.geometry} material={materials.S_LandmarksFrance} />
                </group>
                <group name="S_LandmarksS_Trees_3">
                  <mesh name="S_LandmarksS_Trees_S_LandmarksTree_0_3" geometry={nodes.S_LandmarksS_Trees_S_LandmarksTree_0_3.geometry} material={materials.S_LandmarksTree} />
                </group>
              </group>
              <group rotation={[0, 1.6, 0]} position={[-2,0,-15]}  name="S_LandmarksJapan_Minor_Landmarks">
                <group name="S_LandmarksS_Sakura_trees">
                  <mesh name="S_LandmarksS_Sakura_trees_S_LandmarksSakura_Tree_0" geometry={nodes.S_LandmarksS_Sakura_trees_S_LandmarksSakura_Tree_0.geometry} material={materials.S_LandmarksSakura_Tree} />
                </group>
                <group name="S_LandmarksS_Flagpole_4">
                  <mesh name="S_LandmarksS_Flagpole_S_LandmarksJapan_Flag_0" geometry={nodes.S_LandmarksS_Flagpole_S_LandmarksJapan_Flag_0.geometry} material={materials.S_LandmarksJapan_Flag} />
                </group>
                <group name="S_LandmarksS_Itsukushima_Shrine">
                  <mesh name="S_LandmarksS_Itsukushima_Shrine_S_LandmarksJapan_0" geometry={nodes.S_LandmarksS_Itsukushima_Shrine_S_LandmarksJapan_0.geometry} material={materials.S_LandmarksJapan} />
                </group>
                <group name="S_LandmarksS_Ikaruga_Horyu_Ji">
                  <mesh name="S_LandmarksS_Ikaruga_Horyu_Ji_S_LandmarksJapan_0" geometry={nodes.S_LandmarksS_Ikaruga_Horyu_Ji_S_LandmarksJapan_0.geometry} material={materials.S_LandmarksJapan} />
                </group>
                <group name="S_LandmarksS_kamakura_buddha">
                  <mesh name="S_LandmarksS_kamakura_buddha_S_LandmarksJapan_0" geometry={nodes.S_LandmarksS_kamakura_buddha_S_LandmarksJapan_0.geometry} material={materials.S_LandmarksJapan} />
                </group>
                <group name="S_LandmarksS_Fushimi_Inari_Temple">
                  <mesh name="S_LandmarksS_Fushimi_Inari_Temple_S_LandmarksJapan_0" geometry={nodes.S_LandmarksS_Fushimi_Inari_Temple_S_LandmarksJapan_0.geometry} material={materials.S_LandmarksJapan} />
                </group>
              </group>
            </group>
          </group>
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('/models/cartoony_landmarks.glb')

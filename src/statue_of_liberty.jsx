/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.15 public/models/statue_of_liberty.glb -o src/statue_of_liberty.jsx -k -K -r public 
Author: LeonidNikolaev (https://sketchfab.com/LeonidNikolaev)
License: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
Source: https://sketchfab.com/3d-models/low-poly-statue-of-liberty-8af9fed854234e5e9c5c993221e11977
Title: Low poly Statue of Liberty
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export function StatueOfLiberty(props) {
  const { nodes, materials } = useGLTF('/models/statue_of_liberty.glb')
  return (
    <group {...props} dispose={null}>
      <group name="Sketchfab_Scene">
        <group name="Sketchfab_model" rotation={[-Math.PI / 2, 0, 0]}>
          <group name="Statue_of_Libertyc4dfbx" rotation={[Math.PI / 2, 0, 0]}>
            <group name="RootNode">
              <group name="Null" position={[1465.871, 720.492, -735.741]}>
                <group name="Ocean" position={[-1369.771, -2907.838, 1420.382]}>
                  <group name="Cube_1" position={[-304.001, 1685.498, -907.195]}>
                    <group name="Cube_1_2">
                      <mesh name="Cube_1_2_Blue_2_0" geometry={nodes.Cube_1_2_Blue_2_0.geometry} material={materials.Blue_2} />
                    </group>
                  </group>
                  <group name="Cube" position={[-304.001, 554.822, -907.195]}>
                    <group name="Cube_2">
                      <mesh name="Cube_2_Brown_0" geometry={nodes.Cube_2_Brown_0.geometry} material={materials.Brown} />
                    </group>
                  </group>
                </group>
                <group name="Island" position={[-460.388, -432.192, -780.893]}>
                  <group name="Island_2" position={[71.401, -31.763, -22.736]}>
                    <mesh name="Island_2_Brown_0" geometry={nodes.Island_2_Brown_0.geometry} material={materials.Brown} />
                  </group>
                  <group name="Island_3" position={[-71.401, 31.763, 22.736]}>
                    <mesh name="Island_3_Green_0" geometry={nodes.Island_3_Green_0.geometry} material={materials.Green} />
                  </group>
                </group>
                <group name="Boole" position={[-1241.308, -720.492, -372.993]}>
                  <group name="Monument" position={[841.443, 386.476, 1450.213]} rotation={[0, Math.PI / 2, 0]}>
                    <mesh name="Monument_Brown_0" geometry={nodes.Monument_Brown_0.geometry} material={materials.Brown} />
                  </group>
                  <group name="window" position={[161.282, 1061.072, 578.416]}>
                    <mesh name="window__0" geometry={nodes.window__0.geometry} material={materials.RootNode} />
                  </group>
                </group>
                <group name="Statue" position={[-309.597, -387.644, 1098.835]} rotation={[0, Math.PI / 2, 0]}>
                  <group name="text_book" position={[1117.636, 2277.859, -1423.185]} rotation={[-0.448, 0.825, -0.071]}>
                    <mesh name="text_book_Green_0" geometry={nodes.text_book_Green_0.geometry} material={materials.Green_0} />
                  </group>
                  <mesh name="Statue_Green_0" geometry={nodes.Statue_Green_0.geometry} material={materials.Green_0} />
                  <mesh name="Statue_Fire_2" geometry={nodes.Statue_Fire_2.geometry} material={materials.Fire} />
                </group>
                <group name="mount" position={[1816.891, -531.234, 3584.973]} rotation={[Math.PI, 0.581, -Math.PI]}>
                  <group name="Cube_3" position={[4638.877, 1239.787, 1186.578]} rotation={[0, -0.99, 0]}>
                    <mesh name="Cube_3_Green_0" geometry={nodes.Cube_3_Green_0.geometry} material={materials.Green_0} />
                  </group>
                </group>
                <group name="Clouds" position={[2177.42, 5045.495, -5906.4]} rotation={[-0.646, -0.59, 2.744]} scale={3.587}>
                  <group name="Clouds_2" position={[-307.637, -975.942, -23.943]} rotation={[-Math.PI / 6, -0.698, -Math.PI]}>
                    <group name="Sphere_12" position={[-21.724, -26.471, 16.872]}>
                      <mesh name="Sphere_12_white_0" geometry={nodes.Sphere_12_white_0.geometry} material={materials.white} />
                    </group>
                    <group name="Sphere_11" position={[-13.887, -3.647, -64.622]}>
                      <mesh name="Sphere_11_white_0" geometry={nodes.Sphere_11_white_0.geometry} material={materials.white} />
                    </group>
                    <group name="Sphere_10" position={[31.828, -3.647, -73.765]}>
                      <mesh name="Sphere_10_white_0" geometry={nodes.Sphere_10_white_0.geometry} material={materials.white} />
                    </group>
                    <group name="Sphere_9" position={[-5.075, -26.155, -102.5]}>
                      <mesh name="Sphere_9_white_0" geometry={nodes.Sphere_9_white_0.geometry} material={materials.white} />
                    </group>
                    <group name="Sphere_8" position={[-19.112, -3.267, 39.87]}>
                      <mesh name="Sphere_8_white_0" geometry={nodes.Sphere_8_white_0.geometry} material={materials.white} />
                    </group>
                    <group name="Sphere_7" position={[-2.132, 10.326, 69.912]}>
                      <mesh name="Sphere_7_white_0" geometry={nodes.Sphere_7_white_0.geometry} material={materials.white} />
                    </group>
                    <group name="Sphere_6" position={[-26.949, -27.157, 69.912]}>
                      <mesh name="Sphere_6_white_0" geometry={nodes.Sphere_6_white_0.geometry} material={materials.white} />
                    </group>
                    <group name="Sphere_5" position={[-78.894, 40.108, 14.36]}>
                      <mesh name="Sphere_5_white_0" geometry={nodes.Sphere_5_white_0.geometry} material={materials.white} />
                    </group>
                    <group name="Sphere_4" position={[-78.894, 10.326, 55.204]}>
                      <mesh name="Sphere_4_white_0" geometry={nodes.Sphere_4_white_0.geometry} material={materials.white} />
                    </group>
                    <group name="Sphere_3" position={[113.651, 10.326, 10.652]}>
                      <mesh name="Sphere_3_white_0" geometry={nodes.Sphere_3_white_0.geometry} material={materials.white} />
                    </group>
                    <group name="Sphere_2" position={[80.847, 10.326, -11.241]}>
                      <mesh name="Sphere_2_white_0" geometry={nodes.Sphere_2_white_0.geometry} material={materials.white} />
                    </group>
                    <group name="Sphere_1" position={[140.413, -1.393, -28.264]}>
                      <mesh name="Sphere_1_white_0" geometry={nodes.Sphere_1_white_0.geometry} material={materials.white} />
                    </group>
                    <group name="Sphere" position={[-106.169, 10.326, -11.241]}>
                      <mesh name="Sphere_white_0" geometry={nodes.Sphere_white_0.geometry} material={materials.white} />
                    </group>
                  </group>
                  <group name="Clouds_1" position={[-88.911, 0, -1.142]}>
                    <group name="Sphere_12_2" position={[-22.794, -26.471, 18.014]}>
                      <mesh name="Sphere_12_2_white_0" geometry={nodes.Sphere_12_2_white_0.geometry} material={materials.white} />
                    </group>
                    <group name="Sphere_11_2" position={[-14.957, -3.647, -63.479]}>
                      <mesh name="Sphere_11_2_white_0" geometry={nodes.Sphere_11_2_white_0.geometry} material={materials.white} />
                    </group>
                    <group name="Sphere_10_2" position={[30.759, -3.647, -72.622]}>
                      <mesh name="Sphere_10_2_white_0" geometry={nodes.Sphere_10_2_white_0.geometry} material={materials.white} />
                    </group>
                    <group name="Sphere_9_2" position={[-6.144, -26.155, -101.358]}>
                      <mesh name="Sphere_9_2_white_0" geometry={nodes.Sphere_9_2_white_0.geometry} material={materials.white} />
                    </group>
                    <group name="Sphere_8_2" position={[-20.181, -3.267, 41.013]}>
                      <mesh name="Sphere_8_2_white_0" geometry={nodes.Sphere_8_2_white_0.geometry} material={materials.white} />
                    </group>
                    <group name="Sphere_7_2" position={[-3.201, 10.326, 71.054]}>
                      <mesh name="Sphere_7_2_white_0" geometry={nodes.Sphere_7_2_white_0.geometry} material={materials.white} />
                    </group>
                    <group name="Sphere_6_2" position={[-28.018, -27.157, 71.054]}>
                      <mesh name="Sphere_6_2_white_0" geometry={nodes.Sphere_6_2_white_0.geometry} material={materials.white} />
                    </group>
                    <group name="Sphere_5_2" position={[-79.963, 40.108, 15.502]}>
                      <mesh name="Sphere_5_2_white_0" geometry={nodes.Sphere_5_2_white_0.geometry} material={materials.white} />
                    </group>
                    <group name="Sphere_4_2" position={[-79.963, 10.326, 56.346]}>
                      <mesh name="Sphere_4_2_white_0" geometry={nodes.Sphere_4_2_white_0.geometry} material={materials.white} />
                    </group>
                    <group name="Sphere_3_2" position={[112.581, 10.326, 11.794]}>
                      <mesh name="Sphere_3_2_white_0" geometry={nodes.Sphere_3_2_white_0.geometry} material={materials.white} />
                    </group>
                    <group name="Sphere_2_2" position={[79.778, 10.326, -10.098]}>
                      <mesh name="Sphere_2_2_white_0" geometry={nodes.Sphere_2_2_white_0.geometry} material={materials.white} />
                    </group>
                    <group name="Sphere_1_2" position={[139.343, -1.393, -27.122]}>
                      <mesh name="Sphere_1_2_white_0" geometry={nodes.Sphere_1_2_white_0.geometry} material={materials.white} />
                    </group>
                    <group name="Sphere_2_3" position={[-107.239, 10.326, -10.098]}>
                      <mesh name="Sphere_2_3_white_0" geometry={nodes.Sphere_2_3_white_0.geometry} material={materials.white} />
                    </group>
                  </group>
                  <group name="Clouds_1_1" position={[-665.624, -567.8, -1.142]}>
                    <group name="Sphere_12_3" position={[-16.503, -19.165, 13.042]}>
                      <mesh name="Sphere_12_3_white_0" geometry={nodes.Sphere_12_3_white_0.geometry} material={materials.white} />
                    </group>
                    <group name="Sphere_11_3" position={[-10.829, -2.641, -45.959]}>
                      <mesh name="Sphere_11_3_white_0" geometry={nodes.Sphere_11_3_white_0.geometry} material={materials.white} />
                    </group>
                    <group name="Sphere_10_3" position={[22.269, -2.641, -52.579]}>
                      <mesh name="Sphere_10_3_white_0" geometry={nodes.Sphere_10_3_white_0.geometry} material={materials.white} />
                    </group>
                    <group name="Sphere_9_3" position={[-4.449, -18.936, -73.383]}>
                      <mesh name="Sphere_9_3_white_0" geometry={nodes.Sphere_9_3_white_0.geometry} material={materials.white} />
                    </group>
                    <group name="Sphere_8_3" position={[-14.611, -2.365, 29.693]}>
                      <mesh name="Sphere_8_3_white_0" geometry={nodes.Sphere_8_3_white_0.geometry} material={materials.white} />
                    </group>
                    <group name="Sphere_7_3" position={[-2.318, 7.476, 51.443]}>
                      <mesh name="Sphere_7_3_white_0" geometry={nodes.Sphere_7_3_white_0.geometry} material={materials.white} />
                    </group>
                    <group name="Sphere_6_3" position={[-20.285, -19.662, 51.443]}>
                      <mesh name="Sphere_6_3_white_0" geometry={nodes.Sphere_6_3_white_0.geometry} material={materials.white} />
                    </group>
                    <group name="Sphere_5_3" position={[-57.893, 29.038, 11.224]}>
                      <mesh name="Sphere_5_3_white_0" geometry={nodes.Sphere_5_3_white_0.geometry} material={materials.white} />
                    </group>
                    <group name="Sphere_4_3" position={[-57.893, 7.476, 40.795]}>
                      <mesh name="Sphere_4_3_white_0" geometry={nodes.Sphere_4_3_white_0.geometry} material={materials.white} />
                    </group>
                    <group name="Sphere_3_3" position={[81.509, 7.476, 8.539]}>
                      <mesh name="Sphere_3_3_white_0" geometry={nodes.Sphere_3_3_white_0.geometry} material={materials.white} />
                    </group>
                    <group name="Sphere_2_4" position={[57.759, 7.476, -7.311]}>
                      <mesh name="Sphere_2_4_white_0" geometry={nodes.Sphere_2_4_white_0.geometry} material={materials.white} />
                    </group>
                    <group name="Sphere_1_3" position={[100.884, -1.008, -19.636]}>
                      <mesh name="Sphere_1_3_white_0" geometry={nodes.Sphere_1_3_white_0.geometry} material={materials.white} />
                    </group>
                    <group name="Sphere_3_4" position={[-77.641, 7.476, -7.311]}>
                      <mesh name="Sphere_3_4_white_0" geometry={nodes.Sphere_3_4_white_0.geometry} material={materials.white} />
                    </group>
                  </group>
                </group>
                <group name="_light" position={[-1150.71, 998.946, -2431.856]} rotation={[2.772, 0.015, 2.838]}>
                  <group name="side_Light" position={[-8.909, -7.279, 1.231]} rotation={[Math.PI / 2, 0, 0]}>
                    <group name="Object_113" rotation={[Math.PI / 2, 0, 0]}>
                      <group name="Object_114" />
                    </group>
                  </group>
                </group>
              </group>
              <group name="Physical_Sky_" position={[29.566, -64.793, 161.17]}>
                <group name="Sky_Null" position={[-1066.818, 703.223, 349.67]}>
                  <group name="Sun" position={[40182.961, 105001.742, 100720.031]} rotation={[-0.806, 0.269, 0.271]}>
                    <group name="Lensflare_Source" rotation={[Math.PI / 2, 0, 0]}>
                      <group name="Object_119" rotation={[Math.PI / 2, 0, 0]}>
                        <group name="Object_120" />
                      </group>
                    </group>
                    <group name="Sun_light" rotation={[Math.PI / 2, 0, 0]}>
                      <group name="Object_122" rotation={[Math.PI / 2, 0, 0]}>
                        <group name="Object_123" />
                      </group>
                    </group>
                  </group>
                  <group name="Moon" position={[3539.073, -1361.516, 284.07]} rotation={[1.365, 1.196, -1.35]}>
                    <group name="Moon_Light" rotation={[Math.PI / 2, 0, 0]}>
                      <group name="Object_126" rotation={[Math.PI / 2, 0, 0]}>
                        <group name="Object_127" />
                      </group>
                    </group>
                  </group>
                </group>
                <group name="Sky_Dome" rotation={[Math.PI / 2, 0, 0]}>
                  <group name="Object_129" rotation={[Math.PI / 2, 0, 0]}>
                    <group name="Object_130" />
                  </group>
                </group>
              </group>
            </group>
          </group>
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('/models/statue_of_liberty.glb')
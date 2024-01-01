/* eslint-disable react/no-unknown-property */

// import { useHelper } from "@react-three/drei"
import { LondonTower } from "./components/locations/LondonTower"
import { BigBen } from "./components/locations/BigBen"
import { Stonehenge } from "./components/locations/Stonehenge"
import { EifelTower } from "./components/locations/EifelTower"
import { NotreDameDeParis } from "./components/locations/NotreDameDeParis"
import { ArcDeTriomphe } from "./components/locations/ArcDeTriomphe"
import { Colosseum } from "./components/locations/Colosseum"
import { Pisa } from "./components/locations/Pisa"
import { BurjKhalifa } from "./components/locations/BurjKhalifa"
import { BurjAl_Arab } from "./components/locations/BurjAl_Arab"
import { TajMahal } from "./components/locations/TajMahal"
import { TokyoTower } from "./components/locations/TokyoTower"
import { SydneyOperaHouse } from "./components/locations/SydneyOperaHouse"
import { CNTower } from "./components/locations/CNTower"
import { WashingtonMonument } from "./components/locations/WashingtonMonument"
import { WhiteHouse } from "./components/locations/WhiteHouse"
import { TheStatueOfLiberty } from "./components/locations/TheStatueOfLiberty"
import { OneWorldTradeCenter } from "./components/locations/OneWorldTradeCenter"
import { EmpireState } from "./components/locations/EmpireState"
import { FlatironBuilding } from "./components/locations/FlatironBuilding"
import { Cristo_Reder } from "./components/locations/CristoReder"
import { MesoamericanPyramid } from "./components/locations/MesoamericanPyramid"
import { Pyramid } from "./components/locations/Pyramid"

// const angle = (Math.PI * 2 * i) / numberOfObjects; // Calculate the angle for each object

//   // Calculate x and y coordinates using trigonometry
//   const x = centerX + R * Math.cos( (Math.PI * 2 * i) / numberOfObject);
//   const y = centerY + R * Math.sin( (Math.PI * 2 * i) / numberOfObjects);


const Locations = () => {
    const R = 200
    const numberOfObjects = 15

  return (
<group>

{/* UK */}


        <LondonTower 
            position={[
                R * Math.cos( (Math.PI * 2 * 0.9) / numberOfObjects),
                0.8,
                (R - 15 )* Math.sin( (Math.PI * 2 * 0.9) / numberOfObjects),
            ]}/>


        <BigBen
            position={[
                R * Math.cos( (Math.PI * 2 * 1) / numberOfObjects),
                0,
                R * Math.sin( (Math.PI * 2 * 1) / numberOfObjects),
            ]}/>

        <Stonehenge 
            position={[
                R * Math.cos( (Math.PI * 2 * 2) / numberOfObjects),
                0.8,
                R * Math.sin( (Math.PI * 2 * 2) / numberOfObjects),
                ]}/>

{/* FRANCE */}
        <EifelTower
            position={[
                R * Math.cos( (Math.PI * 2 * 3.2    ) / numberOfObjects),
                0.8,
                R * Math.sin( (Math.PI * 2 * 3.2) / numberOfObjects),
                ]}/>

        <NotreDameDeParis
            position={[
                6 + R * Math.cos( (Math.PI * 2 * 3.01) / numberOfObjects),
                0.8,
                6 + R * Math.sin( (Math.PI * 2 * 3.01) / numberOfObjects),
                ]}/>

        <ArcDeTriomphe
            position={[
                R * Math.cos( (Math.PI * 2 * 2.9) / numberOfObjects),
                0.8,
                R * Math.sin( (Math.PI * 2 * 2.9) / numberOfObjects),
                ]}/>

{/* ROME */}
        <Colosseum
            position={[
                R * Math.cos( (Math.PI * 2 * 4) / numberOfObjects),
                0.8,
                R * Math.sin( (Math.PI * 2 * 4) / numberOfObjects),
                ]}/>

        <Pisa
            position={[
                R * Math.cos( (Math.PI * 2 * 5) / numberOfObjects),
                0.8,
                R * Math.sin( (Math.PI * 2 * 5) / numberOfObjects),
                ]}/>
{/* DUBAI */}
        <BurjKhalifa
            position={[
                (R - 10 ) * Math.cos( (Math.PI * 2 * 6.2) / numberOfObjects),
                0.8,
                (R - 10 ) * Math.sin( (Math.PI * 2 * 6.2) / numberOfObjects),
                ]}/>

        <BurjAl_Arab
            position={[
                4 + R * Math.cos( (Math.PI * 2 * 6) / numberOfObjects),
                0.8,
                4 + R * Math.sin( (Math.PI * 2 * 6) / numberOfObjects),
                ]}/>
{/* DELI */}
        <TajMahal 
            position={[
                R * Math.cos( (Math.PI * 2 * 7) / numberOfObjects),
                0.8,
                R * Math.sin( (Math.PI * 2 * 7) / numberOfObjects),
                ]}/>

{/* TOKYO */}
        <TokyoTower
            position={[
                R * Math.cos( (Math.PI * 2 * 8) / numberOfObjects),
                0.8,
                R * Math.sin( (Math.PI * 2 * 8) / numberOfObjects),
                ]}/>

{/* AUSTRALIA */}
        <SydneyOperaHouse 
            position={[
                R * Math.cos( (Math.PI * 2 * 9) / numberOfObjects),
                0.8,
                R * Math.sin( (Math.PI * 2 * 9) / numberOfObjects),
            ]}/>

{/* CANADA */}
        <CNTower
            position={[
                R * Math.cos( (Math.PI * 2 * 10) / numberOfObjects),
                0.8,
                R * Math.sin( (Math.PI * 2 * 10) / numberOfObjects),
                ]}/>

{/* WASHINGTON */}
        <WashingtonMonument
            position={[
                R * Math.cos( (Math.PI * 2 * 11) / numberOfObjects),
                0.8,
                R * Math.sin( (Math.PI * 2 * 11) / numberOfObjects),
                ]}/>

        <WhiteHouse
            position={[
                R * Math.cos( (Math.PI * 2 * 11) / numberOfObjects),
                0.8,
                R * Math.sin( (Math.PI * 2 * 11) / numberOfObjects),
                ]}/>


{/* NEW YORK */}
        <TheStatueOfLiberty
            position={[
                R * Math.cos( (Math.PI * 2 * 11.9) / numberOfObjects),
                0.8,
                -10 + R * Math.sin( (Math.PI * 2 * 11.9) / numberOfObjects),
                ]}/>

        <OneWorldTradeCenter
            position={[
                R * Math.cos( (Math.PI * 2 * 12) / numberOfObjects),
                0.8,
                (R - 22) * Math.sin( (Math.PI * 2 * 12) / numberOfObjects),
                ]}/>

        <EmpireState
            position={[
                10 + R * Math.cos( (Math.PI * 2 * 12) / numberOfObjects),
                0.8,
                10 + R * Math.sin( (Math.PI * 2 * 12) / numberOfObjects),
                ]}/>
        <FlatironBuilding
            position={[
                R * Math.cos( (Math.PI * 2 * 11.95) / numberOfObjects),
                0.8,
                R * Math.sin( (Math.PI * 2 * 12.1) / numberOfObjects),
                ]}/>

{/* BRAZIL */}
        <Cristo_Reder
            position={[
                R * Math.cos( (Math.PI * 2 * 13) / numberOfObjects),
                0.8,
                R * Math.sin( (Math.PI * 2 * 13) / numberOfObjects),
                ]}/>

{/* MEXICO */}
        <MesoamericanPyramid
            position={[
                (R - 12 ) * Math.cos( (Math.PI * 2 * 13.8) / numberOfObjects),
                0.8,
                (R - 40 ) * Math.sin( (Math.PI * 2 * 13.8) / numberOfObjects),
                ]}/>


{/* EGYPT */}
        <Pyramid 
            position={[
                R * Math.cos( (Math.PI * 2 * 14) / numberOfObjects),
                0.8,
                (R - 40 ) * Math.sin( (Math.PI * 2 * 15) / numberOfObjects),
                ]}/>
    </group>
  )
}

export default Locations

          /* <WashingtonMonument position={[50, 0.8, 60]}/>
          <TokyoTower position={[-60, 0.8, 60]}/>
          <TheStatueOfLiberty position={[-45, 0.8, 60]}/>
          <TajMahal position={[-25, 0.8, 60]}/>
          <SydneyOperaHouse position={[30, 0.8, 60]}/>
          <Stonehenge position={[0, 0.8, 60]}/>
          <Pyramid position={[60, 0.8, 40]}/>
          <OneWorldTradeCenter position={[40, 0.8, 40]}/>
          <NotreDameDeParis position={[20, 0.8, 40]}/>
          <MesoamericanPyramid position={[-70, 0.8, 40]}/>
          <LondonTower position={[-50, 0.8, 40]}/>
          <FlatironBuilding position={[-35, 0.8, 40]}/>
          <EmpireState position={[-20, 0.8, 40]}/>
          <Cristo_Reder position={[0, 0.8, 40]} />
          <Colosseum position={[70, 0.8, 0]} />
          <CNTower position={[50, 0.8, 0]}/>
          <BurjAl_Arab position={[30, 0.8, 0]}/>
          <Bisa position={[0, 0.8, 0]}/>
          <BurjKhalifa position={[-80, 0.8, 0]}/>
          <WhiteHouse position={[-110, 0.8, 0]}/>
          <ArcDeTriomphe position={[75, 0.5, 100]}/>
          <EifelTower position={[0, 0.5, 100]}/>
          <BigBen position={[-60, 0.5, 0]} visible={true} />
          <Ground changeLocation={changeLocation}/> */
/* eslint-disable react/prop-types */
/* eslint-disable react/no-unknown-property */
import { useSpring, animated } from '@react-spring/three'
import React, { useEffect, useState } from 'react'
import { degToRad, radToDeg } from 'three/src/math/MathUtils'
import { DirectionArrow } from './DirectionArrow'

const Buttons = ({spinRef, changeLocation, }) => {

    const [rightBtn, setRightBtn] = useState(false)
    const [leftBtn, setLeftBtn] = useState(false)

    const { sizeRight, sizeLeft} = useSpring({
        sizeRight: rightBtn ? 1.2: 0.9,
        sizeLeft: leftBtn ? 1.2 : 0.9,
    })
   
    function moveRight() {
        setRightBtn(true)
        setLeftBtn(false)
        spinRef.current.rotation.y += degToRad(-90)
        checkLocation()
      }
      
      function moveLeft() {
        setRightBtn(false)
        setLeftBtn(true)
        spinRef.current.rotation.y -= degToRad(-90)
        checkLocation()
      }

    async function checkLocation(){
        console.log(radToDeg(spinRef.current.rotation.y))
        
        if(spinRef.current.rotation.y === degToRad(-360)){
          spinRef.current.rotation.y = 0
        }
        if(spinRef.current.rotation.y === degToRad(360)){
          spinRef.current.rotation.y = 0
        }
        if(spinRef.current.rotation.y === degToRad(0)){
          return changeLocation("Paris")
          }
      
        if(spinRef.current.rotation.y === degToRad(-90) ||
           spinRef.current.rotation.y === degToRad(90)){
           return changeLocation("London")
          }
      
        if(spinRef.current.rotation.y === degToRad(-180) ||
           spinRef.current.rotation.y ===degToRad(180)){
           return changeLocation("Tokyo")
          }
      
          if(spinRef.current.rotation.y === degToRad(-270) ||
             spinRef.current.rotation.y === degToRad(270)){
            return changeLocation("New York")
          } 
      }

  return (
    <group
    position={[30, 8, 90]}
    rotation={[0, -0.3, 0]} 
    >
        <animated.group scale={sizeLeft}>
            <DirectionArrow rotation={[-Math.PI/2, 0, 0]} position-x={3} onClick={() => moveLeft()} />
        </animated.group>

        <animated.group scale={sizeRight}>
            <DirectionArrow rotation={[Math.PI/2, 0, -Math.PI]} onClick={() => moveRight()} />
        </animated.group>

    </group>
  
   )
}

export default Buttons
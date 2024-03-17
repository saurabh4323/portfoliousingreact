import React, { useRef } from 'react'
import "./parallex.scss"
import {motion, useScroll,useTransform} from "framer-motion"

const Parallex = ({type}) => {
  const ref = useRef()
  const{scrollYProgress}=useScroll({target:ref, offset:["start start","end start"]})

  const yBg=useTransform(scrollYProgress,[0,1],["0%","280%"])
  return (
    <div className="parallax" ref={ref} style={{background:
      type==="services" ? "linear-gradient(180deg,#111132,#0c0c1d)":"linear-gradient(180deg,#111132,#505064)",
    }}>
      <motion.h1 style={{y:yBg}}>{type === "services" ? "What I Do?" : "What I Did?"}</motion.h1>
      <div className="mountain"></div>
      <motion.div style={{y:yBg}} className="planets"></motion.div>
      <motion.div style={{x:yBg}} className="stars"></motion.div>
    </div>
  )
}

export default Parallex;

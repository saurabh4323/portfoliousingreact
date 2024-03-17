import React from 'react'
import "./hero.scss";
import {motion} from "framer-motion";
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { useEffect } from 'react';
const textvariants={
  initial:{
    x:-700,
    opacity:0,
  },
  animate:{
    x:0,
    opacity:1,
    transition:{
      duration:1,
      staggerChildren:0.1,
    }
  }
}
const bvariants = {
  initial: {
    x: 0,
  },
  animate: {
    x: "-220%",  // Corrected from x: "-220%"
    transition: {
      repeat: Infinity,
      repeatType: "mirror",
      duration: 10,
    },
  }
};
const imgvariants = {
  initial: {
    y: 0,
  },
  animate: {
    y: "-220%",  // Corrected from x: "-220%"
    transition: {
     
      duration: 10,
    },
  }
};
const hroAnimationVariants = {
  initial: {
    y: "80vh", // Start from bottom
    x: -150, // Adjust as needed
    width: 600, // Adjust as needed
  },
  animate: {
    y: -125, // Move to the fixed position
    x: -150, // Adjust as needed
    width: 600, // Adjust as needed
    transition: {
      delay: 1, // Delay after text and sliding text animations
      duration: 0.5,
      type: "spring",
      damping: 10,
      stiffness: 70,
    },
  },
  rotate: {
    rotate: 360, // Rotate 360 degrees
    transition: {
      duration: 4, // Every 7 seconds
      ease: "linear", // Linear easing
      loop: Infinity, // Repeat infinitely
    },
  },
};

const vAnimationVariants = {
  initial: {
    y: "-100vh",
    x:-150,
    with:600 // Start from bottom
  },
  animate: {
    y: -15,
    x:-10, // Move to the fixed position
    transition: {
      delay: 1, // Delay after text and sliding text animations
      duration: 0.5,
      type: "spring",
      damping: 10,
      stiffness: 70,
    },
  },
};
const aAnimationVariants = {
  initial: {
    y: "-100vh",
    
    // with:600 // Start from bottom
  },
  animate: {
    y: -5,
    x:-35, // Move to the fixed position
    transition: {
      delay: 1, // Delay after text and sliding text animations
      duration: 0.3,
      type: "spring",
      damping: 10,
      stiffness: 70,
    },
  },
};


const Hero = () => {
  useEffect(() => {
    const rotationInterval = setInterval(() => {
      document.querySelector('.hro').classList.toggle('rotate');
    }, 7000);
    return () => clearInterval(rotationInterval);
  }, []);
  return (
    <div className='hero'>
      <div className="wraper">
      <motion.div className="text" variants={textvariants} initial="initial" animate="animate">
        <motion.h2  variants={textvariants}>Hey! I am</motion.h2>
        <motion.h1  variants={textvariants}>Saurabh Singh</motion.h1>
        <motion.h3  variants={textvariants}>Software Engineer and Web Developer</motion.h3>
        </motion.div>
        <motion.div variants={textvariants} className="btns" initial="initial" animate="animate">
  <Stack spacing={2} direction="row">
    <Button variant="contained"><a href="#Service">Work</a></Button>
    <Button variant="outlined"><a href="#Contact">Contact me</a></Button>
  </Stack>
</motion.div>

        
      </div>
      <motion.div className="slidingtext" variants={bvariants} initial="initial" animate="animate">

         Saurabh singh

        </motion.div>

        <motion.div variants={aAnimationVariants} initial="initial" animate="animate">
  <img className="v1" src="Vector1.png" alt=""/>
</motion.div> 

      
        
       
      <motion.div className="ri" variants={vAnimationVariants} initial="initial" animate="animate">
      <img className="v2" src="Vector2.png" alt=""/>
      
     
      {/* <img className="hro" src="hero.png" alt=""/>   */}
       </motion.div> 
      <motion.div className="hro" variants={hroAnimationVariants} initial="initial" animate="animate">
        <img src="hero.png" alt=""/>
      </motion.div>

      <div className="rot">
       
        <img src="code.png"></img>
        

      </div>
      <div className="rot">
        <img src="atom.png"></img>
        

      </div>
    </div>
  )
}

export default Hero
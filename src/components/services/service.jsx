import React, { useEffect } from 'react';
import "./service.scss";
import Box from './Box';
import { motion, useAnimation } from "framer-motion";
import { useInView } from 'react-intersection-observer';

const Service = () => {
  const { ref, inView } = useInView();
  const controls = useAnimation();

  useEffect(() => {
    if (inView) {
      controls.start("animate");
    } else {
      controls.start("initial");
    }
  }, [controls, inView]);

  const textVariants = {
    initial: {
      x: -700,
      opacity: 0,
    },
    animate: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 1,
        staggerChildren: 0.1,
      }
    }
    
  };
  const extVariants = {
    initial: {
      y: -700,
      opacity: 0,
    },
    animate: {
      y: 15,
      opacity: 1,
      transition: {
        duration: 1.3,
        staggerChildren: 0.1,
      }
    }
    
  };
  const xtVariants = {
    initial: {
      y: 120,
      opacity: 0,
    },
    animate: {
      y: 15,
      opacity: 1,
      transition: {
        duration: 1.3,
        staggerChildren: 0.1,
      }
    }
    
  };
  const tVariants = {
    initial: {
      y: 700,
      opacity: 0,
    },
    animate: {
      y: 15,
      opacity: 1,
      transition: {
        duration: 1.3,
        staggerChildren: 0.1,
      }
    }
    
  };
  

  return (
    <div className="service" ref={ref}>
      <motion.div className="tet" variants={textVariants} initial="initial" animate={controls}>
        <h1>My Awesome </h1>
        <h2>Services</h2>
        <h3>Providing unparalleled customer support and </h3>
        <h4>ongoing maintenance to ensure your success</h4>
      </motion.div>
      <motion.div className="web" variants={extVariants} initial="initial" animate={controls}>
        <Box img="code.png" para="MERN Stack complete" head="Web Developer" />
      </motion.div>
      <motion.div className="prog"  variants={xtVariants} initial="initial" animate={controls}>
        <Box img="coding.png" para="Java developer, DSA in java" head="Programmer" />
      </motion.div>
      <motion.div className="ui"  variants={tVariants} initial="initial" animate={controls}>
        <Box img="ui-ux.png" para="Figma, Sketch, Adobe, Canva" head="UI-UX Designer" />
      </motion.div>
    </div>
  );
};

export default Service;

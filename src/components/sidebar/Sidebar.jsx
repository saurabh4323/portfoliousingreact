import React, { useState } from 'react';
import "./Sidebar.scss";
import Link from './Link';
import Toggle from './Togle';
import {motion} from "framer-motion";

const Sidebar = () => {
  const[open,setOpen]= useState(false);
  const variants={
    open:{
      clipPath: "circle(800px at 50px 50px)",
      transition:{
        type:"spring",
        stiffness:20
      }
    },
    closed: {
      clipPath:"circle(24px at 50px 50px)",
      transition:{
        delay:0.6,
        type:"spring",
        stiffness:300,
        damping:40,

      }
    }
  }




  return (
    <motion.div className="sidebar" animate={open? "open":"closed"}>
            <motion.div className="bg" variants={variants}>
        <Link/>
      </motion.div>
      <Toggle setOpen={setOpen} />
    </motion.div>
  );
};

export default Sidebar;

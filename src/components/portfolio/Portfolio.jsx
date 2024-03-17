import React, { useRef } from 'react';
import "./portfolio.scss";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";

const items = [
  {
    id: 1,
    img: "a.png",
    title: "A Dating Site",
    desc: "My dating site project blends HTML, CSS, and JavaScript with robust backend functionality across 12 pages. Seamlessly navigating user experiences, it bridges connections through intuitive design."
  },
  {
    id: 2,
    img: "d.jpg",
    title: "E-Commerce site",
    desc: "E-Commerce Oasis with HTML, CSS, and JavaScript. Spanning multiple pages and backed by a robust infrastructure, this project merges seamless navigation, stunning design, and efficient backend operations to create an immersive shopping experience ."
  },
  {
    id: 3,
    img: "e.jpg",
    title: "Fun Games",
    desc: " From Tic-Tac-Toe to Rock-Paper-Scissors, these time less favorites are reimagined with dynamic gameplay and intuitive interfaces. Whether you are strategizing moves or testing luck , these games offer endless entertainment"
  },
  {
    
    id: 4,
    img: "bi.png",
    title: "Youtube Clone",
    desc: "A full-fledged YouTube interface clone using HTML and CSS. 🚀✨ Every tab is functional, thumbnails are clickable, and channel logos come to life with a simple click. Dive in, explore, and experience the seamless functionality!"
  },
  {
    id: 5,
    img: "m.jpg",
    title: "Java Projects",
    desc: "The hospital management project lies in SQL, where we've crafted a seamless database experience. Used Java, OOPs, and smart execution handling💡💻"
  },
];

const Single = ({ item }) => {
  const ref = useRef();
  const { scrollYProgress } = useScroll();

  const y = useTransform(scrollYProgress, [0, 1], [-300, 300]);

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

  return (
    <section ref={ref}>
      <motion.div className="container" variants={textVariants} initial="initial" animate="animate">
        <img className="imgpro" src={item.img} alt='' />
        <div className="textcon">
          <h2>{item.title}</h2>
          <h3>{item.desc}</h3>
        </div>
      </motion.div>
    </section>
  );
};

const Portfolio = () => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({ target: ref, offset: ["end end", "start start"] });
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
  });

  return (
    <div className="portfolio" ref={ref}>
      <div className="progress">
        <h1>MY Projects</h1>
        <motion.div style={{ scaleX: scaleX }} className="progressBar"></motion.div>
      </div>
      
      {items.map((item) => (
        
        <Single item={item} key={item.id} />
      ))}
    </div>
  );
};

export default Portfolio;

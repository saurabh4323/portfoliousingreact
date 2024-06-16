import React, { useRef } from "react";
import "./portfolio.scss";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";

const items = [
  {
    id: 1,
    img: "hid.png",
    title: "Real Time Chat",
    desc: " this application is fully mern stack project using socket , authentic also , it show real time chat with nonline offline option , send notification api has been used in it ",
  },
  {
    id: 2,
    img: "sort.png",
    title: "Sorting Visualization",
    desc: "This help to unserstand step by step sorting of array element using dsa bubble sorting term. It will help beginner to learn and understand . made using reactJs ",
  },
  {
    id: 3,
    img: "a.png",
    title: "A Dating Site",
    desc: "My dating site project blends HTML, CSS, and JavaScript with robust backend functionality across 12 pages. Seamlessly navigating user experiences, it bridges connections through intuitive design.",
  },
  {
    id: 4,
    img: "d.jpg",
    title: "E-Commerce site",
    desc: "E-Commerce Oasis with HTML, CSS, and JavaScript. Spanning multiple pages and backed by a robust infrastructure, this project merges seamless navigation, stunning design, and efficient backend operations to create an immersive shopping experience .",
  },
  {
    id: 5,
    img: "e.jpg",
    title: "Fun Games",
    desc: " From Tic-Tac-Toe to Rock-Paper-Scissors, these time less favorites are reimagined with dynamic gameplay and intuitive interfaces. Whether you are strategizing moves or testing luck , these games offer endless entertainment",
  },
  {
    id: 6,
    img: "bi.png",
    title: "Youtube Clone",
    desc: "A full-fledged YouTube interface clone using HTML and CSS. 🚀✨ Every tab is functional, thumbnails are clickable, and channel logos come to life with a simple click. Dive in, explore, and experience the seamless functionality!",
  },
  {
    id: 7,
    img: "m.jpg",
    title: "Java Projects",
    desc: "The hospital management project lies in SQL, where we've crafted a seamless database experience. Used Java, OOPs, and smart execution handling💡💻",
  },
  {
    id: 8,
    img: "quote.png",
    title: "Quote Gen",
    desc: "A dynamic quote display that serves up fresh motivation with every click! Bonus: Hit the 'Tweet Now' button for an automatic quote tweet ",
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
      },
    },
  };

  return (
    <section ref={ref}>
      <motion.div
        className="container"
        variants={textVariants}
        initial="initial"
        animate="animate"
      >
        <img className="imgpro" src={item.img} alt="" />
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

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["end end", "start start"],
  });
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
  });

  return (
    <div className="portfolio" ref={ref}>
      <div className="progress">
        <h1>MY Projects</h1>
        <motion.div
          style={{ scaleX: scaleX }}
          className="progressBar"
        ></motion.div>
      </div>
      <a
        href="https://github.com/saurabh4323?tab=repositories"
        target="_blank"
        rel="noopener noreferrer"
      >
        {items.map((item) => (
          <Single item={item} key={item.id} />
        ))}
      </a>
    </div>
  );
};

export default Portfolio;

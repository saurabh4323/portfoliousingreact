import React, { useEffect, useState } from 'react';
import { motion } from "framer-motion";

const Cursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const mouseMoveHandler = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", mouseMoveHandler);

    return () => {
      window.removeEventListener("mousemove", mouseMoveHandler);
    };
  }, []);

  return (
    <motion.div className="cursor" animate={{ x: position.x, y: position.y }} />
  );
};

export default Cursor;

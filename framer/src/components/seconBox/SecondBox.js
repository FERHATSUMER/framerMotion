import { useState } from "react";
import { motion } from "framer-motion";
const SecondBox = () => {
  const [animated, setAnimated] = useState(false);

  return (
    <div className="box-container">
      <motion.div
        className="box"
        animate={{
          x: animated ? 200 : 0,
          opacity:animated ? 1 : 0.8,
          scale:animated? 1.5 : 0.3 , //büyüklük
          rotate: animated ? 270 : 1, //döndürme
          backgroundColor: "rgb(255, 0, 0)",
        }}
        initial={{
          x: 0,
          opacity: 0,
          backgroundColor: "rgb(0, 0, 255)",
        }}
        transition={{
          onclick: () => setAnimated(!animated),
        }}
      ></motion.div>
    </div>
  );
};

export default SecondBox;

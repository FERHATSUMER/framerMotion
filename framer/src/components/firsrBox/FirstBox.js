import { motion } from "framer-motion";
const FirstBox = () => {
  return (
    <div className="box-container">
      <motion.div className="box"
        //son değerler
      animate={{
        x: 200,
        opacity: 1,
        scale: 1.5, //büyüklük
        rotate: 270, //döndürme
        backgroundColor: "rgb(255, 0, 0)",
      }}
      //başlangıç değerleri
      initial={{
        x: -2000,
        opacity: 0,
        backgroundColor: "rgb(0, 0, 255)",
        }}
        transition={{
            type: "spring", //animasyonun tipi
            damping: 10, //sallanma hızı
            stiffness: 100, //sallanma
        }}
      >
      </motion.div>
    </div>
  );
};

export default FirstBox;

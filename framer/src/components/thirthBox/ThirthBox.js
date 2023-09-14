import { motion } from "framer-motion"
const ThirthBox = () => {
  return (
    <div className="box-container">
      <motion.div
        className="box"
     whileHover={{  //mouse üzerine gelince
            scale: 1.5, //büyüklük
     }}
     drag //sürükleme
        dragConstraints={{ //sürükleme sınırları
            top: -50,
            left: -50,
            right: 50,
            bottom: 50,
        }}
        whileTap={{  //tıkladığımızda
            scale: 0.5, //büyüklük
            rotate: -90, //döndürme
            borderRadius: "100%", //köşeleri yuvarlama
        }}
      ></motion.div> 
    </div>
  )
}

export default ThirthBox

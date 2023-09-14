import { motion } from "framer-motion";
const FourthBox = () => {
  return (
    <div className="box-container">
    <motion.div
      className="box"
        animate={{ //animasyon
         scale: [1, 2, 2, 1, 1], //büyüklük
         borderRadius: ["20%", "20%", "50%", "50%", "20%"], //köşeleri yuvarlama
         rotate: [0, 0, 270, 270, 0], //döndürme
        }}
        transition={{ //geçiş
            duration: 2, //süre
        }}
    ></motion.div> 
  </div>
  )
}

export default FourthBox

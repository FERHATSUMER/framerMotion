import { motion } from "framer-motion";
const FivethBox = () => {
  const boxVariants = {
    hidden: {
      opacity: 1,
      scale: 0,
    },
    visible: {
      opacity: 1,
      scale: 1,
    },
  };
  const liVariants = {
    hidden: {
      opacity: 0,
      x: 20,
    },
    visible: {
      opacity: 1,
      x: 0,
      transitation: {
        delayChildren: 1, // delay children by 1 seconds
        staggerChildren: 0.5, // stagger children by 0.5 seconds
        duration: 2, // duration of transitation
    },
    },
  };
  return (
    <div>
      <motion.div className="box"
        variants={boxVariants}
        initial="hidden"
        animate="visible"
      >
{
    [1,2,3,4,5].map((item) => (
        <motion.li className="box-item"
        variants={liVariants}
        initial="hidden"
        animate="visible"
        >
            {item}
        </motion.li>
    ))
}

      </motion.div>
    </div>
  );
};

export default FivethBox;

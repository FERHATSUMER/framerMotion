import { motion,useAnimation } from "framer-motion";
const SixthBox = () => {
    const controls = useAnimation();
  return (
    <div className="box-container">
    <button className="box-button"
    onClick={() => {controls.start(
        {x: 100,
        transition: {duration: 2}
        }

    )}}
    >Right</button>
    <button className="box-button"
    onClick={() => {controls.start(
        {x:-100,
        transition: {duration: 2}
        }

    )}}
    >Left</button>
    <button className="box-button"
    onClick={() => {controls.start(
        {borderRadius: "50%",
        transition: {duration: 2}
        }

    )}}
    >Cicle</button>
    <button className="box-button"
    onClick={() => {controls.start(
        {borderRadius: "100%",
        transition: {duration: 2}
        }

    )}}
    >Square</button>
    <motion.div className="box"
    animate={controls}
    >
    </motion.div>
  </div>
  )
}

export default SixthBox

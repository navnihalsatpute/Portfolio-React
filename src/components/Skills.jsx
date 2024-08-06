import { RiReactjsLine } from "react-icons/ri"
import { TiHtml5 } from "react-icons/ti";
import { FaCss3Alt } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { DiDjango } from "react-icons/di";
import { motion } from "framer-motion";

const iconVariants = (duration) => ({
    initial: {y:-10},
    animate: {
        y: [10, -10],
        transition: {
            duration: duration,
            ease: "linear",
            repeat: Infinity,
            repeatType: "reverse",
        },
    },
});

const Skills = () => {
  return (
      <div id="skills" className="border-b border-neutral-800 pb-24">
        <motion.h2 
        whileInView={{opacity:1, y:0}}
        initial={{opaicty: 0, y:-100}}
        transition={{duration: 0.5}}
        className="my-20 text-center text-4xl">Skills</motion.h2>
        <motion.div 
        whileInView={{opacity: 1, x:0}}
        initial={{x:-100, opacity: 0}}
        transition={{duration: 1.5}}
        className="flex flex-wrap items-center justify-center gap-4">
            <motion.div 
            variants={iconVariants(2.5)}
            initial="initial"
            animate="animate"
            className="rounded-2xl border-4 border-neutral-800 p-4">
                  <TiHtml5 className="text-7xl text-red-400" />
            </motion.div>
            <motion.div 
                  variants={iconVariants(3)}
                  initial="initial"
                  animate="animate"
            className="rounded-2xl border-4 border-neutral-800 p-4">
                  <FaCss3Alt className="text-7xl text-blue-400" />
            </motion.div>
            <motion.div 
                  variants={iconVariants(5)}
                  initial="initial"
                  animate="animate"
            className="rounded-2xl border-4 border-neutral-800 p-4">
                  <IoLogoJavascript className="text-7xl text-yellow-400" />
            </motion.div>
            <motion.div 
                  variants={iconVariants(2)}
                  initial="initial"
                  animate="animate"
            className="rounded-2xl border-4 border-neutral-800 p-4">
                  <RiReactjsLine className="text-7xl text-cyan-400" />
            </motion.div>
            <motion.div 
                  variants={iconVariants(4)}
                  initial="initial"
                  animate="animate"
            className="rounded-2xl border-4 border-neutral-800 p-4">
                  <DiDjango className="text-7xl text-green-500" />
            </motion.div>
        </motion.div>
    </div>
  )
}

export default Skills
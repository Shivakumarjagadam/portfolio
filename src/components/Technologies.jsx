import {RiReactjsLine} from "react-icons/ri";
import { RiNextjsLine } from "react-icons/ri";
import { SiMongodb } from "react-icons/si";
import { SiMysql } from "react-icons/si";
import { FaBootstrap } from "react-icons/fa6";
import {motion} from "motion/react";

const iconVariants =(duration) =>({
  initial:{y:-100},
  animate:{
    y:[10,-10],
    transition:{
      duration: duration,
      ease:"linear",
      repeat:Infinity,
      repeatType:"reverse",
    }
  }

}
)
const Technologies = ()=>{
  return (
    <div id="technologies" className="border-b border-neutral-900">
      <motion.h1
      whileInView={{opacity:1,y:0}}
      initial={{opacity:0,y:-100}}
      transition={{duration:1.5}}
      className="my-20 text-center text-4xl">Technologies</motion.h1>
      <motion.div 
      whileInView={{opacity:1,x:0}}
      initial={{opacity:0,x:-100}}
      transition={{duration:1.5}}
      className="flex flex-wrap justify-center items-center gap-5">
        <motion.div
         variants={iconVariants(2.5)}
         initial="initial"
         animate="animate"
        className="rounded-2xl  border-4 border-neutral-800 p-4">
          <RiReactjsLine className="text-7xl text-cyan-400"/>
        </motion.div>

        <motion.div
         variants={iconVariants(3)}
         initial="initial"
         animate="animate"
        className="rounded-2xl  border-4 border-neutral-800 p-4">
          <RiNextjsLine className="text-7xl "/>
        </motion.div>

        <motion.div
         variants={iconVariants(3.5)}
         initial="initial"
         animate="animate"
        className="rounded-2xl  border-4 border-neutral-800 p-4">
          <SiMongodb className="text-7xl text-green-500"/>
        </motion.div>

        <motion.div
         variants={iconVariants(2.5)}
         initial="initial"
         animate="animate"
        className="rounded-2xl  border-4 border-neutral-800 p-4">
        <SiMysql className="text-7xl text-[#00618A]" />
        </motion.div>

        <motion.div
         variants={iconVariants(3.5)}
         initial="initial"
         animate="animate"
        className="rounded-2xl border-4 border-neutral-800 p-4">
           <FaBootstrap className="text-7xl text-[#7952B3]" />
        </motion.div>

        
        
      </motion.div>
    </div>

  );
}

export default Technologies;
import {EXPERIENCES} from "../constants";
import {motion} from "motion/react";
const Experiences = () =>{

return (
  <div id="experience" className="border-b border-neutral-900 pb-4 ">
    <motion.h1
    whileInView={{opacity:1,y:0}}
    initial={{opacity:0,y:-100}}
    transition={{duration:0.5}}
    className="text-center my-20 text-4xl">Experiences</motion.h1>
    
    <div >
      {EXPERIENCES.map((experience,index)=>(
          <div key={index} className="mb-8 flex flex-wrap lg:justify-center">
            <motion.div
            initial={{opacity:0,x:-100}}
            whileInView={{opacity:1,x:0}}
            transition={{duration:1}}
            className="w-full lg:w-1/4">
              <p className="mb-2 text-neutral-400 text-sm">{experience.year}</p>
            </motion.div>

            <motion.div
            initial={{opacity:0,x:100}}
            whileInView={{opacity:1,x:0}}
             transition={{duration:1}}
            className="w-full max-w-xl lg:w-3/4">
              <h6 className="mb-2 font-semibold">{experience.role} -{" "}
                <span className="text-sm text-purple-100">{experience.company}</span>
              </h6>
              <p className="mb-4 text-neutral-400">{experience.description}</p>
              {experience.technologies.map((tech,index) =>(
                <span key={index} className="mr-2 mt-4 px-2 py-1  rounded bg-neutral-900 text-purple-600 font-medium text-sm ">{tech}</span>
              ))}
            </motion.div>

          </div>  
      ))}
    </div>
  
  </div>

);
}

export default Experiences;
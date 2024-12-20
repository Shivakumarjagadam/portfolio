import {PROJECTS} from "../constants";
import {motion} from "motion/react";

const Projects = ()=>{
  

  return (
  <div id="projects" className="border-b  border-neutral-900  pb-4">
    <motion.h1 
    initial={{opacity:0,y:-100}}
    whileInView={{opacity:1,y:0}}
    transition={{duration:0.5}}
    className="text-center text-4xl my-20">Projects</motion.h1>
    <div>
      {PROJECTS.map((projects,index)=>(
      <div  key={index} className="flex flex-wrap lg:justify-center mb-8">
        <motion.div
        initial={{opacity:0,x:-100}}
        whileInView={{opacity:1,x:0}}
        transition={{duration:1}}
        className="w-full lg:w-1/4">
          <img src={projects.image} 
          width={150}
          height={150}
          className="rounded mb-6"
          alt={projects.title} />
        </motion.div>

        <motion.div 
        initial={{opacity:0,x:100}}
        whileInView={{opacity:1,x:0}}
        transition={{duration:1}}
        className="w-ful max-w-xl lg:w-3/4 ">
            <h6 className="mb-2 font-semibold">{projects.title}</h6>
            <p className="m-4 text-neutral-400">{projects.description}</p>
            {projects.technologies.map((techstack,index)=>(
                 <span key={index} className="mr-2 mt-4 px-2 py-1  rounded bg-neutral-900 text-purple-600 font-medium text-sm ">{techstack}</span>
            ))}
        </motion.div>
      </div>

      ) )}
    </div>
  </div>

  );
}
export default Projects;
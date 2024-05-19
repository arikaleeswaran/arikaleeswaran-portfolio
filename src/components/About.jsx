import aboutImg from "../assets/about.jpg"
import { ABOUT_TEXT } from "../constants"
import { motion } from "framer-motion"
import leetcode from "../assets/leetcode.png";
import linkedin from "../assets/linkedin.png";
import github from "../assets/github.png";
import codechef from "../assets/codechef.jpg";
import codeforce from "../assets/codeforce.png";


const iconVariants=(duration)=>({
    initial:{y:-10},
    animate:{
        y:[10,-10],
        transition:{
            duration: duration,
            ease:"linear",
            repeat:Infinity,
            repeatType:"reverse",
        }
    }
})
const About = () => {
  return (
    <div className="border-b border-neutral-900 pb-4" id="about">
        <motion.h2 
        whileInView={{opacity:1, y:0}}
        initial={{opacity:0,y:100}}
        transition={{duration:1.5}}className="my-10 text-center text-4xl">About <span className="text-neutral-500">Me</span></motion.h2>
        <div className="flex flex-wrap">
            <motion.div 
            whileInView={{opacity:1, x:0}}
            initial={{opacity:0, x:-100}}
            transition={{duration:1.5}}
            className="w-full lg:w-1/2 lg:p-8">
                <div className="flex item-center justify-center"> 
                    <img className="rounded-2xl w-56 h-56 sm:w-80 sm:h-80 md:w-96 md:h-96 lg:w-96 lg:h-96" src={aboutImg} alt="about" />
                </div>
            </motion.div>
            <motion.div 
            whileInView={{opacity:1, x:0}}
            initial={{opacity:0,x:100}}
            transition={{duration:1.5}}
            className="w-full lg:w-1/2">
                    <div className="flex justify-center  lg:justify-start">
                        <p className="my-2 max-w-xl py-6 font-light tracking-wide ">{ABOUT_TEXT}</p>
                    </div>
                    <div className="flex flex-wrap items-center justify-center lg:justify-start  gap-4 p-8">
                        <motion.a 
                        whileHover={{ scale: 1.1 }}
                        variants={iconVariants(2.5)}
                        initial="initial"
                        animate="animate"
                        href="https://leetcode.com/u/arikaleeswaran/" className="rounded-2xl border-2 border-neutral-400 white p-4" target="_blank" rel="noopener noreferrer">
                            <img className="rounded-xl w-20 h-20 object-contain" src={leetcode} alt="about" />
                        </motion.a>
                        <motion.a 
                        whileHover={{ scale: 1.1 }}
                        variants={iconVariants(3)}
                        initial="initial"
                        animate="animate"
                        href="https://linkedin.com/in/arikaleeswaran" className="rounded-2xl border-2 border-neutral-400 white p-4" target="_blank" rel="noopener noreferrer">
                            <img className="rounded-xl w-20 h-20 object-contain" src={linkedin} alt="about" />
                        </motion.a>
                        <motion.a 
                        whileHover={{ scale: 1.1 }}
                        variants={iconVariants(2.5)}
                        initial="initial"
                        animate="animate"
                        href="https://github.com/arikaleeswaran" className="rounded-2xl border-2 border-neutral-400 p-4" target="_blank" rel="noopener noreferrer">
                            <img className="rounded-xl w-20 h-20 object-contain" src={github} alt="about" />
                        </motion.a>
                        <motion.a 
                        whileHover={{ scale: 1.1 }}
                        variants={iconVariants(3)}
                        initial="initial"
                        animate="animate"
                        href="https://www.codechef.com/users/arikaleeswaran" className="rounded-2xl border-2 border-neutral-400 p-4" target="_blank" rel="noopener noreferrer">
                            <img className="rounded-xl w-20 h-20 object-contain" src={codechef} alt="about" />
                        </motion.a>
                        <motion.a 
                        whileHover={{ scale: 1.1 }}
                        variants={iconVariants(2.5)}
                        initial="initial"
                        animate="animate"
                        href="https://codeforces.com/profile/arikaleeswaran" className="rounded-2xl border-2 border-neutral-400 p-4" target="_blank" rel="noopener noreferrer">
                            <img className="rounded-xl w-20 h-20 object-contain" src={codeforce} alt="about" />
                        </motion.a>    
                    </div>
            </motion.div>
        </div>
    </div>
  )
}

export default About
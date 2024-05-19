
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { byPrefixAndName } from '@awesome.me/kit-KIT_CODE/icons'

import './Technologies.css';
import { TiHtml5 } from "react-icons/ti";
import { RiReactjsLine } from "react-icons/ri"
import { FaNodeJs } from "react-icons/fa"
import { BiLogoPostgresql } from "react-icons/bi"
import { SiExpress } from "react-icons/si";
import { SiMysql } from "react-icons/si";
import { IoLogoCss3 } from "react-icons/io";
import { IoLogoJavascript } from "react-icons/io5";
import { FaJava } from "react-icons/fa6";
import { FaPython } from "react-icons/fa";
import { VscVscode } from "react-icons/vsc";
import { TbCircleLetterCFilled } from "react-icons/tb";
import { FaGitAlt } from "react-icons/fa";
import figma from '../assets/figma.png';
import java from '../assets/java.png';
import { FaGithub } from "react-icons/fa";
import { motion } from "framer-motion"

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
const Technologies = () => {
  return (
    <div className="border-b border-neutral-800 pb-24" id='skill'>
        <motion.h1
        whileInView={{opacity:1, y:0}}
        initial={{opacity:0,y:-100}}
        transition={{duration:1.5}}
        className="my-20 text-center text-4xl">Skills & Tools</motion.h1>
        <motion.div 
        whileInView={{opacity:1,x:0}}
        initial={{opacity:0, x:-100}}
        transition={{duration:1.5}}
        className="flex flex-wrap items-center justify-center gap-4">
            
            <motion.div 
            variants={iconVariants(2.5)}
            initial="initial"
            animate="animate"
            className="rounded-2xl border-4 border-neutral-800 p-4">
                <img className="w-16 h-16 object-contain" src={java} alt="Figma"/>
            </motion.div>
            <motion.div 
             variants={iconVariants(3)}
             initial="initial"
             animate="animate"
             className="rounded-2xl border-4 border-neutral-800 p-3 ">
                <FaPython className="text-7xl text-python-blue"/>  
            </motion.div>
            <motion.div
             variants={iconVariants(2.5)}
             initial="initial"
             animate="animate"
            className="rounded-2xl border-4 border-neutral-800 p-3">
                <TbCircleLetterCFilled className="text-7xl text-blue-800"/>  
            </motion.div>
            <motion.div  
            variants={iconVariants(3)}
            initial="initial"
            animate="animate"
            className="rounded-2xl border-4 border-neutral-800 p-3">
                <TiHtml5 className="text-7xl text-orange-700"/>  
            </motion.div>
            <motion.div 
             variants={iconVariants(2.5)}
             initial="initial"
             animate="animate"
            className="rounded-2xl border-4 border-neutral-800 p-3">
                <IoLogoCss3 className="text-7xl text-blue-700"/>  
            </motion.div>
            <motion.div 
             variants={iconVariants(3)}
             initial="initial"
             animate="animate"
            className="rounded-2xl border-4 border-neutral-800 p-3">
                <RiReactjsLine className="text-7xl text-cyan-400"/>  
            </motion.div>
            <motion.div 
             variants={iconVariants(2.5)}
             initial="initial"
             animate="animate"
            className="rounded-2xl border-4 border-neutral-800 p-3">
                <IoLogoJavascript className="text-7xl text-yellow-400"/>  
            </motion.div>
            <motion.div 
             variants={iconVariants(3)}
             initial="initial"
             animate="animate"
            className="rounded-2xl border-4 border-neutral-800 p-3">
                <FaNodeJs className="text-7xl text-green-500"/>  
            </motion.div>
            <motion.div 
             variants={iconVariants(2.5)}
             initial="initial"
             animate="animate"
            className="rounded-2xl border-4 border-neutral-800 p-3">
                <BiLogoPostgresql className="text-7xl text-sky-700"/>  
            </motion.div>
            <motion.div 
             variants={iconVariants(3.5)}
             initial="initial"
             animate="animate"
            className="rounded-2xl border-4 border-neutral-800 p-3">
                <SiExpress className="text-7xl"/>  
            </motion.div>
            <motion.div 
             variants={iconVariants(2.5)}
             initial="initial"
             animate="animate"
            className="rounded-2xl border-4 border-neutral-800 p-3">
                <SiMysql className="text-7xl"/>  
            </motion.div>
            <motion.div 
             variants={iconVariants(3)}
             initial="initial"
             animate="animate"
            className="rounded-2xl border-4 border-neutral-800 p-3">
                <VscVscode className="text-7xl text-blue-800"/>  
            </motion.div>
            <motion.div 
             variants={iconVariants(2.5)}
             initial="initial"
             animate="animate"
            className="rounded-2xl border-4 border-neutral-800 p-3">
                <FaGitAlt className="text-7xl text-red-800"/>  
            </motion.div>
            <motion.div 
             variants={iconVariants(3)}
             initial="initial"
             animate="animate"
            className="rounded-2xl border-4 border-neutral-800 p-3">
                <FaGithub className="text-7xl text-black-800"/>  
            </motion.div>
            <motion.div 
             variants={iconVariants(2)}
             initial="initial"
             animate="animate"
            className="rounded-2xl border-4 border-neutral-800 p-4">
                <img className="w-16 h-16 object-contain" src={figma} alt="Figma"/>
            </motion.div>

        </motion.div>
    </div>
  )
}

export default Technologies
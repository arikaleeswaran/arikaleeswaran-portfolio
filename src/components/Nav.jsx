
import { BiHomeAlt, BiUser } from "react-icons/bi";
import { BiBriefcase } from "react-icons/bi";
import { BsChatSquare } from "react-icons/bs";
import { MdMiscellaneousServices } from "react-icons/md";
import { motion } from "framer-motion"

import {Link} from 'react-scroll';

const Nav = () => {
  return (
    <nav className="fixed bottom-2 lg:bottom-8 w-full overflow-hidden z-50 ">
    <div className='container mx-auto'>
        <div className=' w-full bg-black/10 h-[66px] backdrop-blur-xl rounded-full max-w-[460px] mx-auto px-5 flex justify-between text-2xl items-center text-white/50 border border-red-500'>
            <motion.div whileHover={{ scale: 1.1 }}>
                <Link to="home" smooth={true} duration={500} className='cursor-pointer w-[60px] h-[60px] flex items-center justify-center  hover:bg-cyan-600 rounded-full '>
                    <BiHomeAlt/>
                </Link>
            </motion.div>
            <motion.div whileHover={{ scale: 1.1 }}>
                <Link to="about" smooth={true} duration={500} className='cursor-pointer w-[60px] h-[60px] flex items-center justify-center  hover:bg-cyan-600 rounded-full'>
                    <BiUser/>
                </Link>
            </motion.div>
            <motion.div whileHover={{ scale: 1.1 }}>
                <Link to="skill" smooth={true} duration={500} className='cursor-pointer w-[60px] h-[60px] flex items-center justify-center  hover:bg-cyan-600 rounded-full'>
                    <MdMiscellaneousServices/>
                </Link>
            </motion.div>
            <motion.div whileHover={{ scale: 1.1 }}>
                <Link to="experiences" smooth={true} duration={500} className='cursor-pointer w-[60px] h-[60px] flex items-center justify-center  hover:bg-cyan-600 rounded-full'>
                    <BiBriefcase/>
                </Link>
            </motion.div>
            <motion.div whileHover={{ scale: 1.1 }}>
            <Link  to="contact" smooth={true} duration={500} className='cursor-pointer w-[60px] h-[60px] flex items-center justify-center  hover:bg-cyan-600 rounded-full'>
                    <BsChatSquare/>
                </Link>
            </motion.div>
        </div>
    </div>
    </nav>
  )
}

export default Nav
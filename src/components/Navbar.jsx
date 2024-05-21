import logo from "../assets/ak.png"
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";


const Navbar = () => {
  return (
    <nav className=" mb-10 flex items-center justify-between py-2" id="home">
        <div className="flex flex-shrink-0 items-center">
            <img className="mx-1 w-10" src={logo} alt="logo" />
        </div>
        <div className="my-8 mx-0 flex items-center justify-center gap-4 text-2xl">
              <a href="http://www.linkedin.com/in/arikaleeswaran" target="_blank" rel="noopener noreferrer">
                  <FaLinkedin />
              </a>
              <a href="https://github.com/arikaleeswaran" target="_blank" rel="noopener noreferrer">
                  <FaGithub />
              </a>
              <a href="https://www.instagram.com/arikaleeswaran/" target="_blank" rel="noopener noreferrer">
                  <FaInstagram />
              </a>
        </div>
    </nav>
  )
}

export default Navbar
import About from "./components/About"
import Contact from "./components/Contact"
import Experiences from "./components/Experiences"
import Footer from "./components/Footer"
import Hero from "./components/Hero"
import Nav from "./components/Nav"
import Navbar from "./components/Navbar"
import Projects from "./components/Projects"
import Technologies from "./components/Technologies"

const App = () => {
  return (
    <div className="overflow-x-hidden text-neutral-300 antialiased selection:bg-cyan-300 selection:text-cyan-900">
      <div className="fixed top-0 -z-10 h-full w-full">
      <div className="absolute inset-0 -z-10 h-full w-full items-center px-5 py-24 [background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)]"></div>
      </div>
      <div className="container mx-auto px-8">
      
      <Nav/>
      <Navbar/>
      <Hero/>
      <About/>
      <Technologies/>
      <Experiences/>
      <Projects/>
      <Contact/>
      <Footer/>
      
      </div>
    
    </div>
    
  )
}

export default App
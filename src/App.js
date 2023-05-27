import About from "./components/About";
import Achievements from "./components/Achievements";
import Contact from "./components/Contact";
import Experience from "./components/Experience";
import Home from "./components/Home";
// import Particle from "./components/Particles/Particle";
import Tech from "./components/Tech";
import Project from "./components/Project";

function App() {
  return (
    <>    
    {/* <div className="-z-100 fixed">
      <Particle />
    </div> */}
      <div className="z-100 absolute">
      <Home />
      <About />
      <Tech />      
      <Experience />  
      <Achievements />        
      <Project />
      <Contact />
      </div>      
    </>    
  );
}

export default App;

import React, {useEffect} from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import NavBar from "./components/NavBar";
import OverView  from "./components/OverView";
import Contact from './components/Contact';
import Education from './components/Education';
import Skills from "./components/Skills";
import Projects from './components/Projects';
import About from "./components/About";
import jsonData from './assets/info.json';
import Footer from "./components/Footer";
const App = ()=>{
  useEffect(
    ()=>{
      AOS.init({
        duration:2000,
        once:false,
        offset:100
      });

    },[]);
  return (
    <div className="bg-[#111827] min-h-screen">
      <NavBar />
      <OverView />
      <About />
      <Education educationData={jsonData.education}/>
      <Skills skillsData={jsonData.skills}/>
      <Projects projectsData={jsonData.projects}/>
      <Contact />
      <Footer />
    </div>
  )
}
export default App;
import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import NavBar from "./components/NavBar";
import OverView from "./components/OverView";
import Contact from './components/Contact';
import Education from './components/Education';
import Skills from "./components/Skills";
import Projects from './components/Projects';
import About from "./components/About";
import Footer from "./components/Footer";
import Certifications from "./components/Certification";
const App = () => {
  const [jsonData, setJsonData] = useState(null);

  useEffect(() => {
    AOS.init({
      duration: 2000,
      once: false,
      offset: 100,
    });

    const fetchData = async () => {
      try {
        const response = await fetch(
          `${import.meta.env.BASE_URL}info.json`
        );

        if (!response.ok) {
          throw new Error(`HTTP error: ${response.status}`);
        }

        const data = await response.json();
        setJsonData(data);
      } catch (error) {
        console.error("Error loading info.json:", error);
      }
    };

    fetchData();
  }, []);

  if (!jsonData) {
    return (
      <div className="bg-[#111827] min-h-screen flex items-center justify-center text-white">
        Loading...
      </div>
    );
  }

  return (
    <div className="bg-[#111827] min-h-screen">
      <NavBar />
      <OverView />
      <About />

      <Education educationData={jsonData.education} />
      <Certifications certificationsData={jsonData.certifications}/>
      <Skills skillsData={jsonData.skills} />

      <Projects filter_list={jsonData.projects_info["filter-list"]} projectsData={jsonData.projects_info["projects"]} />

      <Contact />
      <Footer />
    </div>
  );
};
export default App;
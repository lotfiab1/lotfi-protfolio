import React,{useState} from 'react';
import { ChevronRight, ArrowRight } from 'lucide-react';
import { FaGithub } from 'react-icons/fa';

const Projects = ({projectsData}) => {


  return (
    <section id='projects' className='py-16 bg-gray-900'>
        <div className="container mx-auto px-6 lg:px-16 max-w-7xl" data-aos="fade-bottom">
          <div className="mb-10 flex flex-col gap-2">
              <h2 className='text-white text-4xl md:text-5xl font-extrabold'>Projects<span className='text-primary'>.</span></h2>
              <span className="w-1/4 md:w-1/5 lg:w-1/6  h-1 ml-2 md:ml-1.5 lg:ml-1 bg-primary rounded-2xl"></span>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3" data-aos="fade-bottom">
            {
              projectsData.map((project) => (
                <div key={project.id} className="group flex flex-col h-full bg-gray-800 rounded-lg overflow-hidden shadow-sm hover:shadow-lg hover:scale-105 transition-all duration-300">
                  <img src={project.image} alt={project.title} className="w-full h-45 object-cover group-hover:opacity-90 transition-opacity duration-300"/>

                  <div className="relative p-4 flex flex-col flex-1">
                    <h3 className="text-lg font-semibold text-white group-hover:text-primary">
                      {project.title}
                    </h3>

                    <p className="text-gray-400 text-sm mt-1">{project.desc}</p>

                    <div className="flex flex-wrap gap-1.5 mt-3">
                      {project.tech.map((tec, idx) => (
                        <span key={idx} className="text-xs px-2 py-0.5 bg-gray-700 text-gray-300 rounded hover:bg-primary hover:text-white transition-colors duration-300">
                          {tec}
                        </span>
                      ))}
                    </div>

                    <div className="mt-auto flex justify-end pt-4">
                      <div className='flex ml-auto items-center gap-1  lg:invisible group-hover:visible'>
                        <span className='text-gray-400'>Go To Github</span>
                        <a href={project.href} target='_blank' className="bg-[#111a3e] text-white  hover:scale-105 duration-300 inline-block rounded-full" title='rrrrr'>
                          <FaGithub size={28}/>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              ))
            }
          </div>
        </div>
    </section>
  )
}

export default Projects
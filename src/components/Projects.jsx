import React, { useState, useEffect, useRef } from 'react';
import { ChevronRight, ArrowRight } from 'lucide-react';
import { FaGithub, FaChevronDown } from 'react-icons/fa';

const Projects = ({ filter_list, projectsData }) => {
  const [isDropDown, setDropDown] = useState(false);
  const [default_idx, setDefaultIdx] = useState(0);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropDown(false);
      }
    };

    if (isDropDown) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isDropDown]);
  return (
    <section id='projects' className='relative py-16 bg-gray-900'>

      <div className="relative container mx-auto px-6 lg:px-16 max-w-7xl" data-aos="fade-bottom">
        <div className='relative flex flex-col pb-40 md:flex-row justify-between items-baseline'>
          <div className="mb-10 flex flex-col gap-2 m-[0_auto] md:m-0">
            <h2 className='text-white text-4xl md:text-5xl font-extrabold'>Projects<span className='text-primary'>.</span></h2>
            <span className="w-2/3 md:w-4/6 h-1 bg-primary rounded-2xl"></span>
          </div>


          <div ref={dropdownRef} className="relative mt-2 block self-center">
            <button onClick={() => setDropDown(!isDropDown)} className='relative flex items-center w-60 cursor-default rounded-md bg-white px-4 py-2 text-gray-900 outline-1 -outline-offset-1 outline-gray-300 focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-indigo-600 sm:text-sm/6 dark:bg-white/5 dark:text-white dark:outline-white/10 dark:focus-visible:outline-indigo-500 '>
              <div className='col-start-1 row-start-1 flex'>
                <span className='text-sm '>{filter_list[default_idx]}</span>
              </div>
              <svg viewBox="0 0 16 16" fill="currentColor" data-slot="icon" aria-hidden="true" className="col-start-1 row-start-1 size-5 ml-auto text-gray-500 sm:size-4 dark:text-gray-400">
                <path d="M5.22 10.22a.75.75 0 0 1 1.06 0L8 11.94l1.72-1.72a.75.75 0 1 1 1.06 1.06l-2.25 2.25a.75.75 0 0 1-1.06 0l-2.25-2.25a.75.75 0 0 1 0-1.06ZM10.78 5.78a.75.75 0 0 1-1.06 0L8 4.06 6.28 5.78a.75.75 0 0 1-1.06-1.06l2.25-2.25a.75.75 0 0 1 1.06 0l2.25 2.25a.75.75 0 0 1 0 1.06Z" clip-rule="evenodd" fill-rule="evenodd" />
              </svg>
            </button>
            {
              isDropDown && (
                <div className='absolute w-full right-0 top-11 bg-white rounded-lg flex flex-col py-2 px-0 z-50' >

                  {
                    filter_list.map((elm, idx) => (
                      <div onClick={() => { setDropDown(false); setDefaultIdx(idx); }} className='group text-center w-full block cursor-default py-2 text-gray-900 select-none hover:bg-indigo-600 focus:text-white focus:outline-hidden dark:text-white dark:focus:bg-indigo-500'>
                        <span className='text-sm'>{elm}</span>
                      </div>
                    ))
                  }
                </div>
              )
            }

          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3" data-aos="fade-bottom">
          {
            projectsData.map((project) => (
              (project.cat == default_idx || default_idx == 0) && (
                <div key={project.id} className="group flex flex-col h-full bg-gray-800 rounded-lg overflow-hidden shadow-sm hover:shadow-lg hover:scale-105 transition-all duration-300">
                  <img src={`${import.meta.env.BASE_URL}${project.image}`} alt={project.title} className="w-full h-45 object-cover group-hover:opacity-90 transition-opacity duration-300" />

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
                          <FaGithub size={28} />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>)
            ))
          }
        </div>
      </div>

    </section>
  )
}

export default Projects
import React from 'react';

import ic from '/icons/web.png'
const Skills = ({skillsData}) => {
  return (
    <section id='skills' className='text-white py-20 relative overflow-hidden'>
        <div className="max-w-7xl mx-auto px-6 lg:px-16 relative z-10">
          <div className="grid md:grid-cols-1 gap-16 items-start">
            <div data-aos="fade-right">
              <h2 className='text-white text-4xl md:text-5xl font-extrabold mb-12'>Skills<span className='text-primary'>.</span> </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 space-y-6">
                  {
                    skillsData.map((skill)=>{
                      return (
                        <div key={skill.id} className='group'>
                            <div className="flex items-center justify-between mb-2">
                                <div className="flex items-center gap-3">
                                  <div className="p-2 bg-[#111a3e] rounded-lg group-hover:bg-primary transition-colors duration-300 ">
                                      <img src={skill.icon}  width={48} height={48}  alt={skill.name} className="w-12 h-12 object-contain" />
                                  </div>
                                  <span className="font-medium tracking-wide">{skill.name}</span>

                                </div>
                                <span className="text-primary font-bold">{skill.width}</span>
                            </div>
                            <div className='h-2 w-full bg-[#131d30] rounded-full p-0.5 '>
                              <div className='h-full rounded-full bg-linear-to-r from-primary to-cyan-400 shadow-[0_0_10px_#06a2c2]' style={{width:skill.width}}>

                              </div>
                            </div>
                        </div>
                        );
                      }
                    )
                  }
              </div>
            </div>
          </div>
        </div>
    </section>
  )
}

export default Skills
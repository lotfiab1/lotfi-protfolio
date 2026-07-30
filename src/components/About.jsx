import React from 'react';
import me from '../assets/me-2.jpeg';

const About = () => {
  return (
    <section id='about' className='text-white mt-16 relative overflow-hidden'>
        <div className="max-w-7xl mx-auto px-4 md:grid md:grid-cols-2 gap-12 items-center py-16 xl:px-16 relative z-10 ">
          <div data-aos="fade-right">
            <h2 className='text-4xl md:text-5xl font-extrabold text-white mb-15'>
              <span className='text-primary'>About </span>
              Me
            </h2>
            <h2 className="text-4xl text-white uppercase border-b-4 border-[#f1f1f1] max-w-2/3 pb-3 mb-6">lotfi ait baaya</h2>
            <p className="text-gray-400 text-base lg:text-lg mb-10 leading-relaxed">
              I'm a Data Analyst and AI Developer from Morocco with a Bachelor's degree in Data Analysis and Artificial Intelligence.

              <br /><br />

              I'm passionate about transforming data into actionable insights and developing intelligent solutions that solve real-world problems. I enjoy exploring datasets, building machine learning models, automating workflows, and creating software that makes data more accessible and useful.

              <br /><br />

              My technical background includes Python, SQL, JavaScript, Java, C/C++, HTML/CSS, and data analysis libraries such as Pandas, NumPy, Matplotlib, Scikit-learn, and PyTorch. I also have experience in web scraping, data visualization, and developing web applications.

              <br /><br />

              Through academic and personal projects, I've applied data analysis and machine learning techniques to solve practical challenges, from predictive modeling and data visualization to automation and software development. These experiences have strengthened my analytical thinking, programming skills, and ability to turn complex problems into effective solutions.

              <br /><br />

              I enjoy learning new technologies, improving my skills, and taking on challenging projects that push me to grow both professionally and personally. I'm currently looking for opportunities where I can contribute, collaborate with talented teams, and continue building impactful data-driven and AI-powered solutions.
            </p>

            <div className="grid grid-cols-2 gap-6 max-w-xl">
              <div className="text-center rounded-2xl bg-[#111a3e] border border-[#1f1641] p-5 transition-all duration-300 hover:border-primary/50">
                <h3 className="text-primary font-bold text-2xl md:text-3xl">+15</h3>
                <p className="text-xs text-gray-400 uppercase tracking-wider mt-0.5">
                  Projects
                </p>
              </div>
              <div className="text-center rounded-2xl bg-[#111a3e] border border-[#1f1641] p-5 transition-all duration-300 hover:border-primary/50">
                <h3 className="text-primary font-bold text-2xl md:text-3xl">+2</h3>
                <p className="text-xs text-gray-400 uppercase tracking-wider mt-0.5">
                  Years
                </p>
              </div>
            </div>

          </div>
          <div className="mt-16 md:mt-0 flex justify-center lg:justify-end relative" data-aos="fade-left">
              <div className="relative w-64 h-64 md:w-96 md:h-120">
                  <div className="absolute inset-0 z-0 rounded-full shadow-lg border border-cyan-500 translate-x-4 translate-y-4"></div>
                  <div className="relative z-10 w-full h-full bg-[#111a3e] rounded-full overflow-hidden border border-[#1f1641] ">
                    <img src={me} alt="Picture" className='w-full h-full object-cover transition-transform duration-300 hover:scale-110' />
                  </div>
              </div>
          </div>
        </div>
    </section>
  )
}

export default About
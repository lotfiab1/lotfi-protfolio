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
            I'm a <strong>Data Analyst and AI/ML Developer from Morocco</strong> with a Bachelor's degree in <strong>Data Analysis and Artificial Intelligence</strong>.

            <br /><br />

            I'm passionate about turning data into actionable insights and building intelligent solutions that solve real-world problems. I enjoy analyzing complex datasets, developing machine learning models, automating workflows, and creating software that makes data more accessible and useful.

            <br /><br />

            My technical background includes <strong>Python, SQL, JavaScript, Java, C/C++, HTML/CSS</strong>, as well as tools and libraries such as <strong>Pandas, NumPy, Matplotlib, Scikit-learn, and PyTorch</strong>. I also have experience in <strong>data visualization, web scraping, machine learning, and web development</strong>.

            <br /><br />

            Through academic and personal projects, I've worked on practical applications involving <strong>data analysis, predictive modeling, machine learning, automation, and software development</strong>. These projects have strengthened my analytical thinking, problem-solving abilities, and programming skills.

            <br /><br />

            I'm continuously learning and exploring new technologies, with the goal of building <strong>reliable, data-driven, and AI-powered solutions</strong>. I'm open to opportunities where I can contribute to meaningful projects, collaborate with talented teams, and continue growing as a <strong>Data Analyst and AI Developer</strong>.
          </p>

          <div className="grid grid-cols-2 gap-6 max-w-xl">
            <div className="text-center rounded-2xl bg-[#111a3e] border border-[#1f1641] p-5 transition-all duration-300 hover:border-primary/50">
              <h3 className="text-primary font-bold text-2xl md:text-3xl">+20</h3>
              <p className="text-xs text-gray-400 uppercase tracking-wider mt-0.5">
                Projects
              </p>
            </div>
            <div className="text-center rounded-2xl bg-[#111a3e] border border-[#1f1641] p-5 transition-all duration-300 hover:border-primary/50">
              <h3 className="text-primary font-bold text-2xl md:text-3xl">+3</h3>
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
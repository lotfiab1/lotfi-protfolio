import React from 'react'
import { FaEnvelope, FaGithub, FaLinkedin, FaPhone } from 'react-icons/fa';

const Contact = () => {
  const contactData = [
    {
      id:1,
      name:"Email",
      icon:FaEnvelope,
      value:"lotfi.aitbaaya.24@gmail.com",
      link:"mailto:lotfi.aitbaaya.24@gmail.com"
    },
    {
      id:2,
      name:"Phone",
      icon:FaPhone,
      value:"+212 688665624",
      link:"tel:+212688665624"
    },
    {
      id:3,
      name:"Linkedin",
      icon:FaLinkedin,
      value:"@lotfiab1",
      link:"https://linkedin.com/in/lotfiab1" 
    },
    {
      id:4,
      name:"Github",
      icon:FaGithub,
      value:"@lotfiab1",
      link:"https://github.com/lotfiab1"
    }
  ];

  const formSubmission = async function (event){
    event.preventDefault();
    const url = "https://formsubmit.co/lotfi.aitbaaya44@gmail.com";
    const form = document.querySelector("#form");
    const formData = new FormData(form);

    await fetch(url,{
      method:"POST",
      body:formData,
      
    });
    return false;
  }

  return (
    <section id='contact' className='py-20 bg-gray-900'>
        <div className="container mx-auto px-4 max-w-6xl">
          <div className='mb-12 flex flex-col gap-2'>
            <h2 className="text-3xl md:text-5xl font-extrabold text-white">
              Let's Connect<span className='text-primary'>.</span>
            </h2>
            <span className='h-1 w-1/4 bg-cyan-300 ml-5 rounded-full'></span>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <p className="text-gray-400 mb-8 leading-relaxed">
                If you Have Any Questions please contact us .
              </p>
              <div className="space-y-6">
                {
                  contactData.map((info)=>{
                    const Icon = info.icon;
                    return (
                      <div key={info.id} className='flex items-center gap-4 group'>
                          <div className='w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors'>
                              <Icon size={18} className='text-primary'/>
                          </div>
                          <div>
                            <h4 className='text-white font-medium text-sm'>
                              {info.name}
                            </h4>
                            {
                              info.link ? 
                              (
                                <a href={info.link} className='text-gray-400 text-sm hover:text-primary transition-colors' target='_blank' rel='noopener noreferrer'>{info.value}</a>
                              ):(
                                <p className='text-gray-400 text-sm'>{info.value}</p>
                              )
                            }
                          </div>
                      </div>
                    );
                  })
                }
              </div>
            </div>
            <div className="bg-gray-800 rounded-lg p-6">
              <form id='form' onSubmit={formSubmission}>
                <div className="mb-4">
                  <label htmlFor="email" className='text-white block mb-2 text-sm font-medium'>Email</label>
                  <input type="email" name='email'  className='w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg text-white text-sm focus:outline-none focus:border-primary transition-colors' placeholder='your@example.com' />
                </div>
                <div className="mb-6">
                  <label htmlFor="message" className='text-white block mb-2 text-sm font-medium'>Message</label>
                  <textarea name='message' className='w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg text-white text-sm focus:outline-none focus:border-primary transition-colors' rows={4} placeholder='Your Message ...' ></textarea>
                </div>
                <input type="hidden" name="_captcha" value="false"></input>
                <button type="submit" className='w-full px-6 py-2.5 bg-primary text-white rounded-lg font-medium hover:bg-primary/80 hover:cursor-pointer'>Send Message</button>
              </form>
            </div>
          </div>
        </div>
    </section>
  )
}

export default Contact
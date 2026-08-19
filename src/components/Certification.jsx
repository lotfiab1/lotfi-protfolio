import React from "react";
import { BiCertification } from "react-icons/bi";


const Certifications = function ({certificationsData}){



    return(
        <section id="certifications" className='text-white py-20 overflow-hidden'>
            <div className="max-w-7xl mx-auto px-6 lg:px-16">
                <div className="mb-16">
                    <h2 className="text-4xl md:text-5xl font-extrabold text-white">
                    Certifications<span className='text-primary'>.</span>
                    </h2>
                </div>
                <div className="flex flex-col items-center gap-16">
                    <div className="w-full lg:w-9/12 space-y-6" data-aos="fade-left">
                            {
                                certificationsData.map((certification)=>(
                                    <div key={certification.id} className="group relative p-6 rounded-2xl bg-[#111a3e] border border-[#1f1641] transition-all duration-300 hover:border-primary/50">
                                            <div className="flex items-center flex-col sm:flex-row gap-4">
                                                <div className="flex flex-col self-center sm:flex-row sm:items-center justify-between gap-4 mb-4">
                                                    <div className="p-2 bg-[#050816] rounded-lg border border-primary/20 group-hover:border-primary transition-colors">
                                                        <BiCertification size={30}/>
                                                    </div>
                                                </div>
                                                <div className="flex min-w-1/2 text-center sm:text-start md:max-w-sm flex-col gap-2 sm:self-baseline">
                                                    <h3 className='text-xs md:text-lg font-bold  text-white group-hover:text-primary transition-colors'>
                                                    {certification.name}
                                                    </h3>
                                                    <p className="text-gray-400 text-sm ">
                                                    {certification.year} - {certification.issuer}
                                                    </p>
                                                </div>
                                                <a href={certification.link} className="sm:ml-auto self-center p-0 min-w-25 flex justify-center items-center gap-2 bg-[#050816] px-2 py-2 rounded-full border border-gray-700 w-fit hover:bg-[#4b4d53]">
                                                        <span className="text-primary text-xs sm:text-sm">View Badge</span>
                                                </a>

                                            </div>
                                    </div>
                                ))
                            }
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Certifications
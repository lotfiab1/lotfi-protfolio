import React from 'react'

const Footer = () => {
  return (
    <footer className='mt-8 border z-10 border-t-[#33353f] border-l-transparent border-r-transparent text-white'>
      <div className='container p-4 md:p-12 flex justify-between flex-col items-center gap-4 md:flex-row md:gap-0'>
        <div className="text-white text-2xl md:text-3xl font-black cursor-pointer">
          Me<span className='text-primary'>.</span>
        </div>
        <p className="text-slate-700 text-sm md:text-base">All rights reserved.</p>
      </div>
    </footer>
  )
}

export default Footer
import React from 'react'
import { ABOUT } from '../static'

const About = () => {
  return (
    <div className='container max-w-[1100px] justify-between mx-auto'>
      <div className='flex flex-col gap-3 mb-15'>
        <p className='text-[#3858D6] font-medium leading-[100%] text-center'>Here are our some of the best clients.</p>
        <h1 className='text-[36px] leading-[100%] font-bold text-center'>What People Say About Us</h1>
      </div>
      <div className='flex gap-30'>
          {
            ABOUT?.map((about) => (
                <div key={about.id} className='flex w-[524px] h-[239px] p-8 rounded-[22px] bg-[#F6F6F6] gap-8 mb-20'>
                 <img className='w-[169px] h-[179px] rounded-[15px]' src={about.image} alt={about.title} />
                 <div className='flex flex-col gap-4 justify-center'>
                 <h1 className='text-[24px] leading-[100%] font-bold text-[#1E1D1D]'>{about.title}</h1>
                 <p className='leading-[100%] font-medium text-[#8B8E99]'>{about.desc}</p>
                 <span className='text-[24px] '>{about.rating}</span>
                 </div>
                </div>
            ))
          }
      </div>
      <div className='flex gap-3 justify-center mb-15'>
      <div className="w-4 h-4 bg-[#D9D9D9] rounded-full hover:bg-blue-500 transition-all duration-300"></div>
      <div className="w-4 h-4 bg-[#D9D9D9] rounded-full hover:bg-blue-500 transition-all duration-300"></div>
      <div className="w-4 h-4 bg-[#D9D9D9] rounded-full hover:bg-blue-500 transition-all duration-300"></div>
      <div className="w-4 h-4 bg-[#D9D9D9] rounded-full hover:bg-blue-500 transition-all duration-300"></div>
      <div className="w-4 h-4 bg-blue-500 rounded-full"></div>
      </div>
    </div>
  )
}

export default About
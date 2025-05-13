import React from 'react'
import photo6 from '../../assets/soat.svg'

const Hero = () => {
  return (
    <div className='absolute z-10 top-40 w-full'>
    <div className='container max-w-[1100px] mx-auto flex justify-between items-center gap-12'>
      <div className='flex flex-col gap-12'>
        <div className='flex flex-col'>
          <h1 className='leading-[125%] text-[64px] font-bold text-[#FFFFFF]'>
            Discover <br /> Most Suitable <br /> Watches
          </h1>
          <p className='text-white'>
            Find the best, reliable, and cheap smart watches here. <br />
            We focus on product quality. Here you can find smart <br />
            watches of almost all brands. So why you are waiting? <br />
            Just order now!
          </p>
        </div>
  
        <div className="flex items-center bg-[#F5F5F5] rounded-[15px] px-8">
          <svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M9.625 16.625C13.491 16.625 16.625 13.491 16.625 9.625C16.625 5.75901 13.491 2.625 9.625 2.625C5.75901 2.625 2.625 5.75901 2.625 9.625C2.625 13.491 5.75901 16.625 9.625 16.625Z" stroke="#3858D6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M18.375 18.375L14.5688 14.5688" stroke="#3858D6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          <input type="text" placeholder="Find the best brands" className="outline-none w-[312px] h-[60px] text-sm py-1 px-2" />
          <button className='w-[112px] h-[45px] bg-[#3858D6] text-[#FFFFFF] rounded-[9px] px-2 ml-4'>Search</button>
        </div>
      </div>
  
      <div className='w-[461px] h-[538px]'>
        <img src={photo6} alt="" />
      </div>
    </div>
  </div>
  )
}

export default Hero



import React from 'react'
import AppleSmartI from "../../assets/apple1232.png"

const Subscribe = () => {
  return (
    <div className='container max-w-[1100px] h-[377px] mx-auto mb-20'>
        <div className='flex bg-[#F6F6F6] rounded-[22px] justify-around'>
           <div className='flex flex-col gap-6 justify-center'>
            <h1 className='text-[36px] font-bold leading-[100%] text-[#1E1D1D]'>Subscribe To Newsletter</h1>
            <p className='text-[#8B8E99] leading-[100%] font-medium'>Get free guide about smart watches daily. </p>
            <div className="flex items-center border-none bg-[#FFFFFF] rounded-[15px] px-2">
            <input type="text" placeholder="Enter Email Address" className="outline-none w-[312px] h-[60px] text-sm py-1 px-2" />
            <button className='w-[131px] h-[45px] bg-[#3858D6] text-[#FFFFFF] rounded-[9px] px-2 mx-auto'>Subscribe</button>
          </div>
           </div>
           <div className='p-6'>
             <img src={AppleSmartI} alt="" />
           </div>
        </div>
    </div>
  )
}

export default Subscribe


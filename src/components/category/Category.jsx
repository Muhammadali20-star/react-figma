import React from 'react'
import { CATEGORY } from '../static'

const Category = () => {
  return (
<div className='container max-w-[1100px] mx-auto'>
    <div className='grid grid-cols-3  mt-20'>
        {
            CATEGORY?.map((card) => (
               <div key={card.id} className='bg-[#F6F6F6] gap-3 rounded-[22px] w-[354px]'>
                <div className='flex gap-6 p-6'>
                <img src={card.image} alt={card.title} />
                <div className='flex flex-col gap-3 justify-center'>
                <h2 className='text-[36px] leading-[100%] font-bold text-[#1E1D1D]'>{card.title}</h2>
                <p className='leading-[100%] font-medium text-[#8B8E99]'>{card.desc}</p>
                </div>
                </div>
              </div>
            ))
        }
    </div>
</div>
  )
}


export default Category
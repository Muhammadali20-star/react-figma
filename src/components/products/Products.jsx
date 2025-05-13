import React from 'react'
import { PRODUCTS } from '../static'

const Products = () => {
  return (
    <div className='container max-w-[1100px] mx-auto mt-20'>
     <div className='flex flex-col gap-3'>
        <p className='text-[#3858D6] font-medium leading-[100%] text-center'>Find your favourite smart watch.</p>
        <h1 className='text-[36px] leading-[100%] font-bold text-center'>Our Latest Products</h1>
     </div>
    <div className='grid grid-cols-3 gap-10 mt-20 mb-20'>
            {
                PRODUCTS?.map((product) => (
                    <div key={product.id} className='w-[334px] h-[440px] gap-3'>
                    <img className='w-[334px] bg-[#F6F6F6] p-12' src={product.image} alt={product.title} />
                    <div className='flex flex-col'>
                    <h2 className='text-[24px] leading-[100%] text-[#1E1D1D] font-semibold text-center'>{product.title}</h2>
                    <p className='text-center text-[20px]'>{product.rating}</p>
                    <span className='font-medium text-[#8B8E99] leading-[121%] text-center'>{product.price}</span>
                    </div>
                    </div>
                ))
            }
    </div>
    <div className='text-center bg-[#3858D6] text-[#FFFFFF] rounded-[15px] w-[196px] h-[46px] p-2 mx-auto mb-20'>
        <button>View More</button>
    </div>
    </div>
  )
}

export default Products
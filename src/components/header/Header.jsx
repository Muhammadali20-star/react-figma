import React from 'react'
import photo from '../../assets/Logo (11).svg'
import  { LINKS } from '../static'
import photo2 from '../../assets/Search.svg'
import photo3 from '../../assets/Person.svg'
import photo4 from '../../assets/Shopping Cart.svg'

const Header = () => {
  return (
    <header className='relative h-screen' style={{ background: 'linear-gradient(155.28deg, #383638 2.06%, #0B0B0B 33.08%)',}}>
        <nav className='container max-w-[1100px] mx-auto flex justify-between h-20 items-center text-white'>
            <img src={photo} alt="" />
            <ul className='flex gap-6'>
               {
                LINKS?.map((link, index) => (<li key={index}>{link}</li>))
               }
            </ul>
            <div className="flex gap-6">
            <img src={photo2} alt="" />
            <img src={photo3} alt="" />
            <img src={photo4} alt="" />
            </div>
        </nav>
    </header>
  )
}

export default Header
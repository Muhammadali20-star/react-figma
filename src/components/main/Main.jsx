import React from 'react'
import Hero from '../hero/Hero'
import Category from '../category/Category'
import Products from '../products/Products'
import About from '../about/About'
import Subscribe from '../subscribe/Subscribe'

const Main = () => {
    let str = "Hello world"
  return (
    <div>
        <Hero />
        <Category />
        <Products />
        <About />
        <Subscribe />
    </div>
  )
}

export default Main
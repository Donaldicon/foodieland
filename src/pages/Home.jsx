import React from 'react'

// Home Page components
import Hero from '../components/Hero'
import Categories from '../components/Categories'
import Tasty from '../components/Tasty'
import Chef from '../components/Chef'
import CheckOut from '../components/CheckOut'
import TryDelicious from '../components/TryDelicious'
import Subscribe from '../components/Subscribe'

const Home = () => {
  return (
    <div>
      <Hero />
      <Categories />
      <Tasty />
      <Chef />
      <CheckOut />
      <TryDelicious />
      <Subscribe />
    </div>
  )
}

export default Home
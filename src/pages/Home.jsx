import React from 'react'

// Home Page components
import Hero from '../components/Hero'
import Categories from '../components/Categories'
import Hr from '../components/Hr'
import Tasty from '../components/Tasty'
import Chef from '../components/Chef'
import CheckOut from '../components/CheckOut'
import TryDelicious from '../components/TryDelicious'
import Subscribe from '../components/Subscribe'

const Home = () => {
  return (
    <div>
      <Hero />
      <Hr />
      <Categories />
      <Tasty />
      <Hr />
      <Chef />
      <CheckOut />
      <TryDelicious />
      <Subscribe />
    </div>
  )
}

export default Home
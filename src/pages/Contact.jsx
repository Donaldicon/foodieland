import React from 'react'
import ContactChef from '../components/ContactChef'
import Subscribe from '../components/Subscribe'
import CheckDelicious from '../components/CheckDelicious'

const Contact = () => {
  return (
    <div className='pt-[100px] md:pt-[150px]'>
      <ContactChef />
      <Subscribe />
      <CheckDelicious />
    </div>
  )
}

export default Contact
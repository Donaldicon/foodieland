import React from 'react'
import { motion } from 'framer-motion'

import chef from '../assets/chef/chef.png'

import { Link } from 'react-router-dom'

const Chef = () => {
  return (
    <motion.div
    initial={{ y: 100, opacity: 0 }}
    whileInView={{ y: 0, opacity: 1 }}
    transition={{ duration: 1.5, ease: "easeOut" }}
    viewport={{ once: true }}
    >
        <section className='px-[5%] bigScreens:px-[13%] mt-20 w-full flex items-center justify-center font-Inter'>
            <div className='flex flex-col items-start w-[45%] text-[14px] xl:text-[17px] bigScreens:text-[20px] pr-[5%]'>
                <h1 className='text-[30px] leading-[35px] xl:text-[45px] xl:leading-[55px] bigScreens:text-[55px] bigScreens:leading-[65px] font-semibold dark:text-gray-200'>Everyone can be a <br></br> chef in their own kitchen</h1>
                <p className='pr-[5%] mt-5 text-black dark:text-gray-200 text-opacity-[50%]'>Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqut enim ad minim </p>
                <Link to='/Recipes'>
                  <button className='text-white bg-black rounded-xl px-10 py-4 text-[12px] bigScreens:text-[15px] mt-12 xl:mt-16 cursor-pointer hover:bg-opacity-20 hover:text-black transition-all ease-in-out duration-500'>
                      Learn More
                  </button>
                </Link>
            </div>
            <img src={chef} alt="" className='w-[55%] '/>
        </section>
        <hr className='dark:bg-gray-500 my-20 mx-[5%] bigScreens:mx-[13%]'/>
    </motion.div>
  )
}

export default Chef
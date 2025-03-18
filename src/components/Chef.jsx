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
        <section className='px-[5%] bigScreens:px-[13%] mt-7 md:mt-10 lg:mt-20 w-full flex items-center justify-center font-Inter'>
            <div className='flex flex-col items-start w-[45%] text-[7px] md:text[11px] lg:text-[14px] xl:text-[17px] bigScreens:text-[20px] pr-[5%]'>
                <h1 className='text-[12px] md:text-[20px] lg:text-[30px] leading-[15px] md:leading-[25px] lg:leading-[35px] xl:text-[45px] xl:leading-[55px] bigScreens:text-[55px] bigScreens:leading-[65px] font-semibold dark:text-gray-200'>Everyone can be a <br className='hidden md:block'></br> chef in their own kitchen</h1>
                <p className='pr-[5%] mt-2 md:mt-3 lg:mt-5 text-black dark:text-gray-200 text-opacity-[50%]'>Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqut enim ad minim </p>
                <Link to='/Recipes'>
                  <button className='text-white bg-black rounded-xl px-6 py-3 md:px-10 md:py-4 text-[8px] md:text-[12px] bigScreens:text-[15px] mt-3 lg:mt-12 xl:mt-16 cursor-pointer hover:bg-opacity-20 hover:text-black transition-all ease-in-out duration-500'>
                      Learn More
                  </button>
                </Link>
            </div>
            <img src={chef} alt="" className='w-[55%] '/>
        </section>
        <hr className='dark:bg-gray-500 my-7 md:my-10 lg:my-20 mx-[5%] bigScreens:mx-[13%]'/>
    </motion.div>
  )
}

export default Chef
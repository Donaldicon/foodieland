import React from 'react'
import { motion } from 'framer-motion'

import postOne from '../assets/checkout/post-one.png'
import postTwo from '../assets/checkout/post-two.png'
import postThree from '../assets/checkout/post-three.png'
import postFour from '../assets/checkout/post-four.png'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInstagram } from '@fortawesome/free-brands-svg-icons'

import { Link } from 'react-router-dom'

const CheckOut = () => {
  return (
        <section className="bg-gradient-to-b from-[#E7F9FD00] to-[#E7F9FD] md:mt-5 lg:mt-10 pb-7 md:pb-10 lg:pb-20 px-[5%] bigScreens:px-[13%] font-Inter flex flex-col items-center justify-center text-black dark:text-gray-200">
            <h1 className='text-[14px] md:text-[20px] lg:text-[30px] leading-[35px] xl:text-[45px] xl:leading-[55px] bigScreens:text-[55px] bigScreens:leading-[65px] font-semibold'>Check out @foodieland on Instagram</h1>
            <p className='mt-[1px] md:mt-2 lg:mt-3 w-[95%] lg:w-[720px] bigScreens:w-[1000px] text-[10px] md:text-[12px] lg:text-[14px] xl:text-[17px] bigScreens:text-[20px] text-center text-black dark:text-gray-200 text-opacity-50'>Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqut enim ad minim </p>
            <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            viewport={{ once: true }}
            >
                <div className='grid grid-cols-4 gap-2 md:gap-5 mt-4 md:mt-7 lg:mt-10'>
                    <img src={postOne} alt="" />
                    <img src={postTwo} alt="" />
                    <img src={postThree} alt="" />
                    <img src={postFour} alt="" />
                </div>

            </motion.div>
            <Link to='https://www.instagram.com/chizitelu_azih/?igsh=ZzYxczVyMW5uZ28%3D&utm_source=qr#' target='_blank'>
            <div className='text-white bg-black rounded-xl px-10 py-4 text-[8px] md:text-[12px] bigScreens:text-[15px] mt-6 md:mt-9  lg:mt-12 xl:mt-16 cursor-pointer hover:bg-opacity-20 hover:text-black transition-all ease-in-out duration-500 flex items-center space-x-1'>
                <p>Visit Our Instagram</p> <FontAwesomeIcon icon={faInstagram}/>
            </div>
            </Link>

        </section>

  )
}

export default CheckOut
import React from 'react'
import { easeIn, motion } from 'framer-motion'

import subscribeBg from '../assets/subscribe/subscribe-bg.png'

const Subscribe = () => {

  return (
    <motion.div 
    initial={{y:100, opacity: 0}}
    whileInView={{y:0, opacity: 1}}
    transition={{duration:1.5, ease:easeIn}}
    viewport={{once:true}}
    >
      <section className='px-[5%] bigScreens:px-[13%] font-Inter relative'>
          <img src={subscribeBg} alt="" />
          <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex flex-col items-center text-[5px] smallPhones:text-[8px] md:text-[11px] lg:text-[14px] xl:text-[17px] bigScreens:text-[20px]'>
              <h1 className='text-[10px] smallPhones:text-[12px] md:text-[20px] lg:text-[30px] text-center md:leading-[35px] xl:text-[45px] xl:leading-[55px] bigScreens:text-[55px] bigScreens:leading-[65px] font-semibold'>Deliciousness to your inbox</h1>
              <p className='mt-[1px] md:mt-2 lg:mt-8 w-[100%] lg:w-[500px] xl:w-[650px] text-center text-black text-opacity-[50%]'>Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqut enim ad minim </p>
              <form className='relative mt-3 md:mt-5 lg:mt-20'>
                  <input type="email" name="email" id="email" placeholder='Your email address...' 
                  required
                  className='text-black opacity-70 outline-none  w-[120px] smallPhones:w-[200px] md:w-[300px] xl:w-[550px] bigScreens:w-[700px] text-[10px] md:text-[12px] lg:text-[18px] placeholder:text-[10px] md:placeholder:text-[12px]  lg:placeholder:text-[18px] bigScreens:text-[24px] bigScreens:placeholder:text-[24px] pr-[50px] smallPhones:pr-[65px] md:pr-[82px]  lg:pr-[150px] xl:pr-[200px] pl-2 lg:pl-8 bigScreens:pr-[270px] py-2 lg:py-10 rounded-3xl'/>
                  <button type='submit' className='absolute bg-black top-1/2 -translate-y-1/2 text-white px-2 py-2 lg:px-5 lg:py-6 xl:px-9 xl:py-7 bigScreens:px-14 rounded-lg lg:rounded-3xl cursor-pointer right-1 lg:right-6 '
                  >
                      Subscribe
                  </button>
              </form>
          </div>
      </section>
    </motion.div>
  )
}

export default Subscribe
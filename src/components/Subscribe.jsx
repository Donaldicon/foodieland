import React from 'react'

import subscribeBg from '../assets/subscribe/subscribe-bg.png'

const Subscribe = () => {
  const refresh = (e) => {
    
  }
  return (
    <section className='px-[5%] bigScreens:px-[13%] font-Inter relative'>
        <img src={subscribeBg} alt="" />
        <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex flex-col items-center text-[14px] xl:text-[17px] bigScreens:text-[20px]'>
            <h1 className='text-[30px] text-center leading-[35px] xl:text-[45px] xl:leading-[55px] bigScreens:text-[55px] bigScreens:leading-[65px] font-semibold'>Deliciousness to your inbox</h1>
            <p className='mt-8 w-[500px] xl:w-[650px] text-center text-black text-opacity-[50%]'>Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqut enim ad minim </p>
            <form className='relative mt-20'>
                <input type="email" name="email" id="email" placeholder='Your email address...' 
                required
                className='text-black opacity-70 outline-none w-[400px] xl:w-[550px] bigScreens:w-[700px] text-[18px] placeholder:text-[18px] bigScreens:text-[24px] bigScreens:placeholder:text-[24px] pr-[150px] xl:pr-[200px] pl-8 bigScreens:pr-[270px] py-10 rounded-3xl'/>
                <button type='submit' className='absolute bg-black top-1/2 -translate-y-1/2 text-white px-5 py-6 xl:px-9 xl:py-7 bigScreens:px-14 rounded-3xl cursor-pointer right-6 '
                >
                    Subscribe
                </button>
            </form>
        </div>
    </section>
  )
}

export default Subscribe
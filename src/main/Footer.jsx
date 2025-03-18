import React from 'react'

import food from '../assets/navbar/Food.png'

import { Link } from 'react-router-dom'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookF } from '@fortawesome/free-brands-svg-icons'
import { faTwitter } from '@fortawesome/free-brands-svg-icons'
import { faInstagram } from '@fortawesome/free-brands-svg-icons'

const Footer = () => {
    const scrollToTop = () => {
        window.scrollTo(0,0);
      }
    const year = new Date().getFullYear();
  return (
    <div className=' flex flex-col items-center justify-between px-[5%] bigScreens:px-[13%] py-[20px] md:py-[25px] lg:py-[30px] mt-[50px] font-Inter bg-gray-200'>
        <div className=' flex items-start lg:items-center justify-between w-full'>
            <div className='flex flex-col space-y-2 lg:space-y-6'>
                <Link to='/' onClick={scrollToTop}>
                <img src={food} alt="" className='w-[70px] lg:w-[150px] bigScreens:w-[220px]'/>
                </Link>
                <p className='text-black text-opacity-50 text-[8px] pr-10 md:text-[12px] lg:text-[18px] bigScreens:text-[22px]'>Lorem ipsum dolor sit amet, consectetuipisicing elit</p>
            </div>
            <div className='flex flex-col lg:flex-row items-center space-y-2 lg:space-y-0 lg:space-x-6 text-[10px] md:text-[12px] justify-center lg:text-[15px] xl:text-[18px] bigScreens:text-[22px] text-center'>
                <Link to="/Recipes" onClick={scrollToTop}>Recipes</Link>
                <Link to="/Blog" onClick={scrollToTop}>Blog</Link>
                <Link to="/Contact" onClick={scrollToTop}>Contact</Link>
                <Link to="/About" onClick={scrollToTop}>About Us</Link>
            </div>
        </div>
        <div className='h-[1px] w-full my-4 lg:my-8 bg-black bg-opacity-10'/>
        <div className='flex flex-col-reverse lg:flex-row lg:space-y-0 items-center justify-between w-full py-2 lg:py-5'>
            <div className='mx-auto text-black text-opacity-50 text-[10px] lg:text-[16px]'>&#169;{year} Flowbase. Powered by <span className='text-[#f7aba3]'>Webflow</span></div>
            <div className='text-[10px] smallPhones:text-[12px] md:text-[14px] lg:text-[16px] bigScreens:text-[25px] flex flex-row space-x-4 lg:space-x-10 mb-3 lg:mb-0'>
                <Link to='https://web.facebook.com/profile.php?id=61551611320101' target='_blank'>
                    <FontAwesomeIcon icon={faFacebookF}/>
                </Link>

                <Link to='https://twitter.com/azih_donald' target='_blank'>
                    <FontAwesomeIcon icon={faTwitter}/>
                </Link>

                <Link to='https://www.instagram.com/chizitelu_azih/?igsh=ZzYxczVyMW5uZ28%3D&utm_source=qr#' target='_blank'>
                    <FontAwesomeIcon icon={faInstagram}/>
                </Link>
            </div>
        </div>
    </div>
  )
}

export default Footer
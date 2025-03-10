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
    <div className='flex flex-col items-center justify-between px-[5%] bigScreens:px-[13%] py-[30px] mt-[50px] font-Inter bg-white'>
        <div className='flex items-center justify-between w-full'>
            <div className='flex flex-col space-y-6'>
                <img src={food} alt="" className='w-[150px] bigScreens:w-[220px]'/>
                <p className='text-black text-opacity-50 text-[18px] bigScreens:text-[22px]'>Lorem ipsum dolor sit amet, consectetuipisicing elit</p>
            </div>
            <div className='flex items-center space-x-6 text-[15px] xl:text-[18px] bigScreens:text-[22px]'>
                <Link to="/Recipes" onClick={scrollToTop}>Recipes</Link>
                <Link to="/Blog" onClick={scrollToTop}>Blog</Link>
                <Link to="/Contact" onClick={scrollToTop}>Contact</Link>
                <Link to="/About" onClick={scrollToTop}>About Us</Link>
            </div>
        </div>
        <div className='h-[1px] w-full my-8 bg-black bg-opacity-10'/>
        <div className='flex items-center justify-between w-full py-5'>
            <div className='mx-auto text-black text-opacity-50'>&#169;{year} Flowbase. Powered by <span className='text-[#f7aba3]'>Webflow</span></div>
            <div className='text-[16px] bigScreens:text-[25px] space-x-10'>
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
import React, { useContext } from 'react'
import { NavLink, Link } from 'react-router-dom'
import { DarkModeContext } from './DarkMode'

import foodie from '../assets/navbar/Food.png'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookF } from '@fortawesome/free-brands-svg-icons'
import { faTwitter } from '@fortawesome/free-brands-svg-icons'
import { faInstagram } from '@fortawesome/free-brands-svg-icons'

const Navbar = () => {

  const {theme, toggleTheme} = useContext(DarkModeContext);

    const scrollToTop = () => {
        window.scrollTo(0,0);
      }
    const navLinksClass = ({isActive}) => isActive ? 'bg-black text-white px-2 py-2 rounded-lg' : 'text-black'
    
  return (
    <div className='z-[100] fixed w-full top-0'>
        <div className='flex items-center justify-between px-[5%] bigScreens:px-[13%] py-[30px] shadow-xl font-Inter bg-gray-200 '>
            <div>
              <NavLink to='/' onClick={scrollToTop}>
                <img src={foodie} alt="foodieland logo" className='w-[100px]' />
              </NavLink>
            </div>

            <div className='text-[15px] bigScreens:text-[20px] space-x-10'>
                <NavLink to='/' className={navLinksClass} onClick={scrollToTop}>Home</NavLink>
                <NavLink to='/Recipes' className={navLinksClass} onClick={scrollToTop}>Recipes</NavLink>
                <NavLink to='/Blog' className={navLinksClass} onClick={scrollToTop}>Blog</NavLink>
                <NavLink to='/Contact' className={navLinksClass} onClick={scrollToTop}>Contact</NavLink>
                <NavLink to='/About' className={navLinksClass} onClick={scrollToTop}>About Us</NavLink>
            </div>
            <div className='text-[16px] bigScreens:text-[25px] space-x-10 flex items-center'>
              <NavLink to='https://web.facebook.com/profile.php?id=61551611320101' target='_blank'>
                <FontAwesomeIcon icon={faFacebookF}/>
              </NavLink>
              <NavLink to='https://twitter.com/azih_donald' target='_blank'>
                <FontAwesomeIcon icon={faTwitter}/>
              </NavLink>
              <NavLink to='https://www.instagram.com/chizitelu_azih/?igsh=ZzYxczVyMW5uZ28%3D&utm_source=qr#' target='_blank'>
                <FontAwesomeIcon icon={faInstagram}/>
              </NavLink>
              <div
            onClick={toggleTheme}
            className="w-10 h-5 flex items-center bg-gray-300 dark:bg-gray-600 rounded-full p-1 cursor-pointer transition-all duration-500"
            >
              <div
                className={`w-4 h-4 bg-white dark:bg-yellow-400 rounded-full shadow-md transform transition-all duration-500 ${
                  theme === "dark" ? "translate-x-[18px]" : "translate-x-0"
                }`}>
                </div>
              </div>
            </div>


        </div>
    </div>
  )
}

export default Navbar
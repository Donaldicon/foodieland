import React from 'react'

import { Link } from 'react-router-dom'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTriangleExclamation } from '@fortawesome/free-solid-svg-icons'

const ErrorPage = () => {
    const scrollToTop = () => {
        window.scroll(0,0);
    }
  return (
    <div className='pt-[80px] lg:pt-[120px] lg:pb-[30px] bigScreens:pt-[150px] bigScreens:pb-[50px] font-Inter flex flex-col items-center justify-center'>
        <FontAwesomeIcon icon={faTriangleExclamation} className='text-yellow-500 text-[100px] lg:text-[150px] xl:text-[200px] bigScreens:text-[300px] mb-4'/>
        <h1 className='text-[30px] lg:text-[50px] xl:text-[80px] bigScreens:text-[100px] font-bold text-center mb-4 dark:text-gray-200'>404 Not Found</h1>
        <p className='text-[15px] lg:text-[25px] xl:text-[40px] bigScreens:text-[60px] mb-8 dark:text-gray-200'>This page does not exist</p>
        <Link to='/' className='text-[12px] lg:text-[18px] xl:text-[25px] bigScreens:text-[30px] text-white bg-indigo-700 hover:bg-indigo-900 transition-all ease-in-out duration-500 px-4 py-3 rounded-md md:rounded-lg lg:px-7 lg:py-3 lg:rounded-xl cursor-pointer' onClick={scrollToTop}>
            Go back
        </Link>
    </div>
  )
}

export default ErrorPage
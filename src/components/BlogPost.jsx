import React from 'react'
import Shawn from '../assets/hero/shawn.png'
import blogChef from '../assets/blog/blog-chef.png'
import blogChefWoman from '../assets/blog/blog-chef-woman.png'

import { Link } from 'react-router-dom'

import { motion } from 'framer-motion'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookF } from '@fortawesome/free-brands-svg-icons'
import { faTwitter } from '@fortawesome/free-brands-svg-icons'
import { faInstagram } from '@fortawesome/free-brands-svg-icons'

const BlogPost = () => {
  return (
    <div className='pt-[90px] pb-[30px] lg:pt-0 lg:pb-0 lg:py-[150px] px-[5%] bigScreens:px-[13%] w-full flex flex-col items-center justify-center font-Inter'>
        <div className='flex flex-col items-center text-[10px] md:text-[12px] lg:text-[14px] xl:text-[17px] bigScreens:text-[20px] dark:text-gray-200'>
            <h1 className='text-[14px] md:text-[20px] lg:text-[40px] lg:leading-[35px] xl:text-[55px] xl:leading-[55px] bigScreens:text-[55px] bigScreens:leading-[65px] font-semibold text-center'>Full Guide to Becoming a Professional Chef</h1>
            <div className='flex items-center space-x-1 lg:space-x-4 my-4 md:my-6 lg:my-10 text-[10px] md:text-[12px] lg:text-[14px] xl:text-[17px] bigScreens:text-[20px]'>
               <img src={Shawn} alt="" className='w-5 h-5 md:w-7 md:h-7 lg:w-10 lg:h-10 rounded-full'/> 
               <p className='font-bold'>John Smith</p>
               <p className='pl-7 md:pl-12 lg:pl-14 text-black dark:text-gray-200 text-opacity-[50%]'>9th March, 2025</p>
            </div>
            <p className='  text-black dark:text-gray-200 text-opacity-[50%] w-[95%] md:w-[85%] text-center'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ac ultrices odio. Nulla at congue diam, at dignissim turpis. Ut vehicula sed velit a faucibus. In feugiat vestibulum velit vel pulvinar. </p>
        </div>
        <img src={blogChef} alt="" className='my-4 lg:my-10 rounded-2xl'/>
        <div className='flex items-start justify-between w-[100%] md:w-[85%]'>
            <div className='w-[75%] space-y-7 md:space-y-10 lg:space-y-20'>
                <motion.div
                    initial={{ y: 90, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ duration: 1.5, ease: "easeOut" }}
                    viewport={{ once: true }}
                >
                    <div className=''>
                        <h1 className='text-[14px] md:text-[16px] lg:text-[20px] leading-[20px] xl:text-[25px] xl:leading-[30px] bigScreens:text-[35px] bigScreens:leading-[40px] font-semibold text-black dark:text-gray-200 text-opacity-90 pr-[3%]'>How did you start out in the food industry?</h1>
                        <p className='pr-[5%] text-[10px] md:text-[12px] lg:text-[16px] mt-2 md:mt-5 text-black dark:text-gray-400 text-opacity-[50%]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ac ultrices odio. Nulla at congue diam, at dignissim turpis. Ut vehicula sed velit a faucibus. In feugiat vestibulum velit vel pulvinar. Fusce id mollis ex. Praesent feugiat elementum ex ut suscipit.</p>
                    </div>
                </motion.div>


                <motion.div
                    initial={{ y: 100, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ duration: 1.5, ease: "easeOut" }}
                    viewport={{ once: true }}
                >
                    <div className=''>
                        <h1 className='text-[14px] md:text-[16px] lg:text-[20px] leading-[20px] xl:text-[25px] xl:leading-[30px] bigScreens:text-[35px] bigScreens:leading-[40px] font-semibold text-black dark:text-gray-200 text-opacity-90'>What do you like most about your job?</h1>
                        <p className='pr-[5%] text-[10px] md:text-[12px] lg:text-[16px] mt-2 md:mt-5 text-black dark:text-gray-400 text-opacity-[50%]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ac ultrices odio. Nulla at congue diam, at dignissim turpis. Ut vehicula sed velit a faucibus. In feugiat vestibulum velit vel pulvinar. Fusce id mollis ex. Praesent feugiat elementum ex ut suscipit.</p>
                    </div>
                </motion.div>

                
                <motion.div
                    initial={{ y: 100, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ duration: 1.5, ease: "easeOut" }}
                    viewport={{ once: true }}
                >
                    <div className=''>
                        <h1 className='text-[14px] md:text-[16px] lg:text-[20px] leading-[20px] xl:text-[25px] xl:leading-[30px] bigScreens:text-[35px] bigScreens:leading-[40px] font-semibold text-black dark:text-gray-200 text-opacity-90'>Do you cook at home on your days off?</h1>
                        <img src={blogChefWoman} alt="" className='w-[95%] mt-2 md:mt-5'/>
                        <p className='pr-[5%] text-[10px] md:text-[12px] lg:text-[16px] mt-2 md:mt-5 text-black dark:text-gray-400 text-opacity-[50%]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ac ultrices odio. Nulla at congue diam, at dignissim turpis. Ut vehicula sed velit a faucibus. In feugiat vestibulum velit vel pulvinar. Fusce id mollis ex. Praesent feugiat elementum ex ut suscipit.</p>
                    </div>
                </motion.div>

                <motion.div
                    initial={{ y: 100, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ duration: 1.5, ease: "easeOut" }}
                    viewport={{ once: true }}
                >
                    <div className=''>
                        <h1 className='text-[14px] md:text-[16px] lg:text-[20px] leading-[20px] xl:text-[25px] xl:leading-[30px] bigScreens:text-[35px] bigScreens:leading-[40px] font-semibold text-black dark:text-gray-200 text-opacity-90'>What would your advice be to young people looking to get their foot in the door?</h1>
                        <p className='pr-[5%] text-[10px] md:text-[12px] lg:text-[16px] mt-2 md:mt-5 text-black dark:text-gray-400 text-opacity-[50%]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ac ultrices odio. Nulla at congue diam, at dignissim turpis. Ut vehicula sed velit a faucibus. In feugiat vestibulum velit vel pulvinar. Fusce id mollis ex. Praesent feugiat elementum ex ut suscipit.</p>
                    </div>
                </motion.div>

                <motion.div
                    initial={{ y: 100, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ duration: 1.5, ease: "easeOut" }}
                    viewport={{ once: true }}
                >
                    <div className=''>
                        <h1 className='text-[14px] md:text-[16px] lg:text-[20px] leading-[20px] xl:text-[25px] xl:leading-[30px] bigScreens:text-[35px] bigScreens:leading-[40px] font-semibold text-black  text-opacity-70 bg-gradient-to-r from-gray-200 to-transparent py-10 md:py-16 px-7'>“Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ac ultrices odio.”</h1>
                    </div>
                </motion.div>


                <motion.div
                    initial={{ y: 100, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ duration: 1.5, ease: "easeOut" }}
                    viewport={{ once: true }}
                >
                    <div className=''>
                        <h1 className='text-[14px] md:text-[16px] lg:text-[20px] leading-[20px] xl:text-[25px] xl:leading-[30px] bigScreens:text-[35px] bigScreens:leading-[40px] font-semibold text-black dark:text-gray-200 text-opacity-90'>What is the biggest misconception that people have about being a professional chef?</h1>
                        <p className='pr-[5%] text-[10px] md:text-[12px] lg:text-[16px] mt-2 md:mt-5 text-black dark:text-gray-400 text-opacity-[50%]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ac ultrices odio. Nulla at congue diam, at dignissim turpis. Ut vehicula sed velit a faucibus. In feugiat vestibulum velit vel pulvinar. Fusce id mollis ex. Praesent feugiat elementum ex ut suscipit.</p>
                    </div>
                </motion.div>

                
            </div>

            <motion.div
                    initial={{ y: 100, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ duration: 1.5, ease: "easeOut" }}
                    viewport={{ once: true }}
            >
            <div className='flex flex-col items-center space-y-3 md:space-y-7 text-[10px] md:text-[16px] bigScreens:text-[25px] dark:text-gray-400'>
                <p className='text-[10px] md:text-[12px] lg:text-[16px] leading-[20px] xl:text-[25px] xl:leading-[30px] bigScreens:text-[35px] bigScreens:leading-[40px] text-center font-bold text-opacity-90 dark:text-gray-200'>SHARE THIS ON:</p>
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
            </motion.div>
        </div>
    </div>
  )
}

export default BlogPost
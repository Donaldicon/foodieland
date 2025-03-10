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
    <div className='py-[150px] px-[5%] bigScreens:px-[13%] w-full flex flex-col items-center justify-center font-Inter'>
        <div className='flex flex-col items-center text-[14px] xl:text-[17px] bigScreens:text-[20px]'>
            <h1 className='text-[40px] leading-[35px] xl:text-[55px] xl:leading-[55px] bigScreens:text-[55px] bigScreens:leading-[65px] font-semibold'>Full Guide to Becoming a Professional Chef</h1>
            <div className='flex items-center space-x-4 my-10 text-[14px] xl:text-[17px] bigScreens:text-[20px]'>
               <img src={Shawn} alt="" className='w-10 h-10 rounded-full'/> 
               <p className='font-bold'>John Smith</p>
               <p className='pl-14 text-black text-opacity-[50%]'>9th March, 2025</p>
            </div>
            <p className='  text-black text-opacity-[50%] w-[85%] text-center'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ac ultrices odio. Nulla at congue diam, at dignissim turpis. Ut vehicula sed velit a faucibus. In feugiat vestibulum velit vel pulvinar. </p>
        </div>
        <img src={blogChef} alt="" className='my-10 rounded-2xl'/>
        <div className='flex items-start justify-between w-[85%]'>
            <div className='w-[75%] space-y-20'>
                <motion.div
                    initial={{ y: 100, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ duration: 1.5, ease: "easeOut" }}
                    viewport={{ once: true }}
                >
                    <div className=''>
                        <h1 className='text-[20px] leading-[20px] xl:text-[25px] xl:leading-[30px] bigScreens:text-[35px] bigScreens:leading-[40px] font-semibold text-black text-opacity-90'>How did you start out in the food industry?</h1>
                        <p className='pr-[5%] mt-5 text-black text-opacity-[50%]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ac ultrices odio. Nulla at congue diam, at dignissim turpis. Ut vehicula sed velit a faucibus. In feugiat vestibulum velit vel pulvinar. Fusce id mollis ex. Praesent feugiat elementum ex ut suscipit.</p>
                    </div>
                </motion.div>


                <motion.div
                    initial={{ y: 100, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ duration: 1.5, ease: "easeOut" }}
                    viewport={{ once: true }}
                >
                    <div className=''>
                        <h1 className='text-[20px] leading-[20px] xl:text-[25px] xl:leading-[30px] bigScreens:text-[35px] bigScreens:leading-[40px] font-semibold text-black text-opacity-90'>What do you like most about your job?</h1>
                        <p className='pr-[5%] mt-5 text-black text-opacity-[50%]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ac ultrices odio. Nulla at congue diam, at dignissim turpis. Ut vehicula sed velit a faucibus. In feugiat vestibulum velit vel pulvinar. Fusce id mollis ex. Praesent feugiat elementum ex ut suscipit.</p>
                    </div>
                </motion.div>

                
                <motion.div
                    initial={{ y: 100, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ duration: 1.5, ease: "easeOut" }}
                    viewport={{ once: true }}
                >
                    <div className=''>
                        <h1 className='text-[20px] leading-[20px] xl:text-[25px] xl:leading-[30px] bigScreens:text-[35px] bigScreens:leading-[40px] font-semibold text-black text-opacity-90'>Do you cook at home on your days off?</h1>
                        <img src={blogChefWoman} alt="" className='w-[95%] mt-5'/>
                        <p className='pr-[5%] mt-5 text-black text-opacity-[50%]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ac ultrices odio. Nulla at congue diam, at dignissim turpis. Ut vehicula sed velit a faucibus. In feugiat vestibulum velit vel pulvinar. Fusce id mollis ex. Praesent feugiat elementum ex ut suscipit.</p>
                    </div>
                </motion.div>

                <motion.div
                    initial={{ y: 100, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ duration: 1.5, ease: "easeOut" }}
                    viewport={{ once: true }}
                >
                    <div className=''>
                        <h1 className='text-[20px] leading-[20px] xl:text-[25px] xl:leading-[30px] bigScreens:text-[35px] bigScreens:leading-[40px] font-semibold text-black text-opacity-90'>What would your advice be to young people looking to get their foot in the door?</h1>
                        <p className='pr-[5%] mt-5 text-black text-opacity-[50%]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ac ultrices odio. Nulla at congue diam, at dignissim turpis. Ut vehicula sed velit a faucibus. In feugiat vestibulum velit vel pulvinar. Fusce id mollis ex. Praesent feugiat elementum ex ut suscipit.</p>
                    </div>
                </motion.div>

                <motion.div
                    initial={{ y: 100, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ duration: 1.5, ease: "easeOut" }}
                    viewport={{ once: true }}
                >
                    <div className=''>
                        <h1 className='text-[20px] italic leading-[40px] xl:text-[30px] xl:leading-[50px] bigScreens:text-[35px] bigScreens:leading-[70px] font-semibold text-black  text-opacity-70 bg-gradient-to-r from-gray-200 to-transparent py-16 px-7'>“Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ac ultrices odio.”</h1>
                    </div>
                </motion.div>


                <motion.div
                    initial={{ y: 100, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ duration: 1.5, ease: "easeOut" }}
                    viewport={{ once: true }}
                >
                    <div className=''>
                        <h1 className='text-[20px] leading-[20px] xl:text-[25px] xl:leading-[30px] bigScreens:text-[35px] bigScreens:leading-[40px] font-semibold text-black text-opacity-90'>What is the biggest misconception that people have about being a professional chef?</h1>
                        <p className='pr-[5%] mt-5 text-black text-opacity-[50%]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ac ultrices odio. Nulla at congue diam, at dignissim turpis. Ut vehicula sed velit a faucibus. In feugiat vestibulum velit vel pulvinar. Fusce id mollis ex. Praesent feugiat elementum ex ut suscipit.</p>
                    </div>
                </motion.div>

                
            </div>


            <div className='flex flex-col items-center space-y-7 text-[16px] bigScreens:text-[25px]'>
                <p className='text-[14px] xl:text-[17px] bigScreens:text-[20px] font-bold text-opacity-90'>SHARE THIS ON:</p>
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

export default BlogPost
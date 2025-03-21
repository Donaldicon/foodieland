import React from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'


// import background Images
import bgOne from '../assets/categories/bg-one.png'
import bgTwo from '../assets/categories/bg-two.png'
import bgThree from '../assets/categories/bg-three.png'
import bgFour from '../assets/categories/bg-four.png'
import bgFive from '../assets/categories/bg-five.png'
import bgSix from '../assets/categories/bg-six.png'

// import images
import imgOne from '../assets/categories/img-one.png'
import imgTwo from '../assets/categories/img-two.png'
import imgThree from '../assets/categories/img-three.png'
import imgFour from '../assets/categories/img-four.png'
import imgFive from '../assets/categories/img-five.png'
import imgSix from '../assets/categories/img-six.png'


const Categories = () => {
    const scrollToTop = () => {
        window.scroll(0,0)
    }
  return (
    <motion.div
    initial={{y:100, opacity:0 }}
    whileInView={{y:0, opacity:1}}
    transition={{duration:1, ease:'easeOut'}}
    viewport={{once:true}}
    >
        <div className='px-[5%] bigScreens:px-[13%] font-Inter pt-5 lg:pt-10 dark:text-gray-200 hidden lg:block'>
            <div className='flex items-center justify-between'>
                <h1 className='text-[30px] leading-[35px] xl:text-[45px] xl:leading-[55px] bigScreens:text-[55px] bigScreens:leading-[65px] font-semibold '>Categories</h1>
                <Link to='/ViewCategories' onClick={scrollToTop}>
                <button className='text-[15px] font-medium bg-[#E7FAFE] px-4 py-3 rounded-2xl bigScreens:text-[18px] text-black cursor-pointer'>View All Categories</button>
                </Link>
            </div>
            <div className='my-20 bigScreens:my-28 flex items-center justify-between w-[100%]'>
                <div className='relative w-[15%]'>
                    <img src={bgOne} alt="background image of category one" />
                    <p className='text-[12px] bigScreens:text-[18px] font-medium absolute bottom-5 left-[34%] bigScreens:left-[35%]'>Breakfast</p>
                    <div className='absolute -top-10 bigScreens:-top-16 left-[20%]'>
                        <img src={imgOne} alt="" className='w-[70%]'/>
                    </div>
                </div>

                <div className='relative w-[15%]'>
                    <img src={bgTwo} alt="background image of category one" className='w-full'/>
                    <p className='text-[12px] bigScreens:text-[18px] font-medium absolute bottom-5 left-[34%] bigScreens:left-[37%]'>Vegan</p>
                    <div className='absolute -top-7 bigScreens:-top-16 left-[25%]'>
                        <img src={imgTwo} alt="" className='w-[85%] bigScreens:w-[150px]'/>
                    </div>
                </div>

                <div className='relative w-[15%]'>
                    <img src={bgThree} alt="background image of category one"/>
                    <p className='text-[12px] bigScreens:text-[18px] font-medium absolute bottom-5 left-[40%] bigScreens:left-[41%]'>Meat</p>
                    <div className='absolute -top-8 bigScreens:-top-16 left-[20%]'>
                        <img src={imgThree} alt="" className='w-[70%]'/>
                    </div>
                </div>

                <div className='relative w-[15%]'>
                    <img src={bgFour} alt="background image of category one" />
                    <p className='text-[12px] bigScreens:text-[18px] font-medium absolute bottom-5 left-[36%] bigScreens:left-[38%]'>Dessert</p>
                    <div className='absolute -top-10 bigScreens:-top-16 left-[20%]'>
                        <img src={imgFour} alt="" className='w-[70%]'/>
                    </div>
                </div>

                <div className='relative w-[15%]'>
                    <img src={bgFive} alt="background image of category one" />
                    <p className='text-[12px] bigScreens:text-[18px] font-medium absolute bottom-5 left-[38%] bigScreens:left-[40%]'>Lunch</p>
                    <div className='absolute -top-10 bigScreens:-top-16 left-[20%]'>
                        <img src={imgFive} alt="" className='w-[70%]'/>
                    </div>
                </div>

                <div className='relative w-[15%]'>
                    <img src={bgSix} alt="background image of category one" />
                    <p className='text-[12px] bigScreens:text-[18px] font-medium absolute bottom-5 left-[34%] bigScreens:left-[35%]'>Chocolate</p>
                    <div className='absolute -top-10 bigScreens:-top-16 left-[20%]'>
                        <img src={imgSix} alt="" className='w-[70%]'/>
                    </div>
                </div>



            </div>
            <hr className='dark:bg-gray-500'/>
        </div>


        
        <div className='px-[5%] font-Inter pt-5 lg:pt-10 dark:text-gray-200 lg:hidden'>
            <div className='flex items-center justify-between'>
                <h1 className='text-[14px] md:text-[20px] font-semibold '>Categories</h1>
                <Link to='/ViewCategories' onClick={scrollToTop}>
                <button className='text-[10px] md:text-[14px] font-medium bg-[#E7FAFE] px-2 py-3 rounded-2xl text-black cursor-pointer'>View All Categories</button>
                </Link>
            </div>
            <div className='mt-16 mb-10 grid grid-cols-3 gap-x-5 gap-y-20 w-[100%]'>
                <div className='relative'>
                    <img src={bgOne} alt="background image of category one" />
                    <p className='text-[10px] md:text-[12px] bigScreens:text-[18px] font-medium absolute bottom-5 left-[25%] smallPhones:left-[30%] md:left-[34%] bigScreens:left-[35%]'>Breakfast</p>
                    <div className='absolute -top-10 bigScreens:-top-16 left-[25%] md:left-[20%]'>
                        <img src={imgOne} alt="" className='w-[70%]'/>
                    </div>
                </div>

                <div className='relative'>
                    <img src={bgTwo} alt="background image of category one" className='w-full'/>
                    <p className='text-[10px] md:text-[12px] font-medium absolute bottom-5 left-[30%] smallPhones:left-[35%] md:left-[40%] lg:left-[34%] bigScreens:left-[37%]'>Vegan</p>
                    <div className='absolute -top-9 md:-top-7 bigScreens:-top-16 left-[25%] md:left-[25%]'>
                        <img src={imgTwo} alt="" className='w-[65%] md:w-[85%] bigScreens:w-[150px]'/>
                    </div>
                </div>

                <div className='relative'>
                    <img src={bgThree} alt="background image of category one"/>
                    <p className='text-[10px] md:text-[12px] font-medium absolute bottom-5 left-[35%] smallPhones:left-[38%] md:left-[45%] lg:left-[40%] bigScreens:left-[41%]'>Meat</p>
                    <div className='absolute -top-10 md:-top-8 bigScreens:-top-16 left-[20%]'>
                        <img src={imgThree} alt="" className='w-[70%]'/>
                    </div>
                </div>

                <div className='relative'>
                    <img src={bgFour} alt="background image of category one" />
                    <p className='text-[10px] md:text-[12px] bigScreens:text-[18px] font-medium absolute bottom-5 left-[25%] smallPhones:left-[30%] md:left-[36%] bigScreens:left-[38%]'>Dessert</p>
                    <div className='absolute -top-10 bigScreens:-top-16 left-[20%]'>
                        <img src={imgFour} alt="" className='w-[70%]'/>
                    </div>
                </div>

                <div className='relative'>
                    <img src={bgFive} alt="background image of category one" />
                    <p className='text-[10px] md:text-[12px] bigScreens:text-[18px] font-medium absolute bottom-5 left-[30%] smallPhones:left-[35%] md:left-[38%] bigScreens:left-[40%]'>Lunch</p>
                    <div className='absolute -top-10 bigScreens:-top-16 left-[20%]'>
                        <img src={imgFive} alt="" className='w-[70%]'/>
                    </div>
                </div>

                <div className='relative'>
                    <img src={bgSix} alt="background image of category one" />
                    <p className='text-[10px] md:text-[12px] bigScreens:text-[18px] font-medium absolute bottom-5 left-[20%] smallPhones:left-[27%] md:left-[34%] bigScreens:left-[35%]'>Chocolate</p>
                    <div className='absolute -top-11 md:-top-10 bigScreens:-top-16 left-[20%]'>
                        <img src={imgSix} alt="" className='w-[70%]'/>
                    </div>
                </div>



            </div>
            <hr className='dark:bg-gray-500'/>
        </div>



    </motion.div>
  )
}

export default Categories
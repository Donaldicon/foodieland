import React from 'react'
import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

import deliciousOne from '../assets/delicious/delicious-one.png'
import deliciousTwo from '../assets/delicious/delicious-two.png'
import deliciousThree from '../assets/delicious/delicious-three.png'
import deliciousFour from '../assets/delicious/delicious-four.png'
import deliciousFive from '../assets/delicious/delicious-five.png'
import deliciousSix from '../assets/delicious/delicious-six.png'
import deliciousSeven from '../assets/delicious/delicious-seven.png'
import deliciousEight from '../assets/delicious/delicious-eight.png'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCutlery } from '@fortawesome/free-solid-svg-icons'
import { faClock } from '@fortawesome/free-regular-svg-icons'
import { faHeart } from '@fortawesome/free-solid-svg-icons'

const initialImages = [
    { id: 1, src: deliciousOne, liked: false, title: "Mixed Tropical Fruit Salad with Superfood Boosts ", time: "30 Min", category: "Healthy" },
    { id: 2, src: deliciousTwo, liked: false, title: "Big and Juicy Wagyu Beef Cheeseburger", time: "30 Min", category: "Western" },
    { id: 3, src: deliciousThree, liked: false, title: "Healthy Japanese Fried Rice with Asparagus", time: "30 Min", category: "Healthy" },
    { id: 4, src: deliciousFour, liked: false, title: "Cauliflower Walnut Vegetarian Taco Meat", time: "30 Min", category: "Eastern" },
    { id: 5, src: deliciousFive, liked: false, title: "Rainbow Chicken Salad with Almond Honey Mustard Dressing", time: "30 Min", category: "Healthy" },
    { id: 6, src: deliciousSix, title: "Barbeque Spicy Sandwiches with Chips", liked: false,  time: "30 Min", category: "Snack"  },
    { id: 7, src: deliciousSeven, liked: false, title: "Firecracker Vegan Lettuce Wraps - Spicy! ", time: "30 Min", category: "Seafood" },
    { id: 8, src: deliciousEight, liked: false, title: "Chicken Ramen Soup with Mushroom ", time: "30 Min", category: "Japanese" }
  ];

const TryDelicious = () => {
    const [images, setImages] = useState(() => {
      const savedImages = localStorage.getItem('likedImage');
      return savedImages ? JSON.parse(savedImages) : initialImages;
    });

    useEffect(() => {
      localStorage.setItem("likedImage", JSON.stringify(images))

    }, [images])
    

    const toggleLike = (id) => {
      setImages((prevImages) =>
        prevImages.map((img) =>
          img.id === id ? { ...img, liked: !img.liked } : img
        )
      );
    };
  return (
    <section className='py-7 md:py-12 lg:py-24 px-[5%] bigScreens:px-[13%] font-Inter flex flex-col items-center justify-center '>
        <div className='w-full flex items-center justify-between'>
            <h1 className='w-[45%] lg:w-[37%] text-[14px] md:text-[20px] lg:text-[30px] leading-[18px] md:leading-[24px] lg:leading-[35px] xl:text-[45px] xl:leading-[55px] bigScreens:text-[55px] bigScreens:leading-[65px] font-semibold text-black dark:text-gray-200'>Try this delicious recipe to make your day</h1>
            <p className='w-[50%] mt-0 md:mt-3 text-[10px] md:text-[12px] lg:text-[14px] xl:text-[17px] bigScreens:text-[20px] text-black dark:text-gray-200 text-opacity-50'>Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqut enim ad minim </p>
        </div>
            <motion.div
            initial={{ y: 100, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            viewport={{ once: true }}
            >
                <div className="grid grid-cols-2 gap-3 md:grid-cols-4 md:gap-5 lg:gap-16 bigScreens:gap-20 mt-7 md:mt-10 lg:mt-20">
                    {images.map((image) => (
                    <div key={image.id} className="w-full relative">
                        <img src={image.src} alt="" className= {`rounded-2xl w-full`}/>
                        <h1 className="text-[8px] md:text-[11px] xl:text-[15px] bigScreens:text-[26px] bigScreens:leading-[40px] leading-[12px] md:leading-[20px] font-semibold mt-4 text-black dark:text-gray-200">{image.title}</h1>

                        <div className="flex items-center space-x-3 md:space-x-4 lg:space-x-6 mt-2 md:mt-5 ">
                            <div className="text-[7px] md:text-[9px] lg:text-[12px] bigScreens:text-[18px] flex items-center space-x-1 lg:space-x-2">
                            <FontAwesomeIcon icon={faClock} className="bg-black text-white dark:text-gray-200 rounded-full text-[10px] md:text-[14px] lg:text-[18px]  bigScreens:text-[25px]" />
                            <div className="text-[#7f7f7f] dark:text-gray-200">{image.time}</div>
                            </div>
                           
                            <div className="text-[7px] md:text-[9px] lg:text-[12px] flex items-center space-x-2  bigScreens:text-[18px]">
                                <FontAwesomeIcon icon={faCutlery} className="text-black dark:text-gray-200 rounded-full text-[10px] md:text-[14px] lg:text-[18px]  bigScreens:text-[25px]" />
                                <div className="text-[#7f7f7f] dark:text-gray-200">{image.category}</div>
                            </div>
                        </div>
                        <div
                            className="absolute top-3 right-3 bg-white w-5 h-5 xl:w-10 xl:h-10 flex items-center justify-center rounded-full cursor-pointer"
                            onClick={() => toggleLike(image.id)}
                        >
                        <FontAwesomeIcon
                        icon={faHeart}
                        className={`transition-all ease-in-out duration-300 text-[10px] xl:text-[20px] ${
                            image.liked ? "text-red-500" : "text-gray-300"
                        }`}
                        />
                    </div>
                    </div>
                    ))}
                </div>
            </motion.div>
    </section>
  )
}

export default TryDelicious
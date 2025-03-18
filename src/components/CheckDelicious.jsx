import React from 'react'
import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

import deliciousOne from '../assets/delicious/delicious-one.png'
import deliciousTwo from '../assets/delicious/delicious-two.png'
import deliciousThree from '../assets/delicious/delicious-three.png'
import deliciousFour from '../assets/delicious/delicious-four.png'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCutlery } from '@fortawesome/free-solid-svg-icons'
import { faClock } from '@fortawesome/free-regular-svg-icons'
import { faHeart } from '@fortawesome/free-solid-svg-icons'

const initialImages = [
    { id: 1, src: deliciousOne, liked: false, title: "Mixed Tropical Fruit Salad with Superfood Boosts ", time: "30 Min", category: "Healthy" },
    { id: 2, src: deliciousTwo, liked: false, title: "Big and Juicy Wagyu Beef Cheeseburger", time: "30 Min", category: "Western" },
    { id: 3, src: deliciousThree, liked: false, title: "Healthy Japanese Fried Rice with Asparagus", time: "30 Min", category: "Healthy" },
    { id: 4, src: deliciousFour, liked: false, title: "Cauliflower Walnut Vegetarian Taco Meat", time: "30 Min", category: "Eastern" },
  ];

const CheckDelicious = () => {
    const [images, setImages] = useState(() => {
      const savedImages = localStorage.getItem('lovedImages');
      return savedImages ? JSON.parse(savedImages) : initialImages
    });
    useEffect(() => {
      localStorage.setItem("lovedImages", JSON.stringify(images))
    
    }, [images])
    

    const toggleLike = (id) => {
      setImages((prevImages) =>
        prevImages.map((img) =>
          img.id === id ? { ...img, liked: !img.liked } : img
        )
      );
    };
  return (
    <motion.div
    initial={{ y: 100, opacity: 0 }}
    whileInView={{ y: 0, opacity: 1 }}
    transition={{ duration: 1.5, ease: "easeOut" }}
    viewport={{ once: true }}
    >
      <section className='pt-[30px] lg:pt-[70px] pb-[10px] md:pb-[50px] px-[5%] bigScreens:px-[13%] font-Inter flex flex-col items-center justify-center dark:text-gray-200'>
          <div className='w-full flex items-center justify-between'>
              <h1 className=' text-[14px] md:text-[16px] lg:text-[20px] leading-[20px] xl:text-[25px] xl:leading-[30px] bigScreens:text-[35px] bigScreens:leading-[40px] font-semibold mx-auto'>Check out the delicious recipe</h1>
          </div>
          <div className="grid grid-cols-2 gap-3 md:grid-cols-4 md:gap-4 lg:gap-16 bigScreens:gap-20 mt-4 md:mt-7 lg:mt-10">
                      {images.map((image) => (
                      <div key={image.id} className="w-full relative">
                          <img src={image.src} alt="" className= {`rounded-2xl w-full`}/>
                          <h1 className="text-[10px] md:text-[12px] xl:text-[15px] bigScreens:text-[26px] bigScreens:leading-[40px] leading-[15px] md:leading-[20px] font-semibold mt-1 md:mt-2 lg:mt-4">{image.title}</h1>

                          <div className="flex items-center space-x-2 md:space-x-4 lg:space-x-6 mt-3 md:mt-4 lg:mt-5 ">
                              <div className="text-[8px] md:text-[10px] lg:text-[12px] bigScreens:text-[18px] flex items-center space-x-1 lg:space-x-2">
                              <FontAwesomeIcon icon={faClock} className="bg-black text-white rounded-full text-[12px] md:text-[15px] lg:text-[18px] dark:text-gray-300 bigScreens:text-[25px]" />
                              <div className="text-[#7f7f7f] dark:text-gray-300">{image.time}</div>
                              </div>
                            
                              <div className="text-[8px] md:text-[10px] lg:text-[12px] bigScreens:text-[18px] flex items-center space-x-1 lg:space-x-2">
                                  <FontAwesomeIcon icon={faCutlery} className="text-black dark:text-gray-300 rounded-full text-[12px] md:text-[15px] lg:text-[18px]  bigScreens:text-[25px] " />
                                  <div className="text-[#7f7f7f] dark:text-gray-300">{image.category}</div>
                              </div>
                          </div>
                          <div
                              className="absolute top-3 right-3 bg-white w-5 h-5 lg:w-10 lg:h-10 flex items-center justify-center rounded-full cursor-pointer"
                              onClick={() => toggleLike(image.id)}
                          >
                          <FontAwesomeIcon
                          icon={faHeart}
                          className={`transition-all ease-in-out duration-300 text-[10px] lg:text-[20px] ${
                              image.liked ? "text-red-500" : "text-gray-300"
                          }`}
                          />
                      </div>
                      </div>
                      ))}
          </div>

      </section>
    </motion.div>
  )
}

export default CheckDelicious 
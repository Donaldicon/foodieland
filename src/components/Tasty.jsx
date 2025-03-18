import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { faClock, faCutlery } from "@fortawesome/free-solid-svg-icons";

import tastyOne from "../assets/tasty/tasty-one.png";
import tastyTwo from "../assets/tasty/tasty-two.png";
import tastyThree from "../assets/tasty/tasty-three.png";
import tastyFour from "../assets/tasty/tasty-four.png";
import tastyFive from "../assets/tasty/tasty-five.png";
import tastySix from "../assets/tasty/tasty-six.png";
import tastySeven from "../assets/tasty/tasty-seven.png";
import tastyEight from "../assets/tasty/tasty-eight.png";
import tastyNine from "../assets/tasty/tasty-nine.png";
import tastyBg from "../assets/tasty/tasty-bg.png";


const initialImages = [
  { id: 1, src: tastyOne, liked: false, title: "Big and Juicy Wagyu Beef Cheeseburger", time: "30 Min", category: "Snack" },
  { id: 2, src: tastyTwo, liked: false, title: "Fresh Lime Roasted Salmon with Ginger Sauce", time: "30 Min", category: "Fish" },
  { id: 3, src: tastyThree, liked: false, title: "Strawberry Oatmeal Pancake with Honey Syrup", time: "30 Min", category: "Breakfast" },
  { id: 4, src: tastyFour, liked: false, title: "Fresh and Healthy Mixed Mayonnaise Salad", time: "30 Min", category: "Healthy" },
  { id: 5, src: tastyFive, liked: false, title: "Chicken Meatballs with Cream Cheese", time: "30 Min", category: "Meat" },
  { id: 6, src: tastySix, liked: false },
  { id: 7, src: tastySeven, liked: false, title: "Fruity Pancake with Orange & Blueberry", time: "30 Min", category: "Sweet" },
  { id: 8, src: tastyEight, liked: false, title: "The Best Easy One Pot Chicken and Rice", time: "30 Min", category: "Snack" },
  { id: 9, src: tastyNine, liked: false, title: "The Creamiest Creamy Chicken and Bacon Pasta", time: "30 Min", category: "Noodles" },
];

const Tasty = () => {
  // const [images, setImages] = useState(initialImages);

  const [images, setImages] = useState(() => {
    const savedImages = localStorage.getItem('likedImages');
    return savedImages ? JSON.parse(savedImages) : initialImages
  })

  useEffect(() => {
    localStorage.setItem("likedImages", JSON.stringify(images))
  }, [images])
  

  const toggleLike = (id) => {
    setImages((prevImages) =>
      prevImages.map((img) =>
        img.id === id ? { ...img, liked: !img.liked } : img
      )
    );
  };

  return (
      <div className="px-[5%] bigScreens:px-[13%] flex flex-col items-center py-[20px] lg:py-[70px] font-Inter mb-5">
        <h1 className="text:[14px] md:text-[20px] lg:text-[30px] md:leading-[35px] xl:text-[45px] xl:leading-[55px] bigScreens:text-[55px] bigScreens:leading-[65px] font-semibold text-black dark:text-gray-200">Simple and Tasty Recipes</h1>
        <p className="mt-2 lg:mt-3 w-[90%] lg:w-[720px] bigScreens:w-[1000px] text-[10px] md:text-[14px] xl:text-[17px] bigScreens:text-[20px] text-center text-black dark:text-gray-200 text-opacity-50">
          Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqut enim ad minim 
        </p>

        <motion.div
        initial={{ y: 100, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        viewport={{ once: true }}
        >
          <div className="grid grid-cols-2 md:grid-cols-3 gap-5 lg:gap-16 bigScreens:gap-20 mt-10">
            {images.map((image) => (
              <div key={image.id} className="relative w-full">
                <img src={tastyBg} alt="" className={`rounded-2xl ${image.id === 6 ? 'w-[0px]' : 'w-[400px]  bigScreens:w-[600px]'} object-cover h-[200px] smallPhones:h-[210px] md:h-[250px] lg:h-[305px] xl:h-[380px] bigScreens:h-[550px]`} />
                <div className={`absolute top-0  ${image.id === 6 ? 'w-full left-0' : ' w-[90%] left-[5%]'}`}>
                  <img src={image.src} alt="" className= {`rounded-2xl ${image.id === 6 ? 'w-full object-cover h-[200px] smallPhones:h-[210px] md:h-[250px] lg:h-[305px] xl:h-[380px] bigScreens:h-[550px]' : 'w-full '}`}/>
                  <h1 className="text-[12px] md:text-[14px] leading-[20px] lg:text-[18px] xl:text-[22px] bigScreens:text-[30px] bigScreens:leading-[40px] lg:leading-[30px] font-semibold mt-2 md:mt-4">{image.title}</h1>
                </div>
                <div className="flex items-center space-x-2 md:space-x-4 lg:space-x-6 mt-8 absolute bottom-5 left-[5%]">
                  {image.category && image.id !== 6 && (
                    <div className="text-[9px] md:text-[10px] lg:text-[12px] bigScreens:text-[18px] flex items-center space-x-1 lg:space-x-2">
                      <FontAwesomeIcon icon={faClock} className="bg-white text-black rounded-full text-[10px] md:text-[14px] lg:text-[18px]  bigScreens:text-[25px]" />
                      <div className="text-[#7f7f7f]">{image.time}</div>
                    </div>
                  )}
                    {image.category && image.id !== 6 && (
                      <div className="text-[9px] md:text-[10px] lg:text-[12px] bigScreens:text-[18px] flex items-center space-x-1 lg:space-x-2">
                          <FontAwesomeIcon icon={faCutlery} className="text-black rounded-full text-[10px] md:text-[14px] lg:text-[18px]  bigScreens:text-[25px]" />
                          <div className="text-[#7f7f7f]">{image.category}</div>
                      </div>
                    )}
                </div>
                {image.id !== 6 && (
                  <div
                      className="absolute top-2 xl:top-5 right-5 xl:right-10 bg-white w-5 h-5 md:w-7 md:h-7 lg:w-10 lg:h-10 flex items-center justify-center rounded-full cursor-pointer"
                      onClick={() => toggleLike(image.id)}
                  >
                  <FontAwesomeIcon
                  icon={faHeart}
                  className={`transition-all ease-in-out duration-300 text-[10px] md:text-[15px] lg:text-[20px] ${
                      image.liked ? "text-red-500" : "text-gray-300"
                  }`}
                  />
              </div>
              )}
              </div>
            ))}
          </div>
        </motion.div>

      </div>

  );
};

export default Tasty;

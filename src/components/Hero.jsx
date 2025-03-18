import React, { useState, useEffect } from "react";

import mask from '../assets/hero/mask.png'
import badge from '../assets/hero/Badge.png'
import emma from '../assets/hero/emma.png'
import hot from '../assets/hero/hot.png'
import sarah from '../assets/hero/Sarah.png'
import shawn from '../assets/hero/shawn.png'

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock } from "@fortawesome/free-regular-svg-icons";
import { faCutlery } from "@fortawesome/free-solid-svg-icons";
import { faPlay } from "@fortawesome/free-solid-svg-icons";

import { Link } from "react-router-dom";

const reviews = [
  {
    id: 1,
    title: "Spicy Delicious Chicken Wings",
    description:
      "Chicken is sweet and tender and juicy you know, I think you should try out this recipe and give me a feedback whether you like",
    time: "30 Minutes",
    category: "Chicken",
    authorImg: sarah,
    author: "Sarah Anuohia",
    date: "15 March 2025",
    heroImg: mask,
    url: 'https://youtu.be/-JJx4eZNmz4?si=98nN76WidbmQEQAK',
  },
  {
    id: 2,
    title: "Spicy Delicious Smoked Fish",
    description:
      "Smoked fish is very good for Egusi, Ogbono and even stew for people that would love to vomit. Try out this recipe.",
    time: "45 Minutes",
    category: "Fish",
    authorImg: emma,
    author: "Emma Okpontu",
    date: "10 March 2025",
    heroImg: mask,
    url: 'https://youtu.be/229tsOubPNo?si=TSLxFP5WHKv8-Z7z'
  },
  {
    id: 3,
    title: "Spicy Delicious Smoked Goat",
    description:
      "Smoked Goat meat is the best. I hate goat meat but here is a recipe for you my fans. Try out this recipe.",
    time: "45 Minutes",
    category: "Goat",
    authorImg: shawn,
    author: "Shawn Mbe",
    date: "5 March 2025",
    heroImg: mask,
    url: 'https://youtu.be/LBp1Zn4eMsA?si=oSPT_Cxny9dXUk2v'
  },
];

const Hero = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % reviews.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full font-Inter pb-5 lg:pb-20 flex justify-center items-center pt-[90px] lg:pt-[150px] bigScreens:px-[5%] ">

        <div className="relative w-full flex justify-center items-center overflow-hidden">
          <div className="relative w-full h-[300px] lg:h-[500px] flex justify-center items-center">
            {reviews.map((review, i) => {
              const position = (i - index + reviews.length) % reviews.length;

              let transformStyle = "";
              let opacity = 1;
              let zIndex = 1;
              let scale = 1;

              if (position === 0) {
                transformStyle = "translateX(0) scale(1)";
                zIndex = 10;
              } else if (position === 1) {
                transformStyle = "translateX(95%) scale(0.8)"; 
                opacity = 0.6;
                zIndex = 5;
              } else if (position === reviews.length - 1) {
                transformStyle = "translateX(-95%) scale(0.8)"; 
                opacity = 0.6;
                zIndex = 5;
              } else {
                transformStyle = "translateX(-100%) scale(0.5)";
                opacity = 0;
                zIndex = 1;
              }

              return (
                <div
                  key={review.id}
                  className="absolute w-[83%] bigScreens:w-[70%] h-full rounded-2xl transition-all duration-700 flex justify-center items-center"
                  style={{
                    transform: transformStyle,
                    opacity: opacity,
                    zIndex: zIndex,
                  }}
                >
                  <div className="relative w-[55%] lg:w-[60%] xl:w-[50%] bigScreens:w-[55%] h-[250px] lg:h-full flex items-center justify-center bg-[#E7FAFE] shadow-xl rounded-l-3xl overflow-hidden">
                    <div className="absolute top-[8%] lg:top-[10%] md:top-[15%] left-[10%]">
                        <div className="bg-white rounded-2xl w-[80px] lg:w-[115px] py-2 flex flex-row items-center justify-center space-x-2">
                            <img src={hot} alt="" className="w-[10px] lg:w-[20px]"/>
                            <p className="text-[8px] lg:text-[12px]">Hot Recipes</p>
                        </div>
                        <h2 className="mt-4 lg:mt-8 w-[75%] smallPhones:w-[75%] lg:w-[400px] text-[12px] smallPhones:text-[14px] md:text[15px] lg:text-[45px] lg:leading-[55px] font-bold">{review.title}</h2>
                        <p className="text-[8px] lg:text-[13px] w-[90%] smallPhones:w-[90%] pr-[5px] lg:pr-[30px] bigScreens:pr-[150px] mt-2 lg:mt-5 text-[#7f7f7f]">{review.description}</p>
                        <div className="flex items-center space-x-2 lg:space-x-6 mt-2 lg:mt-5 ">
                            <div className="text-[6px] lg:text-[10px] flex items-center space-x-1 bg-[#dcedf1] py-[3px] px-1 lg:py-2 lg:px-3 rounded-2xl">
                                <FontAwesomeIcon icon={faClock} className="bg-black text-white rounded-full text-[8px] lg:text-[15px]"/>
                                <div>
                                    {review.time}
                                </div>
                            </div>
                            <div className="text-[6px] lg:text-[10px] flex items-center space-x-1 bg-[#dcedf1] py-[3px] px-1 lg:py-2 lg:px-3 rounded-2xl">
                                <FontAwesomeIcon icon={faCutlery} className=" text-black rounded-full text-[8px] lg:text-[15px]"/>
                                <div>
                                    {review.category}
                                </div>
                            </div>
                        </div>
                        <div className="flex items-center mt-5 lg:mt-[75px] pr-[10px] md:pr-[30px] bigScreens:pr-[150px] justify-between">
                            <div className="flex items-center space-x-[1px] lg:space-x-2">
                                <div>
                                    <img
                                    src={review.authorImg}
                                    alt={review.author}
                                    className="w-5 h-5 lg:w-12 lg:h-12 rounded-full mr-2"
                                    />
                                </div>
                                <div className="flex flex-col items-start space-y-[1px] lg:space-y-1">
                                    <span className="text-[4px] smallPhones:text-[5px] lg:text-[11px] font-semibold">{review.author}</span>
                                    <span className="text-[4px] smallPhones:text-[5px] lg:text-[11px] text-[#7f7f7f]">{review.date}</span>
                                </div>
                            </div>
                            <Link to={review.url} target="_blank">
                            <div className="text-[4px] smallPhones:text-[5px] lg:text-[8px] flex items-center space-x-1 lg:space-x-2 bg-black px-1 py-1 smallPhones:px-2 smallPhones:py-2 lg:px-5 lg:py-3 rounded-xl cursor-pointer">
                                <p className="text-white">View Recipes</p>
                                <div className="bg-white w-2 h-2 lg:w-3 lg:h-3 rounded-full flex items-center justify-center">
                                    <FontAwesomeIcon icon={faPlay} className=" text-[3px] lg:text-[5px]"/>
                                </div>
                            </div>
                            </Link>
                      </div>
                    </div>
                  </div>
                  <div className="w-[50%]">
                    <img src={mask} alt="" className="w-full h-[250px] lg:h-[500px] object-cover rounded-r-3xl"/>
                  </div>
                  <div className="absolute top-[20%] bigScreens:top-[25%] left-[52%] lg:left-[55%] xl:left-[50%] bigScreens:left-[52%] -translate-x-1/2 -translate-y-1/2 z-[80]">
                    <img src={badge} alt="" className="w-[40px] lg:w-[120px] bigScreens:w-[180px]"/>
                  </div>
                </div>
                
              );
            })}
          </div>

        </div>
    </div>
  );


  
  // return (
  //   <div className="w-full font-Inter pb-20 flex justify-center items-center pt-[150px] bigScreens:px-[5%] ">

  //       <div className="relative w-full flex justify-center items-center overflow-hidden">
  //         <div className="relative w-full h-[500px] flex justify-center items-center">
  //           {reviews.map((review, i) => {
  //             const position = (i - index + reviews.length) % reviews.length;

  //             let transformStyle = "";
  //             let opacity = 1;
  //             let zIndex = 1;
  //             let scale = 1;

  //             if (position === 0) {
  //               transformStyle = "translateX(0) scale(1)";
  //               zIndex = 10;
  //             } else if (position === 1) {
  //               transformStyle = "translateX(95%) scale(0.8)"; 
  //               opacity = 0.6;
  //               zIndex = 5;
  //             } else if (position === reviews.length - 1) {
  //               transformStyle = "translateX(-95%) scale(0.8)"; 
  //               opacity = 0.6;
  //               zIndex = 5;
  //             } else {
  //               transformStyle = "translateX(-100%) scale(0.5)";
  //               opacity = 0;
  //               zIndex = 1;
  //             }

  //             return (
  //               <div
  //                 key={review.id}
  //                 className="absolute w-[83%] bigScreens:w-[70%] h-full rounded-2xl transition-all duration-700 flex justify-center items-center"
  //                 style={{
  //                   transform: transformStyle,
  //                   opacity: opacity,
  //                   zIndex: zIndex,
  //                 }}
  //               >
  //                 <div className="relative w-[60%] xl:w-[50%] bigScreens:w-[55%] h-full flex items-center justify-center bg-[#E7FAFE] shadow-xl rounded-l-3xl overflow-hidden">
  //                   <div className="absolute top-[10%] left-[10%]">
  //                       <div className="bg-white rounded-2xl w-[115px] py-2 flex flex-row items-center justify-center space-x-2">
  //                           <img src={hot} alt="" className="w-[20px]"/>
  //                           <p className="text-[12px]">Hot Recipes</p>
  //                       </div>
  //                       <h2 className="mt-8 w-[400px] text-[45px] leading-[55px] font-bold">{review.title}</h2>
  //                       <p className="text-[13px] pr-[30px] bigScreens:pr-[150px] mt-5 text-[#7f7f7f]">{review.description}</p>
  //                       <div className="flex items-center space-x-6 mt-5 ">
  //                           <div className="text-[10px] flex items-center space-x-2 bg-[#dcedf1] py-2 px-3 rounded-2xl">
  //                               <FontAwesomeIcon icon={faClock} className="bg-black text-white rounded-full text-[15px]"/>
  //                               <div>
  //                                   {review.time}
  //                               </div>
  //                           </div>
  //                           <div className="text-[10px] flex items-center space-x-2 bg-[#dcedf1] py-2 px-3 rounded-2xl">
  //                               <FontAwesomeIcon icon={faCutlery} className=" text-black rounded-full text-[15px]"/>
  //                               <div>
  //                                   {review.category}
  //                               </div>
  //                           </div>
  //                       </div>
  //                       <div className="flex items-center mt-[75px] pr-[30px] bigScreens:pr-[150px] justify-between">
  //                           <div className="flex items-center space-x-2">
  //                               <div>
  //                                   <img
  //                                   src={review.authorImg}
  //                                   alt={review.author}
  //                                   className="w-12 h-12 rounded-full mr-2"
  //                                   />
  //                               </div>
  //                               <div className="flex flex-col items-start space-y-1">
  //                                   <span className="text-[11px] font-semibold">{review.author}</span>
  //                                   <span className="text-[11px] text-[#7f7f7f]">{review.date}</span>
  //                               </div>
  //                           </div>
  //                           <Link to={review.url} target="_blank">
  //                           <div className="text-[8px] flex items-center space-x-2 bg-black px-5 py-3 rounded-xl cursor-pointer">
  //                               <p className="text-white">View Recipes</p>
  //                               <div className="bg-white w-3 h-3 rounded-full flex items-center justify-center">
  //                                   <FontAwesomeIcon icon={faPlay} className="text-[5px]"/>
  //                               </div>
  //                           </div>
  //                           </Link>
  //                     </div>
  //                   </div>
  //                 </div>
  //                 <div className="w-50%">
  //                   <img src={mask} alt="" className="w-full h-[500px] object-cover"/>
  //                 </div>
  //                 <div className="absolute top-[20%] bigScreens:top-[25%] lg:left-[50%] xl:left-[54%] bigScreens:left-[62%] -translate-x-1/2 -translate-y-1/2 z-[80]">
  //                   <img src={badge} alt="" className="w-[120px] bigScreens:w-[180px]"/>
  //                 </div>
  //               </div>
                
  //             );
  //           })}
  //         </div>

  //       </div>
  //   </div>
  // );



};

export default Hero;

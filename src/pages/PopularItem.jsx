import React from 'react'
import { assets } from '../assets/images/images'

const PopularItem = () => {
  return (
    <div>
            <div>
                <h2 className="text-center text-[43px] font-bold">Popular items</h2>
                <div className="card_content flex items-center justify-center py-20">
                    <img className='w-[100px] hover:scale-105 cursor-pointer' src={assets.leftarrow} alt="arrow" />
                    <div className="food_cards flex gap-4">
                        <div className="food_card">
                            <img className="rounded-xl" src={assets.popularfood1} alt="" />
                            <h2 className="font-bold text-2xl pt-3">Cheese Burger</h2>
                            <div className="flex items-center gap-2 py-2 text-[#FFB30E]">
                                <img src={assets.location} alt="" />
                                <p>Burger Arena</p>
                            </div>
                            <p>
                                <span className="font-bold">Rs.</span>388.99
                            </p>
                            <a
                                className="order-button hover:text-black ease-in duration-300  bg-[#F17228] text-white px-6 py-3 rounded-lg block mt-4 text-center"
                                href=""
                            >
                                Order Now
                            </a>
                        </div>

                        <div className="food_card">
                            <img className="rounded-xl" src={assets.popularfood2} alt="" />
                            <h2 className="font-bold text-2xl pt-3">Toffe’s Cake</h2>
                            <div className="flex items-center gap-2 py-2 text-[#FFB30E]">
                                <img src={assets.location} alt="" />
                                <p>Burger Arena</p>
                            </div>
                            <p>
                                <span className="font-bold">Rs.</span>388.99
                            </p>
                            <a
                                className="order-button hover:text-black ease-in duration-300  bg-[#F17228] text-white px-6 py-3 rounded-lg block mt-4 text-center"
                                href=""
                            >
                                Order Now
                            </a>
                        </div>

                        <div className="food_card">
                            <img className="rounded-xl" src={assets.popularfood3} alt="" />
                            <h2 className="font-bold text-2xl pt-3">Dancake</h2>
                            <div className="flex items-center gap-2 py-2 text-[#FFB30E]">
                                <img src={assets.location} alt="" />
                                <p>Burger Arena</p>
                            </div>
                            <p>
                                <span className="font-bold">Rs.</span>388.99
                            </p>
                            <a
                                className="order-button hover:text-black ease-in duration-300  bg-[#F17228] text-white px-6 py-3 rounded-lg block mt-4 text-center"
                                href=""
                            >
                                Order Now
                            </a>
                        </div>

                        <div className="food_card">
                            <img className="rounded-xl" src={assets.popularfood4} alt="" />
                            <h2 className="font-bold text-2xl pt-3">Crispy Sandwitch</h2>
                            <div className="flex items-center gap-2 py-2 text-[#FFB30E]">
                                <img src={assets.location} alt="" />
                                <p>Burger Arena</p>
                            </div>
                            <p>
                                <span className="font-bold">Rs.</span>388.99
                            </p>
                            <a
                                className="order-button hover:text-black ease-in duration-300 bg-[#F17228] text-white px-6 py-3 rounded-lg block mt-4 text-center"
                                href=""
                            >
                                Order Now
                            </a>
                        </div>

                       
                    </div>

                    <img className='w-[100px] hover:scale-105 cursor-pointer' src={assets.rightarrow} alt="" />
                </div>
            </div>
        </div>
  )
}

export default PopularItem


// import React, { useState, useRef } from "react";
// import { assets } from "../assets/images/images";

// const CardSlider = () => {
//   const [currentIndex, setCurrentIndex] = useState(0);
//   const cardContainerRef = useRef(null);

//   const cardWidth = 300; 
//   const maxIndex = 3;

//   // Variables for swipe detection
//   const touchStartX = useRef(0);
//   const touchEndX = useRef(0);

//   const handleLeftArrowClick = () => {
//     if (currentIndex > 0) {
//       setCurrentIndex((prev) => prev - 1);
//       cardContainerRef.current.scrollBy({ left: -cardWidth, behavior: "smooth" });
//     }
//   };

//   const handleRightArrowClick = () => {
//     if (currentIndex < maxIndex) {
//       setCurrentIndex((prev) => prev + 1);
//       cardContainerRef.current.scrollBy({ left: cardWidth, behavior: "smooth" });
//     }
//   };

//   const handleTouchStart = (e) => {
//     touchStartX.current = e.touches[0].clientX;
//   };

//   const handleTouchMove = (e) => {
//     touchEndX.current = e.touches[0].clientX;
//   };

//   const handleTouchEnd = () => {
//     const deltaX = touchStartX.current - touchEndX.current;

//     if (deltaX > 50) {
//       // Swipe left
//       handleRightArrowClick();
//     } else if (deltaX < -50) {
//       // Swipe right
//       handleLeftArrowClick();
//     }
//   };

//   return (
//     <div>
//       <div>
//         <h2 className="text-center text-[43px] font-bold">Popular items</h2>
//         <div className="card_content flex items-center py-20">
//           <img
//             src={assets.leftarrow}
//             alt="arrow"
//             className="cursor-pointer w-[90px]"
//             onClick={handleLeftArrowClick}
//           />
//           <div
//             className="food_cards flex gap-4 overflow-hidden"
//             ref={cardContainerRef}
//             style={{ scrollBehavior: "smooth" }}
//             onTouchStart={handleTouchStart}
//             onTouchMove={handleTouchMove}
//             onTouchEnd={handleTouchEnd}
//           >
//             {[assets.popularfood1, assets.popularfood2, assets.popularfood3, assets.popularfood4, assets.popularfood5].map(
//               ( food, index) => (
//                 <div className="food_card" key={index} style={{ minWidth: "300px" }}>
//                   <img className="rounded-xl" src={food} alt={`food ${index + 1}`} />
//                   <h2 className="font-bold text-2xl pt-3">Cheese Burger</h2>
//                   <div className="flex items-center gap-2 py-2 text-[#FFB30E]">
//                     <img src={assets.location} alt="location" />
//                     <p>Burger Arena</p>
//                   </div>
//                   <p>
//                     <span className="font-bold">Rs.</span>388.99
//                   </p>
//                   <a
//                     className="order-button bg-[#F17228] text-white px-6 py-3 rounded-lg block mt-4 text-center"
//                     href="#"
//                   >
//                     Order Now
//                   </a>
//                 </div>
//               )
//             )}
//           </div>
//           <img
//             src={assets.rightarrow}
//             alt="arrow"
//             className="cursor-pointer w-[90px]"
//             onClick={handleRightArrowClick}
//           />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default CardSlider;
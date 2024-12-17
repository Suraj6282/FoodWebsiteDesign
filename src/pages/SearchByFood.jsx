import React from 'react'
import { assets } from '../assets/images/images'

const SearchByFood = () => {
    return (
        <>
            <div className='bg-[#FEFAF1] mt-20'>
                <div className="head_content flex px-20 pt-20 items-center justify-between">
                    <h3 className=' text-4xl font-bold'>Search by Food</h3>
                    <div className='flex items-center gap-3'>
                        <a href='#' className="view__btn hover:scale-105 duration-200 flex items-center gap-2 mr-4 text-[#FFB30E]">
                            View All <img src={assets.leftYellowIcon} alt="" />
                        </a>
                        <div className="arrows flex items-center gap-4">
                            <a href=""><img className='bg-yellow-500 hover:scale-95 p-4 px-5 rounded-[50%]' src={assets.leftArrowIcon} alt="" /></a>
                            <a href=""><img className='bg-yellow-500 hover:scale-95 p-4 px-5 rounded-[50%]' src={assets.rightarrowicon} alt="" /></a>
                        </div>
                    </div>
                </div>

                <div className="foods pb-20 mt-20 mx-20 flex items-center gap-3 justify-center ">
                    <div>
                        <a href=""> <img className='hover:scale-95 transition-all duration-500 rounded-[50%] w-[200px]' src={assets.pizza} alt="" /></a>
                        <p className='text-center font-bold text-xl mt-5'>Pizza</p>
                    </div>
                    <div>
                        <a href=""> <img className='hover:scale-95 transition-all duration-500 rounded-[50%] w-[200px]' src={assets.burger} alt="" /></a>
                        <p className='text-center font-bold text-xl mt-5'>Burger</p>
                    </div>
                    <div>
                        <a href=""> <img className='hover:scale-95 transition-all duration-500 rounded-[50%] w-[200px]' src={assets.noodels} alt="" /></a>
                        <p className='text-center font-bold text-xl mt-5'>Noodels</p>
                    </div>
                    <div>
                        <a href=""> <img className='hover:scale-95 transition-all duration-500 rounded-[50%] w-[200px]' src={assets.subsandiwch} alt="" /></a>
                        <p className='text-center font-bold text-xl mt-5'>Sub-Sandiwch</p>
                    </div>
                    <div>
                        <a href=""> <img className='hover:scale-95 transition-all duration-500 rounded-[50%] w-[200px]' src={assets.chowmein} alt="" /></a>
                        <p className='text-center font-bold text-xl mt-5'>Chowmeni</p>
                    </div>
                    <div>
                        <a href=""> <img className='hover:scale-95 transition-all duration-500 rounded-[50%] w-[200px]' src={assets.steak} alt="" /></a>
                        <p className='text-center font-bold text-xl mt-5'>Steak</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default SearchByFood
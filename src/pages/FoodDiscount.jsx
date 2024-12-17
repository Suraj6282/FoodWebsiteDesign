import React from 'react'
import { assets } from '../assets/images/images'

const FoodDiscount = () => {
    return (
        <>
            <div className='flex gap-4 justify-center mx-20 mb-6'>
                <div>
                    <div className="food_card mt-20 relative">
                        <img className='rounded-3xl' src={assets.foodcard1} alt="" />
                        <div className="discount absolute bottom-0 bg-[#FFB30E] w-fit px-5 py-3 rounded-tr-3xl rounded-bl-3xl text-2xl font-bold flex gap-3 text-white">
                            <h3 className='flex items-center text-[62px]'>15</h3>
                            <div>
                                <h3 className='text-[25px]'>%</h3>
                                <p className='text-[20px]'>off</p>
                            </div>
                        </div>
                    </div>
                    <h3 className='text-[#424242] mt-8 mb-4 font-bold text-[22px]'>Greys Vage</h3>
                    <p className=' font-bold text-[#F17228] bg-[#F1722833] w-fit py-2 px-5 rounded-lg'>6 Days Remaining</p>
                </div>

                <div>
                    <div className="food_card mt-20 relative">
                        <img className='rounded-3xl' src={assets.foodcard2} alt="" />
                        <div className="discount absolute bottom-0 bg-[#FFB30E] w-fit px-5 py-3 rounded-tr-3xl rounded-bl-3xl text-2xl font-bold flex gap-3 text-white">
                            <h3 className='flex items-center text-[62px]'>10</h3>
                            <div>
                                <h3 className='text-[25px]'>%</h3>
                                <p className='text-[20px]'>off</p>
                            </div>
                        </div>
                    </div>
                    <h3 className='text-[#424242] mt-8 mb-4 font-bold text-[22px]'>Greys Vage</h3>
                    <p className=' font-bold  text-[#F17228] bg-[#F1722833] w-fit py-2 px-5 rounded-lg'>7 Days Remaining</p>
                </div>

                <div>
                    <div className="food_card mt-20 relative">
                        <img className='rounded-3xl' src={assets.foodcard3} alt="" />
                        <div className="discount absolute bottom-0 bg-[#FFB30E] w-fit px-5 py-3 rounded-tr-3xl rounded-bl-3xl text-2xl font-bold flex gap-3 text-white">
                            <h3 className='flex items-center text-[62px]'>25</h3>
                            <div>
                                <h3 className='text-[25px]'>%</h3>
                                <p className='text-[20px]'>off</p>
                            </div>
                        </div>
                    </div>
                    <h3 className='text-[#424242] mt-8 mb-4 font-bold text-[22px]'>Greys Vage</h3>
                    <p className=' font-bold  text-[#F17228] bg-[#F1722833] w-fit py-2 px-5 rounded-lg'>8 Days Remaining</p>
                </div>

                <div>
                    <div className="food_card mt-20 relative">
                        <img className='rounded-3xl' src={assets.foodcard4} alt="" />
                        <div className="discount absolute bottom-0 bg-[#FFB30E] w-fit px-5 py-3 rounded-tr-3xl rounded-bl-3xl text-2xl font-bold flex gap-3 text-white">
                            <h3 className='flex items-center text-[62px]'>20</h3>
                            <div>
                                <h3 className='text-[25px]'>%</h3>
                                <p className='text-[20px]'>off</p>
                            </div>
                        </div>
                    </div>
                    <h3 className='text-[#424242] mt-8 mb-4 font-bold text-[22px]'>Greys Vage</h3>
                    <p className=' font-bold  text-[#F17228] bg-[#F1722833] w-fit py-2 px-5 rounded-lg'>9 Days Remaining</p>
                </div>
            </div>
        </>
    )
}

export default FoodDiscount
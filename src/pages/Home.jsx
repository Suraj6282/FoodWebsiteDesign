import React, { useState } from 'react'
import { assets } from "../assets/images/images"

const Home = () => {
    return (
        <>
            <div className='home pt-16 pl-20 pr-10 flex justify-center items-center gap-20' style={{ backgroundImage: `url(${assets.homebg})` }}>
                <div className="left">
                    <h1 className=' text-white text-[80px] font-bold'>Are you starving?</h1>
                    <p className='font-normal text-zinc-700'>Within a few clicks, find meals that are accessible near you</p>
                    <div className='w-fit bg-white min-w-[680px] px-10 pt-2 mt-5 mb-14 pb-4 rounded-2xl'>
                        <div className="card__btn flex">
                            <a className='flex items-center gap-2 mt-4 bg-[#F172281A] text-[#F17228] p-2 w-fit mx-2 rounded-lg' href=""><img src={assets.bike} alt="" />Delivery</a>
                            <a className='flex items-center gap-2 mt-4 bg-[#FFF] text-[#757575] p-2 w-fit mx-2 rounded-lg' href=""><img src={assets.bag} alt="" />Pickup</a>
                        </div>
                        <hr className='w-full mt-2' />
                        <div className="mt-5 ml-2 relative">
                            <form action="" >
                                <div className='flex items-center gap-4'>
                                    <img src={assets.location} className='absolute z-10 top-[13px] left-3' alt="" />
                                    <input className='p-3 pl-9 w-[77%] outline-none bg-[#F5F5F5] rounded-md' type="search" name="" id="" placeholder='Enter Your Address' />
                                    <button className='bg-[#F17228] hover:scale-95 duration-200 p-3 rounded-xl w-fit flex items-center gap-2 text-white'> <img src={assets.searchwhite} alt="" /> Find Food</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>

                <div className="right">
                    <img src={assets.homepizza} alt="" />
                </div>
            </div>
        </>
    )
}

export default Home
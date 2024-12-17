import React from 'react'
import { assets } from "../assets/images/images"

const Header = () => {
    return (
        <>
            <header className='flex items-center justify-between sticky top-0 bg-white z-20'>
                <div className='flex items-center gap-3 text-2xl px-20 py-7'>
                    <a className='flex items-center gap-3' href="/">
                        <img src={assets.burgerheadericon} alt="burgericon" />
                        <h3 className='text-[#FFB30E] font-bold'><span className='text-[#F17228]'>food </span>waGon</h3>
                    </a>
                </div>

                <div className='flex'>
                    <h4 className='flex gap-2 font-bold'> Deliver to: <a href=""><img className='w-[18px]' src={assets.location} alt="location" /> </a><a className='font-normal'>Current Location</a><span className='font-bold'>Mohammadpur Bus Stand, Dhaka</span></h4>
                </div>

                <div className='flex items-center mr-32'>
                    <img className='mt-1' src={assets.search} alt="searchicon" />
                    <input className='placeholder:font-normal placeholder:text-black p-2 w-[135px] outline-none' type="search" placeholder='search food' />

                    <a href="#" className='shadow-2xl hover:scale-105 duration-300 font-bold p-2 px-6 gap-3 rounded-lg flex items-center text-[#FFB800] shadow-orange-700'><div>
                        <img src={assets.user} alt="usericon" />
                    </div>Login</a>
                </div>


            </header>
        </>
    )
}

export default Header
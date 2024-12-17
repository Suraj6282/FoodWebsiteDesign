import React from 'react'
import { assets } from '../assets/images/images'

const Work = () => {
  return (
    <div>
        <div className="bg-[#FFCE6738] my-20">
            <h2 className='text-center pt-20 text-[43px] text-[#F17228] font-bold '>How does it work</h2>
            <div className="cards py-12 px-20 flex justify-center gap-10">
                <div className='w-[307px] flex flex-col justify-center items-center'>
                    <img src={assets.workimg1} alt="" />
                    <p className='text-center font-bold text-[22px]'>Select location</p>
                    <p className='text-center text-[#9E9E9E] pt-3'>Choose the location where your food will be delivered.</p>
                </div>

                <div className='w-[307px] flex flex-col justify-center items-center'>
                    <img src={assets.workimg2} alt="" />
                    <p className='text-center font-bold text-[22px]'>Choose order</p>
                    <p className='text-center text-[#9E9E9E] pt-3'>Check over hundreds of menus to pick your favorite food</p>
                </div>

                <div className='w-[307px] flex flex-col justify-center items-center'>
                    <img src={assets.workimg3} alt="" />
                    <p className='text-center font-bold text-[22px]'>Pay advanced</p>
                    <p className='text-center text-[#9E9E9E] pt-3'>It's quick, safe, and simple. Select several methods of payment</p>
                </div>

                <div className='w-[307px] flex flex-col justify-center items-center'>
                    <img src={assets.workimg4} alt="" />
                    <p className='text-center font-bold text-[22px]'>Enjoy meals</p>
                    <p className='text-center text-[#9E9E9E] pt-3'>Food is made and delivered directly to your home.</p>
                </div>

            </div>
        </div>
    </div>
  )
}

export default Work
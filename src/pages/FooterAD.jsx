import React from 'react'
import { assets } from '../assets/images/images'

const FooterAD = () => {
    return (
        <>
            <div className='relative'>
                <img className='mt-20' src={assets.FooterImg} alt="" />

                <div className='flex justify-center items-center  z-20'>
                    <h2 className='text-center text-white absolute font-bold text-[50px] top-10'>Are you ready to order with <br /> the best deals?</h2>
                    <a className="order-button absolute bottom-7 hover:text-black ease-in duration-300  bg-[#F17228] text-white px-6 py-3 rounded-lg mt-4 text-center"
                        href="">
                        Proceed to order
                    </a>
                </div>


            </div>
        </>
    )
}

export default FooterAD
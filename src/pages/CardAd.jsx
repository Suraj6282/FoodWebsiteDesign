import React from 'react'
import { assets } from '../assets/images/images'

const CardAd = () => {
    return (
        <>
            <div className='cards'>
                <div className='flex justify-center items-center mt-20 px-20'>
                    <div className="card max-w-[500px] px-9 my-20">
                        <h2 className='text-[43px] font-bold'>Best Deals <span className='text-[#ffb310]'>Crispy Sandwiches</span></h2>
                        <p className='text-[#616161B0] pb-16 pt-7'>Enjoy the large size of sandwiches. Complete
                            perfect slice of sandwiches.</p>
                        <a className='flex hover:scale-95 duration-300 ease-in-out items-center justify-center py-3 gap-2 bg-orange-500 text-white rounded-lg' href=""> Proceed to order <img className='w-[16px h-[10px]' src={assets.rightarrowicon} alt="" /></a>
                    </div>
                    <div className="right">
                        <img className='rounded-lg' src={assets.Processedcard3} alt="" />
                    </div>
                </div>

                <div className='flex flex-row-reverse justify-center items-center px-20'>
                    <div className="card max-w-[500px] px-9 my-20">
                        <h2 className='text-[43px] font-bold'>Celebrate  parties
                            with <span className='text-[#ffb310]'>Fried Chicken</span></h2>
                        <p className='text-[#616161B0] pb-16 pt-7'>Get the best fried chicken smeared with a lip smacking lemon chili flavor. Check out
                            best deals for fried chicken.</p>
                        <a className='flex hover:scale-95 duration-300 ease-in-out items-center justify-center py-3 gap-2 bg-orange-500 text-white rounded-lg' href=""> Proceed to order <img className='w-[16px h-[10px]' src={assets.rightarrowicon} alt="" /></a>
                    </div>
                    <div className="right">
                        <img className='rounded-lg' src={assets.Processedcard2} alt="" />
                    </div>
                </div>

                <div className='flex justify-center items-center  px-20'>
                    <div className="card max-w-[500px]  px-9 my-20">
                        <h2 className='text-[43px] font-bold'>Wanna eat hot
                            & spicy  <span className='text-[#ffb310]'>Pizza?</span></h2>
                        <p className='text-[#616161B0] pb-16 pt-7'>Pair up with a friend and enjoy the
                            hot and crispy pizza pops. Try it
                            with the best deals.</p>
                        <a className='flex hover:scale-95 duration-300 ease-in-out items-center justify-center py-3 gap-2 bg-orange-500 text-white rounded-lg' href=""> Proceed to order <img className='w-[16px h-[10px]' src={assets.rightarrowicon} alt="" /></a>
                    </div>
                    <div className="right">
                        <img className='rounded-lg' src={assets.Processedcard1} alt="" />
                    </div>
                </div>
            </div>
        </>
    )
}

export default CardAd
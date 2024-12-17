import React from 'react'
import { assets } from '../assets/images/images'

const AppInstallAd = () => {
    return (
        <>
            <div className='bg-[#FEEFD0] pt-6'>
                <div className="card bg-white max-w-fit my-20 m-auto flex gap-16 rounded-[46px] py-7 px-10">
                    <div className="content flex gap-6 items-center bg-gradient-to-r from-[#FB3C00] to-[#FFB800] text-transparent bg-clip-text font-bold text-[24px]">
                        <img src={assets.discounttag} alt="" />
                        <div className='card__text border-r-2 border-[#CFCFCF] pr-10'>
                            <div>Daily</div>
                            <div>Discounts</div>
                        </div>
                    </div>
                    <div className="content flex gap-6 items-center bg-gradient-to-r from-[#FB3C00] to-[#FFB800] text-transparent bg-clip-text font-bold text-[24px]">
                        <img src={assets.Livetarcking} alt="" />
                        <div className='card__text border-r-2 border-[#CFCFCF] pr-10'>
                            <div>Live</div>
                            <div>Tracking</div>
                        </div>
                    </div>
                    <div className="content flex gap-6 items-center bg-gradient-to-r from-[#FB3C00] to-[#FFB800] text-transparent bg-clip-text font-bold text-[24px]">
                        <img src={assets.quickdelivery} alt="" />
                        <div className='card__text'>
                            <div>Quick</div>
                            <div>Delivery</div>
                        </div>
                    </div>
                </div>


                <div className="install__app flex justify-center items-center gap-20">
                    <div className="left">
                        <img src={assets.Topiphone} alt="" />
                    </div>

                    <div className="right">
                        <h2 className='font-bold text-6xl bg-gradient-to-r from-[#FB3C00] to-[#FFB800] text-transparent bg-clip-text '>Install The App</h2>
                    </div>

                </div>

            </div>
        </>
    )
}

export default AppInstallAd
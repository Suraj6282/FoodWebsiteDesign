import React from 'react'
import { assets } from '../assets/images/images'

const FeaturedRestaurants = () => {
    return (
        <div>
            <div>
                <h2 className="text-center text-[43px] font-bold">Featured Restaurants</h2>
                <div className="cards px-20 pt-20 pb-14 flex justify-center flex-wrap gap-2">

                    <div className="card pb-10">
                        <div className="card__content relative">
                            <img className='w-[300px] h-[300px]  rounded-2xl' src={assets.featurefood1} alt="" />
                            <div className="tags absolute top-7 left-5 flex gap-4">
                                <div className="percentage flex items-center gap-3 bg-[#F17228] w-fit py-2 px-3 rounded-lg font-bold text-xl text-[#fff]">
                                    <img src={assets.discounttagicon} alt="" />20% Off
                                </div>
                                <div className="percentage flex items-center gap-3 bg-[#FFB30E] w-fit py-2 px-3 rounded-lg font-bold text-xl text-[#fff]">
                                    <img src={assets.clockicon} alt="" />Fast
                                </div>
                            </div>
                        </div>
                        <div className="company mt-6 mb-8 flex items-center gap-5">
                            <img src={assets.FoodWorld} alt="" />
                            <div className="names">
                                <h3 className='font-bold text-xl'>Foodworld</h3>
                                <div className='flex items-center gap-2'><img src={assets.star} alt="" /><span className='text-[#FFB30E]'>46</span></div>
                            </div>
                        </div>

                        <div className="opendays">
                            <div className='bg-[#F1722833] w-fit font-bold text-xl text-[#F17228] py-2 px-5 rounded-2xl'>Opens tomorrow</div>
                        </div>
                    </div> 

                    <div className="card pb-10">
                        <div className="card__content relative">
                            <img className='w-[300px] h-[300px]  rounded-2xl' src={assets.featurefood2} alt="" />
                            <div className="tags absolute top-7 left-5 flex gap-4">
                                <div className="percentage flex items-center gap-3 bg-[#F17228] w-fit py-2 px-3 rounded-lg font-bold text-xl text-[#fff]">
                                    <img src={assets.discounttagicon} alt="" />20% Off
                                </div>
                                <div className="percentage flex items-center gap-3 bg-[#FFB30E] w-fit py-2 px-3 rounded-lg font-bold text-xl text-[#fff]">
                                    <img src={assets.clockicon} alt="" />Fast
                                </div>
                            </div>
                        </div>
                        <div className="company mt-6 mb-8 flex items-center gap-5">
                            <img src={assets.PizzaHub} alt="" />
                            <div className="names">
                                <h3 className='font-bold text-xl'>Pizzahub</h3>
                                <div className='flex items-center gap-2'><img src={assets.star} alt="" /><span className='text-[#FFB30E]'>46</span></div>
                            </div>
                        </div>

                        <div className="opendays">
                            <div className='bg-[#F1722833] w-fit font-bold text-xl text-[#F17228] py-2 px-5 rounded-2xl'>Opens tomorrow</div>
                        </div>
                    </div>

                    <div className="card pb-10">
                        <div className="card__content relative">
                            <img className='w-[300px] h-[300px] rounded-2xl' src={assets.featurefood3} alt="" />
                            <div className="tags absolute top-7 left-5 flex gap-4">
                                <div className="percentage flex items-center gap-3 bg-[#F17228] w-fit py-2 px-3 rounded-lg font-bold text-xl text-[#fff]">
                                    <img src={assets.discounttagicon} alt="" />20% Off
                                </div>
                                <div className="percentage flex items-center gap-3 bg-[#FFB30E] w-fit py-2 px-3 rounded-lg font-bold text-xl text-[#fff]">
                                    <img src={assets.clockicon} alt="" />Fast
                                </div>
                            </div>
                        </div>
                        <div className="company mt-6 mb-8 flex items-center gap-5">
                            <img src={assets.DountsHub} alt="" />
                            <div className="names">
                                <h3 className='font-bold text-xl'>Donuts hut</h3>
                                <div className='flex items-center gap-2'><img src={assets.star} alt="" /><span className='text-[#FFB30E]'>46</span></div>
                            </div>
                        </div>

                        <div className="opendays">
                            <div className='bg-[#79B93C33] w-fit font-bold text-xl text-[#79B93C] py-2 px-5 rounded-2xl'>Open Now</div>
                        </div>
                    </div>

                    <div className="card pb-10">
                        <div className="card__content relative">
                            <img className='w-[300px] h-[300px]  rounded-2xl' src={assets.featurefood4} alt="" />
                            <div className="tags absolute top-7 left-5 flex gap-4">
                                <div className="percentage flex items-center gap-3 bg-[#F17228] w-fit py-2 px-3 rounded-lg font-bold text-xl text-[#fff]">
                                    <img src={assets.discounttagicon} alt="" />20% Off
                                </div>
                                <div className="percentage flex items-center gap-3 bg-[#FFB30E] w-fit py-2 px-3 rounded-lg font-bold text-xl text-[#fff]">
                                    <img src={assets.clockicon} alt="" />Fast
                                </div>
                            </div>
                        </div>
                        <div className="company mt-6 mb-8 flex items-center gap-5">
                            <img src={assets.Subway} alt="" />
                            <div className="names">
                                <h3 className='font-bold text-xl'>Subway</h3>
                                <div className='flex items-center gap-2'><img src={assets.star} alt="" /><span className='text-[#FFB30E]'>46</span></div>
                            </div>
                        </div>

                        <div className="opendays">
                            <div className='bg-[#79B93C33] w-fit font-bold text-xl text-[#79B93C] py-2 px-5 rounded-2xl'>Open Now</div>
                        </div>
                    </div>

                    <div className="card pb-10">
                        <div className="card__content relative">
                            <img className='w-[300px] h-[300px]  rounded-2xl' src={assets.featurefood5} alt="" />
                            <div className="tags absolute top-7 left-5 flex gap-4">
                                <div className="percentage flex items-center gap-3 bg-[#F17228] w-fit py-2 px-3 rounded-lg font-bold text-xl text-[#fff]">
                                    <img src={assets.discounttagicon} alt="" />20% Off
                                </div>
                                <div className="percentage flex items-center gap-3 bg-[#FFB30E] w-fit py-2 px-3 rounded-lg font-bold text-xl text-[#fff]">
                                    <img src={assets.clockicon} alt="" />Fast
                                </div>
                            </div>
                        </div>
                        <div className="company mt-6 mb-8 flex items-center gap-5">
                            <img src={assets.RubyTuesday} alt="" />
                            <div className="names">
                                <h3 className='font-bold text-xl'>Ruby Tuesday</h3>
                                <div className='flex items-center gap-2'><img src={assets.star} alt="" /><span className='text-[#FFB30E]'>46</span></div>
                            </div>
                        </div>

                        <div className="opendays">
                            <div className='bg-[#79B93C33] w-fit font-bold text-xl text-[#79B93C] py-2 px-5 rounded-2xl'>Open Now</div>
                        </div>
                    </div>

                    <div className="card pb-10">
                        <div className="card__content relative">
                            <img className='w-[300px] h-[300px]  rounded-2xl' src={assets.featurefood6} alt="" />
                            <div className="tags absolute top-7 left-5 flex gap-4">
                                <div className="percentage flex items-center gap-3 bg-[#F17228] w-fit py-2 px-3 rounded-lg font-bold text-xl text-[#fff]">
                                    <img src={assets.discounttagicon} alt="" />20% Off
                                </div>
                                <div className="percentage flex items-center gap-3 bg-[#FFB30E] w-fit py-2 px-3 rounded-lg font-bold text-xl text-[#fff]">
                                    <img src={assets.clockicon} alt="" />Fast
                                </div>
                            </div>
                        </div>
                        <div className="company mt-6 mb-8 flex items-center gap-5">
                            <img src={assets.Kfc} alt="" />
                            <div className="names">
                                <h3 className='font-bold text-xl'>Kuakata Fried Chicken</h3>
                                <div className='flex items-center gap-2'><img src={assets.star} alt="" /><span className='text-[#FFB30E]'>46</span></div>
                            </div>
                        </div>

                        <div className="opendays">
                            <div className='bg-[#79B93C33] w-fit font-bold text-xl text-[#79B93C] py-2 px-5 rounded-2xl'>Open Now</div>
                        </div>
                    </div>

                    <div className="card pb-10">
                        <div className="card__content relative">
                            <img className='w-[300px] h-[300px]  rounded-2xl' src={assets.featurefood7} alt="" />
                            <div className="tags absolute top-7 left-5 flex gap-4">
                                <div className="percentage flex items-center gap-3 bg-[#F17228] w-fit py-2 px-3 rounded-lg font-bold text-xl text-[#fff]">
                                    <img src={assets.discounttagicon} alt="" />20% Off
                                </div>
                                <div className="percentage flex items-center gap-3 bg-[#FFB30E] w-fit py-2 px-3 rounded-lg font-bold text-xl text-[#fff]">
                                    <img src={assets.clockicon} alt="" />Fast
                                </div>
                            </div>
                        </div>
                        <div className="company mt-6 mb-8 flex items-center gap-5">
                            <img src={assets.RedSquere} alt="" />
                            <div className="names">
                                <h3 className='font-bold text-xl'>Red Square</h3>
                                <div className='flex items-center gap-2'><img src={assets.star} alt="" /><span className='text-[#FFB30E]'>46</span></div>
                            </div>
                        </div>

                        <div className="opendays">
                            <div className='bg-[#79B93C33] w-fit font-bold text-xl text-[#79B93C] py-2 px-5 rounded-2xl'>Open Now</div>
                        </div>
                    </div>

                    <div className="card pb-10">
                        <div className="card__content relative">
                            <img className='w-[300px] h-[300px]  rounded-2xl' src={assets.featurefood8} alt="" />
                            <div className="tags absolute top-7 left-5 flex gap-4">
                                <div className="percentage flex items-center gap-3 bg-[#F17228] w-fit py-2 px-3 rounded-lg font-bold text-xl text-[#fff]">
                                    <img src={assets.discounttagicon} alt="" />20% Off
                                </div>
                                <div className="percentage flex items-center gap-3 bg-[#FFB30E] w-fit py-2 px-3 rounded-lg font-bold text-xl text-[#fff]">
                                    <img src={assets.clockicon} alt="" />Fast
                                </div>
                            </div>
                        </div>
                        <div className="company mt-6 mb-8 flex items-center gap-5">
                            <img src={assets.TacoBell} alt="" />
                            <div className="names">
                                <h3 className='font-bold text-xl'>Taco Bell</h3>
                                <div className='flex items-center gap-2'><img src={assets.star} alt="" /><span className='text-[#FFB30E]'>46</span></div>
                            </div>
                        </div>

                        <div className="opendays">
                            <div className='bg-[#79B93C33] w-fit font-bold text-xl text-[#79B93C] py-2 px-5 rounded-2xl'>Open Now</div>
                        </div>
                    </div>

                </div>

                <a href='' className='flex items-center hover:scale-95 duration-200 bg-[#FF9A0E] w-fit text-white m-auto py-2 px-6 rounded-xl font-bold text-[16px] justify-center'>
                    View All <img className='mt-2 pl-1' src={assets.whiterightarrow} alt="" />
                </a>
            </div>
        </div>
    )
}

export default FeaturedRestaurants
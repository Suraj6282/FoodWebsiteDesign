import React, { useState } from 'react'
import { assets } from '../assets/images/images'

const Footer = () => {

    const [getemail, setgetEmail] = useState("")

    const handleemail = (e) =>{
        e.preventDefault(); 
        console.log("Email Submitted: ", getemail);
        setgetEmail("");
    }

    return (
        <div className='bg-[#212121] text-white px-20 pt-20 pb-5'>
            <div className='pb-16'>
                <h3 className='font-bold text-2xl pb-10 pl-20'>Our top cities</h3>
                <div className="peras flex justify-around">
                    <div className='text-[#F5F5F5]'>
                        <p className='mb-2'>San Francisco</p>
                        <p className='mb-2'>Miami</p>
                        <p className='mb-2'>San Diego</p>
                        <p className='mb-2'>East Bay</p>
                        <p className='mb-2'>Long Beach</p>
                    </div>

                    <div className='text-[#F5F5F5]'>
                        <p className='mb-2'>Los Angeles</p>
                        <p className='mb-2'>Washington DC</p>
                        <p className='mb-2'>Seattle</p>
                        <p className='mb-2'>Portland</p>
                        <p className='mb-2'>Nashville</p>
                    </div>

                    <div className='text-[#F5F5F5]'>
                        <p className='mb-2'>New York City</p>
                        <p className='mb-2'>Orange County</p>
                        <p className='mb-2'>Atlanta</p>
                        <p className='mb-2'>Charlotte</p>
                        <p className='mb-2'>Denver</p>
                    </div>

                    <div className='text-[#F5F5F5]'>
                        <p className='mb-2'>Chicago</p>
                        <p className='mb-2'>Phoenix</p>
                        <p className='mb-2'>Las Vegas</p>
                        <p className='mb-2'>Sacramento</p>
                        <p className='mb-2'>Oklahoma City</p>
                    </div>

                    <div className='text-[#F5F5F5]'>
                        <p className='mb-2'>Columbus</p>
                        <p className='mb-2'>New Mexico</p>
                        <p className='mb-2'>Albuquerque</p>
                        <p className='mb-2'>Sacramento</p>
                        <p className='mb-2'>New Orleans</p>
                    </div>
                </div>
            </div>
            <hr className="h-px mx-20 my-8 bg-gray-200 border-0 dark:bg-[#424242]" />

            <div className="flex justify-between">
                <div className='pb-16 flex justify-around'>
                    <div>
                        <h3 className='font-bold text-2xl pb-10 pl-20'>Company</h3>
                        <div className="peras pl-20">
                            <div className='text-[#F5F5F5]'>
                                <a href=""><p className='mb-2'>About us</p></a>
                                <a href=""><p className='mb-2'>Team</p></a>
                                <a href=""><p className='mb-2'>Careers</p></a>
                                <a href=""><p className='mb-2'>Blog</p></a>
                            </div>

                        </div>
                    </div>

                    <div>
                        <h3 className='font-bold text-2xl pb-10 pl-20'>Contact</h3>
                        <div className="peras pl-20">
                            <div className='text-[#F5F5F5]'>
                               <a href=""> <p className='mb-2'>Help & Support</p></a>
                                <a href=""><p className='mb-2'>Partner with us </p></a>
                                <a href=""><p className='mb-2'>Ride with us</p></a>
                            </div>

                        </div>
                    </div>

                    <div>
                        <h3 className='font-bold text-2xl pb-10 pl-20'>Legal</h3>
                        <div className="peras pl-20">
                            <div className='text-[#F5F5F5]'>
                                <a href=""><p className='mb-2'>Terms & Conditions</p></a>
                                <a href=""><p className='mb-2'>Refund & Cancellation</p></a>
                                <a href=""><p className='mb-2'>Privacy Policy</p></a>
                                <a href=""><p className='mb-2'>Cookie Policy</p></a>
                            </div>

                        </div>
                    </div>

                </div>
                <div className="right w-[480px]">
                    <h3 className='uppercase text-[#F5F5F5]'>Follow Us</h3>

                    <div className="socialicons flex gap-6 items-center my-10">
                        <a href=""><img src={assets.instragramicon} alt="" /></a>
                        <a href=""><img src={assets.facebookicon} alt="" /></a>
                        <a href=""><img src={assets.twitericon} alt="" /></a>
                    </div>

                    <p className='mb-10'>Receive exclusive offers in your mailbox</p>

                    <div className="form h-fit relative">
                        <form onSubmit={handleemail} className='flex gap-3 items-center' action="">
                            <input 
                            onChange={(e)=>{
                                setgetEmail(e.target.value)
                            }}  
                            value={getemail} 
                            className=' bg-[#424242] outline-none py-3 pl-12 pr-5 rounded-md' 
                            type="email" 
                            name="" 
                            placeholder='Enter Your email' 
                            id="" required/>

                            <img className='absolute left-4' src={assets.Emailicon} alt="" />
                            <button className='hover:scale-95 bg-orange-500 py-3 px-5 rounded-md'>Subscribe</button>
                        </form>
                    </div>

                </div>
            </div>
            <hr className="h-px mt-8 mx-20 bg-gray-200 border-0 dark:bg-[#424242]" />
            <div className='px-20 py-5 flex justify-between'>
                <p className=''>All rights Reserved &copy; Suraj Patel, 2025 </p>
                <p>Made with ❤️ by <span className='font-bold'>SURAJ PATEL</span></p>
            </div>
        </div>
    )
}

export default Footer
import React from 'react'
import { FaFacebookF, FaSquareTwitter, FaInstagram, FaSquareYoutube } from "react-icons/fa6";

const Footer = () => {
  return (
    <div className='w-full bg-[#212123]'>
      <div className="max-w-[1400px] mx-auto w-full flex justify-center items-center">

          <div className='w-full flex flex-col sm:flex-row justify-center sm:gap-12 py-12 px-5'>

            <div className='basis-4/12 mb-6'>
              <h3 className='text-red-500 font-bold text-2xl'>Foodie</h3>
              <p className='w-[400px] pr-4 text-[#f5f5f5]/70 my-4 text-sm'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti aliquid totam ut voluptatem nemo nulla?</p>
              <div className='flex gap-4 text-red-500'>
                <FaFacebookF size={20} className='cursor-pointer'/>
                <FaSquareTwitter size={20} className='cursor-pointer'/>
                <FaInstagram size={20} className='cursor-pointer'/>
                <FaSquareYoutube size={20} className='cursor-pointer'/>
              </div> 
            </div>

            <div className='basis-1/12 mb-6'>
              <h4 className='font-bold text-[#f5f5f5] text-lg mb-2'>About</h4>
              <p className='text-[#f5f5f5]/60'>About Us</p>
            </div>

            <div className='basis-1/12 mb-6'>
              <h4 className='font-bold text-[#f5f5f5] text-lg mb-2'>Company</h4>
              <p className='text-[#f5f5f5]/60 cursor-pointer mb-2'>FAQ</p>
              <p className='text-[#f5f5f5]/60 cursor-pointer mb-2'>Blogs</p>
              <p className='text-[#f5f5f5]/60 cursor-pointer mb-2'>Partner with us</p>
            </div>

            <div className='basis-1/12 mb-6'>
              <h4 className='font-bold text-[#f5f5f5] text-lg mb-2'>Support</h4>
              <p className='text-[#f5f5f5]/60 cursor-pointer mb-2'>Feedback</p>
              <p className='text-[#f5f5f5]/60 cursor-pointer mb-2'>Support Center</p>
              <p className='text-[#f5f5f5]/60 cursor-pointer mb-2'>Account</p>
            </div>

            <div className='basis-4/12 mb-5'>
              <h3 className='text-red-500 font-bold text-xl mb-2'>Subscribe Now</h3>
              <input type="email" placeholder='Email address' className='w-full rounded p-2 ' />
            </div>
          </div>


        </div>
        

        <div className='w-full bg-[#f5f5f5] p-4 text-center text-black/50 font-bold'>
          © 2023 Jomar Magpoot. Foodie
        </div>

    </div>
  )
}

export default Footer

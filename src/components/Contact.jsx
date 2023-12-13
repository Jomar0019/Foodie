import React, { useState } from 'react'
import Pizza from '../assets/hero3.png'


const Contact = () => {



  return (
    <div className='w-full h-screen p-4 bg-[#f5f5f5]'>
        <div className="max-w-[1400px] mx-auto flex flex-col justify-center items-center h-full">
            

                <div className='text-center w-full'>
                    <h2 className='text-4xl sm:text-5xl font-bold mb-10'>Contact Us</h2>
                </div>

                <div className='flex justify-center items-center w-full'>
                    <div className='w-[500px] bg-white shadow-lg p-10 rounded-lg'>

                        <label className='font-bold'>Name</label>
                        <input type="text" placeholder='John Doe' className='w-full border border-black p-2 mb-3 rounded' />

                        <label className='font-bold'>Phone</label>
                        <input type="text" placeholder='+63' className='w-full border border-black p-2 mb-3 rounded'/>

                        <label className='font-bold'>Email</label>
                        <input type="email" placeholder='Johndoe@email.com' className='w-full border border-black p-2 mb-3 rounded'/>

                        <label className='font-bold'>Message</label>
                        <textarea name="" id="" cols="30" rows="10" className='w-full border border-black rounded'></textarea>

                        <button className='w-full bg-red-500 text-white px-[8px] mt-5 py-[4px] rounded'>Submit</button>
                    </div>
                    <div className='  hidden md:flex'>
                        <img src={Pizza} alt="" className='rotate-180' />
                    </div>
                </div>


        </div>
    </div>
  )
}

export default Contact

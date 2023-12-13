import React, { useState } from 'react'
import { FaCartPlus, FaTimes } from "react-icons/fa";
import { HiMenu } from "react-icons/hi";

const Navbar = () => {

    const [ menu, setMenu ] = useState(false)

    const handleClick = () => {
        setMenu(!menu)
    }


  return (
    <div className='fixed w-full h-[80px] shadow-md bg-white'>
        <div className='max-w-[1400px] p-4 mx-auto flex items-center justify-between '>
            <div>
                <h2 className='text-4xl font-bold text-[#DF2E38]'>Foodie</h2>
            </div>
            <div className='hidden md:flex items-center justify-center'>
                <ul className='flex justify-center items-center gap-4'>
                    <li className='font-bold cursor-pointer'>Home</li>
                    <li className='font-bold cursor-pointer'>Offer</li>
                    <li className='font-bold cursor-pointer'>Services</li>
                    <li className='font-bold cursor-pointer'>Menu</li>
                    <li className='font-bold cursor-pointer'>Contact</li>
                </ul>
                <div className='ml-12 flex items-center gap-5'>
                    <FaCartPlus size={20}/>
                    <button className='bg-[#DF2E38] py-[8px] px-[16px] rounded text-white'>Sign In</button>
                </div>
            </div>

            {/* Hamburger Menu  */}
            <div className='md:hidden z-10' onClick={handleClick}>
                { !menu ? <HiMenu size={30} className='cursor-pointer'/> : <FaTimes size={30} className='cursor-pointer' /> }
            </div>

            {/* Mobile Menu  */}
            <div className={menu ? "absolute top-0 left-0 w-full bg-white h-screen flex flex-col justify-between pt-[80px] p-4" : "hidden"}>
                <ul className='flex flex-col gap-y-12'>
                    <li className='cursor-pointer text-3xl'>Home</li>
                    <li className='cursor-pointer text-3xl'>Offer</li>
                    <li className='cursor-pointer text-3xl'>Services</li>
                    <li className='cursor-pointer text-3xl'>Menu</li>
                    <li className='cursor-pointer text-3xl'>Contact</li>
                    
                </ul>
                <div className='flex flex-col mb-7'>
                    <button className='cursor-pointer text-lg w-full text-center bg-[#DF2E38] py-2 text-white rounded hover:bg-red-700'>Log In</button>
                    <p className='text-lg text-center w-full mt-2'>Don't have an account? <span className='text-[#DF2E38] hover:border-b-2 hover:border-[#DF2E38] cursor-pointer'>Register</span></p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Navbar

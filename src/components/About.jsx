import React from 'react'
import Chef from '../assets/chef-hat-red.png'
import Shipping from '../assets/delivery-truck-red.png'
import Fresh from '../assets/fresh-red.png'
import FreeShipping from '../assets/free-delivery-red.png'

const About = () => {
  return (
    <div className='w-full h-screen p-4 '>

        <div className='max-w-[1400px] mx-auto h-full flex justify-center items-center'>
            <div>
                <div className='max-w-[900px] mx-auto bg-[#DF2E38] flex gap-3 justify-around text-center text-white items-center rounded-md px-5 py-6 md:py-10'>
                    <div>
                        <h3 className='font-bold text-2xl sm:text-3xl mb-2'>100,000</h3>
                        <p className=''>Order Completed</p>
                    </div>

                    <div>
                        <h3 className='font-bold text-2xl sm:text-3xl mb-2'>70,000</h3>
                        <p className=''>Satisfied Customers</p>
                    </div>
                    
                    <div>
                        <h3 className='font-bold text-2xl sm:text-3xl mb-2'>15,000</h3>
                        <p className=''>Regular Visitors</p>
                    </div>
                </div>   

                <div className='text-center my-12 sm:my-24'>
                    <h1 className='text-5xl font-bold mb-6'>Why choice us?</h1>
                    <p className='sm:w-[680px] mx-auto'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi illo voluptate veniam consectetur natus? Lorem ipsum dolor sit amet.</p>
                </div>

                <div className=''>
                    <div className='grid grid-cols-2 sm:grid-cols-4 gap-2'>
                        <div className='flex flex-col justify-center items-center rounded-lg bg-red-100 shadow-md px-5 sm:h-[400px] text-sm p-4'>
                            <img src={Chef} alt="" className='mb-3'/>
                            <h3 className='font-bold text-xl mb-3'>Best Chef</h3>
                            <p className='text-center '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo, quos? Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa, dolor.</p>
                        </div>

                        <div className='flex flex-col justify-center items-center rounded-lg bg-red-100 shadow-md px-5 sm:h-[400px] text-sm p-4'>
                            <img src={Shipping} alt="" className='mb-3'/>
                            <h3 className='font-bold text-xl mb-3'>Fast Delivery</h3>
                            <p className='text-center '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo, quos? Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa, dolor.</p>
                        </div>

                        <div className='flex flex-col justify-center items-center rounded-lg bg-red-100 shadow-md px-5 sm:h-[400px] text-sm p-4'>
                            <img src={Fresh} alt="" className='mb-3'/>
                            <h3 className='font-bold text-xl mb-3'>Fresh</h3>
                            <p className='text-center '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo, quos? Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa, dolor.</p>
                        </div>

                        <div className='flex flex-col justify-center items-center rounded-lg bg-red-100 shadow-md px-5 sm:h-[400px] text-sm p-4'>
                            <img src={FreeShipping} alt="" className='mb-3'/>
                            <h3 className='font-bold text-xl mb-3'>Free Delivery</h3>
                            <p className='text-center '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo, quos? Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa, dolor.</p>
                        </div>
                        
                    </div>
                </div>
            </div>
        </div>
      
    </div>
  )
}

export default About

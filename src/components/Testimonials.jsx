import React from 'react'
import { FaStar,FaChevronLeft,FaChevronRight } from "react-icons/fa";
import Pizza from '../assets/menu-pizza.jpg'



const Testimonials = () => {
  return (
    <div className='w-full md:h-screen bg-[#f5f5f5] p-4'>
      <div className="max-w-[1400px] mx-auto flex flex-col justify-center items-center h-full py-12">
            <div className='text-center my-10'>
                <h2 className='text-4xl sm:text-5xl font-bold mb-6'>What our customer said</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 w-full">

                <div className='shadow-lg bg-white border-l-red-500 border-4 border-t-0 border-b-0 border-r-0 rounded-lg p-5'>
                    <div className="flex justify-end gap-2 text-red-500 mb-5">
                        <FaStar />
                        <FaStar />
                        <FaStar />
                        <FaStar />
                        <FaStar />
                    </div>
                    <p className='mb-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam nesciunt quidem, illum mollitia blanditiis eum unde sequi esse perspiciatis repellat nemo culpa similique provident a reiciendis. Ullam fugit nostrum voluptatum ipsa sit in nemo nulla, vitae itaque maiores expedita non.</p>
                    <div className='flex items-center'>
                        <img src={Pizza} alt="" className='w-[70px] h-[70px] rounded-full' />
                        <div className='ml-3'>
                            <h2 className='text-xl font-bold'>John Doe</h2>
                            <p className='text-sm'>Head Manager</p>
                        </div>
                    </div>
                </div>

                <div className='shadow-lg bg-white border-l-red-500 border-4 border-t-0 border-b-0 border-r-0 rounded-lg p-5'>
                    <div className="flex justify-end gap-2 text-red-500 mb-5">
                        <FaStar />
                        <FaStar />
                        <FaStar />
                        <FaStar />
                        <FaStar />
                    </div>
                    <p className='mb-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam nesciunt quidem, illum mollitia blanditiis eum unde sequi esse perspiciatis repellat nemo culpa similique provident a reiciendis. Ullam fugit nostrum voluptatum ipsa sit in nemo nulla, vitae itaque maiores expedita non.</p>
                    <div className='flex items-center'>
                        <img src={Pizza} alt="" className='w-[70px] h-[70px] rounded-full' />
                        <div className='ml-3'>
                            <h2 className='text-xl font-bold'>John Doe</h2>
                            <p className='text-sm'>Head Manager</p>
                        </div>
                    </div>
                </div>

            </div>

            <div className='mt-12 md:mt-24 flex gap-4'>
            <button className='bg-red-500 text-white rounded-full p-3'><FaChevronLeft/></button>
            <button className='bg-red-500 text-white rounded-full p-3'><FaChevronRight/></button>
        </div>

      </div>
    </div>
  )
}

export default Testimonials

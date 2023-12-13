import React from 'react'
import Pizza from '../assets/menu-pizza.jpg'
import Chicken from '../assets/menu-chicken.jpg'
import Steak from '../assets/menu-steak.jpg'
import { FaRegHeart, FaShare, FaStar } from "react-icons/fa";
// import { FaChevronLeft, FaChevronRight } from 'react-icons/fa':


const Best = () => {
  return (
    <div className='w-full md:h-screen p-4'>
      <div className='max-w-[1400px] mx-auto flex flex-col justify-center items-center h-full'>
        <div className='text-center my-10'>
            <h2 className='text-4xl sm:text-5xl font-bold mb-6'>Our best dishes</h2>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nostrum, vel.</p>
        </div>
        <div className='grid grid-cols-1 sm:grid-cols-3 gap-5 w-full'>

            <div className='w-full rounded-md shadow-lg bg-white overflow-hidden sm:h-[445px]'>
                <img src={Steak} alt="" className='object-cover h-[250px] w-full'/>
                <div className='p-3'>
                    <div className='flex justify-between items-center'>
                    <h4 className='font-bold text-xl'>Steak</h4>
                    <div className='flex gap-2'>
                        <FaRegHeart color='red' />
                        <FaShare color='red' />
                    </div>
                    </div>
                    <p className='text-sm my-3'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nam laudantium illum quia est officiis veritatis.</p>
                    <div className="flex justify-between items-center">
                    <p className='font-bold text-xl'>$10</p>
                    <div className='flex gap-2 items-center'>
                        <FaStar className='text-red-500'/>
                        <p className='text-sm font-bold text-black/50 cursor-pointer'>(5.0) Reviews</p>
                    </div>
                    </div>
                    <button className='bg-red-500 text-white w-full mt-3 py-1 rounded'>Add to Cart</button>
                </div>
            </div>

            <div className='w-full rounded-md shadow-lg bg-white overflow-hidden sm:h-[445px]'>
                <img src={Chicken} alt="" className='object-cover h-[250px] w-full'/>
                <div className='p-3'>
                    <div className='flex justify-between items-center'>
                    <h4 className='font-bold text-xl'>Chicken</h4>
                    <div className='flex gap-2'>
                        <FaRegHeart color='red' />
                        <FaShare color='red' />
                    </div>
                    </div>
                    <p className='text-sm my-3'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nam laudantium illum quia est officiis veritatis.</p>
                    <div className="flex justify-between items-center">
                    <p className='font-bold text-xl'>$10</p>
                    <div className='flex gap-2 items-center'>
                        <FaStar className='text-red-500'/>
                        <p className='text-sm font-bold text-black/50 cursor-pointer'>(5.0) Reviews</p>
                    </div>
                    </div>
                    <button className='bg-red-500 text-white w-full mt-3 py-1 rounded'>Add to Cart</button>
                </div>
            </div>

            <div className='w-full rounded-md shadow-lg bg-white overflow-hidden sm:h-[445px]'>
                <img src={Pizza} alt="" className='object-cover h-[250px] w-full'/>
                <div className='p-3'>
                    <div className='flex justify-between items-center'>
                    <h4 className='font-bold text-xl'>Pizza</h4>
                    <div className='flex gap-2'>
                        <FaRegHeart color='red' />
                        <FaShare color='red' />
                    </div>
                    </div>
                    <p className='text-sm my-3'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nam laudantium illum quia est officiis veritatis.</p>
                    <div className="flex justify-between items-center">
                    <p className='font-bold text-xl'>$10</p>
                    <div className='flex gap-2 items-center'>
                        <FaStar className='text-red-500'/>
                        <p className='text-sm font-bold text-black/50 cursor-pointer'>(5.0) Reviews</p>
                    </div>
                    </div>
                    <button className='bg-red-500 text-white w-full mt-3 py-1 rounded'>Add to Cart</button>
                </div>
            </div>

        </div>
        {/* <div className='text-center mt-12 flex gap-4'>
            <button className='bg-red-500 text-white rounded-full p-3'><FaChevronLeft/></button>
            <button className='bg-red-500 text-white rounded-full p-3'><FaChevronRight/></button>
        </div> */}
      </div>
    </div>
  )
}

export default Best

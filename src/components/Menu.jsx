import React from 'react'
import Lumpia from '../assets/menu-lumpia.jpg'
import Pizza from '../assets/menu-pizza.jpg'
import Burger from '../assets/menu-burger.jpg'
import Cake from '../assets/menu-cake.jpg'
import Chicken from '../assets/menu-chicken.jpg'
import Steak from '../assets/menu-steak.jpg'
import Ramen from '../assets/menu-ramen.jpg'
import Paella from '../assets/menu-paella.jpg'
import { FaRegHeart, FaShare, FaStar } from "react-icons/fa";

const Menu = () => {
  return (
    <div className='w-full bg-[#f5f5f5] p-4'>
        <div className="max-w-[1400px] mx-auto flex justify-center items-center">
            <div className='w-full my-12'>
                <h1 className='text-4xl sm:text-5xl font-bold mb-12 text-center'>Food Menu</h1>
                <div className='max-w-[1200px] mx-auto grid grid-cols-2 sm:grid-cols-4 gap-5'>

                  <div className='w-full rounded-md shadow-lg bg-white overflow-hidden'>
                    <img src={Lumpia} alt="" className='object-cover h-[125px] sm:h-[150px] w-full'/>
                    <div className='p-3'>
                      <div className='flex justify-between items-center'>
                        <h4 className='font-bold text-lg sm:text-xl'>Lumpia</h4>
                        <div className='flex gap-5 px-3'>
                          <FaRegHeart className='text-red-400 hover:text-[#DF2E38] cursor-pointer text-md md:text-xl' />
                          <FaShare className='text-red-400 hover:text-[#DF2E38] cursor-pointer text-md md:text-xl' />
                        </div>
                      </div>
                      <p className='text-sm my-2'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. </p>
                      <div className="flex justify-between items-center">
                        <p className='font-bold text-xl'>$10</p>
                        <div className='flex gap-2 items-center'>
                          <FaStar className='text-red-400'/>
                          <p className='text-sm font-bold cursor-pointer text-black/50'>(5.0) Reviews</p>
                        </div>
                      </div>
                      <button className='bg-[#DF2E38] text-white w-full mt-3 py-1 rounded'>Add to Cart</button>
                    </div>
                  </div>

                  <div className='w-full rounded-md shadow-lg bg-white overflow-hidden'>
                    <img src={Burger} alt="" className='object-cover h-[125px] sm:h-[150px] w-full'/>
                    <div className='p-3'>
                      <div className='flex justify-between items-center'>
                        <h4 className='font-bold text-lg sm:text-xl'>Burger</h4>
                        <div className='flex gap-5 px-3'>
                          <FaRegHeart className='text-red-400 hover:text-[#DF2E38] cursor-pointer text-md md:text-xl' />
                          <FaShare className='text-red-400 hover:text-[#DF2E38] cursor-pointer text-md md:text-xl' />
                        </div>
                      </div>
                      <p className='text-sm my-2'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. </p>
                      <div className="flex justify-between items-center">
                        <p className='font-bold text-xl'>$10</p>
                        <div className='flex gap-2 items-center'>
                          <FaStar className='text-red-400'/>
                          <p className='text-sm font-bold cursor-pointer text-black/50'>(5.0) Reviews</p>
                        </div>
                      </div>
                      <button className='bg-[#DF2E38] text-white w-full mt-3 py-1 rounded'>Add to Cart</button>
                    </div>
                  </div>

                  <div className='w-full rounded-md shadow-lg bg-white overflow-hidden'>
                    <img src={Cake} alt="" className='object-cover h-[125px] sm:h-[150px] w-full'/>
                    <div className='p-3'>
                      <div className='flex justify-between items-center'>
                        <h4 className='font-bold text-lg sm:text-xl'>Cake</h4>
                        <div className='flex gap-5 px-3'>
                          <FaRegHeart className='text-red-400 hover:text-[#DF2E38] cursor-pointer text-md md:text-xl' />
                          <FaShare className='text-red-400 hover:text-[#DF2E38] cursor-pointer text-md md:text-xl' />
                        </div>
                      </div>
                      <p className='text-sm my-2'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. </p>
                      <div className="flex justify-between items-center">
                        <p className='font-bold text-xl'>$10</p>
                        <div className='flex gap-2 items-center'>
                          <FaStar className='text-red-400'/>
                          <p className='text-sm font-bold cursor-pointer text-black/50'>(5.0) Reviews</p>
                        </div>
                      </div>
                      <button className='bg-[#DF2E38] text-white w-full mt-3 py-1 rounded'>Add to Cart</button>
                    </div>
                  </div>

                  <div className='w-full rounded-md shadow-lg bg-white overflow-hidden'>
                    <img src={Chicken} alt="" className='object-cover h-[125px] sm:h-[150px] w-full'/>
                    <div className='p-3'>
                      <div className='flex justify-between items-center'>
                        <h4 className='font-bold text-lg sm:text-xl'>Chicken</h4>
                        <div className='flex gap-5 px-3'>
                          <FaRegHeart className='text-red-400 hover:text-[#DF2E38] cursor-pointer text-md md:text-xl' />
                          <FaShare className='text-red-400 hover:text-[#DF2E38] cursor-pointer text-md md:text-xl' />
                        </div>
                      </div>
                      <p className='text-sm my-2'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. </p>
                      <div className="flex justify-between items-center">
                        <p className='font-bold text-xl'>$10</p>
                        <div className='flex gap-2 items-center'>
                          <FaStar className='text-red-400'/>
                          <p className='text-sm font-bold cursor-pointer text-black/50'>(5.0) Reviews</p>
                        </div>
                      </div>
                      <button className='bg-[#DF2E38] text-white w-full mt-3 py-1 rounded'>Add to Cart</button>
                    </div>
                  </div>

                  <div className='w-full rounded-md shadow-lg bg-white overflow-hidden'>
                    <img src={Pizza} alt="" className='object-cover h-[125px] sm:h-[150px] w-full'/>
                    <div className='p-3'>
                      <div className='flex justify-between items-center'>
                        <h4 className='font-bold text-lg sm:text-xl'>Pizza</h4>
                        <div className='flex gap-5 px-3'>
                          <FaRegHeart className='text-red-400 hover:text-[#DF2E38] cursor-pointer text-md md:text-xl' />
                          <FaShare className='text-red-400 hover:text-[#DF2E38] cursor-pointer text-md md:text-xl' />
                        </div>
                      </div>
                      <p className='text-sm my-2'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. </p>
                      <div className="flex justify-between items-center">
                        <p className='font-bold text-xl'>$10</p>
                        <div className='flex gap-2 items-center'>
                          <FaStar className='text-red-400'/>
                          <p className='text-sm font-bold cursor-pointer text-black/50'>(5.0) Reviews</p>
                        </div>
                      </div>
                      <button className='bg-[#DF2E38] text-white w-full mt-3 py-1 rounded'>Add to Cart</button>
                    </div>
                  </div>

                  <div className='w-full rounded-md shadow-lg bg-white overflow-hidden'>
                    <img src={Steak} alt="" className='object-cover h-[125px] sm:h-[150px] w-full'/>
                    <div className='p-3'>
                      <div className='flex justify-between items-center'>
                        <h4 className='font-bold text-lg sm:text-xl'>Steak</h4>
                        <div className='flex gap-5 px-3'>
                          <FaRegHeart className='text-red-400 hover:text-[#DF2E38] cursor-pointer text-md md:text-xl' />
                          <FaShare className='text-red-400 hover:text-[#DF2E38] cursor-pointer text-md md:text-xl' />
                        </div>
                      </div>
                      <p className='text-sm my-2'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. </p>
                      <div className="flex justify-between items-center">
                        <p className='font-bold text-xl'>$10</p>
                        <div className='flex gap-2 items-center'>
                          <FaStar className='text-red-400'/>
                          <p className='text-sm font-bold cursor-pointer text-black/50'>(5.0) Reviews</p>
                        </div>
                      </div>
                      <button className='bg-[#DF2E38] text-white w-full mt-3 py-1 rounded'>Add to Cart</button>
                    </div>
                  </div>

                  <div className='w-full rounded-md shadow-lg bg-white overflow-hidden'>
                    <img src={Ramen} alt="" className='object-cover h-[125px] sm:h-[150px] w-full'/>
                    <div className='p-3'>
                      <div className='flex justify-between items-center'>
                        <h4 className='font-bold text-lg sm:text-xl'>Ramen</h4>
                        <div className='flex gap-5 px-3'>
                          <FaRegHeart className='text-red-400 hover:text-[#DF2E38] cursor-pointer text-md md:text-xl' />
                          <FaShare className='text-red-400 hover:text-[#DF2E38] cursor-pointer text-md md:text-xl' />
                        </div>
                      </div>
                      <p className='text-sm my-2'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. </p>
                      <div className="flex justify-between items-center">
                        <p className='font-bold text-xl'>$10</p>
                        <div className='flex gap-2 items-center'>
                          <FaStar className='text-red-400'/>
                          <p className='text-sm font-bold cursor-pointer text-black/50'>(5.0) Reviews</p>
                        </div>
                      </div>
                      <button className='bg-[#DF2E38] text-white w-full mt-3 py-1 rounded'>Add to Cart</button>
                    </div>
                  </div>

                  <div className='w-full rounded-md shadow-lg bg-white overflow-hidden'>
                    <img src={Paella} alt="" className='object-cover h-[125px] sm:h-[150px] w-full'/>
                    <div className='p-3'>
                      <div className='flex justify-between items-center'>
                        <h4 className='font-bold text-lg sm:text-xl'>Paella</h4>
                        <div className='flex gap-5 px-3'>
                          <FaRegHeart className='text-red-400 hover:text-[#DF2E38] cursor-pointer text-md md:text-xl' />
                          <FaShare className='text-red-400 hover:text-[#DF2E38] cursor-pointer text-md md:text-xl' />
                        </div>
                      </div>
                      <p className='text-sm my-2'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. </p>
                      <div className="flex justify-between items-center">
                        <p className='font-bold text-xl'>$10</p>
                        <div className='flex gap-2 items-center'>
                          <FaStar className='text-red-400'/>
                          <p className='text-sm font-bold cursor-pointer text-black/50'>(5.0) Reviews</p>
                        </div>
                      </div>
                      <button className='bg-[#DF2E38] text-white w-full mt-3 py-1 rounded'>Add to Cart</button>
                    </div>
                  </div>
                  


                  
                  

                  

                  

                </div>
                <div className='text-center mt-10'>
                  <button className='bg-[#DF2E38] text-white px-6 py-2 rounded'>Load More</button>
                </div>
            </div>
        </div>
      
    </div>
  )
}

export default Menu

import React from 'react'
import heroImg from '../assets/hero.png'

const Hero = () => {
  return (
    <div className='w-full pt-[120px] md:pt-0 md:h-screen p-4 bg-[#f5f5f5]'>
      <div className='max-w-[1400px] mx-auto flex flex-col  justify-center sm:flex-row items-center md:h-screen'>
        
        <div className='basis-3/4 '>
          <h1 className='text-5xl sm:text-8xl font-bold'>Where every flavor</h1>
          <h1 className='text-5xl sm:text-8xl font-bold my-6'>tells a story</h1>
          <p className='text-slate-900 max-w-[700px] mb-6'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt neque ex doloribus omnis deleniti saepe veritatis itaque facilis nesciunt. Culpa ipsa voluptates perferendis suscipit minima, molestias est repellat hic tenetur!</p>
          <div className='flex gap-3'>
            <button className='text-white bg-[#DF2E38] px-[16px] py-[8px] rounded'>Book Now</button>
            <button className='text-[#DF2E38] border border-[#DF2E38] px-[16px] py-[8px] rounded'>Add to Cart</button>
          </div>
        </div>
        <div className='basis-1/4 my-10 '>
          <img src={heroImg} alt="" className='object-cover max-w-[500px]' />
        </div>

        
      </div>
    </div>
  )
}

export default Hero
import React, { useState } from 'react'
import Accordion from "../components/Accordion";
import { FaMinus, FaPlus } from "react-icons/fa6";

const Faq = () => {

    const [ accordion, setAccordion ] = useState(false);

    const handleClick = () => {
        setAccordion(!accordion);
    }

  return (
    <div className='w-full md:h-screen p-4'>
      <div className='max-w-[1200px] mx-auto flex flex-col justify-center items-center h-full'>

            <div className='text-center py-12'>
                <h2 className='text-4xl sm:text-5xl font-bold'>Frequently asked questions</h2>
            </div>
            
            <div className='pb-16'>
            <div className='border-b border-b-red-200 py-5 cursor-pointer' onClick={() => handleClick(!accordion)}>
                <div className='flex justify-between items-center mb-2'>
                    <p className={`text-lg font-bold ${!accordion ? 'text-red-500' : 'text-black'}`}>How does the food delivery service work?</p>  
                        {accordion ?
                            <FaPlus className='text-red-500'/>
                            :
                            <FaMinus className='text-red-500'/>
                        }
                </div>

                <div className={`grid overflow-hidden transition-all duration-300 ease-in-out ${
                    !accordion
                        ? "grid-rows-[1fr] opacity-100"
                        : "grid-rows-[0fr] opacity-0"
                    }`}>
                    <div className='overflow-hidden'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reprehenderit quod facilis atque, quos ipsa officiis, sunt iure eos consequuntur vero ratione cupiditate itaque saepe voluptatem?</div>
                </div>
            </div>
            
            <Accordion 
                title="How does the food delivery service work?" 
                answer="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reprehenderit quod facilis atque, quos ipsa officiis, sunt iure eos consequuntur vero ratione cupiditate itaque saepe voluptatem?"
            />
            
            <Accordion 
                title="How does the food delivery service work?" 
                answer="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reprehenderit quod facilis atque, quos ipsa officiis, sunt iure eos consequuntur vero ratione cupiditate itaque saepe voluptatem?"
            />

            <Accordion 
                title="How does the food delivery service work?" 
                answer="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reprehenderit quod facilis atque, quos ipsa officiis, sunt iure eos consequuntur vero ratione cupiditate itaque saepe voluptatem?"
            />

            <Accordion 
                title="How does the food delivery service work?" 
                answer="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reprehenderit quod facilis atque, quos ipsa officiis, sunt iure eos consequuntur vero ratione cupiditate itaque saepe voluptatem?"
            />

            <Accordion 
                title="How does the food delivery service work?" 
                answer="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reprehenderit quod facilis atque, quos ipsa officiis, sunt iure eos consequuntur vero ratione cupiditate itaque saepe voluptatem?"
            />

            <Accordion 
                title="How does the food delivery service work?" 
                answer="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reprehenderit quod facilis atque, quos ipsa officiis, sunt iure eos consequuntur vero ratione cupiditate itaque saepe voluptatem?"
            />

            <Accordion 
                title="How does the food delivery service work?" 
                answer="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reprehenderit quod facilis atque, quos ipsa officiis, sunt iure eos consequuntur vero ratione cupiditate itaque saepe voluptatem?"
            />
            </div>
            

      </div>
    </div>
  )
}

export default Faq

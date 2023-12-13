import React, { useState } from 'react'
import { FaMinus, FaPlus } from "react-icons/fa6";

const Faq = ({ title, answer}) => {

    const [ accordion, setAccordion ] = useState(false);

    const handleClick = () => {
        setAccordion(!accordion);
    }

  return (
    <div className='w-full'>
        
        <div className='border-b border-b-red-200 py-5 cursor-pointer' onClick={() => handleClick(!accordion)}>
            <div className='flex justify-between items-center mb-2'>
                <p className={`text-lg font-bold ${accordion ? 'text-red-500' : 'text-black'}`}>{title}</p>  
                    {!accordion ?
                        <FaPlus className='text-red-500'/>
                        :
                        <FaMinus className='text-red-500'/>
                    }
            </div>

            <div className={`grid overflow-hidden transition-all duration-300 ease-in-out ${
                accordion
                    ? "grid-rows-[1fr] opacity-100"
                    : "grid-rows-[0fr] opacity-0"
                }`}>
                <div className='overflow-hidden'>{answer}</div>
            </div>
        </div>
        
    </div>
  )
}

export default Faq

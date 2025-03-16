"use client"
import { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa6";

const WorkAccordion = () => {
    const [isOpen, setIsOpen] = useState(false)
    return (
        <div onClick={() => setIsOpen(isOpen => !isOpen)} className='border-b border-gray-400 cursor-pointer'>
            <div className='flex gap-4 justify-between items-center p-8'>
                <div className="w-full md:w-1/2 ">
                    <h2 className="text-xl lg:text-4xl pb-2 font-anton text-[#051a2f]">1. Understanding Your Business</h2>
                </div>
                <div className='w-full md:w-1/2 flex justify-between items-center gap-4'>
                    <p className="max-w-96 leading-10 text-gray-600">We begin by getting to know your brand, industry, and audience. By understanding your challenges, goals, and unique value, we lay the foundation.</p>
                    <div className="p-3 h-14 w-14 flex justify-center items-center rounded-full bg-[#051a2f]">
                        {
                            isOpen ? <FaChevronUp className="text-white text-4xl" /> : <FaChevronDown className="text-white text-4xl" />
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default WorkAccordion;
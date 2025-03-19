"use client"
import Image from "next/image";
import { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa6";

interface AccordionDataType {
    accordionData: {
        id: number,
        title: string,
        desc: string,
        imageUrl: string,
        bgColor: string
    }
}

const WorkAccordion: React.FC<AccordionDataType> = ({ accordionData }) => {
    const [isOpen, setIsOpen] = useState(false)
    return (
        <div style={{ backgroundColor: isOpen ? accordionData.bgColor : 'transparent' }} onClick={() => setIsOpen(isOpen => !isOpen)} className={`${isOpen ? "md:rounded-4xl rounded-tl-4xl rounded-tr-4xl p-4" : ""} relative border-b border-gray-400 cursor-pointer transition-all duration-500`}>
            <div className='flex gap-4 justify-between py-2 md:items-center md:p-8 '>
                <div className="flex-wrap">
                    <div className="flex flex-col md:flex-row justify-between items-center w-full">
                        <h2 className={`${isOpen ? "text-white" : "text-[#051a2f]"} w-full md:w-3/5 text-xl md:text-4xl pb-2 font-anton text-[#051a2f]`}>{accordionData.id}. {accordionData.title}</h2>
                        <p className={`${isOpen ? "text-white" : "text-[#051a2f]"} w-full md:w-2/5 lg:leading-8`}>{accordionData.desc}</p>
                    </div>
                </div>
                <div className='flex justify-between items-start md:items-center gap-4'>
                    <div className="p-1 md:p-3 md:h-14 md:w-14 flex justify-center items-center rounded-full bg-[#051a2f]">
                        {
                            isOpen ? <FaChevronUp className="text-white text-xl md:text-4xl" /> : <FaChevronDown className="text-white text-xl md:text-4xl" />
                        }
                    </div>
                </div>
            </div>
            {
                isOpen && <div data-aos="fade-down" data-aos-once="false" className="w-11/12 mx-auto -mb-4">
                    <figure>
                        <Image className="w-full h-full" src={accordionData.imageUrl} height={450} width={1024} alt={accordionData.title} />
                    </figure>
                </div>
            }
            {/* Absolute Image  */}
            {
                isOpen && <div>
                    <figure className="absolute top-0 right-[10%]">
                        <Image className=" w-[70px] rotate-180" src="https://framerusercontent.com/images/wLIPoxPfPQKC0Y9sV4dWpRK8UI.svg" alt="Icon" height={200} width={200} />
                    </figure>
                    <figure className="absolute bottom-[25%] -left-[1%]">
                        <Image className="w-3 md:w-[70px] rotate-90" src="https://framerusercontent.com/images/wLIPoxPfPQKC0Y9sV4dWpRK8UI.svg" alt="Icon" height={200} width={200} />
                    </figure>
                    <figure className="absolute -right-[1.2%] bottom-[25%]">
                        <Image className="w-3 md:w-[70px] -rotate-90" src="https://framerusercontent.com/images/wLIPoxPfPQKC0Y9sV4dWpRK8UI.svg" alt="Icon" height={200} width={200} />
                    </figure>
                </div>
            }
        </div>
    );
};

export default WorkAccordion;
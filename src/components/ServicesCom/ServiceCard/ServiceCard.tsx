"use client"
import Image from "next/image";
import { FaChevronDown, FaChevronUp } from "react-icons/fa6";
import { useState } from "react";

interface ServiceCardDataType {
    serviceCardData: {
        id: number,
        heading: string,
        bgColor: string,
        textColor: string,
        subHeading: string,
        description: {
            id: number,
            title: string,
            desc: string
        }[]
    },
    initiallyOpen?: boolean  // New prop to control initial state
}

const ServiceCard: React.FC<ServiceCardDataType> = ({ serviceCardData, initiallyOpen = false }) => {
    const [isOpen, setIsOpen] = useState(initiallyOpen);

    return (
        <div style={{ backgroundColor: serviceCardData.bgColor }} className="relative p-6 md:p-12 lg:p-14 rounded-4xl">
            {/* Header section with toggle button */}
            <div className="flex justify-between items-center pt-5 md:pt-7">
                <div>
                    <h2 style={{ color: serviceCardData.textColor }} className="text-lg leading-5 md:leading-9 lg:text-4xl font-medium uppercase font-anton">{serviceCardData.heading}</h2>
                    <h2 style={{ color: serviceCardData.textColor }} className="py-3">{serviceCardData.subHeading}</h2>
                </div>
                <button
                    onClick={() => setIsOpen(!isOpen)}
                    className="p-3 rounded-full pricingCardButton bg-gray-800 text-white transition-colors mr-3 -mt-16"
                    aria-label={isOpen ? "Collapse details" : "Expand details"}
                >
                    {isOpen ? <FaChevronUp size={24} /> : <FaChevronDown size={24} />}
                </button>
            </div>

            {/* Collapsible content */}
            {isOpen && (
                <div className="mt-6 pt-6 border-t border-white border-opacity-20 flex flex-col gap-4 md:pr-8">
                    {
                        serviceCardData.description.map((item) => (
                            <div key={item.id} className="flex flex-col gap-1">
                                <h3 style={{ color: serviceCardData.textColor }} className="text-base md:text-lg font-semibold leading-5">{item.title}</h3>
                                <p style={{ color: serviceCardData.textColor }} className="text-sm text-gray-300">{item.desc}</p>
                            </div>
                        ))
                    }
                </div>
            )}

            {/* absolute decorative elements */}
            <figure className="absolute top-0 left-[35%]">
                <Image className="w-10 md:w-20 rotate-180" src="https://framerusercontent.com/images/wLIPoxPfPQKC0Y9sV4dWpRK8UI.svg" alt="Icon" height={200} width={200} />
            </figure>
            <figure className="absolute -bottom-[7%] left-[15%]">
                <Image className="w-10 md:w-10 rotate-90" src="https://framerusercontent.com/images/DFNmLgDyqQHnzkFec5OKBkk1QCg.png" alt="Bottom Tick" height={200} width={200} />
            </figure>
            <figure className="absolute top-[40%] right-[0%]">
                <Image className="w-5 md:w-10" src="https://framerusercontent.com/images/Zcfr0k46mqMp9C03pMl27ojOE.png" alt="Right Tick" height={200} width={200} />
            </figure>
        </div>
    );
};

export default ServiceCard;
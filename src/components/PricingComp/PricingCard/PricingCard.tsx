"use client"
import Image from "next/image";
import Link from "next/link";
import { FaArrowRight, FaChevronDown, FaChevronUp } from "react-icons/fa6";
import { TiPlus } from "react-icons/ti";
import { useState } from "react";

interface PriceCardDataType {
    priceCardData: {
        id: number,
        planType: string,
        planDesc: string,
        features: string[],
        price: number,
        bgColor: string,
        textColor: string,
    }
}

const PricingCard: React.FC<PriceCardDataType> = ({ priceCardData }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div style={{ backgroundColor: priceCardData.bgColor }} className="relative p-5 md:p-7 lg:p-8 rounded-4xl">
            {/* Header section with toggle button */}
            <div className="flex justify-between items-center">
                <div>
                    <h2 style={{ color: priceCardData.textColor }} className="text-2xl lg:text-4xl font-medium uppercase font-anton">{priceCardData.planType}</h2>
                    <h2 style={{ color: priceCardData.textColor }} className="py-3">{priceCardData.planDesc}</h2>
                </div>
                <button
                    onClick={() => setIsOpen(!isOpen)}
                    // style={{ color: priceCardData.textColor }}
                    className="p-3 rounded-full pricingCardButton bg-gray-800 text-white transition-colors"
                    aria-label={isOpen ? "Collapse details" : "Expand details"}
                >
                    {isOpen ? <FaChevronUp size={24} /> : <FaChevronDown size={24} />}
                </button>
            </div>

            {/* Collapsible content */}
            {isOpen && (
                <div className="mt-6 pt-6 border-t border-white border-opacity-20 flex flex-col lg:flex-row gap-8 justify-between">
                    <div className="w-full lg:w-1/3">
                        <h4 style={{ color: priceCardData.textColor }} className="pb-4 font-bold">Features</h4>
                        <div className="flex flex-col gap-3">
                            {priceCardData.features.map((feature, ind) => (
                                <p key={ind} style={{ color: priceCardData.textColor }} className="font-semibold flex items-center gap-1.5">
                                    <TiPlus /> <span>{feature}</span>
                                </p>
                            ))}
                        </div>
                    </div>
                    <div className="w-full lg:w-1/3">
                        <h2 style={{ color: priceCardData.textColor }} className="text-2xl lg:text-4xl font-medium uppercase font-anton">${priceCardData.price}/month</h2>
                        <div className="flex pt-5">
                            <Link href="/contact" className="group bg-white hover:bg-[#051a2f] text-[#051a2f] hover:text-white font-bold rounded-full px-3 md:px-7 py-5 hover:border-white uppercase text-sm lg:text-lg flex items-center gap-2 transition-all duration-300">
                                <span>Get in touch</span>
                                <span className="relative h-4 w-5 lg:h-5 overflow-hidden">
                                    <FaArrowRight className="absolute top-0 group-hover:translate-x-8 text-[#051a2f] transition-all duration-500" />
                                    <FaArrowRight className="absolute top-0 -translate-x-8 text-white group-hover:translate-x-0 transition-all duration-500" />
                                </span>
                            </Link>
                        </div>
                    </div>
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

export default PricingCard;
import Image from "next/image";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa6";
import { TiPlus } from "react-icons/ti";

interface PriceCardDataType {
    priceCardData: {
        id: number,
        planType: string,
        planDesc: string,
        features: string[],
        price: string,
        bgColor: string,
        textColor: string,
        isStartsFrom: boolean,
        currency: string,
        callToAction: string
    }
}

const PricingCard: React.FC<PriceCardDataType> = ({ priceCardData }) => {
    return (
        <div
            id={`service-${priceCardData.id}`}  // Add this ID
            style={{ backgroundColor: priceCardData.bgColor }}
            className="relative p-5 md:p-7 lg:p-14 rounded-4xl flex flex-col lg:flex-row gap-2 md:gap-4 justify-between items-center"
        >
            <div className="w-full lg:w-1/3 flex lg:justify-center">
                <div>
                    <h2 style={{ color: priceCardData.textColor }} className="text-lg mt-3 md:mt-0 leading-5 md:leading-12 lg:text-5xl font-medium uppercase font-anton">{priceCardData.planType}</h2>
                    <p style={{ color: priceCardData.textColor }} className="md:py-6 text-sm py-3">{priceCardData.planDesc}</p>
                </div>
            </div>
            <div className="w-full lg:w-1/3 lg:px-3 flex lg:justify-center">
                <div>
                    <h4 style={{ color: priceCardData.textColor }} className="md:py-6 py-2 font-bold">Features</h4>
                    <div className="flex flex-col gap-1 md:gap-4">
                        {
                            priceCardData.features.map((feature, ind) => <p key={ind} style={{ color: priceCardData.textColor }} className="font-semibold text-xs md:text-base flex md:items-center gap-1.5"><TiPlus /> <span>{feature}</span></p>)
                        }
                    </div>
                </div>
            </div>
            <div className="w-full lg:w-1/3 flex lg:justify-center">
                <div>
                    {
                        priceCardData.isStartsFrom && <h4 style={{ color: priceCardData.textColor }} className="font-semibold pb-1 pt-5 md:pt-0">Starts From</h4>
                    }
                    <h2 style={{ color: priceCardData.textColor }}><span className="text-2xl lg:text-5xl font-medium uppercase font-anton">{priceCardData.price}</span><sub className="text-sm uppercase pl-1 font-semibold">{priceCardData.currency}</sub></h2>
                    <div className="flex py-5">
                        <Link href="/contact" className="group bg-white hover:bg-[#051a2f] text-[#051a2f] hover:text-white font-bold rounded-full px-3 md:px-7 py-2 md:py-5 hover:border-white uppercase text-sm lg:text-lg flex items-center gap-2 transition-all duration-300" >
                            <span className="md:hidden">{priceCardData.callToAction.slice(0,5)}...</span>
                            <span className="hidden md:block">{priceCardData.callToAction}</span>
                            <span className="relative h-4 w-5 lg:h-5 overflow-hidden">
                                <FaArrowRight className="absolute top-0 group-hover:translate-x-8 text-[#051a2f] transition-all duration-500" />
                                <FaArrowRight className="absolute top-0 -translate-x-8 text-white group-hover:translate-x-0 transition-all duration-500" />
                            </span>
                        </Link>
                    </div>
                </div>
            </div>
            {/* absolute data  */}
            <figure className="absolute top-0 left-[35%]">
                <Image className="w-10 md:w-20 rotate-180" src="https://framerusercontent.com/images/wLIPoxPfPQKC0Y9sV4dWpRK8UI.svg" alt="Right Tick" height={200} width={200} />
            </figure>
            <figure className="absolute -bottom-[4%] left-[15%]">
                <Image className="w-10 md:w-10 rotate-90" src="https://framerusercontent.com/images/DFNmLgDyqQHnzkFec5OKBkk1QCg.png" alt="Right Tick" height={200} width={200} />
            </figure>
            <figure className="absolute top-[40%] right-[0%]">
                <Image className="w-5 md:w-10" src="https://framerusercontent.com/images/Zcfr0k46mqMp9C03pMl27ojOE.png" alt="Icon" height={200} width={200} />
            </figure>
        </div>
    );
};

export default PricingCard;
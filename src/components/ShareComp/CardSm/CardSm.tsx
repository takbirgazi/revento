import Image from "next/image";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa6";

interface CardDataType {
    cardData: {
        id: number,
        title: string,
        desc: string,
        link: string,
        bgColor: string,
        topImageLink: string,
        bottomImageLink: string,
    }
}

const CardSm: React.FC<CardDataType> = ({ cardData }) => {
    return (
        <div style={{ backgroundColor: cardData.bgColor }} className={`relative rounded-3xl overflow-hidden p-5 w-60 pt-7 pb-12`}>
            <div className="flex justify-between">
                <h2 className="text-xl lg:text-4xl font-bold pb-2">{cardData.title}</h2>
                <Link href={cardData.link} className="group relative overflow-hidden -mt-4 -mr-3 -rotate-45 h-8 w-8 flex justify-center items-center ">
                    <span className="flex justify-center items-center">
                        <FaArrowRight className="absolute text-2xl top-0 group-hover:translate-x-8 text-[#051a2f] transition-all duration-500" />
                        <FaArrowRight className="absolute text-2xl top-0 -translate-x-8 text-white group-hover:translate-x-0 transition-all duration-500" />
                    </span>
                </Link>
            </div>
            <p className="w-11/12 text-sm leading-6">{cardData.desc}</p>

            <figure className="absolute -top-[1px] right-[25%]">
                <Image className=" w-[40px]" src={cardData.topImageLink} alt="Icon" height={100} width={100} />
            </figure>
            <figure className="absolute bottom-0 left-[25%]">
                <Image className=" w-[40px]" src={cardData.bottomImageLink} alt="Icon" height={100} width={100} />
            </figure>
        </div>
    );
};

export default CardSm;
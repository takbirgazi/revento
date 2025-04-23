import Image from "next/image";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa6";

interface CardDataType {
    cardData: {
        id: number,
        title: string,
        desc: string,
        link: string,
        bgColor: string
        topImageLink: string,
        bottomImageLink: string,
    }
}

const CardMd: React.FC<CardDataType> = ({ cardData }) => {
    return (
        <div data-aos="fade-up" style={{ backgroundColor: cardData.bgColor }} className={`relative rounded-3xl overflow-hidden p-10 min-h-72`}>
            <h2 className="text-xl lg:text-4xl pb-2 font-anton text-white">{cardData.title}</h2>
            <p className="w-11/12 text-sm leading-6 text-white">{cardData.desc}</p>

            <div className="absolute bottom-[15%] right-[10%] bg-white flex items-center justify-center h-12 w-12 rounded-full">
                <Link
                    href={`/pricing?service=${cardData.id}`}
                    className="group relative overflow-hidden -rotate-45 h-8 w-8 flex justify-center items-center"
                >
                    <span className="flex justify-center items-center">
                        <FaArrowRight className="absolute text-2xl top-1 group-hover:translate-x-8 text-[#ff8f27] transition-all duration-500" />
                        <FaArrowRight className="absolute text-2xl top-1 -translate-x-8 text-[#ff8f27] group-hover:translate-x-0 transition-all duration-500" />
                    </span>
                </Link>
            </div>

            <figure className="absolute top-0 right-[10%]">
                <Image className=" w-[70px]" src={cardData.topImageLink} alt="Icon" height={200} width={200} />
            </figure>
            <figure className="absolute bottom-0 left-[10%]">
                <Image className=" w-[70px]" src={cardData.bottomImageLink} alt="Icon" height={200} width={200} />
            </figure>
        </div>
    );
};

export default CardMd;
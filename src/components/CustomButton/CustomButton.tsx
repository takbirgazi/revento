import Link from "next/link";
import { FaArrowRight } from "react-icons/fa6";

interface ButtonType {
    title: string,
    link: string
}

const CustomButton: React.FC<ButtonType> = ({ title, link }) => {
    return (
        <Link href={link} className="group bg-white hover:bg-[#051a2f] text-[#051a2f] hover:text-white font-bold rounded-full px-7 py-3 border-4 border-transparent hover:border-white uppercase text-sm lg:text-lg flex items-center gap-2 transition-all duration-300" >
            <span>{title}</span>
            <span className="relative h-4 w-5 lg:h-5 overflow-hidden">
                <FaArrowRight className="absolute top-0 group-hover:translate-x-8 text-[#051a2f] transition-all duration-500" />
                <FaArrowRight className="absolute top-0 -translate-x-8 text-white group-hover:translate-x-0 transition-all duration-500" />
            </span>
        </Link>
    );
};

export default CustomButton;
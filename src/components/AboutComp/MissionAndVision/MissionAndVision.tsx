import Image from "next/image";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa6";

const MissionAndVision = () => {
    return (
        <div className="flex flex-col md:flex-row justify-between gap-10 items-center">
            <div className="w-full md:w-7/12">
                <h1 className="w-full md:w-3/5 text-xl md:text-4xl pb-2 font-anton text-[#051a2f] uppercase">our mission and vision</h1>
                <div className="flex flex-col gap-4">
                    <p>At Revento, we are more than a digital marketing agency—we are your growth partners. Founded with a mission to transform ideas into impactful results, we specialize in delivering innovative strategies that drive measurable success.</p>
                    <p>With a team of seasoned experts and cutting-edge tools, we help businesses of all sizes unlock their potential in the digital landscape.</p>
                    <p>With years of experience and a track record of delivering measurable results, we craft strategies that work. From startups to established enterprises, we’ve helped businesses across industries thrive in the digital landscape.</p>
                </div>
                <div className="flex py-10">
                    <Link href="/" className="group bg-[#051a2f] hover:bg-[#9d89fc] text-white hover:text-white font-bold rounded-full px-3 md:px-7 py-4 md:py-6 uppercase text-sm lg:text-lg flex items-center gap-2 transition-all duration-300" >
                        <span>Get in touch</span>
                        <span className="relative h-4 w-5 lg:h-5 overflow-hidden">
                            <FaArrowRight className="absolute top-0 group-hover:translate-x-8 text-[#051a2f] transition-all duration-500" />
                            <FaArrowRight className="absolute top-0 -translate-x-8 text-white group-hover:translate-x-0 transition-all duration-500" />
                        </span>
                    </Link>
                </div>
            </div>
            <div className="w-full md:w-5/12">
                <div className="relative">
                    <figure>
                        <Image className='w-full max-h-[600px]' src="https://framerusercontent.com/images/i6k5InXVuu24cuLoN6MNWhPYWIg.png?scale-down-to=1024" height={950} width={550} alt='Feature' />
                    </figure>

                    {/* Absolute Data  */}
                    <figure className="absolute -top-[1%] left-[35%]">
                        <Image className=" w-[70px] -rotate-180" src="https://framerusercontent.com/images/vyvBMWUhLQl5Dpt5Txxw2mzQ.svg" alt="Icon" height={200} width={200} />
                    </figure>
                    <figure className="absolute bottom-[25%] -left-[5%]">
                        <Image className=" w-[70px] rotate-90" src="https://framerusercontent.com/images/qnyRKMJzoEDpfE7atO7qcfmMfKc.svg" alt="Icon" height={200} width={200} />
                    </figure>
                </div>
            </div>
        </div>
    );
};

export default MissionAndVision;
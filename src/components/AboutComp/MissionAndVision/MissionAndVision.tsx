import Image from "next/image";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa6";

const MissionAndVision = () => {
    return (
        <div className="flex flex-col md:flex-row justify-between gap-10 items-center">
            <div className="w-full md:w-7/12">
                <h1 className="w-full md:w-3/5 text-xl md:text-4xl pb-2 font-anton text-[#051a2f] uppercase">Our Persona</h1>
                <div className="flex flex-col gap-4">
                    <p>We saw visionary brands losing ground online—not because they lacked potential, but because they lacked the right allies. That’s where we come in armed with strategy, creativity, and relentless loyalty, we fight alongside you—<span className="font-semibold">brothers in arms in the digital arena</span>. Because your goals aren’t just your own—they’re ours too. Your battles become our mission.</p>

                    <p>And your wins? We celebrate them like they&apos;re ours. We didn’t start Motion Mark for the trends or the likes. <br />We started it because too many brilliant ideas were fading into the noise—not from lack of vision, but from lack of execution. The digital world is fast, crowded, and unforgiving. Brands either move forward or get left behind. That’s why we do things differently. We don’t just build campaigns—<span className="font-semibold">we build momentum.</span> <br />We don’t chase vanity metrics—<span className="font-semibold">we drive real growth.</span></p>
                    <p>And we don’t do one-size-fits-all—we craft strategies as unique as your story. This isn’t just marketing. This is a partnership. <br />This is your digital evolution—with Motion Mark at your side. Let’s make it legendary.</p>
                </div>
                <div className="flex py-10">
                    <Link href="/contact" className="group bg-[#051a2f] hover:bg-[#9d89fc] text-white hover:text-white font-bold rounded-full px-3 md:px-7 py-4 md:py-6 uppercase text-sm lg:text-lg flex items-center gap-2 transition-all duration-300" >
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
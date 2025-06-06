import Image from "next/image";
import logo from "@/assets/images/logo-black.png";
import { FaPinterest, FaTiktok, FaXTwitter, FaYoutube } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa6";
import { FaFacebook, FaInstagram } from "react-icons/fa";
import { FaAngleRight } from "react-icons/fa6";
import Link from "next/link";

const Footer = () => {
    return (
        <div className="container mx-auto max-w-[1280px] px-4 flex flex-col md:flex-row gap-4 py-10">
            <div className="w-full md:w-2/3">
                <figure className="w-[300px]">
                    <Image src={logo} alt="Logo" height={400} width={600} />
                </figure>
                <p className="py-5 max-w-lg">Unlock growth with powerful digital strategies that connect, convert, and scale.</p>
                <div className="flex gap-4 items-center">
                    <a href="https://www.facebook.com/motionmarkdigitalagency" target="_blank" rel="noopener noreferrer"> <FaFacebook className="text-lg" /></a>
                    <a href="https://www.instagram.com/motionmarkdigitalagency" target="_blank" rel="noopener noreferrer"> <FaInstagram className="text-lg" /></a>
                    <a href="https://x.com/motion_mark_" target="_blank" rel="noopener noreferrer"><FaXTwitter className="text-lg" /></a>
                    <a href="https://www.linkedin.com/company/motion-mark" target="_blank" rel="noopener noreferrer"><FaLinkedin className="text-lg" /></a>
                    <a href="https://www.youtube.com/@Motionmarkdigital" target="_blank" rel="noopener noreferrer"><FaYoutube className="text-lg" /></a>
                    <a href="https://www.tiktok.com/@motionmarkagency" target="_blank" rel="noopener noreferrer"><FaTiktok className="text-lg" /></a>
                    <a href="https://www.pinterest.com/motionmarkdigital" target="_blank" rel="noopener noreferrer"><FaPinterest className="text-lg" /></a>
                </div>
            </div>
            <div className="w-full md:w-1/3 flex flex-col md:items-end md:justify-end">
                <div className="flex flex-row md:max-w-72 w-full md:justify-start justify-between md:flex-col">
                    <div className="flex flex-col gap-2 pb-2">
                        <Link className="group flex gap-2 items-center" href="/about">
                            <span className="bg-[#051a2f] group-hover:bg-[#ff8f27] transition-all duration-500 md:p-2 rounded-full text-white flex justify-center items-center overflow-hidden h-5 md:h-10 w-5 md:w-10">
                                <FaAngleRight className="text-xl -translate-x-5 group-hover:translate-x-1.5 transition-all duration-500" />
                                <FaAngleRight className="text-xl -translate-x-1 group-hover:translate-x-5 transition-all duration-500" />
                            </span>
                            <p className="text-xl lg:text-4xl font-anton group-hover:text-[#ff8f27] transition-all duration-500 text-[#051a2f]">About</p>
                        </Link>
                        <Link className="group flex gap-2 items-center" href="/service">
                            <span className="bg-[#051a2f] group-hover:bg-[#ff8f27] transition-all duration-500 md:p-2 rounded-full text-white flex justify-center items-center overflow-hidden h-5 md:h-10 w-5 md:w-10">
                                <FaAngleRight className="text-xl -translate-x-5 group-hover:translate-x-1.5 transition-all duration-500" />
                                <FaAngleRight className="text-xl -translate-x-1 group-hover:translate-x-5 transition-all duration-500" />
                            </span>
                            <p className="text-xl lg:text-4xl font-anton group-hover:text-[#ff8f27] transition-all duration-500 text-[#051a2f]">Services</p>
                        </Link>
                    </div>
                    <div className="flex flex-col gap-2 pb-5">
                        <Link className="group flex gap-2 items-center" href="/pricing">
                            <span className="bg-[#051a2f] group-hover:bg-[#ff8f27] transition-all duration-500 md:p-2 rounded-full text-white flex justify-center items-center overflow-hidden h-5 md:h-10 w-5 md:w-10">
                                <FaAngleRight className="text-xl -translate-x-5 group-hover:translate-x-1.5 transition-all duration-500" />
                                <FaAngleRight className="text-xl -translate-x-1 group-hover:translate-x-5 transition-all duration-500" />
                            </span>
                            <p className="text-xl lg:text-4xl font-anton group-hover:text-[#ff8f27] transition-all duration-500 text-[#051a2f]">Pricing</p>
                        </Link>
                        <Link className="group flex gap-2 items-center" href="/contact">
                            <span className="bg-[#051a2f] group-hover:bg-[#ff8f27] transition-all duration-500 md:p-2 rounded-full text-white flex justify-center items-center overflow-hidden h-5 md:h-10 w-5 md:w-10">
                                <FaAngleRight className="text-xl -translate-x-5 group-hover:translate-x-1.5 transition-all duration-500" />
                                <FaAngleRight className="text-xl -translate-x-1 group-hover:translate-x-5 transition-all duration-500" />
                            </span>
                            <p className="text-xl lg:text-4xl font-anton group-hover:text-[#ff8f27] transition-all duration-500 text-[#051a2f]">contact us</p>
                        </Link>
                    </div>
                </div>
                <div className="max-w-72">
                    <p className="uppercase text-gray-500">COPYRIGHT © {new Date().getFullYear()} MOTION MARK <br /> ALL RIGHTS RESERVED.</p>
                </div>
            </div>
        </div>
    );
};

export default Footer;
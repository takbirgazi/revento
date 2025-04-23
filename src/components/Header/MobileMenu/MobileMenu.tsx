"use client"

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { HiBars3 } from "react-icons/hi2";
import { MdClose } from "react-icons/md";
import phoneImage from "@/assets/images/icons/phone.png";
import locationImage from "@/assets/images/icons/location-icon.png";
import { FaPinterest, FaTiktok, FaXTwitter, FaYoutube } from "react-icons/fa6";
import { FaFacebook, FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import ContestButton from "@/components/HomeComp/ContestButton/ContestButton";

interface MenuType {
    links: {
        id: number,
        title: string,
        slag: string,
        subMenu?: {
            id: number,
            title: string,
            slag: string,
        }[]
    }[]
}

const MobileMenu: React.FC<MenuType> = ({ links }) => {
    const [isActive, setIsActive] = useState(false);

    return (
        <div className="block md:hidden">
            <div onClick={() => setIsActive(isActive => !isActive)} className="flex flex-col gap-2 justify-center items-center cursor-pointer">
                <span className="text-white font-bold text-2xl">
                    {
                        isActive ? <MdClose /> : <HiBars3 />
                    }
                </span>
            </div>
            {
                isActive && <div className={`md:hidden flex flex-col justify-between gap-5 absolute w-full left-0 top-[73px] bg-primaryBg transition-all duration-500 px-5 overflow-hidden h-[100vh]`}>
                    <div className="h-full py-6 px-5 flex flex-col items-center gap-5">
                        {
                            links.map(menu => <Link key={menu.id} className="text-white font-semibold uppercase text-center" href={menu.slag}>{menu.title}</Link>)
                        }
                        <div><ContestButton /></div>
                    </div>
                    <div className="mb-20 py-4 px-5 flex flex-col gap-5">
                        <a className="hover:text-[#9d89fc] text-white flex items-center gap-1 hover:underline duration-300 transition-all" href="tel:+8801316451034">
                            <figure>
                                <Image
                                    src={phoneImage}
                                    alt="call"
                                    width={20}
                                    height={20}
                                    className="inline-block mr-2"
                                />
                            </figure>
                            <span>+8801316451034</span>
                        </a>
                        <a className="hover:text-[#9d89fc] text-white flex  gap-4 hover:underline duration-300 transition-all" href="https://maps.app.goo.gl/GqqLcaxBmX5voLPY9">
                            <figure>
                                <Image
                                    src={locationImage}
                                    alt="call"
                                    width={20}
                                    height={20}
                                    className="inline-block mr-2"
                                />
                            </figure>
                            <span>Northern Khan Heights, Plot 34 Kalshi Road, Mirpur 11, Dhaka</span>
                        </a>
                        <div className="flex gap-4 items-center">
                            <a href="https://www.facebook.com/motionmarkdigitalagency" target="_blank" rel="noopener noreferrer"> <FaFacebook className="text-white text-lg" /></a>
                            <a href="https://www.instagram.com/motionmarkdigitalagency" target="_blank" rel="noopener noreferrer"> <FaInstagram className="text-white text-lg" /></a>
                            <a href="https://x.com/motion_mark_" target="_blank" rel="noopener noreferrer"><FaXTwitter className="text-white text-lg" /></a>
                            <a href="https://www.linkedin.com/company/motion-mark" target="_blank" rel="noopener noreferrer"><FaLinkedin className="text-white text-lg" /></a>
                            <a href="https://www.youtube.com/@Motionmarkdigital" target="_blank" rel="noopener noreferrer"><FaYoutube className="text-white text-lg" /></a>
                            <a href="https://www.tiktok.com/@motionmarkagency" target="_blank" rel="noopener noreferrer"><FaTiktok className="text-white text-lg" /></a>
                            <a href="https://www.pinterest.com/motionmarkdigital" target="_blank" rel="noopener noreferrer"><FaPinterest className="text-white text-lg" /></a>
                        </div>
                    </div>
                </div>
            }

        </div>
    );
};

export default MobileMenu;
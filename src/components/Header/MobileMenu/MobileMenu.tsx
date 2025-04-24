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
    const [isAnimating, setIsAnimating] = useState(false);

    const toggleMenu = () => {
        if (isAnimating) return;

        setIsAnimating(true);
        if (isActive) {
            // Closing animation
            setTimeout(() => {
                setIsActive(false);
                setIsAnimating(false);
            }, 500); // Match this with your CSS transition duration
        } else {
            setIsActive(true);
            setTimeout(() => {
                setIsAnimating(false);
            }, 500);
        }
    };

    const closeMenu = () => {
        setIsAnimating(true);
        setTimeout(() => {
            setIsActive(false);
            setIsAnimating(false);
        }, 500);
    };

    return (
        <div className="block md:hidden">
            <div
                onClick={toggleMenu}
                className="flex flex-col gap-2 justify-center items-center cursor-pointer"
            >
                <span className="text-white font-bold text-2xl transition-transform duration-700 hover:scale-110">
                    {isActive ? <MdClose /> : <HiBars3 />}
                </span>
            </div>

            <div
                className={`md:hidden flex flex-col justify-between gap-5 absolute w-full left-0 bg-primaryBg transition-all duration-700 px-5 overflow-hidden ${isActive
                    ? "top-[60px] h-[calc(100vh-60px)] opacity-100"
                    : "top-[-100vh] h-0 opacity-0"
                    }`}
            >
                <div className="h-full py-6 px-5 flex flex-col items-center gap-5">
                    {links.map(menu => (
                        <Link
                            key={menu.id}
                            className="text-white font-semibold uppercase text-center hover:text-[#9d89fc] transition-colors duration-300"
                            href={menu.slag}
                            onClick={closeMenu}
                        >
                            {menu.title}
                        </Link>
                    ))}
                    <div onClick={closeMenu}>
                        <ContestButton />
                    </div>
                </div>

                <div className="mb-20 py-4 px-5 flex flex-col gap-5">
                    <a
                        className="hover:text-[#9d89fc] text-white flex items-center gap-1 hover:underline duration-300 transition-all"
                        href="tel:+8801316451034"
                        onClick={closeMenu}
                    >
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

                    <a
                        className="hover:text-[#9d89fc] text-white flex gap-4 hover:underline duration-300 transition-all"
                        href="https://maps.app.goo.gl/GqqLcaxBmX5voLPY9"
                        onClick={closeMenu}
                    >
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
                        {[
                            { icon: <FaFacebook className="text-white text-lg hover:text-[#9d89fc] transition-colors duration-300" />, url: "https://www.facebook.com/motionmarkdigitalagency" },
                            { icon: <FaInstagram className="text-white text-lg hover:text-[#9d89fc] transition-colors duration-300" />, url: "https://www.instagram.com/motionmarkdigitalagency" },
                            { icon: <FaXTwitter className="text-white text-lg hover:text-[#9d89fc] transition-colors duration-300" />, url: "https://x.com/motion_mark_" },
                            { icon: <FaLinkedin className="text-white text-lg hover:text-[#9d89fc] transition-colors duration-300" />, url: "https://www.linkedin.com/company/motion-mark" },
                            { icon: <FaYoutube className="text-white text-lg hover:text-[#9d89fc] transition-colors duration-300" />, url: "https://www.youtube.com/@Motionmarkdigital" },
                            { icon: <FaTiktok className="text-white text-lg hover:text-[#9d89fc] transition-colors duration-300" />, url: "https://www.tiktok.com/@motionmarkagency" },
                            { icon: <FaPinterest className="text-white text-lg hover:text-[#9d89fc] transition-colors duration-300" />, url: "https://www.pinterest.com/motionmarkdigital" }
                        ].map((social, index) => (
                            <a
                                key={index}
                                href={social.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                onClick={closeMenu}
                            >
                                {social.icon}
                            </a>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MobileMenu;
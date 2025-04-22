"use client"

import Link from "next/link";
import { useState } from "react";
import { HiBars3 } from "react-icons/hi2";
import { MdClose } from "react-icons/md";

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
                isActive && <div className={`md:hidden flex flex-col justify-between gap-5 absolute w-full left-0 top-[73px] bg-gray-800 transition-all duration-500 overflow-hidden h-[100vh]`}>
                    <div className="h-full p-4 flex flex-col gap-5">
                        {
                            links.map(menu => <Link key={menu.id} className="text-white font-semibold uppercase" href={menu.slag}>{menu.title}</Link>)
                        }
                    </div>
                    <div className="mb-20">
                        <a className="hover:text-[#9d89fc] hover:underline duration-300 transition-all" href="tel:+8801316451034">+8801316451034</a>
                    </div>
                </div>
            }

        </div>
    );
};

export default MobileMenu;
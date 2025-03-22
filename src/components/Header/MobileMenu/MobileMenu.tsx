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
                isActive && <div className={`md:hidden flex flex-col justify-center gap-5 absolute w-full left-0 top-[65px] transition-all duration-500 overflow-hidden`}>
                    <div className="w-11/12 mx-auto grid grid-cols-2 flex-col justify-center gap-4  bg-white rounded-lg p-5 border border-gray-300">
                        {
                            links.map(menu => menu?.subMenu ?
                                menu?.subMenu.map(menu => <Link key={menu.id} className=" text-gray-800 text-xs uppercase" href={menu.slag}>{menu.title}</Link>)
                                :
                                <Link key={menu.id} className=" text-gray-800 text-xs uppercase" href={menu.slag}>{menu.title}</Link>)
                        }
                    </div>
                </div>
            }

        </div>
    );
};

export default MobileMenu;
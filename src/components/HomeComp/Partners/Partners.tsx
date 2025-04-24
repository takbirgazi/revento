"use client";

import Image from "next/image";
import Marquee from "react-fast-marquee";
import stopedits from "@/assets/images/clients/1stopedits.png";
import ate from "@/assets/images/clients/ate.png";
import bse from "@/assets/images/clients/bse.png";
import corpfash from "@/assets/images/clients/corpfash.png";
import fao from "@/assets/images/clients/fao.png";
import hm from "@/assets/images/clients/hm.png";
import organtic from "@/assets/images/clients/organtic.png";
import skillhub from "@/assets/images/clients/skillhub.png";
import wevloper from "@/assets/images/clients/wevloper.png";
import zenith from "@/assets/images/clients/zenith.png";

const Partners = () => {
    const items = [
        {
            id: 1,
            image: stopedits.src,
            title: "Nothing"
        },
        {
            id: 2,
            image: ate.src,
            title: "Nothing"
        },
        {
            id: 3,
            image: bse.src,
            title: "Nothing"
        },
        {
            id: 4,
            image: corpfash.src,
            title: "Nothing"
        },
        {
            id: 5,
            image: fao.src,
            title: "Nothing"
        },
        {
            id: 6,
            image: hm.src,
            title: "Nothing"
        },
        {
            id: 7,
            image: organtic.src,
            title: "Nothing"
        },
        {
            id: 8,
            image: skillhub.src,
            title: "Nothing"
        },
        {
            id: 9,
            image: wevloper.src,
            title: "Nothing"
        },
        {
            id: 10,
            image: zenith.src,
            title: "Nothing"
        },
    ];

    return (
        <div className="pb-1 md:pb-12">
            <div className="relative w-full overflow-hidden py-8 rounded-xs">
                <h2 className="text-[#ff4f3f] text-2xl text-center lg:text-3xl pb-5 font-anton">OUR VALUED CLIENTS</h2>
                {/* <h2 className="text-gray-800 text-xl font-semibold pb-10 text-center">OUR VALUED CLIENTS</h2> */}
                <div className="w-full md:w-11/12 mx-auto">
                    <Marquee speed={50}>
                        {items.map((item) => (
                            <div
                                key={item.id}
                                className="mx-8 md:mx-12 flex-shrink-0"
                            >
                                <Image
                                    width={120}
                                    height={40}
                                    src={item.image}
                                    alt={item.title}
                                    className="object-contain h-10 md:h-16 w-auto grayscale hover:grayscale-0 transition-all duration-300"
                                />
                            </div>
                        ))}
                    </Marquee>
                </div>
                <div className="absolute top-0 left-0 h-full w-1/5 bg-gradient-radial from-transparent to-gray-800 pointer-events-none"></div>
                <div className="absolute top-0 right-0 h-full w-1/5 bg-gradient-radial from-gray-800 to-transparent pointer-events-none"></div>
            </div>
        </div>
    );
};
export default Partners;
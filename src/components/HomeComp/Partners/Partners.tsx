"use client";

import Image from "next/image";
import Marquee from "react-fast-marquee";

const Partners = () => {
    const items = [
        {
            id: 1,
            image: `https://framerusercontent.com/images/dG3wzOXClHw6fsHyKxgDrNQEjeA.svg`,
            title: "Nothing"
        },
        {
            id: 2,
            image: `https://framerusercontent.com/images/WtGqDUwp5OnETMJJZJyaCsG1PA.svg`,
            title: "Nothing"
        },
        {
            id: 3,
            image: `https://framerusercontent.com/images/kSUdYkQd9EVpfnuj0f5z2yPMHw8.svg`,
            title: "Nothing"
        },
        {
            id: 4,
            image: `https://framerusercontent.com/images/J2ug3PVJsemVFllGkfGL326HChE.svg`,
            title: "Nothing"
        },
        {
            id: 5,
            image: `https://framerusercontent.com/images/C68lkqCNSdPTkMTRlLdNZTclvDw.svg`,
            title: "Nothing"
        },
        {
            id: 6,
            title: "Nothing",
            image: "https://framerusercontent.com/images/5Ti02d8q5mm76HeQpkFaatWgRvQ.svg"
        }
    ];

    return (
        <div className="pb-12">
            <div className="relative w-full overflow-hidden bg-gray-800 py-8 rounded-xs">
                <h2 className="text-white text-xl font-semibold pb-10 text-center">Trusted by worlds boldest companies</h2>
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
                                    className="object-contain h-8 md:h-10 w-auto grayscale hover:grayscale-0 transition-all duration-300"
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
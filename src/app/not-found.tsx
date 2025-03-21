import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { FaArrowRight } from 'react-icons/fa6';

const NotFound = () => {
    return (
        <div className='py-20'>
            <div className="flex justify-center items-center">
                <figure>
                    <Image height={200} width={200} src="https://framerusercontent.com/images/n3zeduqnRmmEguYbtQNwqQz7GY.png" alt="404" />
                </figure>
            </div>
            <h2 className="text-2xl outline-0 lg:text-4xl text-center pb-5 font-anton uppercase text-primaryBg -mt-2">Sorry! Page not found</h2>
            <p className='text-center max-w-xl mx-auto px-5'>it looks like the page you’re looking for doesn’t exist or might have been moved. don’t worry, let’s get you back on track!</p>
            <div className="flex justify-center items-center py-5">
                <Link href="/" className="group bg-[#051a2f] hover:bg-[#9d89fc] text-white font-bold rounded-full px-7 py-5 hover:border-white uppercase text-sm lg:text-lg flex items-center gap-2 transition-all duration-300" >
                    <span>Back to Home</span>
                    <span className="relative h-4 w-5 lg:h-5 overflow-hidden">
                        <FaArrowRight className="absolute top-0 group-hover:translate-x-8 text-white transition-all duration-500" />
                        <FaArrowRight className="absolute top-0 -translate-x-8 text-white group-hover:translate-x-0 transition-all duration-500" />
                    </span>
                </Link>
            </div>
        </div>
    );
};

export default NotFound;
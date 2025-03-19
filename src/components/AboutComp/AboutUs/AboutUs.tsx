import SectionHeader from '@/components/ShareComp/SectionHeader/SectionHeader';
import Image from 'next/image';
import React from 'react';

const AboutUs = () => {
    const headerData = {
        topHeading: "About Us",
        topHeadingColor: "#ff4f3f",
        heading: "why choose revento",
        headingColor: "#051a2f"
    }
    return (
        <div className='py-10'>
            <div className='flex flex-col lg:flex-row justify-between lg:items-end gap-5'>
                <div className='w-full lg:w-2/3'>
                    <div className='w-full lg:w-1/2'>
                        <SectionHeader headerData={headerData} />
                    </div>
                </div>
                <p className='w-full lg:w-1/3 text-center lg:text-left'>Experience growth through innovative digital marketing designed to reach, inspire, and deliver results.</p>
            </div>
            <div className='flex flex-col md:flex-row gap-5 justify-baseline py-10'>
                <div className='w-full md:w-1/2'>
                    <div className="relative">
                        <figure>
                            <Image className='w-full max-h-[600px]' src="https://framerusercontent.com/images/48K0bZ9Wpm8Ib7nETZ7zwLL0lUQ.png?scale-down-to=1024" height={950} width={550} alt='Feature' />
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
                <div className='w-full md:w-1/2'>
                    <div className="relative">
                        <figure>
                            <Image className='w-full max-h-[600px]' src="https://framerusercontent.com/images/UjCwAEYJU4MvzSB8Wsy8rJzWzlk.png?scale-down-to=1024" height={950} width={550} alt='Feature' />
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
        </div>
    );
};

export default AboutUs;
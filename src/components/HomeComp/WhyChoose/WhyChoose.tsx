import CardSm from '@/components/ShareComp/CardSm/CardSm';
import SectionHeader from '@/components/ShareComp/SectionHeader/SectionHeader';
import Image from 'next/image';
import React from 'react';

const WhyChoose = () => {
    const headerData = {
        topHeading: "Why choose us!",
        topHeadingColor: "#ff4f3f",
        heading: "Why Revento Is the Trusted Choice",
        headingColor: "#051a2f"
    }
    const cardOne = {
        id: 1,
        title: "300+",
        desc: "Successful Campaigns Launched Industries",
        link: "/",
        bgColor: "#9d89fc",
        topImageLink: "https://framerusercontent.com/images/Us7I6b27Rj1bPPbPDEkTF4xMEU.png",
        bottomImageLink: "https://framerusercontent.com/images/3YVd2oKEYburTBTZtW3LgoTbExU.png"
    }
    const cardTwo = {
        id: 1,
        title: "200%",
        desc: "Growth in Conversion Rates on Average",
        link: "/",
        bgColor: "#ff4f3f",
        topImageLink: "https://framerusercontent.com/images/Us7I6b27Rj1bPPbPDEkTF4xMEU.png",
        bottomImageLink: "https://framerusercontent.com/images/3YVd2oKEYburTBTZtW3LgoTbExU.png"
    }

    return (
        <div className='py-10'>
            <div className='flex flex-col lg:flex-row justify-between lg:items-end gap-5'>
                <SectionHeader headerData={headerData} />
                <p className='w-full lg:w-1/2 text-center lg:text-left'>Experience growth through innovative digital marketing designed to reach, inspire, and deliver results.</p>
            </div>
            <div className='flex flex-col lg:flex-row gap-4 justify-between pt-20'>
                <div className='w-full lg:w-1/4 flex flex-col justify-around'>
                    <div className='flex flex-col lg:items-end'>
                        <h4 className="text-2xl text-center lg:text-left lg:text-3xl pb-5 font-anton">Proven Expertise</h4>
                        <p className='text-right py-5'>With years of experience and a track record of delivering measurable results, we craft strategies that work.</p>
                        <CardSm cardData={cardOne} />
                    </div>
                    <div className='lg:block hidden'></div>
                </div>
                <div className='w-full lg:w-2/4 relative'>
                    <figure>
                        <Image className='w-full h-full' src="https://framerusercontent.com/images/lRUVMB1hqLBKktxpxOV2NWUMVk.png?scale-down-to=1024" height={950} width={450} alt='Feature' />
                    </figure>
                    <figure className="absolute top-0 left-[15%]">
                        <Image className=" w-[70px]" src="https://framerusercontent.com/images/CKLTdNjhz9KoDE3bA5jdxeiGa4o.png" alt="Icon" height={200} width={200} />
                    </figure>
                    <figure className="absolute bottom-0 right-[15%]">
                        <Image className=" w-[70px]" src="https://framerusercontent.com/images/VJfhCUd5WwmzhreVEXOcwKQ8Zk8.png" alt="Icon" height={200} width={200} />
                    </figure>
                </div>
                <div className='w-full lg:w-1/4 flex flex-col justify-around'>
                    <div className='lg:block hidden'></div>
                    <div>
                        <h4 className="text-2xl text-center lg:text-left lg:text-3xl pb-5 font-anton">Data-Driven Approach</h4>
                        <p className='py-5'>Using proven techniques, we build strategies that drive measurable outcomes.</p>
                        <CardSm cardData={cardTwo} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default WhyChoose;
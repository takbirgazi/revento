import SectionHeader from "@/components/ShareComp/SectionHeader/SectionHeader";
import Image from "next/image";

const OurValues = () => {
    const headerData = {
        topHeading: "",
        topHeadingColor: "#ff4f3f",
        heading: "Why we are trusted",
        headingColor: "#051a2f"
    }

    const valuesData = [
        {
            id: 1,
            title: "Tailored Strategies",
            imageUrl: 'https://framerusercontent.com/images/RKScM9E9K21WA9TBK4oU66fw830.svg',
            desc: "Built from scratch for your brand and your market"
        },
        {
            id: 2,
            title: "ROI-First Approach",
            imageUrl: 'https://framerusercontent.com/images/71klQoOMWBfbXDTMUryFsO7EFpQ.svg',
            desc: "Our focus is growth that shows up on the bottom line"
        },
        {
            id: 3,
            title: "Creative Meets Strategic",
            imageUrl: 'https://framerusercontent.com/images/XSsqtEXkQlwLQgCVF2KjNesk.svg',
            desc: "A rare combo of storytelling, design, and data"
        },
        {
            id: 4,
            title: "True Collaboration",
            imageUrl: 'https://framerusercontent.com/images/ZIa3rlTyPod61IyvGV39m3nMGtU.svg',
            desc: "You’re not a “client.” You’re a co-strategist"
        }
    ]

    return (
        <div className='py-10'>
            <div className='flex flex-col lg:flex-row justify-between lg:items-end gap-5 pt-10'>
                <div className='w-full lg:w-2/3'>
                    <div className='w-full lg:w-1/2'>
                        <SectionHeader headerData={headerData} />
                    </div>
                </div>
                <p className='w-full lg:w-1/3 text-center lg:text-left'>Unlock growth with powerful digital strategies that connect, convert, and scale.</p>
            </div>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 pt-10">
                {
                    valuesData.map(data => <div key={data.id}>
                        <div className="flex gap-3 items-center pb-4">
                            <figure className="bg-[#051a2f] p-1 rounded-full">
                                <Image src={data.imageUrl} height={30} width={30} alt="Icon" />
                            </figure>
                            <p className="font-anton font-bold uppercase text-lg md:text-2xl">{data.title}</p>
                        </div>
                        <p className="text-gray-600 font-medium">{data.desc}</p>
                    </div>)
                }
            </div>
        </div>
    );
};

export default OurValues;
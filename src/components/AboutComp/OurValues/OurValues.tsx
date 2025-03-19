import SectionHeader from "@/components/ShareComp/SectionHeader/SectionHeader";
import Image from "next/image";

const OurValues = () => {
    const headerData = {
        topHeading: "About Us",
        topHeadingColor: "#ff4f3f",
        heading: "our values",
        headingColor: "#051a2f"
    }

    const valuesData = [
        {
            id: 1,
            title: "Innovation",
            imageUrl: 'https://framerusercontent.com/images/RKScM9E9K21WA9TBK4oU66fw830.svg',
            desc: "Staying ahead with cutting-edge strategies."
        },
        {
            id: 2,
            title: "Transparency",
            imageUrl: 'https://framerusercontent.com/images/71klQoOMWBfbXDTMUryFsO7EFpQ.svg',
            desc: "Building trust through open communication."
        },
        {
            id: 3,
            title: "Results-Driven:",
            imageUrl: 'https://framerusercontent.com/images/XSsqtEXkQlwLQgCVF2KjNesk.svg',
            desc: "Focusing on measurable outcomes that matter."
        },
        {
            id: 4,
            title: "Collaboration",
            imageUrl: 'https://framerusercontent.com/images/ZIa3rlTyPod61IyvGV39m3nMGtU.svg',
            desc: "Partnering with clients for shared success."
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
                <p className='w-full lg:w-1/3 text-center lg:text-left'>Experience growth through innovative digital marketing designed to reach, inspire, and deliver results.</p>
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
import SectionHeader from "@/components/ShareComp/SectionHeader/SectionHeader";
import Image from "next/image";

const OurTeam = () => {
    const headerData = {
        topHeading: "Our Team",
        topHeadingColor: "#ff4f3f",
        heading: "meet our team",
        headingColor: "#051a2f"
    }

    const teamData = [
        {
            id: 1,
            imageUrl: "https://framerusercontent.com/images/yHaStsPESC5zzGYGdkKBBtMq840.png",
            name: "Mark Robert",
            title: "Digital Strategist"
        },
        {
            id: 2,
            imageUrl: "https://framerusercontent.com/images/6PaEOCdWUmaiGRRoSKYklRtQ8.png",
            name: "Sophia Louis",
            title: "Creative Director"
        },
        {
            id: 3,
            imageUrl: "https://framerusercontent.com/images/fzMzQTIKwrvdjq3FBbxoQcxLKPE.png",
            name: "Emma Tania",
            title: "Content Marketing Expert"
        },
    ]

    return (
        <div className='py-10'>
            <div className='flex flex-col lg:flex-row justify-between lg:items-end gap-5'>
                <div className='w-full lg:w-2/3'>
                    <div className='w-full lg:w-1/2'>
                        <SectionHeader headerData={headerData} />
                    </div>
                </div>
                <p className='w-full lg:w-1/3 text-center lg:text-left'>Unlock growth with powerful digital strategies that connect, convert, and scale.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 ga-5 py-10">

                {
                    teamData.map(data => <div key={data.id} className="w-96 px-5">
                        <div className="relative">
                            <figure className="bg-[#c8ddf1] rounded-4xl overflow-hidden">
                                <Image className='w-full h-full' src={data.imageUrl} height={950} width={450} alt='Feature' />
                            </figure>

                            {/* Absolute Data  */}
                            <figure className="absolute top-0 left-[15%]">
                                <Image className=" w-[70px]" src="https://framerusercontent.com/images/7QpteOOLYm2f713Kpbd9WTeekik.svg" alt="Icon" height={200} width={200} />
                            </figure>
                            <figure className="absolute bottom-[25%] -right-[5%]">
                                <Image className=" w-[70px] -rotate-90" src="https://framerusercontent.com/images/qnyRKMJzoEDpfE7atO7qcfmMfKc.svg" alt="Icon" height={200} width={200} />
                            </figure>
                        </div>
                        <div className="py-4">
                            <h2 className="text-3xl uppercase pb-2 font-anton">{data.name}</h2>
                            <p>{data.title}</p>
                        </div>
                    </div>)
                }

            </div>
        </div>
    );
};

export default OurTeam;
import AboutUs from '@/components/AboutComp/AboutUs/AboutUs';
import Counter from '@/components/AboutComp/Counter/Counter';
import MissionAndVision from '@/components/AboutComp/MissionAndVision/MissionAndVision';
import OurTeam from '@/components/AboutComp/OurTeam/OurTeam';
import OurValues from '@/components/AboutComp/OurValues/OurValues';
import Highlights2 from '@/components/HomeComp/Highlights2/Highlights2';
import Testimonials from '@/components/HomeComp/Testimonials/Testimonials';
import HeroCustom from '@/components/ShareComp/HeroCustom/HeroCustom';
import Image from 'next/image';

const page = () => {
    const heroData = {
        topHeader: "about us",
        mainHeader: "Discover Revento",
        desc: "Experience growth through innovative digital marketing designed to reach, inspire, and deliver results.",
        topHeaderColor: "#ff4f3f",
        mainHeaderColor: "white",
    }

    return (
        <div>
            <HeroCustom heroData={heroData} />
            <div className="container mx-auto max-w-[1280px] px-4 md:pb-20">
                <h2 className='max-w-4xl mx-auto py-10 text-2xl lg:text-7xl font-medium uppercase font-anton text-center'>
                    <span className=" text-[#051a2f] tracking-tight">At Revento, we believe that every brand has the potential </span>
                    <span className=" text-[#828d97] tracking-tight"> to achieve extraordinary results</span>
                </h2>
                <div>
                    <MissionAndVision />
                    <AboutUs />
                    <Counter />
                    <OurValues />
                    <OurTeam />
                    <Testimonials />
                    <div className='max-w-4xl mx-auto py-16'>
                        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4'>
                            <figure>
                                <Image src="https://framerusercontent.com/images/dCeA12BmBXiH1uY21XEDNyvahEo.png" height={30} width={200} alt="Nothing" />
                            </figure>
                            <figure>
                                <Image src="https://framerusercontent.com/images/bPzdBnzcj0xZ9xquFthgnDKXo.png" height={30} width={200} alt="Nothing" />
                            </figure>
                            <figure>
                                <Image src="https://framerusercontent.com/images/yaNXlI28UkUPncBvBZP6Q98EGuY.png" height={30} width={200} alt="Nothing" />
                            </figure>
                            <figure>
                                <Image src="https://framerusercontent.com/images/dvqYX9ork1jB4TUSvDZN5pM1YU.png" height={30} width={200} alt="Nothing" />
                            </figure>
                        </div>
                    </div>
                    <Highlights2 />
                </div>
            </div>
        </div>
    );
};

export default page;
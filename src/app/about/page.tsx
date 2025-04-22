import Counter from '@/components/AboutComp/Counter/Counter';
import MissionAndVision from '@/components/AboutComp/MissionAndVision/MissionAndVision';
import OurTeam from '@/components/AboutComp/OurTeam/OurTeam';
import OurValues from '@/components/AboutComp/OurValues/OurValues';
import Highlights2 from '@/components/HomeComp/Highlights2/Highlights2';
import Partners from '@/components/HomeComp/Partners/Partners';
import TestimonialsSlider from '@/components/HomeComp/TestimonialsSlider/TestimonialsSlider';
import HeroCustom from '@/components/ShareComp/HeroCustom/HeroCustom';

const page = () => {
    const heroData = {
        topHeader: "",
        mainHeader: "DISCOVER MOTION MARK",
        desc: "Motion Mark was born from a battlefield mindset.",
        topHeaderColor: "#ff4f3f",
        mainHeaderColor: "white",
    }

    return (
        <div>
            <HeroCustom heroData={heroData} />
            <div className="container mx-auto max-w-[1280px] px-4 md:pb-20">
                <h2 className='py-10 text-2xl lg:text-7xl font-medium uppercase font-anton text-center'>
                    <span className=" text-[#051a2f] tracking-tight">Bold Strategy. Timeless Design.</span><br />
                    <span className=" text-[#828d97] tracking-tight"> Real Results.</span>
                </h2>
                <div>
                    <MissionAndVision />
                    {/* <AboutUs /> */}
                    <div className='pt-16 md:pt-24'>
                        <h1 className="w-full md:w-3/5 text-xl md:text-4xl pb-2 font-anton text-[#051a2f] uppercase">Our Mission</h1>
                        <div className="flex flex-col gap-4">
                            <p>To empower brands worldwide with tailored digital strategies, timeless design, and ROI-driven marketing—delivering real growth through creativity, partnership, and precision.</p>
                        </div>

                        <h1 className="w-full md:w-3/5 text-xl md:text-4xl pb-2 font-anton text-[#051a2f] uppercase mt-10">Our Vision</h1>
                        <div className="flex flex-col gap-4">
                            <p>To become one of the world’s most trusted digital agencies—known not just for our results, but for standing beside our clients as <span className="font-semibold">creative allies</span> and <span className="font-semibold">brothers in arms</span> in the fight for digital dominance</p>
                        </div>
                    </div>
                    <Counter />
                    <OurValues />
                    <OurTeam />
                    <TestimonialsSlider />
                    <Partners />
                    {/* <div className='max-w-4xl mx-auto py-16'>
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
                    </div> */}
                    <Highlights2 />
                </div>
            </div>
        </div>
    );
};

export default page;
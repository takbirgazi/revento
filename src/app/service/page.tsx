import Faq from "@/components/HomeComp/Faq/Faq";
import Highlights2 from "@/components/HomeComp/Highlights2/Highlights2";
import Testimonials from "@/components/HomeComp/TestimonialsSlider/Testimonials/Testimonials";
import Services from "@/components/ServicesCom/Services/Services";
import HeroCustom from "@/components/ShareComp/HeroCustom/HeroCustom";
import Image from "next/image";

const page = () => {
    const heroData = {
        topHeader: "Services",
        mainHeader: "our services",
        desc: "Experience growth through innovative digital marketing designed to deliver results.",
        topHeaderColor: "#1cb785",
        mainHeaderColor: "white",
    }

    return (
        <div>
            <HeroCustom heroData={heroData} />
            <div className="container mx-auto max-w-[1280px] px-5">
                <div className="py-12 flex flex-col lg:flex-row justify-baseline items-center gap-5">
                    <div className='w-full lg:w-1/2'>
                        <h2 className='py-10 text-2xl lg:text-7xl font-medium uppercase font-anton'>
                            <span className=" text-[#051a2f] tracking-tight">affordable pricing plans for </span>
                            <span className=" text-[#828d97] tracking-tight"> all your digital marketing services</span>
                        </h2>
                        <p className="text-gray-500">At Revento, we are more than a digital marketing agency—we are your growth partners. Founded with a mission to transform ideas into impactful results, we specialize in delivering innovative strategies that drive measurable success.</p>
                    </div>
                    <div data-aos="fade-up" className='w-full lg:w-1/2 relative'>
                        <figure>
                            <Image className='w-full h-full' src="https://framerusercontent.com/images/kef0yFNKhK1mGIbvNgjaSMq7yOA.png?scale-down-to=1024" height={550} width={450} alt='Feature' />
                        </figure>
                        <figure className="absolute top-0 left-[15%]">
                            <Image className=" w-[70px]" src="https://framerusercontent.com/images/CKLTdNjhz9KoDE3bA5jdxeiGa4o.png" alt="Icon" height={200} width={200} />
                        </figure>
                        <figure className="absolute bottom-0 right-[15%]">
                            <Image className=" w-[70px]" src="https://framerusercontent.com/images/VJfhCUd5WwmzhreVEXOcwKQ8Zk8.png" alt="Icon" height={200} width={200} />
                        </figure>
                    </div>
                </div>
                <Services />
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
                <Faq />
                <Highlights2 />
            </div>
        </div>
    );
};

export default page;
import Faq from "@/components/HomeComp/Faq/Faq";
import Hero from "@/components/HomeComp/Hero/Hero";
import Highlights2 from "@/components/HomeComp/Highlights2/Highlights2";
import HowWork from "@/components/HomeComp/HowWork/HowWork";
import Partners from "@/components/HomeComp/Partners/Partners";
import Services from "@/components/HomeComp/Services/Services";
import TestimonialsSlider from "@/components/HomeComp/TestimonialsSlider/TestimonialsSlider";

export default function Home() {
  return (
    <div>
      <Hero />
      <div className="container mx-auto max-w-[1280px] px-4 md:pb-20">
        <Services />
        <HowWork />
        {/* <OurWorks /> */}
        <Partners />
        <TestimonialsSlider />
        {/* <WhyChoose /> */}
        <Faq />
        <Highlights2 />
      </div>
    </div>
  );
}
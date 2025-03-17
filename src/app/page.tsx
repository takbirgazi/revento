import Hero from "@/components/HomeComp/Hero/Hero";
import Highlights from "@/components/HomeComp/Highlights/Highlights";
import HowWork from "@/components/HomeComp/HowWork/HowWork";
import OurWorks from "@/components/HomeComp/OurWorks/OurWorks";
import Services from "@/components/HomeComp/Services/Services";
import Testimonials from "@/components/HomeComp/Testimonials/Testimonials";
import WhyChoose from "@/components/HomeComp/WhyChoose/WhyChoose";

export default function Home() {
  return (
    <div>
      <Hero />
      <div className="container mx-auto px-4">
        <Services />
        <WhyChoose />
        <HowWork />
        <Highlights />
        <OurWorks />
        <Testimonials />
      </div>
    </div>
  );
}
import Hero from "@/components/HomeComp/Hero/Hero";
import HowWork from "@/components/HomeComp/HowWork/HowWork";
import Services from "@/components/HomeComp/Services/Services";
import WhyChoose from "@/components/HomeComp/WhyChoose/WhyChoose";

export default function Home() {
  return (
    <div>
      <Hero />
      <div className="container mx-auto px-4">
        <Services />
        <WhyChoose />
        <HowWork />
      </div>
    </div>
  );
}

"use client"
import AOS from 'aos';
import { useEffect } from 'react';
import Faq from "@/components/HomeComp/Faq/Faq";
import Hero from "@/components/HomeComp/Hero/Hero";
import Highlights from "@/components/HomeComp/Highlights/Highlights";
import Highlights2 from "@/components/HomeComp/Highlights2/Highlights2";
import HowWork from "@/components/HomeComp/HowWork/HowWork";
import OurWorks from "@/components/HomeComp/OurWorks/OurWorks";
import Services from "@/components/HomeComp/Services/Services";
import Testimonials from "@/components/HomeComp/Testimonials/Testimonials";
import WhyChoose from "@/components/HomeComp/WhyChoose/WhyChoose";

export default function Home() {
  useEffect(() => {
    AOS.init({
      duration: 600,
      easing: 'ease-in-out',
      once: true
    })
  }, []);

  return (
    <div>
      <Hero />
      <div className="container mx-auto px-4 md:pb-20">
        <Services />
        <WhyChoose />
        <HowWork />
        <Highlights />
        <OurWorks />
        <Testimonials />
        <Faq />
        <Highlights2 />
      </div>
    </div>
  );
}
"use client";

import { useSearchParams } from 'next/navigation';
import { useEffect, Suspense } from 'react';
import OurValues from "@/components/AboutComp/OurValues/OurValues";
import Faq from "@/components/HomeComp/Faq/Faq";
import Highlights2 from "@/components/HomeComp/Highlights2/Highlights2";
import PricingCard from "@/components/PricingComp/PricingCard/PricingCard";
import HeroCustom from "@/components/ShareComp/HeroCustom/HeroCustom";

const PricingPage = () => {
    const searchParams = useSearchParams();
    const serviceId = searchParams.get('service');

    useEffect(() => {
        if (serviceId) {
            // Small delay to ensure DOM is ready
            setTimeout(() => {
                const element = document.getElementById(`service-${serviceId}`);
                if (element) {
                    // Calculate position accounting for header
                    const headerHeight = 100; // Adjust based on your header
                    const elementPosition = element.getBoundingClientRect().top;
                    const offsetPosition = elementPosition + window.pageYOffset - headerHeight;

                    window.scrollTo({
                        top: offsetPosition,
                        behavior: 'smooth'
                    });
                }
            }, 100);
        }
    }, [serviceId]);

    const heroData = {
        topHeader: "",
        mainHeader: "Pricing plans",
        desc: "Experience growth through innovative digital marketing designed to deliver results.",
        topHeaderColor: "#e9fa49",
        mainHeaderColor: "white",
    }
    // const reviewData = [
    //     {
    //         id: 1,
    //         title: "Innovative solutions elevated our online visibility.",
    //         desc: "Their fresh ideas and sharp execution helped us achieve record-breaking growth in a few months. Amazing!",
    //         authName: "Brooklyn Simmons",
    //         authDeg: "Product Manager",
    //         authImageUrl: "https://framerusercontent.com/images/z2WdUpeHt85PrtNFbMJE6mUHk.png?scale-down-to=512"
    //     },
    //     {
    //         id: 2,
    //         title: "Working with this team has been a game-changer",
    //         desc: "Their innovative solutions and proactive approach boosted our sales by 3x in just a few months. Truly outstanding!",
    //         authName: "Madison Hayes",
    //         authDeg: "Program Manager",
    //         authImageUrl: "https://framerusercontent.com/images/YcdOY8jeCV1u2sXTTrJC2a2aG04.png"
    //     },
    // ]

    const pricingData = [
        {
            id: 1,
            planType: "Brand Strategy & Planning",
            callToAction: "Build My Brand",
            planDesc: "Turn your idea into a sustainable brand—with guidance from a certified brand strategist.",
            features: ["Business Analysis", "Competitor Analysis", "Brand Identity Blueprint", "Future Roadmap",],
            price: "10,000",
            bgColor: "#9d89fc",
            textColor: "#ffffff",
            isStartsFrom: false,
            currency: "bdt / month",
        },
        {
            id: 2,
            planType: "Website Development",
            callToAction: "Start Building",
            planDesc: "Get a fast, user-friendly website that boosts engagement and works perfectly on any device.",
            features: ["UI Design", "Website Development", "Website Deployment", "Website Maintenance"],
            price: "15000",
            bgColor: "#e9fa49",
            textColor: "#051a2f",
            isStartsFrom: true,
            currency: "bdt",
        },
        {
            id: 3,
            planType: "SEO",
            callToAction: "Boost My Ranking",
            planDesc: "Get better Google rankings, more traffic, and long-term growth with smart SEO.",
            features: ["Keyword Research", "On-page SEO", "Off-page SEO", "Google Ranking"],
            price: "13,000",
            bgColor: "#1cb785",
            textColor: "#ffffff",
            isStartsFrom: true,
            currency: "bdt / month",
        },
        {
            id: 4,
            planType: "Content Production",
            callToAction: "Create Content",
            planDesc: "Grow your audience and generate more leads with content built for your ideal customer.",
            features: ["Video Production", "Photography", "Content Planning", "Editing"],
            price: "8000",
            bgColor: "#9d89fc",
            textColor: "#ffffff",
            isStartsFrom: true,
            currency: "bdt",
        },
        {
            id: 5,
            planType: "Design Services",
            callToAction: "Design My Brand Identity",
            planDesc: "Elevate your brand with stunning, custom designs—logos, banners, and visuals tailored to your business.",
            features: ["Logo Design", "Social media post design", "Banner Design", "Informative Graphics Design"],
            price: "450",
            bgColor: "#e9fa49",
            textColor: "#051a2f",
            isStartsFrom: true,
            currency: "bdt / per DESIGN",
        },
        {
            id: 6,
            planType: "Social Media Management",
            callToAction: "Manage My Socials",
            planDesc: "We manage your social media channels with strategy, consistency, and care—so you stay active, relevant, and trusted.",
            features: ["Social Media Handle", "Social optimization ", "Update ", "Monitoring"],
            price: "2000",
            bgColor: "#1cb785",
            textColor: "#ffffff",
            isStartsFrom: true,
            currency: "bdt / per month",
        },
        {
            id: 7,
            planType: "Lead generation",
            callToAction: "Get Leads Now !",
            planDesc: "Attract potential customers with targeted strategies and smart tools, turning interest into valuable business opportunities.",
            features: ["Verified Leads", "Paid Lead Campaign", "Automated Leads", "Linkedin Leads"],
            price: "1400",
            bgColor: "#9d89fc",
            textColor: "#ffffff",
            isStartsFrom: true,
            currency: "BDT / PER 200 LEAD",
        },
        {
            id: 8,
            planType: "Paid Campaign",
            callToAction: "Launch My Campaign",
            planDesc: "We run targeted, data-driven paid campaigns that boost visibility, drive traffic, and deliver real, measurable ROI.",
            features: ["Brand Strategy ", "Design Service", "Social Media management", "Content marketing"],
            price: "22000",
            bgColor: "#e9fa49",
            textColor: "#051a2f",
            isStartsFrom: true,
            currency: "Bdt / month",
        }
    ]

    return (
        <div>
            <HeroCustom heroData={heroData} />
            <div className="container mx-auto max-w-[1280px] px-4 md:pb-20">
                <h2 className='max-w-5xl mx-auto py-10 text-2xl lg:text-7xl font-medium uppercase font-anton text-center'>
                    <span className=" text-[#051a2f] tracking-tight">affordable pricing plans for </span>
                    <span className=" text-[#828d97] tracking-tight"> all your digital marketing services</span>
                </h2>
                <div>
                    <div className="flex flex-col gap-12">
                        {
                            pricingData.map(data => <PricingCard key={data.id} priceCardData={data} />)
                        }
                    </div>
                    <OurValues />
                    {/* <Highlights />
                    <div className='grid grid-cols-1 md:grid-cols-2 gap-8 py-10'>
                        {
                            reviewData.map(data => <ReviewCard reviewData={data} key={data.id} />)
                        }
                    </div> */}
                    <Faq />
                    <Highlights2 />
                </div>
            </div>
        </div>
    );
};

const PricingPageWrapper = () => (
    <Suspense fallback={<div>Loading...</div>}>
        <PricingPage />
    </Suspense>
);

export default PricingPageWrapper;
import OurValues from "@/components/AboutComp/OurValues/OurValues";
import Faq from "@/components/HomeComp/Faq/Faq";
import Highlights from "@/components/HomeComp/Highlights/Highlights";
import Highlights2 from "@/components/HomeComp/Highlights2/Highlights2";
import PricingCard from "@/components/PricingComp/PricingCard/PricingCard";
import HeroCustom from "@/components/ShareComp/HeroCustom/HeroCustom";
import ReviewCard from "@/components/TestimonialComp/ReviewCard/ReviewCard";

const page = () => {
    const heroData = {
        topHeader: "pricing",
        mainHeader: "Pricing plans",
        desc: "Experience growth through innovative digital marketing designed to deliver results.",
        topHeaderColor: "#e9fa49",
        mainHeaderColor: "white",
    }
    const reviewData = [
        {
            id: 1,
            title: "Innovex elevated our online visibility.",
            desc: "Their fresh ideas and sharp execution helped us achieve record-breaking growth in a few months. Amazing!",
            authName: "Brooklyn Simmons",
            authDeg: "Product Manager",
            authImageUrl: "https://framerusercontent.com/images/z2WdUpeHt85PrtNFbMJE6mUHk.png?scale-down-to=512"
        },
        {
            id: 2,
            title: "Working with Revento has been a game",
            desc: "Their innovative solutions and proactive approach boosted our sales by 3x in just a few months. Truly outstanding!",
            authName: "Madison Hayes",
            authDeg: "Program Manager",
            authImageUrl: "https://framerusercontent.com/images/YcdOY8jeCV1u2sXTTrJC2a2aG04.png"
        },
    ]

    const pricingData = [
        {
            id: 1,
            planType: "Starter Plan",
            planDesc: "Perfect for small businesses or startups looking to establish a digital presence.",
            features: ["Basic SEO optimization", "Social media management", "Email marketing", "Monthly performance report."],
            price: 499,
            bgColor: "#9d89fc",
            textColor: "#ffffff",
        },
        {
            id: 2,
            planType: "Growth Plan",
            planDesc: "Ideal for growing businesses aiming to scale their marketing efforts.",
            features: ["Advanced SEO", "Social media management", "PPC campaign", "Monthly performance"],
            price: 699,
            bgColor: "#e9fa49",
            textColor: "#051a2f",
        },
        {
            id: 3,
            planType: "Premium Plan",
            planDesc: "Designed for established brands ready to dominate their market.",
            features: ["Comprehensive SEO", "Social media strategy", "PPC campaign", "Advanced analytics"],
            price: 999,
            bgColor: "#1cb785",
            textColor: "#ffffff",
        }
    ]

    return (
        <div>
            <HeroCustom heroData={heroData} />
            <div className="container mx-auto px-4 md:pb-20">
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
                    <Highlights />
                    <div className='grid grid-cols-1 md:grid-cols-2 gap-8 py-10'>
                        {
                            reviewData.map(data => <ReviewCard reviewData={data} key={data.id} />)
                        }
                    </div>
                    <Faq />
                    <Highlights2 />
                </div>
            </div>
        </div>
    );
};

export default page;
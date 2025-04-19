import SectionHeader from "@/components/ShareComp/SectionHeader/SectionHeader";
import WorkAccordion from "./WorkAccordion/WorkAccordion";

const HowWork = () => {
    const headerData = {
        topHeading: "How We Work",
        topHeadingColor: "#ff4f3f",
        heading: "Our Working Method",
        headingColor: "#051a2f"
    }
    const accordions = [
        {
            id: 1,
            title: "Understanding Your Business",
            desc: "We begin by getting to know your brand, industry, and audience. By understanding your challenges, goals, and unique value, we lay the foundation.",
            imageUrl: "https://framerusercontent.com/images/W98dxSedZZzAFevUxHy9jSRoBk.png?scale-down-to=1024",
            bgColor: "#ff8f27"
        },
        {
            id: 2,
            title: "Strategic Planning and Creative Execution",
            desc: "We start by understanding your brand, industry, and audience, ensuring we address your challenges, define goals, and highlight your unique value.",
            imageUrl: "https://framerusercontent.com/images/Jiu8RFow3ViqEyvCVJYIo4gtHM.png?scale-down-to=1024",
            bgColor: "#9D89FC"
        },
        {
            id: 3,
            title: "Collaboration and optimization",
            desc: "Our process begins with a deep dive into your brand, industry, and audience to uncover challenges, define goals, and craft tailored solutions.",
            imageUrl: "https://framerusercontent.com/images/sm35Jrqps0QMhfUA1ZIpnlKD0w.png?scale-down-to=1024",
            bgColor: "#ff4f3f"
        },
        {
            id: 4,
            title: "Delivering and reporting results",
            desc: "We learn your brand, industry, and audience to identify challenges, align goals, and establish the groundwork for delivering impactful strategies.",
            imageUrl: "https://framerusercontent.com/images/ktdmMXWyKkQsQapwFsHuNauO8.png?scale-down-to=1024",
            bgColor: "#1cb785"
        },
    ]
    return (
        <div data-aos="fade-up" data-aos-offset="-200" className="py-5">
            <SectionHeader headerData={headerData} />
            <div className="py-16 flex flex-col gap-4">
                {
                    accordions.map(data => <WorkAccordion key={data.id} accordionData={data} />)
                }
            </div>
        </div>
    );
};

export default HowWork;
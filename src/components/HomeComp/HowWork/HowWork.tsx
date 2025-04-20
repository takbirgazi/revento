import SectionHeader from "@/components/ShareComp/SectionHeader/SectionHeader";
import WorkAccordion from "./WorkAccordion/WorkAccordion";
import image_1 from "@/assets/images/howWeWork/image_1.png";
import image_2 from "@/assets/images/howWeWork/image_2.png";
import image_3 from "@/assets/images/howWeWork/image_3.png";
import image_4 from "@/assets/images/howWeWork/image_4.png";

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
            title: "We analyze your brand, target audience, and industry landscape.",
            desc: "By conducting a comprehensive brand audit, audience research, and market analysis, we uncover strengths, challenges, and growth opportunities — setting the stage for strategic transformation.",
            imageUrl: image_1.src,
            bgColor: "#ff8f27"
        },
        {
            id: 2,
            title: "We craft tailored strategies that align with your business goals.",
            desc: "Combining marketing insights with creative development, we shape content, campaigns, and experiences designed to capture attention and convert audiences.",
            imageUrl: image_4.src,
            bgColor: "#9D89FC"
        },
        {
            id: 3,
            title: "Agile workshops to validate ideas and optimize performance.",
            desc: "From design sprints to user testing, we co-create solutions, gather real-time feedback, and refine your strategy through iterative improvements.",
            imageUrl: image_3.src,
            bgColor: "#ff4f3f"
        },
        {
            id: 4,
            title: "Data-driven execution with measurable results.",
            desc: "We launch, track, and report campaigns with a focus on KPIs, engagement metrics, and business outcomes — laying a clear path for continued growth.",
            imageUrl: image_2.src,
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
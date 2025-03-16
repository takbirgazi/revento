import SectionHeader from "@/components/ShareComp/SectionHeader/SectionHeader";
import WorkAccordion from "./WorkAccordion/WorkAccordion";

const HowWork = () => {
    const headerData = {
        topHeading: "How We Work",
        topHeadingColor: "#ff4f3f",
        heading: "Our Working Method",
        headingColor: "#051a2f"
    }

    return (
        <div className="py-5">
            <SectionHeader headerData={headerData} />
            <div className="py-16">
                <WorkAccordion />
            </div>
        </div>
    );
};

export default HowWork;
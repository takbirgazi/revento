import SectionHeader from "@/components/ShareComp/SectionHeader/SectionHeader";

const OurWorks = () => {
    const headerData = {
        topHeading: "Our Works",
        topHeadingColor: "#ff8f27",
        heading: "Our featured projects",
        headingColor: "#051a2f"
    }
    return (
        <div className="py-5">
            <div className="lg:w-1/2 w-full">
                <SectionHeader headerData={headerData} />
            </div>
            <div>
                carousal...
            </div>
        </div>
    );
};

export default OurWorks;
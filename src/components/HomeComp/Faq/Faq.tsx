import SectionHeader from "@/components/ShareComp/SectionHeader/SectionHeader";
import { MyAccordion } from './MyAccordion';


const Faq = () => {
    const headerData = {
        topHeading: "Faq",
        topHeadingColor: "#9d89fc",
        heading: "Your Questions Answered",
        headingColor: "#051a2f"
    }
    return (
        <div data-aos="fade-up" data-aos-offset="-200" className="py-10 flex flex-col md:flex-row gap-4 justify-between">
            <div className="w-full md:w-1/2">
                <div className="lg:w-2/3 w-full">
                    <SectionHeader headerData={headerData} />
                </div>
                <p className="py-5 max-w-md text-lg text-center md:text-left">Everything You Need to Know About Motion Mark, We’ve got answers to your questions about our services, process, and how we help your brand grow</p>
            </div>
            <div className="w-full md:w-1/2">
                <MyAccordion />
            </div>
        </div>
    );
};

export default Faq;
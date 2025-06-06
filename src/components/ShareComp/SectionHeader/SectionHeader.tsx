

interface SectionHeader {
    headerData: {
        topHeading: string,
        heading: string,
        topHeadingColor: string,
        headingColor: string
    }
}

const SectionHeader: React.FC<SectionHeader> = ({ headerData }) => {
    return (
        <div data-aos="fade-up" data-aos-offset="-200" >
            <h2 style={{ color: headerData.topHeadingColor }} className="text-xl text-center lg:text-left lg:text-3xl pb-1 md:pb-5 font-anton">{headerData.topHeading}</h2>
            <h3 style={{ color: headerData.headingColor }} className="text-[25px] text-center lg:text-left lg:text-[75px] uppercase font-medium tracking-tight font-anton max-w-2xl leading-10 lg:leading-20">{headerData.heading}</h3>
        </div>
    );
};

export default SectionHeader;
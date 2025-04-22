import SectionHeader from '@/components/ShareComp/SectionHeader/SectionHeader';
import ServiceCard from '../ServiceCard/ServiceCard';

const Services = () => {
    const headerData = {
        topHeading: "Our Services!",
        topHeadingColor: "#1cb785",
        heading: "we provide quality services",
        headingColor: "#051a2f"
    }
    const cardData = [
        {
            id: 1,
            heading: "Brand Strategy & Planning",
            subHeading: "Turn your idea into a sustainable brand—with guidance from a certified brand strategist. ",
            bgColor: "#9d89fc",
            textColor: "#ffffff",
            description: [
                {
                    id: 1,
                    title: "Understand Your Brand’s Core Identity",
                    desc: "We dive deep into your brand’s values, audience, voice, and purpose to build a foundation that fuels everything from messaging to visuals—because knowing who you are is step one."
                },
                {
                    id: 2,
                    title: "Define a Roadmap That Matches Your Vision",
                    desc: "We craft a strategic roadmap that aligns your goals, audience behavior, and market positioning—so every move you make takes you closer to long-term, sustainable success."
                },
                {
                    id: 3,
                    title: "Competitor and Market Positioning",
                    desc: "Through in-depth market and competitor analysis, we identify where you stand and where you should be—turning insights into opportunities for differentiation and dominance."
                },
            ]
        }
    ]
    return (
        <div className='py-10'>
            <div data-aos="fade-up" className='flex flex-col lg:flex-row justify-between lg:items-end gap-5'>
                <SectionHeader headerData={headerData} />
                <p className='w-full lg:w-1/2 text-center lg:text-left'>Unlock growth with powerful digital strategies that connect, convert, and scale.</p>
            </div>
            <div className='py-5 flex flex-col gap-4 mt-10'>
                {
                    cardData.map(card => <ServiceCard key={card.id} serviceCardData={card} />)
                }
            </div>
        </div>
    );
};

export default Services;
import CardMd from '@/components/ShareComp/CardMd/CardMd';
import SectionHeader from '@/components/ShareComp/SectionHeader/SectionHeader';

const Services = () => {
    const headerData = {
        topHeading: "Our Services!",
        topHeadingColor: "#ff4f3f",
        heading: "Services Designed to Drive Real Results",
        headingColor: "#051a2f"
    }
    const cardData = [
        {
            id: 1,
            title: "Search Engine Optimization",
            desc: "Boost your website’s visibility and attract organic traffic with SEO tailored to your business goals.",
            link: "/",
            bgColor: "#ff8f27",
            topImageLink: "https://framerusercontent.com/images/HaTeCnedqptj5oZx1ZHkM2pcbZg.svg",
            bottomImageLink: "https://framerusercontent.com/images/TK6PAMZN32ze4HffAHGSjINGCE.svg"
        },
        {
            id: 2,
            title: "Content Marketing",
            desc: "Enhance your brand’s online presence and drive engagement with a strategy customized to your needs.",
            link: "/",
            bgColor: "#9d89fc",
            topImageLink: "https://framerusercontent.com/images/mP6yDpIu2HzOfRG2Qlr2z6O28O0.svg",
            bottomImageLink: "https://framerusercontent.com/images/idbDbcyPRv2S59MVMgWh9L7LA.svg"
        },
        {
            id: 3,
            title: "Social Media Marketing",
            desc: "Grow your audience and increase conversions with targeted digital marketing solutions.",
            link: "/",
            bgColor: "#ff4f3f",
            topImageLink: "https://framerusercontent.com/images/7os4g4ruRwOonodXRETIWnxw1M.svg",
            bottomImageLink: "https://framerusercontent.com/images/hGSozs8NwWZ077Sm2JLNNdlBwQw.svg"
        },
        {
            id: 4,
            title: "Email Marketing",
            desc: "Maximize your online reach and generate leads with content tailored to your audience.",
            link: "/",
            bgColor: "#ff4f3f",
            topImageLink: "https://framerusercontent.com/images/7os4g4ruRwOonodXRETIWnxw1M.svg",
            bottomImageLink: "https://framerusercontent.com/images/hGSozs8NwWZ077Sm2JLNNdlBwQw.svg"
        },
        {
            id: 5,
            title: "Influencer Marketing",
            desc: "Elevate your business with a social media strategy designed for your growth objectives.",
            link: "/",
            bgColor: "#1cb785",
            topImageLink: "https://framerusercontent.com/images/HaTeCnedqptj5oZx1ZHkM2pcbZg.svg",
            bottomImageLink: "https://framerusercontent.com/images/idbDbcyPRv2S59MVMgWh9L7LA.svg"
        },
        {
            id: 6,
            title: "Analytics and Reporting",
            desc: "Expand your customer base and improve visibility with data-driven advertising campaigns.",
            link: "/",
            bgColor: "#051a2f",
            topImageLink: "https://framerusercontent.com/images/7os4g4ruRwOonodXRETIWnxw1M.svg",
            bottomImageLink: "https://framerusercontent.com/images/hGSozs8NwWZ077Sm2JLNNdlBwQw.svg"
        },
    ]
    return (
        <div className='py-10'>
            <div data-aos="fade-up" className='flex flex-col lg:flex-row justify-between lg:items-end gap-5'>
                <SectionHeader headerData={headerData} />
                <p className='w-full lg:w-1/2 text-center lg:text-left'>Experience growth through innovative digital marketing designed to reach, inspire, and deliver results.</p>
            </div>
            <div className='py-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
                {
                    cardData.map(card => <CardMd key={card.id} cardData={card} />)
                }
            </div>
        </div>
    );
};

export default Services;
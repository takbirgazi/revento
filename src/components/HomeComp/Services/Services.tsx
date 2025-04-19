import CardMd from '@/components/ShareComp/CardMd/CardMd';
import SectionHeader from '@/components/ShareComp/SectionHeader/SectionHeader';

const Services = () => {
    const headerData = {
        topHeading: "Our Services!",
        topHeadingColor: "#ff4f3f",
        heading: "Services Tailored for Your Success",
        headingColor: "#051a2f"
    }
    const cardData = [
        {
            id: 1,
            title: "Brand strategy & planning",
            desc: "Turn your idea into a sustainable brand—with guidance from a certified brand strategist.",
            link: "/",
            bgColor: "#ff8f27",
            topImageLink: "https://framerusercontent.com/images/HaTeCnedqptj5oZx1ZHkM2pcbZg.svg",
            bottomImageLink: "https://framerusercontent.com/images/TK6PAMZN32ze4HffAHGSjINGCE.svg"
        },
        {
            id: 2,
            title: "Website Development",
            desc: "Get a fast, user-friendly website that boosts engagement and works perfectly on any device.",
            link: "/",
            bgColor: "#9d89fc",
            topImageLink: "https://framerusercontent.com/images/mP6yDpIu2HzOfRG2Qlr2z6O28O0.svg",
            bottomImageLink: "https://framerusercontent.com/images/idbDbcyPRv2S59MVMgWh9L7LA.svg"
        },
        {
            id: 3,
            title: "SEO",
            desc: "Get better Google rankings, more traffic, and long-term growth with smart SEO.",
            link: "/",
            bgColor: "#ff4f3f",
            topImageLink: "https://framerusercontent.com/images/7os4g4ruRwOonodXRETIWnxw1M.svg",
            bottomImageLink: "https://framerusercontent.com/images/hGSozs8NwWZ077Sm2JLNNdlBwQw.svg"
        },
        {
            id: 4,
            title: "Content marketing",
            desc: "Grow your audience and generate more leads with content built for your ideal customer.",
            link: "/",
            bgColor: "#051A2F",
            topImageLink: "https://framerusercontent.com/images/7os4g4ruRwOonodXRETIWnxw1M.svg",
            bottomImageLink: "https://framerusercontent.com/images/hGSozs8NwWZ077Sm2JLNNdlBwQw.svg"
        },
        {
            id: 5,
            title: "Design service",
            desc: "Elevate your brand with stunning, custom designs—logos, banners, and visuals tailored to your business.",
            link: "/",
            bgColor: "#1cb785",
            topImageLink: "https://framerusercontent.com/images/HaTeCnedqptj5oZx1ZHkM2pcbZg.svg",
            bottomImageLink: "https://framerusercontent.com/images/idbDbcyPRv2S59MVMgWh9L7LA.svg"
        },
        {
            id: 6,
            title: "Social media marketing",
            desc: "Grow your brand with interesting posts and smart ads—using both free and paid ways to get real results.",
            link: "/",
            bgColor: "#FF8F27",
            topImageLink: "https://framerusercontent.com/images/7os4g4ruRwOonodXRETIWnxw1M.svg",
            bottomImageLink: "https://framerusercontent.com/images/hGSozs8NwWZ077Sm2JLNNdlBwQw.svg"
        },
        {
            id: 7,
            title: "Lead generation",
            desc: "Attract potential customers with targeted strategies and smart tools, turning interest into valuable business opportunities.",
            link: "/",
            bgColor: "#9d89fc",
            topImageLink: "https://framerusercontent.com/images/mP6yDpIu2HzOfRG2Qlr2z6O28O0.svg",
            bottomImageLink: "https://framerusercontent.com/images/idbDbcyPRv2S59MVMgWh9L7LA.svg"
        },
        {
            id: 8,
            title: "Email marketing",
            desc: "Nurture relationships and drive conversions with personalized email campaigns that speak directly to your audience.",
            link: "/",
            bgColor: "#FF4F3F",
            topImageLink: "https://framerusercontent.com/images/7os4g4ruRwOonodXRETIWnxw1M.svg",
            bottomImageLink: "https://framerusercontent.com/images/hGSozs8NwWZ077Sm2JLNNdlBwQw.svg"
        },
        {
            id: 9,
            title: "Analytics & Reporting",
            desc: "Make informed decisions and track your success with detailed analytics and clear, actionable reports.",
            link: "/",
            bgColor: "#051A2F",
            topImageLink: "https://framerusercontent.com/images/HaTeCnedqptj5oZx1ZHkM2pcbZg.svg",
            bottomImageLink: "https://framerusercontent.com/images/idbDbcyPRv2S59MVMgWh9L7LA.svg"
        },
    ]
    return (
        <div className='py-10'>
            <div data-aos="fade-up" className='flex flex-col lg:flex-row justify-between lg:items-end gap-5'>
                <SectionHeader headerData={headerData} />
                <p className='w-full lg:w-1/2 text-center lg:text-left'>Your Growth. Your Success. Our Strategy.</p>
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
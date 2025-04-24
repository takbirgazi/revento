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
                {
                    id: 4,
                    title: "Messaging That Connects Emotionally",
                    desc: "We develop messaging that resonates with your audience on a human level—because emotion drives loyalty, and loyalty drives lifetime value."
                },
                {
                    id: 5,
                    title: "Align Every Touchpoint with Strategy",
                    desc: "From your website to your social media, we ensure every brand experience reflects your strategy—keeping you consistent, professional, and recognizable across every platform."
                },
            ]
        },
        {
            id: 2,
            heading: "Website Development",
            subHeading: "Get a fast, user-friendly website that boosts engagement and works perfectly on any device.",
            bgColor: "#e9fa49",
            textColor: "#051a2f",
            description: [
                {
                    id: 1,
                    title: "Build Clean, Fast & Scalable Websites",
                    desc: "We design responsive, SEO-optimized websites that load quickly, scale easily, and deliver flawless UX—making sure users stay engaged from first click to conversion."
                },
                {
                    id: 2,
                    title: "Customized Design for Your Brand",
                    desc: "We don’t use templates. Every site we build is a unique expression of your brand, fully aligned with your visual identity and voice across all pages."
                },
                {
                    id: 3,
                    title: "Mobile-First Development Best Practices",
                    desc: "With mobile usage dominating traffic, we ensure your website is intuitive, fast, and beautiful on every screen size—because user behavior always comes first."
                },
                {
                    id: 4,
                    title: "Conversion-Focused Architecture",
                    desc: "We structure every element—from navigation to calls-to-action—to guide users naturally toward taking action, maximizing engagement and leads."
                },
                {
                    id: 5,
                    title: "Future-Proof Tech Stack",
                    desc: "We use modern tools, frameworks, and CMS platforms so your website stays flexible, fast, and ready to evolve with your business and tech trends."
                },
            ]
        },
        {
            id: 3,
            heading: "Search Engine Optimization (SEO)",
            subHeading: "Get better Google rankings, more traffic, and long-term growth with smart SEO.",
            bgColor: "#1cb785",
            textColor: "#ffffff",
            description: [
                {
                    id: 1,
                    title: "Keyword Research Aligned with Buyer Intent",
                    desc: "We uncover high-value keywords that your ideal audience is actively searching for—so your content reaches people who are ready to act."
                },
                {
                    id: 2,
                    title: "On-Page Optimization for Every Page",
                    desc: "From meta tags to internal links and content structure, we optimize each page to ensure Google—and users—love what they see."
                },
                {
                    id: 3,
                    title: "Technical SEO to Boost Site Health",
                    desc: "We handle all the backend essentials—site speed, crawlability, schema, XML sitemaps—to give your website the solid technical foundation it needs to rank."
                },
                {
                    id: 4,
                    title: "Local & Global SEO Strategies",
                    desc: "Whether you’re targeting a city or the world, we tailor strategies that help you rank where your audience is—driving relevant traffic that converts."
                },
                {
                    id: 5,
                    title: "SEO Performance Tracking and Reports",
                    desc: "We track rankings, traffic, and engagement, providing regular insights to help you understand what’s working, what’s not, and what’s next."
                },
            ]
        },
        {
            id: 4,
            heading: "Content Marketing",
            subHeading: "Grow your audience and generate more leads with content built for your ideal customer.",
            bgColor: "#9d89fc",
            textColor: "#ffffff",
            description: [
                {
                    id: 1,
                    title: "Craft Stories That Speak Your Audience’s Language",
                    desc: "We create content rooted in audience research, tone, and purpose—so it feels personal, relevant, and impossible to ignore on any platform."
                },
                {
                    id: 2,
                    title: "SEO-Optimized Content That Ranks and Converts",
                    desc: "Every piece of content is crafted with keywords, structure, and readability in mind—helping your brand get discovered and drive measurable engagement."
                },
                {
                    id: 3,
                    title: "Content That Drives Meaningful Action",
                    desc: "Whether it’s a blog, landing page, or video script, we focus on content that educates, engages, and pushes your audience toward a clear next step"
                },
                {
                    id: 4,
                    title: "Tailored Content for Every Funnel Stage",
                    desc: "From awareness to conversion, we build content strategies that guide users through the buyer journey—keeping your brand relevant every step of the way."
                },
                {
                    id: 5,
                    title: "Consistency Across Platforms and Formats",
                    desc: "We maintain a unified voice and message across blogs, emails, social media, and more—building trust and familiarity with every interaction."
                },
            ]
        },
        {
            id: 5,
            heading: "Design Services",
            subHeading: "Elevate your brand with stunning, custom designs—logos, banners, and visuals tailored to your business.",
            bgColor: "#e9fa49",
            textColor: "#051a2f",
            description: [
                {
                    id: 1,
                    title: "Create a Memorable Visual Identity That Sticks",
                    desc: "We go beyond trends to build a visual style that reflects your brand’s heart—ensuring your designs stay timeless, impactful, and instantly recognizable."
                },
                {
                    id: 2,
                    title: "Logo Design That Tells a Bigger Story",
                    desc: "Your logo is your brand’s signature—we craft marks that are clean, scalable, and rich with meaning, designed to leave a lasting impression in every setting."
                },
                {
                    id: 3,
                    title: "Cohesive Branding Across All Assets",
                    desc: "We develop brand guidelines and apply them across all digital and print materials, ensuring your brand always shows up polished and professional."
                },
                {
                    id: 4,
                    title: "Web and App Design That Feels Effortless",
                    desc: "We design clean, intuitive interfaces that make every user experience seamless, enjoyable, and conversion-friendly—across devices and platforms."
                },
                {
                    id: 5,
                    title: "Eye-Catching Banners, Posts, and Ads",
                    desc: "From social graphics to digital ads, we design visuals that grab attention fast—ensuring your message cuts through the noise and connects instantly."
                },
            ]
        },
        {
            id: 6,
            heading: "Social Media Management",
            subHeading: "We manage your social media channels with strategy, consistency, and care—so you stay active, relevant, and trusted.",
            bgColor: "#1cb785",
            textColor: "#ffffff",
            description: [
                {
                    id: 1,
                    title: "Build a Consistent, Engaging Social Presence",
                    desc: "We create and manage your brand’s social content calendar, ensuring consistent posting that aligns with your voice and audience interests."
                },
                {
                    id: 2,
                    title: "Tailored Content That Drives Shares and Saves",
                    desc: "From carousels to Reels, we craft platform-specific content that speaks your language and resonates deeply—built for reach, not just likes."
                },
                {
                    id: 3,
                    title: "Community Building and Audience Interaction",
                    desc: "We respond, engage, and foster conversation—turning passive followers into loyal fans who feel seen, heard, and part of your brand journey."
                },
                {
                    id: 4,
                    title: "Growth Strategies Backed by Data",
                    desc: "We don’t guess—we analyze trends, test formats, and optimize your content to ensure growth strategies are always rooted in hard numbers."
                },
                {
                    id: 5,
                    title: "Monthly Reporting and Performance Insights",
                    desc: "You get clean, easy-to-read reports showing growth, engagement, and opportunities—so you always know how your brand is performing online."
                },
            ]
        },
        {
            id: 7,
            heading: "Lead Generation",
            subHeading: "Attract potential customers with targeted strategies and smart tools, turning interest into valuable business opportunities.",
            bgColor: "#9d89fc",
            textColor: "#ffffff",
            description: [
                {
                    id: 1,
                    title: "Build Funnels That Attract the Right People",
                    desc: "We craft lead-gen funnels that guide qualified prospects straight to you—focusing on value-first touchpoints that convert interest into intent."
                },
                {
                    id: 2,
                    title: "Landing Pages Designed to Convert",
                    desc: "We design persuasive, high-converting landing pages built around user psychology and optimized for action—no fluff, just results."
                },
                {
                    id: 3,
                    title: "High-Intent Lead Magnets and Offers",
                    desc: "We help you develop free resources, incentives, and offers that draw in leads who actually want what you’re selling—not just window shoppers."
                },
                {
                    id: 4,
                    title: "Automate the Follow-Up Process",
                    desc: "From emails to SMS, we set up automated nurturing sequences that keep leads warm and guide them step-by-step to becoming loyal customers."
                },
                {
                    id: 5,
                    title: "Track and Improve Conversion Rates",
                    desc: "We monitor your funnel’s performance in real time—tweaking every step to improve results and keep your pipeline flowing strong."
                },
            ]
        },
        {
            id: 8,
            heading: "Paid Marketing",
            subHeading: "We run targeted, data-driven paid campaigns that boost visibility, drive traffic, and deliver real, measurable ROI.",
            bgColor: "#e9fa49",
            textColor: "#051a2f",
            description: [
                {
                    id: 1,
                    title: "Launch Targeted Campaigns That Actually Convert",
                    desc: "We don’t throw ads at the wall and hope for clicks—we build razor-sharp campaigns tailored to your audience, goals, and budget to drive real ROI."
                },
                {
                    id: 2,
                    title: "Platforms That Match Your Ideal Customer",
                    desc: "From Meta and Google to LinkedIn and TikTok, we help you show up where your people are—so your ad spend hits the right crowd at the right time."
                },
                {
                    id: 3,
                    title: "Creative That Stops the Scroll",
                    desc: "We design scroll-stopping ad creatives—videos, graphics, and copy that cut through the noise and instantly hook attention where it matters most."
                },
                {
                    id: 4,
                    title: "Smart Retargeting for Higher Conversions",
                    desc: "We set up intelligent retargeting strategies that bring back visitors and leads—so you don't lose the people who were almost ready to say yes."
                },
                {
                    id: 5,
                    title: "A/B Testing and Budget Optimization",
                    desc: "We constantly test headlines, visuals, CTAs, and more—so every dollar spent goes further, bringing you data-backed results, not guesswork."
                },
            ]
        },
        {
            id: 9,
            heading: "Analytics & Reporting",
            subHeading: "Make informed decisions and track your success with detailed analytics and clear, actionable reports.",
            bgColor: "#1cb785",
            textColor: "#ffffff",
            description: [
                {
                    id: 1,
                    title: "Measure What Matters, Ditch Vanity Metrics",
                    desc: "We focus on KPIs that actually move the needle—like conversions, CAC, retention, and revenue—not just likes or impressions."
                },
                {
                    id: 2,
                    title: "Custom Dashboards Built for Clarity",
                    desc: "You’ll get crystal-clear dashboards that tell you exactly how your campaigns and funnels are performing—minus the fluff or overload."
                },
                {
                    id: 3,
                    title: "Real-Time Tracking and Performance Audits",
                    desc: "We install powerful tracking tools to monitor your website, ads, and traffic live—so you can make data-driven decisions without delay."
                },
                {
                    id: 4,
                    title: "Monthly Reports with Actionable Insights",
                    desc: "Every month, you get digestible reports that highlight wins, gaps, and clear next steps—so your growth journey always stays sharp and strategic."
                },
                {
                    id: 5,
                    title: "Turn Data Into Strategy",
                    desc: "We don’t just collect data—we turn it into meaningful improvements across your content, campaigns, and user experience to fuel next-level growth."
                },
            ]
        },
    ]
    return (
        <div className='py-7 md:py-10'>
            <div data-aos="fade-up" className='flex flex-col lg:flex-row justify-between lg:items-end gap-5'>
                <SectionHeader headerData={headerData} />
                <p className='w-full lg:w-1/2 text-center lg:text-left'>Growth-focused strategies that engage, convert, and expand your impact.</p>
            </div>
            <div className='py-5 grid grid-cols-1 gap-2 md:gap-4 md:mt-10'>
                {
                    cardData.map((card, index) => (
                        <ServiceCard
                            key={card.id}
                            serviceCardData={card}
                            initiallyOpen={index === 0}  // Only true for the first card
                        />
                    ))
                }
            </div>
        </div>
    );
};

export default Services;
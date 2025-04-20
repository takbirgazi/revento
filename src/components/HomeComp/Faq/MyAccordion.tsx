import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/HomeComp/Faq/Accaurdion/Accaurdion"

export function MyAccordion() {
    const accordionData = [
        {
            id: 1,
            title: "What services do you offer?",
            desc: "We offer web development, SEO, digital marketing, content marketing, branding, and more—tailored to help you grow online."
        },
        {
            id: 2,
            title: "Who do you work with?",
            desc: "We work with startups, enterprises, influencers, and anyone ready to grow their digital presence—no niche is off-limits."
        },
        {
            id: 3,
            title: "How much do your services cost?",
            desc: "Pricing depends on your needs and goals. We offer custom packages after a free consultation to ensure the best value."
        },
        {
            id: 4,
            title: "How long does it take to build a website or run a campaign?",
            desc: "Most websites take 2–6 weeks. Marketing campaigns vary. We give you clear timelines before we start any project."
        },
        {
            id: 5,
            title: "What makes Motion Mark different?",
            desc: "We treat your growth as our own. You’re not just a client—you’re a partner, a brother in arms. Every strategy is built for results."
        },
    ]
    return (
        <Accordion type="single" collapsible className="w-full flex flex-col md:gap-6">
            {
                accordionData.map(data => <AccordionItem key={data.id} value={`item-${data.id}`}>
                    <AccordionTrigger className="font-anton text-lg md:text-3xl">{data.title}</AccordionTrigger>
                    <AccordionContent>{data.desc}</AccordionContent>
                </AccordionItem>)
            }
        </Accordion>
    )
}

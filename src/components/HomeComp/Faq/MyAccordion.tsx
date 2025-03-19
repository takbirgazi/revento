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
            title: "What services does Revento offer?",
            desc: "Revento provides a full suite of digital marketing services, including SEO, PPC, social media marketing, content creation, email marketing, web design, and more."
        },
        {
            id: 2,
            title: "How does Revento measure success?",
            desc: "Revento provides a full suite of digital marketing services, including SEO, PPC, social media marketing, content creation, email marketing, web design, and more."
        },
        {
            id: 3,
            title: "How do I get started with Revento?",
            desc: "Revento provides a full suite of digital marketing services, including SEO, PPC, social media marketing, content creation, email marketing, web design, and more."
        },
        {
            id: 4,
            title: "Does Revento provide ongoing support?",
            desc: "Revento provides a full suite of digital marketing services, including SEO, PPC, social media marketing, content creation, email marketing, web design, and more."
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

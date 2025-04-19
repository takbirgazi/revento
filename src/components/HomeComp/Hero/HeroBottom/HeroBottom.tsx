import CardSm from "@/components/ShareComp/CardSm/CardSm";
import Image from "next/image";


const HeroBottom = () => {
    const cards = [
        {
            id: 1,
            title: "80+",
            desc: "Successful Campaigns Across Diverse industries",
            link: "/",
            bgColor: "#1cb785",
            topImageLink: "https://framerusercontent.com/images/TnubgyUbK79WUzuRwVKhPKgas.svg",
            bottomImageLink: "https://framerusercontent.com/images/LMnSzKwI5us0vw7JhMZzlwhPdo.svg"
        },
        {
            id: 2,
            title: "8+",
            desc: "Startups are growing with Motion Mark",
            link: "/",
            bgColor: "#e9fa49",
            topImageLink: "https://framerusercontent.com/images/TnubgyUbK79WUzuRwVKhPKgas.svg",
            bottomImageLink: "https://framerusercontent.com/images/LMnSzKwI5us0vw7JhMZzlwhPdo.svg"
        }
    ]
    return (
        <div className="pt-8 max-w-[1200px] mx-auto">
            <div data-aos="fade-up" className="flex flex-col lg:flex-row justify-between gap-4 px-5">
                <div className="w-full lg:w-1/2">
                    <p className="max-w-[450px] lg:mx-0 mx-auto text-center lg:text-left">
                        <span className="text-xl lg:text-4xl font-medium uppercase text-white tracking-tighter">Smart, Scalable Digital Solutions Designed to Deliver ROI </span>
                        <span className="text-xl lg:text-4xl font-medium uppercase text-[#828d97] tracking-tighter"> We’re in this with you—from strategy to execution.</span>
                    </p>
                </div>
                <div className="w-full lg:w-1/2">
                    <div className="flex gap-4 pb-5 justify-center lg:justify-start">
                        {
                            cards.map(card => <CardSm key={card.id} cardData={card} />)
                        }

                    </div>
                    <p className="text-white max-w-lg lg:mx-0 mx-auto text-sm lg:text-left text-center font-extralight">Your brand will grow with strategic campaigns, engaging content, and data-driven digital marketing that delivers real results.</p>
                </div>
            </div>
            <div className="flex justify-center items-end pt-5 overflow-hidden">
                <figure className="h-10 w-16 md:h-20 md:w-32 lg:h-32 lg:w-40">
                    <Image className="w-full h-full" src="https://framerusercontent.com/images/hu1eUWnLUAIjJFEcHS6XHGyNUQ.svg" height={200} width={200} alt="Icon" />
                </figure>
            </div>
        </div>
    );
};

export default HeroBottom;
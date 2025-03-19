import logo from "@/assets/images/logo.avif"
import Image from 'next/image';


const Highlights = () => {
    return (
        <div className="p-4 flex justify-center items-center">
            <div data-aos="fade-up" data-aos-offset="-200" className="relative p-8 rounded-4xl bg-[#9d89fc] md:w-10/12">
                <h2 className="max-w-3xl mx-auto font-anton text-center lg:leading-24 text-xl md:text-7xl text-white py-9">Redefining Digital Impact with Innovative Strategies That Drive Real Results!</h2>
                <div className="flex flex-col md:flex-row justify-between items-center gap-4 lg:pt-4">
                    <p className="md:max-w-60 text-sm md:text-base text-white">Boost your website’s visibility and attract organic traffic </p>
                    <figure className="mt-3">
                        <Image className="text-white" src={logo} height={20} width={130} alt="Logo" />
                    </figure>
                </div>
                <div className="flex justify-center items-center">
                    <figure className="h-10 w-10 md:h-20 md:w-20 -mb-9">
                        <Image className="w-full h-full" src="https://framerusercontent.com/images/hu1eUWnLUAIjJFEcHS6XHGyNUQ.svg" height={200} width={200} alt="Icon" />
                    </figure>
                </div>
                {/* absolute data  */}
                <figure className="absolute top-0 right-[10%]">
                    <Image className="h-10 w-10 md:h-20 md:w-20 rotate-180" src="https://framerusercontent.com/images/wLIPoxPfPQKC0Y9sV4dWpRK8UI.svg" alt="Icon" height={200} width={200} />
                </figure>
                <figure className="absolute top-[25%] -left-[1.5%]">
                    <Image className="h-10 w-10 md:h-20 md:w-20 rotate-90" src="https://framerusercontent.com/images/wLIPoxPfPQKC0Y9sV4dWpRK8UI.svg" alt="Icon" height={200} width={200} />
                </figure>
            </div>
        </div>
    );
};

export default Highlights;
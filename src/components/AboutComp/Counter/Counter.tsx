import Image from "next/image";

const Counter = () => {
    return (
        <div>
            <h2 className='max-w-11/12 py-10 text-2xl lg:text-7xl font-medium uppercase font-anton'>
                <span className=" text-[#051a2f] tracking-tight">With years of experience and a track record of </span>
                <span className=" text-[#828d97] tracking-tight"> delivering measurable results!</span>
            </h2>
            <div className="grid grid-cols-1 gap-4 md:grid-cols-3">

                <div className={`bg-[#ff8f27] relative rounded-3xl overflow-hidden p-5 pt-7 pb-12`}>
                    <div className="flex justify-between">
                        <h2 className="text-4xl lg:text-8xl tracking-wider font-anton font-bold pb-2 text-white">300+</h2>
                    </div>
                    <h4 className="text-white text-lg font-bold pb-16">Successful Campaigns</h4>
                    <p className="w-11/12 text-sm leading-6 text-white">Tailored to your business goals and Successful Campaigns delivered across various industries..</p>

                    <figure className="absolute -top-[1px] right-[25%]">
                        <Image className=" w-[40px]" src="https://framerusercontent.com/images/HaTeCnedqptj5oZx1ZHkM2pcbZg.svg" alt="Icon" height={100} width={100} />
                    </figure>
                    <figure className="absolute bottom-0 left-[25%]">
                        <Image className="rotate-180 w-[40px]" src="https://framerusercontent.com/images/7os4g4ruRwOonodXRETIWnxw1M.svg" alt="Icon" height={100} width={100} />
                    </figure>
                </div>

                <div className={`bg-[#e9fa49] relative rounded-3xl overflow-hidden p-5 pt-7 pb-12`}>
                    <div className="flex justify-between">
                        <h2 className="text-4xl lg:text-8xl tracking-wider font-anton font-bold pb-2 text-gray-800">2.5x</h2>
                    </div>
                    <h4 className="text-gray-800 text-lg font-bold pb-16">Average ROI</h4>
                    <p className="w-11/12 text-sm leading-6 text-gray-800">Crafted for your success, delivering impactful campaigns across diverse industries worldwide.</p>

                    <figure className="absolute -top-[1px] right-[25%]">
                        <Image className=" w-[40px]" src="https://framerusercontent.com/images/HaTeCnedqptj5oZx1ZHkM2pcbZg.svg" alt="Icon" height={100} width={100} />
                    </figure>
                    <figure className="absolute bottom-0 left-[25%]">
                        <Image className="rotate-180 w-[40px]" src="https://framerusercontent.com/images/7os4g4ruRwOonodXRETIWnxw1M.svg" alt="Icon" height={100} width={100} />
                    </figure>
                </div>

                <div className={`bg-[#9d89fc] relative rounded-3xl overflow-hidden p-5 pt-7 pb-12`}>
                    <div className="flex justify-between">
                        <h2 className="text-4xl lg:text-8xl tracking-wider font-anton font-bold pb-2 text-white">10M+</h2>
                    </div>
                    <h4 className="text-white text-lg font-bold pb-16">Impressions generated</h4>
                    <p className="w-11/12 text-sm leading-6 text-white">Achieving excellence through personalized strategies and successful results in every industry.</p>

                    <figure className="absolute -top-[1px] right-[25%]">
                        <Image className=" w-[40px]" src="https://framerusercontent.com/images/HaTeCnedqptj5oZx1ZHkM2pcbZg.svg" alt="Icon" height={100} width={100} />
                    </figure>
                    <figure className="absolute bottom-0 left-[25%]">
                        <Image className="rotate-180 w-[40px]" src="https://framerusercontent.com/images/7os4g4ruRwOonodXRETIWnxw1M.svg" alt="Icon" height={100} width={100} />
                    </figure>
                </div>
            </div>
        </div>
    );
};

export default Counter;
import CustomButton from '@/components/ShareComp/CustomButton/CustomButton';
import Image from 'next/image';


const Highlights2 = () => {
    return (
        <div className="p-4 flex justify-center items-center">
            <div className="relative p-8 rounded-4xl bg-[#051a2f]">
                <h2 className="md:w-10/12 mx-auto font-anton text-center lg:leading-24 text-xl md:text-7xl text-white py-9">Ready to Partner with Revento &      unlock the full potential?</h2>
                <div className="flex flex-col md:flex-row justify-center items-center gap-4 lg:pt-20">
                    <CustomButton link="/" title="get in touch" />
                </div>
                <div className="absolute top-0 left-2/4 flex justify-center items-center">
                    <figure className="h-10 w-10 md:h-20 md:w-20 rotate-180">
                        <Image className="w-full h-full" src="https://framerusercontent.com/images/hu1eUWnLUAIjJFEcHS6XHGyNUQ.svg" height={200} width={200} alt="Icon" />
                    </figure>
                </div>
                {/* absolute data  */}
                <figure className="absolute top-3/5 right-[10%]">
                    <Image className="w-10" src="https://framerusercontent.com/images/UGX0M4SJvLbj68oUJRUrxOJgyc.png" alt="Icon" height={200} width={200} />
                </figure>
                <figure className="absolute top-[25%] -left-[1.5%]">
                    <Image className="h-10 w-10 md:h-20 md:w-20 rotate-90" src="https://framerusercontent.com/images/wLIPoxPfPQKC0Y9sV4dWpRK8UI.svg" alt="Icon" height={200} width={200} />
                </figure>
            </div>
        </div>
    );
};

export default Highlights2;
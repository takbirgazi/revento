import CustomButton from '@/components/ShareComp/CustomButton/CustomButton';
import Image from 'next/image';
import styles from "@/assets/styles/animation.module.css";


const Highlights2 = () => {
    return (
        <div className="p-4 flex justify-center items-center">
            <div className="relative p-8 rounded-4xl bg-[#051a2f]">
                <h2 className="relative md:w-10/12 mx-auto font-anton text-center lg:leading-24 text-xl md:text-7xl text-white py-9 uppercase">Ready to Partner with Revento & unlock the full potential?
                    {/* absolute data  */}
                    <div className="absolute md:-bottom-9 md:right-[25%]">
                        <figure className={`w-8 h-8 md:w-10 md:h-10 lg:h-25 lg:w-25 ${styles.rotateAnim}`}>
                            <Image className="h-full w-full" src="https://framerusercontent.com/images/YnrgvKUGMeimEqrFeLCn9dudPjg.png" height={80} width={150} alt="Bounse" />
                        </figure>
                    </div>
                </h2>
                <div className="flex flex-col md:flex-row justify-center items-center lg:pt-20">
                    <CustomButton link="/" title="get in touch" />
                </div>
                <div className="absolute top-0 left-2/4 flex justify-center items-center">
                    <figure className="h-5 w-5 md:h-20 md:w-20 rotate-180">
                        <Image className="w-full h-full" src="https://framerusercontent.com/images/hu1eUWnLUAIjJFEcHS6XHGyNUQ.svg" height={200} width={200} alt="Icon" />
                    </figure>
                </div>
                {/* Absolute data  */}
                <figure className="absolute top-2/5 -right-[1%] lg:right-[15%]">
                    <Image className="w-5 md:w-10" src="https://framerusercontent.com/images/UGX0M4SJvLbj68oUJRUrxOJgyc.png" alt="Icon" height={200} width={200} />
                </figure>
                <figure className="absolute top-[25%] -left-[1.5%]">
                    <Image className="h-5 w-5 md:h-20 md:w-20 rotate-90" src="https://framerusercontent.com/images/wLIPoxPfPQKC0Y9sV4dWpRK8UI.svg" alt="Icon" height={200} width={200} />
                </figure>
            </div>
        </div>
    );
};

export default Highlights2;
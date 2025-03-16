import CustomButton from "@/components/ShareComp/CustomButton/CustomButton";
import Image from "next/image";
import styles from "@/assets/styles/animation.module.css"
import HeroBottom from "./HeroBottom/HeroBottom";

const Hero = () => {
    return (
        <div className="bg-primaryBg ">
            <div className="container mx-auto pt-20">
                <p className="text-white text-center font-medium md:text-base text-sm py-6 lg:py-2">❤️  #1 Popular Digital Marketing Agency</p>

                <div className="max-w-4xl mx-auto lg:leading-30 leading-12">
                    <div className="flex justify-center">
                        <h2 className="relative text-center text-white text-[40px] lg:text-[100px] uppercase font-medium tracking-tight font-anton">Transforming
                            {/* Absolute Data */}
                            <div className="absolute top-0 -left-[20%] md:-left-[35%] lg:-left-[30%]">
                                <figure className={`w-2 h-2 md:h-5 md:w-5 lg:h-10 lg:w-10 ${styles.slideAnim2}`}>
                                    <Image className="lg:rotate-[230deg] h-full w-full" src="https://framerusercontent.com/images/AeFvXhaWzVGf2nW55xquWsfteBM.svg" height={80} width={150} alt="Bounse" />
                                </figure>
                            </div>
                            <div className="absolute -top-[50%] -right-[10%] md:-right-[20%]">
                                <figure className={`w-8 h-8 md:w-10 md:h-10 lg:h-32 lg:w-32 ${styles.rotateAnim}`}>
                                    <Image className="h-full w-full" src="https://framerusercontent.com/images/YnrgvKUGMeimEqrFeLCn9dudPjg.png" height={80} width={150} alt="Bounse" />
                                </figure>
                            </div>
                            <div className="absolute -top-2 right-[15%]">
                                <figure className={`h-5 w-5 lg:h-10 lg:w-10 ${styles.rotateAnim2}`}>
                                    <Image className="h-full w-full" src="https://framerusercontent.com/images/3UclJG1nnrRt1fIFjY95idlaaWc.svg" height={80} width={150} alt="Bounse" />
                                </figure>
                            </div>
                            <div className="absolute top-0 -left-[20%] md:-left-[30%] lg:-left-[25%]">
                                <figure className={`w-8 h-8 md:h-10 md:w-12 lg:h-28 lg:w-24 ${styles.slideAnim}`}>
                                    <Image className="h-full w-full rotate-[230deg]" src="https://framerusercontent.com/images/BCq0p16QtiLSy6fx05CaUoQbwfM.png" height={80} width={150} alt="Bounse" />
                                </figure>
                            </div>
                            <div className="absolute -bottom-1 right-0">
                                <figure className={`h-5 w-5 lg:h-10 lg:w-10 ${styles.slideAnim2}`}>
                                    <Image className="h-full w-full" src="https://framerusercontent.com/images/skbUtvcpmTUqWb39ckLj1ra7TE.svg" height={80} width={150} alt="Bounse" />
                                </figure>
                            </div>
                        </h2>
                    </div>

                    <div className="flex justify-center">
                        <h2 className="relative text-center text-white text-[40px] lg:text-[100px] uppercase font-medium tracking-tight font-anton">
                            <span className="text-[#9d89fc] pr-11 md:pr-16 lg:pr-40">Vision into</span>
                            <span className="text-[#ff8f27]">Impact</span>
                            <div className="absolute top-0 -left-[2%]">
                                <figure className={`h-5 w-5 lg:h-10 lg:w-10`}>
                                    <Image className="h-full w-full" src="https://framerusercontent.com/images/Mfur6LVh1A1lVv5s9OYSbdNovE.svg" height={80} width={80} alt="Bounse" />
                                </figure>
                            </div>

                            <div className="absolute -bottom-1 right-0">
                                <figure className={`h-5 w-5 lg:h-10 lg:w-10 ${styles.slideAnim3}`}>
                                    <Image className="h-full w-full" src="https://framerusercontent.com/images/BGqpp1YM4qKJdHY9REqeaffeszU.svg" height={80} width={150} alt="Bounse" />
                                </figure>
                            </div>
                        </h2>
                    </div>

                    <h2 className="text-center text-white text-[40px] lg:text-[100px] uppercase font-medium tracking-tight font-anton">Effectively</h2>
                </div>
                <p className="text-center text-white max-w-xl mx-auto py-5">Experience growth through innovative digital marketing designed to reach, inspire, and deliver results.</p>
                <div className="flex justify-center items-center pb-5">
                    <CustomButton link="/" title="get in touch" />
                </div>

                <HeroBottom />
            </div>
        </div>
    );
};

export default Hero;
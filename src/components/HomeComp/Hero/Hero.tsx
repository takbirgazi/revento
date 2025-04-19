"use client"
import AOS from 'aos';
import { useEffect } from 'react';
import CustomButton from "@/components/ShareComp/CustomButton/CustomButton";
import Image from "next/image";
import styles from "@/assets/styles/animation.module.css"
import HeroBottom from "./HeroBottom/HeroBottom";
import rotateImage from "@/assets/images/webiste-seal.png";

const Hero = () => {
    useEffect(() => {
        AOS.init({
            duration: 600,
            easing: 'ease-in-out',
            once: true
        })
    }, []);
    return (
        <div className="bg-primaryBg">
            <div data-aos="fade-up" className="container mx-auto max-w-[1280px] pt-20">
                <p className="text-white text-center font-medium md:text-base text-sm py-6 lg:py-2">Fastest Growing Digital Agency in Bangladesh</p>

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
                                <figure className={`w-8 h-8 md:w-10 md:h-10 lg:h-32 lg:w-32 ${styles.rotateAnim2}`}>
                                    <Image className="h-full w-full" src={rotateImage} height={80} width={150} alt="Bounse" />
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
                        <h2 className="relative text-center text-white text-[40px] lg:text-[100px] uppercase font-medium tracking-tight flex items-center">
                            <span className="text-[#9d89fc] font-anton">Vision into</span>
                            <div className="relative h-10 w-12 lg:h-25 lg:w-30 bg-[#e9fa49] mx-3 -rotate-12">
                                <div className="hidden lg:block absolute top-10 z-30 w-fit -left-6 py-1.5 text-sm rotate-90 overflow-hidden font-inter bg-[#051a2f]">
                                    <p className="font-bold lowercase tracking-widest -mb-1.5 text-left">innovative</p>
                                    <p className="font-bold capitalize tracking-widest text-left">Strategy</p>
                                </div>
                                <figure className={`w-full h-14 lg:h-32 absolute -top-4 lg:-top-7`}>
                                    <Image className="h-full w-full" src="https://framerusercontent.com/images/YZ4YVYvxYcrDZTkwymDWD8arcwI.png" height={80} width={150} alt="Bounse" />
                                </figure>

                                <figure className={`absolute -top-[10%] -left-[10%] w-3 h-3 md:w-5 md:h-5 ${styles.rotateAnim}`}>
                                    <Image className="h-full w-full" src="https://framerusercontent.com/images/zF24pyp35mOT35C0XWrgS7ZIoek.svg" height={80} width={150} alt="Bounse" />
                                </figure>
                            </div>
                            <span className="text-[#ff8f27] font-anton">Real-</span>
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

                    <h2 className="text-center text-white text-[40px] lg:text-[100px] uppercase font-medium tracking-tight font-anton">World Impact</h2>
                </div>
                <p className="text-center text-white max-w-xl mx-auto py-5">Unlock growth with powerful digital strategies that connect, convert, and scale.</p>
                <div className="flex justify-center items-center pb-5">
                    <CustomButton link="/contact" title="get in touch" />
                </div>

                <HeroBottom />
            </div>
        </div>
    );
};

export default Hero;
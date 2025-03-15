import CustomButton from "@/components/CustomButton/CustomButton";
import Image from "next/image";
import styles from "@/assets/styles/animation.module.css"

const Hero = () => {
    return (
        <div className="bg-primaryBg ">
            <div className="container mx-auto max-w-4xl pt-20">
                <p className="text-white text-center font-medium md:text-base text-sm py-2">❤️  #1 Popular Digital Marketing Agency</p>
                <div className="lg:leading-30 leading-12">
                    <div className="relative">
                        <h2 className="text-center text-white text-[40px] lg:text-[100px] uppercase font-medium tracking-tight font-anton">Transforming</h2>
                        {/* Absolute Data */}
                        <div className="absolute top-0 left-0">
                            <figure className={`w-2 h-2 md:h-5 md:w-5 lg:h-10 lg:w-10 ${styles.slideAnim2}`}>
                                <Image className="lg:rotate-[230deg] h-full w-full" src="https://framerusercontent.com/images/AeFvXhaWzVGf2nW55xquWsfteBM.svg" height={80} width={150} alt="Bounse" />
                            </figure>
                        </div>
                        <div className="absolute -top-16 right-24">
                            <figure className={`w-8 h-8 md:w-10 md:h-10 lg:h-32 lg:w-32 ${styles.rotateAnim}`}>
                                <Image className="h-full w-full" src="https://framerusercontent.com/images/YnrgvKUGMeimEqrFeLCn9dudPjg.png" height={80} width={150} alt="Bounse" />
                            </figure>
                        </div>
                        <div className="absolute -top-2 right-64">
                            <figure className={`h-10 w-10 ${styles.rotateAnim2}`}>
                                <Image className="h-full w-full" src="https://framerusercontent.com/images/3UclJG1nnrRt1fIFjY95idlaaWc.svg" height={80} width={150} alt="Bounse" />
                            </figure>
                        </div>
                        <div className="absolute top-0 left-10">
                            <figure className={`h-28 w-24 ${styles.slideAnim}`}>
                                <Image className="h-full w-full rotate-[230deg]" src="https://framerusercontent.com/images/BCq0p16QtiLSy6fx05CaUoQbwfM.png" height={80} width={150} alt="Bounse" />
                            </figure>
                        </div>
                        <div className="absolute top-20 right-40">
                            <figure className={`h-10 w-10 ${styles.slideAnim2}`}>
                                <Image className="h-full w-full" src="https://framerusercontent.com/images/skbUtvcpmTUqWb39ckLj1ra7TE.svg" height={80} width={150} alt="Bounse" />
                            </figure>
                        </div>
                    </div>
                    <h2 className="text-center text-white text-[40px] lg:text-[100px] uppercase font-medium tracking-tight font-anton">
                        <span className="text-[#9d89fc] pr-11 md:pr-16 lg:pr-40">Vision into</span>
                        <span className="text-[#ff8f27]">Impact</span>
                    </h2>
                    <h2 className="text-center text-white text-[40px] lg:text-[100px] uppercase font-medium tracking-tight font-anton">Effectively</h2>
                </div>
                <p className="text-center text-white max-w-xl mx-auto py-5">Experience growth through innovative digital marketing designed to reach, inspire, and deliver results.</p>
                <div className="flex justify-center items-center pb-5">
                    <CustomButton link="/" title="get in touch" />
                </div>
            </div>
        </div>
    );
};

export default Hero;
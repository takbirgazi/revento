import Image from 'next/image';
import styles from "@/assets/styles/animation.module.css"

const AboutHero = () => {
    return (
        <div className="bg-primaryBg">
            <div data-aos="fade-up" className="container mx-auto pt-20">
                <h2 className="text-2xl text-center uppercase text-[#ff4f3f] lg:text-3xl pb-5 font-anton">about us</h2>
                <h2 className="w-fit mx-auto relative text-center text-white text-[40px] lg:text-[100px] uppercase font-medium tracking-tight font-anton">Discover Revento
                    {/* Absolute Data */}
                    <div className="absolute top-[15%] -left-[2%]">
                        <figure className={`w-5 h-5 md:w-8 md:h-8 ${styles.rotateAnim}`}>
                            <Image className="h-full w-full" src="https://framerusercontent.com/images/IbxHyIcWmYxu05Xf2AUjE4qzdE.svg" height={80} width={150} alt="Bounse" />
                        </figure>
                    </div>
                    <div className="absolute bottom-2 left-[48%]">
                        <figure className={`w-2 h-2 md:h-5 md:w-5 lg:h-10 lg:w-10 ${styles.slideAnim2}`}>
                            <Image className="h-full w-full" src="https://framerusercontent.com/images/Bt1vdMJBmlid8RSPtoTWJRcU.svg" height={80} width={80} alt="Slide" />
                        </figure>
                    </div>
                    <figure className={`w-5 md:w-6 lg:w-12 absolute top-0 right-4 md:top-0 md:right-3.5 lg:top-1 lg:right-10`}>
                        <Image className="h-full w-full" src="https://framerusercontent.com/images/SYs2tkN9cLpCnAXQzEAAV0RdwM.svg" height={80} width={90} alt="Bounse" />
                    </figure>

                </h2>
                <p className='text-center max-w-xl mx-auto text-white'>Experience growth through innovative digital marketing designed to reach, inspire, and deliver results.</p>
            </div>
            <div className="pt-8 max-w-[1200px] mx-auto">
                <div className="flex justify-center items-end pt-5 overflow-hidden">
                    <figure className="h-10 w-16 md:h-20 md:w-32 lg:h-32 lg:w-40">
                        <Image className="w-full h-full" src="https://framerusercontent.com/images/hu1eUWnLUAIjJFEcHS6XHGyNUQ.svg" height={200} width={200} alt="Icon" />
                    </figure>
                </div>
            </div>
        </div>
    );
};

export default AboutHero;
import Image from "next/image";
import styles from "@/assets/styles/animation.module.css";

interface TestimonialsType {
    testimonialsData: {
        id: number;
        name: string;
        image: string;
        deg: string;
        message: string;
    }
}

const Testimonials: React.FC<TestimonialsType> = ({ testimonialsData }) => {
    return (
        <div className="py-5 flex flex-col md:flex-row md:gap-20 items-center justify-between">
            <div className='relative overflow-hidden'>
                <figure className="h-60 md:h-[400px] rounded-4xl overflow-hidden">
                    <Image className='w-full h-full' src={testimonialsData.image} height={850} width={580} alt='Testimonials Image' />
                </figure>


                <figure className="absolute bottom-[50%] -right-[4%]">
                    <Image className="h-10 w-10 md:h-20 md:w-20" src="https://framerusercontent.com/images/DFNmLgDyqQHnzkFec5OKBkk1QCg.png" alt="Icon" height={200} width={200} />
                </figure>
                <figure className="absolute bottom-[50%] -left-[4%]">
                    <Image className="h-10 w-10 md:h-20 md:w-20 rotate-90" src="https://framerusercontent.com/images/wLIPoxPfPQKC0Y9sV4dWpRK8UI.svg" alt="Icon" height={200} width={200} />
                </figure>
            </div>
            <div className="w-full md:w-2/3">
                <div>
                    <div className="py-5 flex lg:justify-start justify-center">
                        <div className={styles.CirkelMain}>
                            <div className={styles.CirkelMainCitation}> </div>
                            <div className={styles.CirkelMainBg}> </div>
                        </div>
                    </div>
                    <h2 className="text-[#ff4f3f] text-xl text-center lg:text-left lg:text-3xl pb-5 font-anton">Testimonials</h2>
                    <h3 className="text-[#051a2f] text-[20px] text-center lg:text-left lg:text-[65px] uppercase font-medium tracking-tight font-anton leading-7 lg:leading-20">{testimonialsData.message}
                        {/* <span className="text-[#828c97]">by 200% in just three months!</span> */}
                    </h3>
                    <p className="text-[#828c97] py-2 text-center md:text-left">{testimonialsData.name}, {testimonialsData.deg}</p>
                </div>
            </div>
        </div>
    );
};

export default Testimonials;
import Image from "next/image";
import styles from "@/assets/styles/animation.module.css";

const Testimonials = () => {
    return (
        <div className="py-5 flex flex-col md:flex-row gap-20 items-center justify-between">
            <div data-aos="fade-up" className='relative overflow-hidden'>
                <figure className="rounded-4xl overflow-hidden">
                    <Image className='w-full h-full' src="https://framerusercontent.com/images/Ftw2WR3BA7Qta1YZhwxUYSOSJ6o.png?scale-down-to=1024" height={850} width={580} alt='Feature' />
                </figure>


                <figure className="absolute bottom-[50%] -right-[4%]">
                    <Image className="h-10 w-10 md:h-20 md:w-20" src="https://framerusercontent.com/images/DFNmLgDyqQHnzkFec5OKBkk1QCg.png" alt="Icon" height={200} width={200} />
                </figure>
                <figure className="absolute bottom-[50%] -left-[4%]">
                    <Image className="h-10 w-10 md:h-20 md:w-20 rotate-90" src="https://framerusercontent.com/images/wLIPoxPfPQKC0Y9sV4dWpRK8UI.svg" alt="Icon" height={200} width={200} />
                </figure>
            </div>
            <div className="w-full md:w-2/3">
                <div data-aos="fade-up">
                    <div className="py-5 flex lg:justify-start justify-center">
                        <div className={styles.CirkelMain}>
                            <div className={styles.CirkelMainCitation}> </div>
                            <div className={styles.CirkelMainBg}> </div>
                        </div>
                    </div>
                    <h2 className="text-[#ff4f3f] text-2xl text-center lg:text-left lg:text-3xl pb-5 font-anton">Testimonials</h2>
                    <h3 className="text-[#051a2f] text-[30px] text-center lg:text-left lg:text-[65px] uppercase font-medium tracking-tight font-anton leading-10 lg:leading-20">Revento transformed our online presence <span className="text-[#828c97]">by 200% in just three months!</span></h3>
                    <p className="text-[#828c97] py-2 text-center md:text-left">Michael T., Retail Store Owner</p>
                </div>
            </div>
        </div>
    );
};

export default Testimonials;
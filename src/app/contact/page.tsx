import Faq from "@/components/HomeComp/Faq/Faq";
import Highlights2 from "@/components/HomeComp/Highlights2/Highlights2";
import HeroCustom from "@/components/ShareComp/HeroCustom/HeroCustom";
import styles from "@/assets/styles/animation.module.css";
import ContactCalendly from "@/components/ContactComp/ContactCalendly/ContactCalendly";

const page = () => {
    const heroData = {
        topHeader: "",
        mainHeader: "Let’s Connect",
        desc: "Experience growth through innovative digital marketing designed to deliver results.",
        topHeaderColor: "#9d89fb",
        mainHeaderColor: "white",
    }

    return (
        <div>
            <HeroCustom heroData={heroData} />
            <div className="container mx-auto max-w-[1280px] px-4 md:pb-20">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 pt-12">
                    <div className="rounded-3xl bg-[#e3eef8] p-10 py-24 relative">
                        <div className="flex justify-center items-center py-5"> <span className={styles.contactMask}></span></div>
                        <h2 className="text-2xl outline-0 lg:text-4xl text-center pb-5 font-anton uppercase text-primaryBg">email us</h2>
                        <p className="flex flex-col gap-4 text-center pt-5 font-semibold">
                            <a className="hover:text-[#9d89fc] hover:underline duration-300 transition-all" href="mailto:info@motionmark.agecy">info@motionmark.agecy</a>
                            {/* <a className="hover:text-[#9d89fc] hover:underline duration-300 transition-all" href="mailto: support@revento.com">support@revento.com</a> */}
                        </p>
                    </div>
                    <div className="rounded-3xl bg-[#e3eef8] p-10 py-24 relative">
                        <div className="flex justify-center items-center py-5"> <span className={styles.contactMask2}></span></div>
                        <h2 className="text-2xl outline-0 lg:text-4xl text-center pb-5 font-anton uppercase text-primaryBg">visit our office</h2>
                        <p className="flex flex-col gap-4 text-center pt-5 font-semibold">
                            <a className="hover:text-[#9d89fc] hover:underline duration-300 transition-all" target="_blank" href="https://maps.app.goo.gl/GqqLcaxBmX5voLPY9">Northern Khan Heights, Plot 34, Main Road 3, Block D, Mirpur 11, Dhaka 1216</a>
                        </p>
                    </div>
                    <div className="rounded-3xl bg-[#e3eef8] p-10 py-24 relative">
                        <div className="flex justify-center items-center py-5"> <span className={styles.contactMask3}></span></div>
                        <h2 className="text-2xl outline-0 lg:text-4xl text-center pb-5 font-anton uppercase text-primaryBg">call us</h2>
                        <p className="flex flex-col gap-4 text-center pt-5 font-semibold">
                            <a className="hover:text-[#9d89fc] hover:underline duration-300 transition-all" href="tel:+8801316451034">+8801316451034</a>
                            {/* <a className="hover:text-[#9d89fc] hover:underline duration-300 transition-all" href="tel:0123-4567-890">0123-4567-890</a> */}
                        </p>
                    </div>
                </div>
                {/* <ContactForm /> */}
                <ContactCalendly />
                <Faq />
                <Highlights2 />
            </div>
        </div>
    );
};

export default page;
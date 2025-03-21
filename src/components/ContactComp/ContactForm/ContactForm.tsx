import SectionHeader from "@/components/ShareComp/SectionHeader/SectionHeader";
import { FaArrowRight } from "react-icons/fa6";

const ContactForm = () => {
    const headerData = {
        topHeading: "CONTACT US",
        heading: "send a message",
        topHeadingColor: "#9d89fb",
        headingColor: "#051a2f",
    }

    return (
        <div className="py-12">
            <div className='flex flex-col lg:flex-row justify-between lg:items-end gap-5'>
                <div className='w-full lg:w-2/3'>
                    <div className='w-full lg:w-2/3'>
                        <SectionHeader headerData={headerData} />
                    </div>
                </div>
                <p className='w-full lg:w-1/3 text-center lg:text-left'>Experience growth through innovative digital marketing designed to reach, inspire, and deliver results.</p>
            </div>
            <div className="py-9">
                <form className="flex flex-col gap-20 pt-10" action="">
                    <div className="flex flex-col md:flex-row gap-4 justify-between items-center">
                        <input className="w-full md:w-1/2 text-2xl outline-0 lg:text-3xl pb-5 font-anton text-primaryBg placeholder:text-[#051a2f] border-b-2 border-gray-400" type="text" placeholder="Jane Smith" />
                        <input className="w-full md:w-1/2 text-2xl outline-0 lg:text-3xl pb-5 font-anton text-primaryBg placeholder:text-[#051a2f] border-b-2 border-gray-400" type="text" placeholder="email address" />
                    </div>
                    <div className="flex flex-col md:flex-row gap-4 justify-between items-center">
                        <input className="w-full md:w-1/2 text-2xl outline-0 lg:text-3xl pb-5 font-anton text-primaryBg placeholder:text-[#051a2f] border-b-2 border-gray-400" type="text" placeholder="phone number" />
                        <input className="w-full md:w-1/2 text-2xl outline-0 lg:text-3xl pb-5 font-anton text-primaryBg placeholder:text-[#051a2f] border-b-2 border-gray-400" type="text" placeholder="subject" />
                    </div>
                    <div>
                        <textarea name="" className="w-full text-2xl outline-0 lg:text-3xl pb-5 font-anton text-primaryBg placeholder:text-[#051a2f] border-b-2 border-gray-400" placeholder="write your message here" rows={4}></textarea>
                    </div>
                    <div className="flex py-5">
                        <button className="group bg-[#051a2f] hover:bg-[#9d89fc] text-white font-bold rounded-full px-5 md:px-20 py-5 hover:border-white uppercase text-sm lg:text-lg flex items-center gap-2 transition-all duration-300" >
                           Send Message  <FaArrowRight />
                        </button>
                    </div>

                </form>
            </div>
        </div>
    );
};

export default ContactForm;
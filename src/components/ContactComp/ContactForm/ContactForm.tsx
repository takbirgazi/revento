"use client"

import SectionHeader from "@/components/ShareComp/SectionHeader/SectionHeader";
import { FaArrowRight } from "react-icons/fa6";
import { useForm } from "react-hook-form";
import emailjs from "@emailjs/browser";
import { useRef, useState } from "react";

const ContactForm = () => {
    const formRef = useRef<HTMLFormElement>(null);
    const [success, setSuccess] = useState(false);
    const [error, setError] = useState(false);

    const {
        register,
        handleSubmit,
        reset,
        formState: { isSubmitting }
    } = useForm();

    const headerData = {
        topHeading: "",
        heading: "BOOK YOUR MEETING WITH US",
        topHeadingColor: "#9d89fb",
        headingColor: "#051a2f",
    };

    const onSubmit = async () => {
        if (!formRef.current) return;

        try {
            const result = await emailjs.sendForm(
                "service_p7jessf",
                "template_m5i58vq",
                formRef.current,
                "jvwNb-0mt004KKMow"
            );
            console.log("SUCCESS!", result.text);
            reset();
            setSuccess(true);
            setError(false);
            setTimeout(() => setSuccess(false), 4000);
        } catch (err) {
            console.error("FAILED...", err);
            setError(true);
            setSuccess(false);
        }
    };

    return (
        <div className="py-12">
            <div className='flex flex-col lg:flex-row justify-between lg:items-end gap-5'>
                <div className='w-full lg:w-2/3'>
                    <div className='w-full lg:w-2/3'>
                        <SectionHeader headerData={headerData} />
                    </div>
                </div>
                {/* <p className='w-full lg:w-1/3 text-center lg:text-left'>
                    Unlock growth with powerful digital strategies that connect, convert, and scale.
                </p> */}
            </div>

            <div className="py-9">
                <form ref={formRef} onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-20 pt-10">
                    <div className="flex flex-col md:flex-row gap-4 justify-between items-center">
                        <input
                            {...register("name", { required: true })}
                            name="name"
                            className="w-full md:w-1/2 text-2xl outline-0 lg:text-3xl pb-5 font-anton text-primaryBg placeholder:text-[#051a2f] border-b-2 border-gray-400"
                            type="text"
                            placeholder="Jane Smith"
                        />
                        <input
                            {...register("email", { required: true })}
                            name="email"
                            className="w-full md:w-1/2 text-2xl outline-0 lg:text-3xl pb-5 font-anton text-primaryBg placeholder:text-[#051a2f] border-b-2 border-gray-400"
                            type="email"
                            placeholder="email address"
                        />
                    </div>
                    <div className="flex flex-col md:flex-row gap-4 justify-between items-center">
                        <input
                            {...register("phone")}
                            name="phone"
                            className="w-full md:w-1/2 text-2xl outline-0 lg:text-3xl pb-5 font-anton text-primaryBg placeholder:text-[#051a2f] border-b-2 border-gray-400"
                            type="text"
                            placeholder="phone number"
                        />
                        <input
                            {...register("subject")}
                            name="subject"
                            className="w-full md:w-1/2 text-2xl outline-0 lg:text-3xl pb-5 font-anton text-primaryBg placeholder:text-[#051a2f] border-b-2 border-gray-400"
                            type="text"
                            placeholder="subject"
                        />
                    </div>
                    <div>
                        <textarea
                            {...register("message", { required: true })}
                            name="message"
                            className="w-full text-2xl outline-0 lg:text-3xl pb-5 font-anton text-primaryBg placeholder:text-[#051a2f] border-b-2 border-gray-400"
                            placeholder="write your message here"
                            rows={4}
                        ></textarea>
                    </div>
                    <div className="flex py-5">
                        <button
                            type="submit"
                            disabled={isSubmitting}
                            className="group bg-[#051a2f] hover:bg-[#9d89fc] text-white font-bold rounded-full px-5 md:px-20 py-5 hover:border-white uppercase text-sm lg:text-lg flex items-center gap-2 transition-all duration-300"
                        >
                            {isSubmitting ? "Sending..." : "Send Message"}
                            <FaArrowRight />
                        </button>
                    </div>
                    {success && <p className="text-green-500 text-xl">Message sent successfully!</p>}
                    {error && <p className="text-red-500 text-xl">Failed to send message. Try again!</p>}
                </form>
            </div>
        </div>
    );
};

export default ContactForm;

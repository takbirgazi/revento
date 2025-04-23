import SectionHeader from "@/components/ShareComp/SectionHeader/SectionHeader";

const ContactCalendly = () => {

    const headerData = {
        topHeading: "",
        heading: "BOOK YOUR MEETING WITH US",
        topHeadingColor: "#9d89fb",
        headingColor: "#051a2f",
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

            <div className="py-1 flex justify-center items-center">
                <iframe
                    src="https://calendly.com/admin-motionmark/30min?primary_color=1cba86"
                    className="w-full h-full min-h-[550px]"
                    style={{ minWidth: '320px', height: '700px', border: 'none' }}
                    title="Calendly Scheduling"
                ></iframe>
            </div>
        </div>
    );
};

export default ContactCalendly;
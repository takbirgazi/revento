import Faq from '@/components/HomeComp/Faq/Faq';
import Highlights2 from '@/components/HomeComp/Highlights2/Highlights2';
import TestimonialsSlider from '@/components/HomeComp/TestimonialsSlider/TestimonialsSlider';
import HeroTestimonial from '@/components/TestimonialComp/HeroTestimonial/HeroTestimonial';
import ReviewCard from '@/components/TestimonialComp/ReviewCard/ReviewCard';
import Image from 'next/image';

const page = () => {
    const reviewData = [
        {
            id: 1,
            title: "Innovex elevated our online visibility.",
            desc: "Their fresh ideas and sharp execution helped us achieve record-breaking growth in a few months. Amazing!",
            authName: "Brooklyn Simmons",
            authDeg: "Product Manager",
            authImageUrl: "https://framerusercontent.com/images/z2WdUpeHt85PrtNFbMJE6mUHk.png?scale-down-to=512"
        },
        {
            id: 2,
            title: "Working with Revento has been a game",
            desc: "Their innovative solutions and proactive approach boosted our sales by 3x in just a few months. Truly outstanding!",
            authName: "Madison Hayes",
            authDeg: "Program Manager",
            authImageUrl: "https://framerusercontent.com/images/YcdOY8jeCV1u2sXTTrJC2a2aG04.png"
        },
        {
            id: 3,
            title: "Streamline reshaped our web presence.",
            desc: "heir customized solutions and strategic insights doubled our customer engagement in record time. A fantastic team!",
            authName: "Harper Collins",
            authDeg: "Account Manager",
            authImageUrl: "https://framerusercontent.com/images/6yFXxh0teYUmSalx9a7pkglsc.png"
        },
        {
            id: 4,
            title: "Bluewave redefined our online branding.",
            desc: "Their attention to detail and dynamic strategies resulted in a significant spike in brand visibility. Highly commendable!",
            authName: "Morgan Rivers",
            authDeg: "Operations Manager",
            authImageUrl: "https://framerusercontent.com/images/4xEeJbQT0WekHVdzNPWq8UeUo8.png"
        },
        {
            id: 5,
            title: "CyberEdge amplified our online impact.",
            desc: "Their creative campaigns helped us grow our social media following by 3x in a short period. Great results!",
            authName: "Taylor Benson",
            authDeg: "Marketing Manager",
            authImageUrl: "https://framerusercontent.com/images/PgA33PGnXEgl8bQQdOb2dxlbLHw.jpg?scale-down-to=1024"
        },
        {
            id: 6,
            title: "Revento’s team is creative",
            desc: "Their data-driven methodologies led to a 50% reduction in ad costs while increasing ROI. Highly recommend them!",
            authName: "Jordan Hughes",
            authDeg: "Sales Manager",
            authImageUrl: "https://framerusercontent.com/images/o7PLUF2405sZL3PMevvlcbPt58o.png"
        },
        {
            id: 7,
            title: "Revento helped us raise over $500K",
            desc: "Their dedication and strategic planning boosted our app downloads by 2x. An outstanding partnership!",
            authName: "Avery Carson",
            authDeg: "Finance Manager",
            authImageUrl: "https://framerusercontent.com/images/tMAfNicque0e2U45WYgqhbf64L0.png"
        },
        {
            id: 8,
            title: "The team at Revento is exceptional",
            desc: "Their tailored marketing solutions led to a significant 3x improvement in lead quality. Very impressed!",
            authName: "Riley Watson",
            authDeg: "HR Manager",
            authImageUrl: "https://framerusercontent.com/images/7qQD36bR7J2EBNvrCfObjkBYs.png"
        },
        {
            id: 9,
            title: "Working with Revento has been a game",
            desc: "Thanks to their proactive approach, our campaign engagement soared by over 250%. Exceptional service!",
            authName: "Sydney Harper",
            authDeg: "Business Manager",
            authImageUrl: "https://framerusercontent.com/images/Y3me8eAjCbDG5uX82oB4OeDPyo.png"
        },
        {
            id: 10,
            title: "WebSphere reshaped our online identity.",
            desc: "Their focus on metrics and insights resulted in a dramatic 3x growth in webinar registrations. A trusted team!",
            authName: "Peyton Foster",
            authDeg: "IT Manager",
            authImageUrl: "https://framerusercontent.com/images/ecY3NL2yIEX9I3ikeFqzhoN5tF4.jpg?scale-down-to=1024"
        },
    ]
    return (
        <div>
            <HeroTestimonial />
            <div className='container mx-auto max-w-[1280px] px-4'>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-8 py-10'>
                    {
                        reviewData.map(data => <ReviewCard reviewData={data} key={data.id} />)
                    }
                </div>
                <TestimonialsSlider />
                <div className='max-w-4xl mx-auto py-16'>
                    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4'>
                        <figure>
                            <Image src="https://framerusercontent.com/images/dCeA12BmBXiH1uY21XEDNyvahEo.png" height={30} width={200} alt="Nothing" />
                        </figure>
                        <figure>
                            <Image src="https://framerusercontent.com/images/bPzdBnzcj0xZ9xquFthgnDKXo.png" height={30} width={200} alt="Nothing" />
                        </figure>
                        <figure>
                            <Image src="https://framerusercontent.com/images/yaNXlI28UkUPncBvBZP6Q98EGuY.png" height={30} width={200} alt="Nothing" />
                        </figure>
                        <figure>
                            <Image src="https://framerusercontent.com/images/dvqYX9ork1jB4TUSvDZN5pM1YU.png" height={30} width={200} alt="Nothing" />
                        </figure>
                    </div>
                </div>
                <Faq />
                <Highlights2 />
            </div>
        </div>
    );
};

export default page;
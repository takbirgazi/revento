import styles from "@/assets/styles/carousal.module.css";
import SliderCard from './SliderCard/SliderCard';

const CustomSlider = () => {
    const sliders = [
        {
            id: 1,
            imageUrl: "https://framerusercontent.com/images/GgzrA0RY58xog9M022DpaAtJKA.png?scale-down-to=1024",
            title: "EcomPro SEO Optimization",
            desc: "Increase brand awareness and engagement."
        },
        {
            id: 2,
            imageUrl: "https://framerusercontent.com/images/KpcZJKXn02WGrjAUjio7tMa5kj0.png?scale-down-to=1024",
            title: "Boost Your Sales",
            desc: "Optimize your conversions with smart marketing."
        },
        {
            id: 3,
            imageUrl: "https://framerusercontent.com/images/9F5TLYWC7aV4EYYGxfTs8FtI.png?scale-down-to=1024",
            title: "Maximize Engagement",
            desc: "Connect with your audience like never before."
        },
        {
            id: 4,
            imageUrl: "https://framerusercontent.com/images/9F5TLYWC7aV4EYYGxfTs8FtI.png?scale-down-to=1024",
            title: "Maximize Engagement",
            desc: "Connect with your audience like never before."
        },
    ];

    return (
        <div className="relative w-full overflow-hidden py-16">
            <div className={`${styles.carouselWrapper}`}>
                <div className={`${styles.carouselTrack}`}>
                    {[...sliders, ...sliders].map((slide, index) => (
                        <SliderCard key={index} slideData={slide} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default CustomSlider;

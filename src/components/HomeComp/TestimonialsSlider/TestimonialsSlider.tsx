"use client"
import Autoplay from "embla-carousel-autoplay"
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    // CarouselNext,
    // CarouselPrevious,
} from "@/components/ui/carousel"
import Testimonials from "./Testimonials/Testimonials"

const TestimonialsSlider = () => {
    return (
        <Carousel opts={{
            align: "start",
            loop: true,
        }}
            plugins={[
                Autoplay({
                    delay: 5000,
                }),
            ]}
            className="w-full">
            <CarouselContent>
                {Array.from({ length: 5 }).map((_, index) => (
                    <CarouselItem key={index}>
                        <div className="p-1">
                            <Testimonials />
                        </div>
                    </CarouselItem>
                ))}
            </CarouselContent>
            {/* <CarouselPrevious />
            <CarouselNext /> */}
        </Carousel>
    )
}
export default TestimonialsSlider;
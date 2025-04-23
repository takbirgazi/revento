"use client"
import Autoplay from "embla-carousel-autoplay"
import {
    Carousel,
    CarouselContent,
    CarouselItem,
} from "@/components/ui/carousel"
import Testimonials from "./Testimonials/Testimonials"
import { Button } from "@/components/ui/button"
import { useState } from "react"
import { FaChevronRight, FaAngleLeft } from "react-icons/fa6";
import rohimImage from "@/assets/images/testimonials/rohim.png";
import mahdi from "@/assets/images/testimonials/mahdi.png";

const TestimonialsSlider = () => {
    const [api, setApi] = useState<import("embla-carousel").EmblaCarouselType | null>(null)

    const testimonials = [
        {
            id: 1,
            name: 'Shoran A Rohim',
            deg: 'MD, Corporate Fashion BD',
            image: rohimImage.src,
            message: 'MotionMark’s creative work is outstanding—wish we’d hired them sooner!',
        },
        {
            id: 2,
            name: 'Mahdi Mohammad Araf',
            deg: 'IT & Digital Marketing Executive, Fabrics Avenue OPC',
            image: mahdi.src,
            message: 'Motion Mark built us a flawless user friendly website, while satisfying foreign client needs.',
        }
    ]

    return (
        <div className="relative">
            <Carousel
                opts={{
                    align: "start",
                    loop: true,
                }}
                plugins={[
                    Autoplay({
                        delay: 5000,
                    }),
                ]}
                setApi={(api) => setApi(api || null)}
                className="w-full"
            >
                <CarouselContent>
                    {
                        testimonials.map((testimonial, index) => (
                            <CarouselItem key={index}>
                                <div className="p-1">
                                    <Testimonials testimonialsData={testimonial} />
                                </div>
                            </CarouselItem>
                        ))
                    }
                </CarouselContent>

                {/* Custom navigation */}
                <div className="flex items-center justify-end gap-4 pb-4">
                    <div className="flex items-center gap-2">
                        <Button
                            variant="outline"
                            size="icon"
                            onClick={() => api?.scrollPrev()}
                            className="rounded-full bg-gray-800 text-white"
                        >
                            <FaAngleLeft className="h-8 w-8" />
                        </Button>
                        <Button
                            variant="outline"
                            size="icon"
                            onClick={() => api?.scrollNext()}
                            className="rounded-full bg-gray-800 text-white"
                        >
                            <FaChevronRight className="h-8 w-8" />
                        </Button>
                    </div>
                    {/* <div className="text-sm text-gray-600">
                        {current} / {count}
                    </div> */}
                </div>
            </Carousel>
        </div>
    )
}
export default TestimonialsSlider;
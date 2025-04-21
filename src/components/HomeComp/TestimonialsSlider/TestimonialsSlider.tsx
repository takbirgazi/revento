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

const TestimonialsSlider = () => {
    const [api, setApi] = useState<import("embla-carousel").EmblaCarouselType | null>(null)
    // const [current, setCurrent] = useState(0)
    // const [count, setCount] = useState(0)

    // useEffect(() => {
    //     if (!api) return

    //     setCount(api.scrollSnapList().length)
    //     setCurrent(api.selectedScrollSnap() + 1)

    //     api.on("select", () => {
    //         setCurrent(api.selectedScrollSnap() + 1)
    //     })
    // }, [api])

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
                    {Array.from({ length: 5 }).map((_, index) => (
                        <CarouselItem key={index}>
                            <div className="p-1">
                                <Testimonials />
                            </div>
                        </CarouselItem>
                    ))}
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
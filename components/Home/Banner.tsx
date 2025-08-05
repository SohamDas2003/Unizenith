"use client"
import { useCallback, useEffect, useState } from "react"
import useEmblaCarousel from "embla-carousel-react"
import StatsDisplay from "./StatsDisplay"
import banner1 from "/public/banner1.webp"
import banner2 from "/public/banner2.webp"
import banner3 from "/public/banner3.webp"
import Image, { type StaticImageData } from "next/image"
interface BannerSlide {
  title: string
  subtitle: string
  buttonText: string
  image: StaticImageData
  description: string
}
const slides: BannerSlide[] = [
  {
    title: "Reach Your Academic Zenith with Smarter Prep",
    subtitle: "for all",
    buttonText: "Explore",
    image: banner1,
    description:
      "Unlock your potential and achieve success on every test that shapes your future. Master Digital SAT, AP, GRE, GMAT, IELTS & TOEFL through personalized AI-driven study plans, expert tutoring, and powerful progress tracking—all on one intelligent platform.",
  },
  {
    title: "Education that",
    subtitle: "shapes futures",
    buttonText: "Learn More",
    image: banner2,
    description:
      "Prepare for tomorrow's challenges with cutting-edge curriculum designed by industry experts. " +
      "With a 95% success rate and partnerships with leading universities, " +
      "we ensure you're equipped with skills that matter in today's competitive world.",
  },
  {
    title: "Innovative Solutions",
    subtitle: "for a better tomorrow",
    buttonText: "Discover Innovations",
    image: banner3,
    description:
      "Experience revolutionary learning methods combining AI-powered personalization and hands-on projects. " +
      "Join our community of 50,000+ learners and unlock unlimited potential with " +
      "24/7 support and lifetime access to course materials.",
  },
]
export default function Banner() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true })
  const [selectedIndex, setSelectedIndex] = useState(0)
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([])
  const scrollTo = useCallback((index: number) => emblaApi && emblaApi.scrollTo(index), [emblaApi])
  const onInit = useCallback((emblaApi: any) => {
    setScrollSnaps(emblaApi.scrollSnapList())
  }, [])
  const onSelect = useCallback((emblaApi: any) => {
    setSelectedIndex(emblaApi.selectedScrollSnap())
  }, [])
  useEffect(() => {
    if (!emblaApi) return
    onInit(emblaApi)
    onSelect(emblaApi)
    emblaApi.on("select", onSelect)
    emblaApi.on("reInit", onInit)
    const autoplayInterval = setInterval(() => {
      if (emblaApi.canScrollNext()) {
        emblaApi.scrollNext()
      } else {
        emblaApi.scrollTo(0)
      }
    }, 5000)
    return () => {
      clearInterval(autoplayInterval)
      emblaApi.off("select", onSelect)
      emblaApi.off("reInit", onInit)
    }
  }, [emblaApi, onInit, onSelect])
  // Key changes in the return JSX:
  return (
    <div className="relative bg-gray-50">
      <div ref={emblaRef} className="overflow-hidden h-[45vh] sm:h-[55vh] md:h-[60vh] xl:h-[80vh]">
        <div className="flex h-full touch-pan-y">
          {slides.map((slide, index) => (
            <div key={index} className="relative flex-[0_0_100%] min-w-0 h-full">
              <div className="relative h-full">
                <Image
                  src={slide.image || "/placeholder.svg"}
                  alt={slide.title}
                  layout="fill"
                  objectFit="cover"
                  objectPosition="center center"
                  priority={index === 0}
                  className="absolute w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/40 md:hidden" />
                <div className="relative h-full flex flex-col justify-center px-4 sm:px-6 md:px-12 lg:px-24">
                  <div className="space-y-4 sm:space-y-6 lg:space-y-8 w-[90%] sm:w-[80%] md:w-[70%] lg:max-w-[60%] xl:max-w-[50%]">
                    <div className="space-y-2">
                      <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold md:text-black text-white">
                        {slide.title}
                      </h1>
                      {/* <p className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl
                        tracking-wide leading-tight md:text-black text-white/90 font-light
                        drop-shadow-sm transition-all duration-300">
                        <span className="font-medium tracking-normal">{slide.subtitle}</span>
                      </p> */}
                    </div>
                    {/* Show description on all screens */}
                    <p
                      className="block text-sm sm:text-base md:text-lg lg:text-xl
                           leading-relaxed md:text-black text-white/90 w-full sm:w-[90%] md:w-[80%] 
                           line-clamp-3 md:line-clamp-none sm:overflow-hidden">
                      {slide.description}
                    </p>

                    <div className="pt-4 sm:pt-6">
                      <button className="bg-white rounded-md text-black px-4 sm:px-6 md:px-8 py-2 sm:py-2.5 md:py-3
                        text-sm sm:text-base md:text-lg font-medium hover:bg-white/90 transition-colors
                        shadow-lg hover:shadow-xl transform hover:-translate-y-0.5">
                        {slide.buttonText}
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* Carousel dots */}
      <div className="absolute bottom-2 sm:bottom-4 md:bottom-8 left-1/2 -translate-x-1/2 flex gap-1.5 sm:gap-2">
        {scrollSnaps.map((_, index) => (
          <button
            key={index}
            className={`w-6 sm:w-8 md:w-12 h-1 sm:h-1.5 rounded-full transition-colors
            ${index === selectedIndex ? "bg-white" : "bg-white/50 hover:bg-white/75"}`}
            onClick={() => scrollTo(index)}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
      <div className="lg:absolute lg:-bottom-24 left-0 right-0 z-20 px-4 relative lg:mt-0">
        <StatsDisplay />
      </div>
    </div>
  );
}
"use client"
import { Swiper, SwiperSlide } from "swiper/react"
import { Pagination } from "swiper/modules"
import "swiper/css"
import "swiper/css/pagination"
import Image from "next/image"
import { FaStar } from "react-icons/fa6"

const reviews = [
  {
    name: "Sarah Malik",
    text: "Accuracore Transformed How We Manage Our Daily Operations. Everything Is In One Place — From Tasks To Invoices. It's Like Having A Full Operations Team Inside One Dashboard.",
    image: "/images/sarah.png",
    stars: 5,
  },
  {
    name: "Sarah Malik",
    text: "Accuracore Transformed How We Manage Our Daily Operations. Everything Is In One Place — From Tasks To Invoices. It's Like Having A Full Operations Team Inside One Dashboard.",
    image: "/images/sarah.png",
    stars: 3,
  },
  {
    name: "Sarah Malik",
    text: "Accuracore Transformed How We Manage Our Daily Operations. Everything Is In One Place — From Tasks To Invoices. It's Like Having A Full Operations Team Inside One Dashboard.",
    image: "/images/sarah.png",
    stars: 3,
  },
]

export const ReviewSlider = () => {
  return (
    <>
      <Swiper
        modules={[Pagination]}
        pagination={{
          clickable: true,
          renderBullet: (index, className) =>
            `<span class="${className} custom-bullet"></span>`,
        }}
        slidesPerView={1}
        className="review-swiper"
      >
        {reviews.map((review, i) => (
          <SwiperSlide key={i}>
            <div className="flex medium:flex-row flex-col gap-6 items-center bg-white rounded-full py-8 medium:px-8 px-15 mx-[10%] my-22">
              <div className="basis-1/2 relative rounded-full">
                <Image
                  src="/svgs/glowing-dotted-circles.svg"
                  alt={review.name}
                  width={300}
                  height={300}
                  className="absolute scale-200 rotate-100"
                />
                <Image
                  src={review.image}
                  alt={review.name}
                  width={300}
                  height={300}
                  className="relative z-50"
                />
              </div>
              <div className="basis-2/5">
                <h3 className="font-bold font-sora sm:px-10 medium:px-0">
                  {review.name}
                </h3>
                <p className="font-outfit sm:px-10 medium:px-0">
                  {review.text}
                </p>
                <div className="mt-10 flex justify-center medium:justify-start gap-1 mb-4">
                  {Array.from({ length: review.stars }).map((el, indx) => (
                    <FaStar key={indx} className="text-yellow-400" />
                  ))}
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <style jsx global>{`
        .swiper-pagination {
          bottom: 30px !important; /* move it up */
        }
        .swiper-pagination-bullet {
          background: #30307b;
          opacity: 1;
        }
        .swiper-pagination-bullet-active {
          background: #30307b;
          width: 6rem;
          border-radius: 4px;
        }
      `}</style>
    </>
  )
}

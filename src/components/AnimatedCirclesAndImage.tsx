import { AnimatedCircle } from "./AnimatedCircle"
import Image from "next/image"

export const AnimatedCirclesAndImage = () => {
  return (
    <div className="relative">
      <AnimatedCircle
        size={550}
        borderPosition="left"
        colorVariation="orange"
      />
      <div className="absolute top-[55%] left-[55%] -translate-1/2 rotate-45">
        <AnimatedCircle
          size={450}
          borderPosition="right"
          initial={180}
          rotate={540}
          colorVariation="blue"
        />
      </div>
      <div className="absolute top-20 left-25">
        <Image src="/images/stars.png" alt="stars" width={50} height={50} />
      </div>
      <div
        className="absolute top-[50%] left-[50%] -translate-1/2"
        style={{ width: 500, height: 500 }}
      >
        <Image
          src="/images/banner-image-1.png"
          alt="banner-image"
          fill
          style={{ objectFit: "contain" }}
        />
      </div>
    </div>
  )
}

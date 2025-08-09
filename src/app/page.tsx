import { AnimatedCircle } from "@/components/AnimatedCircle"
import { CustomButton } from "@/components/CustomButton"
import Image from "next/image"
import { IoIosArrowForward } from "react-icons/io"

export default function Home() {
  return (
    <div className="overflow-x-hidden">
      <div className="bg-backgroundGradient pt-contentStart px-[5%] bg-no-repeat bg-[center_top] bg-blueDeepDark min-h-screen min-w-screen text-white font-sora overflow-x-hidden">
        <div className="flex justify-between items-center gap-4 flex-col medium:flex-row overflow-hidden">
          <div>
            <div className="text-5xl">
              Streamline Your
              <br /> Business <span className="font-semibold">All-in-One</span>
              <br /> Precision Platform.
            </div>
            <div className="text-lg text-gray-300 font-outfit">
              Accuracore is a powerful platform that brings everything you need
              into one dashboard — manage your team, track work orders, handle
              finances, and stay in control of every detail.
            </div>
            <div className="flex gap-4 mt-6 text-sm font-bold">
              <CustomButton
                text="Book Demo"
                icon={<IoIosArrowForward />}
                iconPosition="right"
                className="bg-blueDark text-white"
              />
              <CustomButton
                text="Get Started Free"
                icon={<IoIosArrowForward />}
                iconPosition="right"
                className="bg-white text-blueDark"
              />
            </div>
          </div>

          <div className="relative">
            <AnimatedCircle
              size={500}
              borderPosition="left"
              colorVariation="orange"
            />
            <div className="absolute top-[55%] left-[60%] -translate-1/2 rotate-45">
              <AnimatedCircle
                size={400}
                borderPosition="right"
                initial={180}
                rotate={540}
                colorVariation="blue"
              />
            </div>
            <div className="absolute top-20 left-20">
              <Image
                src="/images/stars.png"
                alt="stars"
                width={50}
                height={50}
              />
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
        </div>
      </div>
      <div className="min-h-screen bg-white">white</div>
    </div>
  )
}

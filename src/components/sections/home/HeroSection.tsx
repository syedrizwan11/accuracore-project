import { IoIosArrowForward } from "react-icons/io"
import { CustomButton } from "../../CustomButton"
import { AnimatedCirclesAndImage } from "@/components/AnimatedCirclesAndImage"

export const HeroSection = () => {
  return (
    <>
      <div className="bg-backgroundGradient pt-contentStart px-[5%] bg-no-repeat bg-[center_top] bg-blueDeepDark min-h-screen min-w-screen text-white font-sora overflow-hidden">
        <div className="flex justify-between items-center gap-4 flex-col medium:flex-row">
          <div>
            <div className="text-5xl font-sora pt-10 mb-4">
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

          <AnimatedCirclesAndImage />
        </div>
      </div>
    </>
  )
}

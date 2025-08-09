"useState"
import { cn } from "@/lib/utils"
import { IoIosArrowForward } from "react-icons/io"

interface DynamicBannerProps {
  heading: string
  text: string
  icon: React.ReactNode
  active?: boolean
  handleClick?: () => void
}

export const DynamicBanner = ({
  heading,
  text,
  icon,
  handleClick,
  active,
}: DynamicBannerProps) => {
  return (
    <div
      className={cn(
        "flex justify-between items-center gap-2 bg-white rounded-lg p-2 w-full cursor-pointer mb-4",
        active ? "shadow-xl" : "shadow-xs"
      )}
      onClick={handleClick}
    >
      <div className="flex items-center gap-4">
        <div
          className={cn(
            "p-5 rounded-lg  text-2xl",
            active ? "bg-blueDark text-white" : "bg-gray-300 text-gray-600"
          )}
        >
          {icon}
        </div>
        <div>
          <div className="font-sora text-md font-semibold">{heading}</div>
          <div className="font-outfit text-msm text-gray-400">{text}</div>
        </div>
      </div>

      <IoIosArrowForward className="mr-2" />
    </div>
  )
}

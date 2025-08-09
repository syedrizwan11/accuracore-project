import { ReactNode } from "react"
import { cn } from "@/utilities/cn"

interface CustomButtonProps {
  text: string
  icon: ReactNode
  iconPosition: "left" | "right"
  color?: string
  bgColor?: string
}
export const CustomButton = ({
  text,
  icon,
  iconPosition,
  color,
  bgColor,
}: CustomButtonProps) => {
  return (
    <div
      className={cn(
        "p-3 rounded-full px-5 flex justify-center items-center w-fit gap-2 text-[14px]",
        color ? `text-${color}` : "text-blueDeepDark",
        bgColor ? `bg-${bgColor}` : "bg-white"
      )}
    >
      {iconPosition === "left" && icon}
      {text}
      {iconPosition === "right" && icon}
    </div>
  )
}

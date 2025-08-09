"use client"
import { ReactNode } from "react"
import { cn } from "@/utilities/cn"

interface CustomButtonProps {
  text: string
  icon: ReactNode
  iconPosition: "left" | "right"
  color?: string
  bgColor?: string

  onClickHandler?: () => void
}
export const CustomButton = ({
  text,
  icon,
  iconPosition,
  color,
  bgColor,
  onClickHandler,
}: CustomButtonProps) => {
  return (
    <div
      className={cn(
        "p-3 rounded-full px-5 flex justify-center items-center w-fit gap-2 text-sm cursor-pointer",
        color ? `text-${color}` : "text-white",
        bgColor ? `bg-${bgColor}` : "bg-blueDark"
      )}
      onClick={onClickHandler}
    >
      {iconPosition === "left" && icon}
      {text}
      {iconPosition === "right" && icon}
    </div>
  )
}

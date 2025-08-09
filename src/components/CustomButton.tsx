"use client"
import { ReactNode } from "react"

interface CustomButtonProps {
  text: string
  icon: ReactNode
  iconPosition: "left" | "right"
  className?: string

  onClickHandler?: () => void
}
export const CustomButton = ({
  text,
  icon,
  iconPosition,
  className,
  onClickHandler,
}: CustomButtonProps) => {
  return (
    <div
      className={`p-3 font-semibold rounded-full px-5 flex justify-center items-center w-fit gap-2 cursor-pointer hover:opacity-90 transition-all ${className}`}
      onClick={onClickHandler}
    >
      {iconPosition === "left" && icon}
      {text}
      {iconPosition === "right" && icon}
    </div>
  )
}

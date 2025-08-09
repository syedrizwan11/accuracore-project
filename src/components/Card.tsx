import React from "react"

interface CardProps {
  heading: string
  text: string
  icon: React.ReactNode
}

export const Card = ({ heading, text, icon }: CardProps) => {
  return (
    <div className="p-5 rounded-xl bg-white shadow-xs">
      <div className="p-5 rounded-lg  text-2xl bg-blueDark text-white w-fit">
        {icon}
      </div>
      <div className="text-2xl font-bold py-4 font-sora">{heading}</div>
      <div className="text-md pb-4 text-gray-600 font-outfit">{text}</div>
    </div>
  )
}

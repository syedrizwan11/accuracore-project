import { ReviewSlider } from "@/components/ReviewSlider"
import React from "react"

export const ReviewSection = () => {
  return (
    <div className="min-h-screen bg-background px-[5%] pt-30">
      <div className="text-heading text-center font-sora">
        Trusted By Teams Who <br />
        <strong>Value Clarity, Control And Business</strong>
      </div>
      <ReviewSlider />
    </div>
  )
}

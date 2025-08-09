"use client"
import { motion } from "framer-motion"

interface AnimatedCircleProps {
  size: number
  colorVariation: "orange" | "blue"
  className?: string
  borderPosition?: "left" | "right"
  initial?: number
  rotate?: number
}
export const AnimatedCircle = ({
  size,
  className,
  borderPosition,
  initial,
  rotate,
  colorVariation,
}: AnimatedCircleProps) => {
  const radius = size / 2
  const dotSize = 12
  const translateX = radius - dotSize / 2

  return (
    <div
      className={`${className}`}
      style={{
        position: "relative",
        width: `${size}px`,
        height: `${size}px`,
        borderRadius: "50%",
        borderLeft: borderPosition === "left" ? "1px solid white" : "none",
        borderRight: borderPosition === "right" ? "1px solid white" : "none",
      }}
    >
      <motion.div
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          width: `${dotSize}px`,
          height: `${dotSize}px`,
          transformOrigin: "0% 50%",
        }}
        initial={{ rotate: initial || 0 }}
        animate={{ rotate: rotate || 360 }}
        transition={{
          repeat: Infinity,
          duration: 10,
          ease: "linear",
          delay: 2,
        }}
      >
        <div
          style={{
            width: `${dotSize}px`,
            height: `${dotSize}px`,
            borderRadius: "50%",
            backgroundColor: "white",
            boxShadow:
              colorVariation === "blue"
                ? "0 0 0 4px #4a68fe, 0 0 0 10px rgba(117, 104, 254, 0.3)"
                : "0 0 0 4px #f5bd15, 0 0 0 10px rgba(255, 215, 0, 0.3)",
            transform: `translateX(${translateX}px)`,
          }}
        />
      </motion.div>
    </div>
  )
}
// `0 0 0 4px #f5bd15, 0 0 0 8px rgba(255, 215, 0, 0.3)`

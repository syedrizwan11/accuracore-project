"use client"
import { DynamicBanner } from "@/components/DynamicBanner"
import { LuLayoutDashboard, LuWorkflow } from "react-icons/lu"
import Image from "next/image"
import { FaHandHoldingDollar } from "react-icons/fa6"
import { useState } from "react"

type Banner = "dashboard" | "workflow" | "financialIntelligence"

export const WhyUs = () => {
  const [activeBanner, setActiveBanner] = useState<Banner>("dashboard")

  const bannerClickHandler = (banner: Banner) => {
    setActiveBanner(banner)
  }
  return (
    <div className="min-h-screen bg-background px-[5%] pt-20">
      <div className="flex justify-between items-center gap-4 medium:flex-row flex-col">
        <div className="basis-1/2">
          <div className="text-heading pb-4">
            What Makes
            <br /> <strong>Accuracore</strong> Different?
          </div>
          <DynamicBanner
            heading="Unified Dashboard Experience"
            text="One Platform. Total Control. Zero Hassle."
            icon={<LuLayoutDashboard />}
            active={activeBanner === "dashboard"}
            handleClick={() => bannerClickHandler("dashboard")}
          />
          <DynamicBanner
            heading="Workflow That Matches Your Business"
            text="We Adapt To You With Custom Workflows And Live Updates."
            icon={<LuWorkflow />}
            active={activeBanner === "workflow"}
            handleClick={() => bannerClickHandler("workflow")}
          />
          <DynamicBanner
            heading="Built-In Financial Intelligence"
            text="Budgeting, Estimates, Invoicing All Accurate And Audit-Ready."
            icon={<FaHandHoldingDollar />}
            active={activeBanner === "financialIntelligence"}
            handleClick={() => bannerClickHandler("financialIntelligence")}
          />
        </div>
        <div className="basis-1/2 relative min-h-[80vh] medium:min-w-1/2 min-w-[90%]">
          <Image
            src="/images/dashboard-banner.png"
            alt="dashboard-banner"
            fill
            style={{ objectFit: "contain" }}
          />
        </div>
      </div>
    </div>
  )
}

import { Card } from "@/components/Card"
import React from "react"
import { AiOutlineControl } from "react-icons/ai"
import { IoGlobeOutline } from "react-icons/io5"
import { TiFlowSwitch } from "react-icons/ti"

export const HowItWorksSection = () => {
  return (
    <div className="min-h-screen bg-background px-[5%] pt-20">
      <div className="text-heading pb-4">
        How It Works To Power Your Business
      </div>
      <div className="text-md pb-4 text-gray-600">
        From Setup To Execution &mdash; See How Accuracore Simplifies
        Operations,
        <br />
        Streamlines Workflows, And Puts You In Control.
      </div>

      <div className="flex justify-between items-center gap-4 medium:flex-row flex-col mb-10 medium:mb-0">
        <Card
          heading="Create Your Company"
          text="Create Your Workspace In Minutes &mdash; Then Invite Your Team To Collaborate."
          icon={<IoGlobeOutline />}
        />
        <Card
          heading="Build Custom Workflows"
          text="Adapt The Platform To Your Process, Not The Other Way Around No Templates Needed."
          icon={<TiFlowSwitch className="rotate-90" />}
        />
        <Card
          heading="All-in-One Control Panel"
          text="Stay On Top Of Operations, Finances, And Team Performance &mdash; All In One Clean Interface."
          icon={<AiOutlineControl />}
        />
      </div>
    </div>
  )
}

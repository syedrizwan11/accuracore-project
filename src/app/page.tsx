import { BusinessSolutionsSection } from "@/components/sections/home/BusinessSolutionsSection"
import { HeroSection } from "@/components/sections/home/HeroSection"
import { HowItWorksSection } from "@/components/sections/home/HowItWorksSection"
import { WhyUs } from "@/components/sections/home/WhyUs"

export default function Home() {
  return (
    <div className="overflow-x-hidden">
      <HeroSection />
      <WhyUs />
      <HowItWorksSection />
      <BusinessSolutionsSection />
    </div>
  )
}

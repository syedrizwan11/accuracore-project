import { BusinessSolutionsSection } from "@/components/sections/home/BusinessSolutionsSection"
import { FrequentlyAskedQuestionsSection } from "@/components/sections/home/FrequentlyAskedQuestionsSection"
import { HeroSection } from "@/components/sections/home/HeroSection"
import { HowItWorksSection } from "@/components/sections/home/HowItWorksSection"
import { ReviewSection } from "@/components/sections/home/ReviewSection"
import { WhyUsSection } from "@/components/sections/home/WhyUsSection"
import { WorkforceOrganizerSection } from "@/components/sections/home/WorkforceOrganizerSection"

export default function Home() {
  return (
    <div className="overflow-x-hidden">
      <HeroSection />
      <WhyUsSection />
      <HowItWorksSection />
      <BusinessSolutionsSection />
      <WorkforceOrganizerSection />
      <ReviewSection />
      <FrequentlyAskedQuestionsSection />
    </div>
  )
}

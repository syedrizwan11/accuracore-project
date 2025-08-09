import { AccordionFAQ } from "@/components/AccordionFAQ"
import React from "react"

export const FrequentlyAskedQuestionsSection = () => {
  return (
    <div className="min-h-screen bg-background px-[5%] pt-20">
      <div className="flex justify-between items-start gap-4 medium:flex-row flex-col">
        <div className="basis-2/5 text-heading font-sora">
          Frequently <br />
          <strong> Asked </strong> Questions
        </div>
        <div className="basis-1/2">
          <AccordionFAQ
            questions={[
              {
                statement: "Is Accuracore Suitable For Small Companies Too?",
                answer:
                  "Yes, Accuracore is designed to be scalable and is a great fit for small companies.",
              },
              {
                statement: "Can I Assign Different Roles To My Team Members?",
                answer:
                  "You can easily assign custom roles and set permissions for each of your team members.",
              },
              {
                statement:
                  "Does Accuracore Automatically Calculate Financials?",
                answer:
                  "Yes, the platform includes built-in financial intelligence to automatically handle budgeting, estimates, and invoicing.",
              },
              {
                statement: "Is Accuracore Cloud-Based?",
                answer:
                  "Accuracore is a fully cloud-based platform, giving you access from anywhere at any time.",
              },
              {
                statement: "Can I Export My Data From The System?",
                answer:
                  "Yes, you have the ability to export your data from the system for your records.",
              },
            ]}
          />
        </div>
      </div>
    </div>
  )
}

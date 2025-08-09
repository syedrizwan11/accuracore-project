import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

interface AccordionFAQProps {
  questions: {
    statement: string
    answer: string
  }[]
}
export const AccordionFAQ = ({ questions }: AccordionFAQProps) => {
  return (
    <Accordion
      type="single"
      collapsible
      className="w-full"
      defaultValue="item-1"
    >
      {questions.map((el, indx) => (
        <AccordionItem
          key={indx + "-accord"}
          value={indx + "-accord"}
          className="mb-4 bg-white shadow p-2 px-4 rounded-sm no-underline"
        >
          <AccordionTrigger>{el.statement}</AccordionTrigger>
          <AccordionContent className="flex flex-col gap-4 text-balance">
            {el.answer}
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  )
}

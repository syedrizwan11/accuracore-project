import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { IoIosArrowDown } from "react-icons/io"

interface DropDownButtonProps {
  buttonText: string
  dropMenu: {
    text: string
    link?: string
  }[]
}

export const DropDownButton = ({
  buttonText,
  dropMenu,
}: DropDownButtonProps) => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <button className="flex items-center gap-2">
          <span>{buttonText}</span>
          <IoIosArrowDown className="mt-1 transition-transform duration-200 data-[state=open]:rotate-180" />
        </button>
      </DropdownMenuTrigger>

      <DropdownMenuContent className="bg-blueLight text-white min-h-15">
        {dropMenu.map((el, indx) => (
          <div key={indx}>
            <DropdownMenuItem>{el.text}</DropdownMenuItem>
          </div>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

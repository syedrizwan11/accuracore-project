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
      <DropdownMenuTrigger
        asChild
        className="font-sora outline-0 cursor-pointer"
      >
        <button className="flex items-center gap-1">
          <span>{buttonText}</span>
          <IoIosArrowDown className="transition-transform duration-200 data-[state=open]:rotate-180" />
        </button>
      </DropdownMenuTrigger>

      <DropdownMenuContent className="text-sm bg-blueLight text-white min-h-15 font-sora">
        {dropMenu.map((el, indx) => (
          <div key={indx}>
            <DropdownMenuItem>{el.text}</DropdownMenuItem>
          </div>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

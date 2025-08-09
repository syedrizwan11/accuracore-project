import Image from "next/image"
import { CustomButton } from "./CustomButton"
import { IoIosArrowForward } from "react-icons/io"
import { FiKey } from "react-icons/fi"
import { DropDownButton } from "./DropDownButton"

export const SiteHeader = () => {
  return (
    <div className="font-sora absolute left-[50%] -translate-x-[50%] top-6 bg-blueLight p-4 px-6 pl-8 w-[90%] flex text-sm justify-between items-center rounded-full">
      <Image src="/images/logo-white.png" alt="Logo" width={80} height={40} />

      <div className="flex gap-4 text-white">
        <DropDownButton
          buttonText="About"
          dropMenu={[{ text: "", link: "" }]}
        />
        <DropDownButton
          buttonText="Features"
          dropMenu={[{ text: "", link: "" }]}
        />
        <DropDownButton
          buttonText="Solutions"
          dropMenu={[{ text: "", link: "" }]}
        />
        <DropDownButton
          buttonText="Solutions"
          dropMenu={[{ text: "", link: "" }]}
        />
        <DropDownButton
          buttonText="Solutions"
          dropMenu={[{ text: "", link: "" }]}
        />
      </div>

      <div className="flex gap-4">
        <CustomButton
          text="Login"
          icon={<FiKey className="text-[1rem]" />}
          iconPosition="left"
          className="bg-white text-blueDark"
        />
        <CustomButton
          text="Book Demo"
          icon={<IoIosArrowForward />}
          iconPosition="right"
          className="bg-blueDark text-white"
        />
      </div>
    </div>
  )
}

import Image from "next/image"
import { CustomButton } from "./CustomButton"
import { IoIosArrowForward } from "react-icons/io"
import { FiKey } from "react-icons/fi"
import { DropDownButton } from "./DropDownButton"

export const SiteHeader = () => {
  return (
    <div className="absolute left-[50%] -translate-x-[50%] top-6 bg-blueLight p-4 px-6 w-[90%] flex justify-between items-center rounded-full">
      <Image src="/images/logo.png" alt="Logo" width={100} height={50} />

      <div className="flex gap-4 text-white">
        <DropDownButton
          buttonText="about"
          dropMenu={[{ text: "", link: "" }]}
        />
        <DropDownButton
          buttonText="solutions"
          dropMenu={[{ text: "", link: "" }]}
        />
        <DropDownButton
          buttonText="solutions"
          dropMenu={[{ text: "", link: "" }]}
        />
        <DropDownButton
          buttonText="solutions"
          dropMenu={[{ text: "", link: "" }]}
        />
        <DropDownButton
          buttonText="solutions"
          dropMenu={[{ text: "", link: "" }]}
        />
      </div>

      <div className="flex gap-4">
        <CustomButton
          text="Login"
          icon={<FiKey />}
          iconPosition="left"
          bgColor="white"
          color="blueDark"
        />
        <CustomButton
          text="Book Demo"
          icon={<IoIosArrowForward />}
          iconPosition="right"
        />
      </div>
    </div>
  )
}

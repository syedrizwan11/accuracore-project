import Image from "next/image"
import logo from "/images/logo.png"
import { CustomButton } from "./CustomButton"
export const SiteHeader = () => {
  return (
    <div className="bg-blueLight p-4 w-[80%] flex justify-between">
      <Image src={logo} alt="logo" />
      <div className="flex gap-4">
        <div>about</div>
        <div>solutions</div>
        <div>solutions</div>
        <div>solutions</div>
        <div>solutions</div>
      </div>

      <div className="flex gap-4">
        <CustomButton text="Login" icon={<>icon</>} iconPosition="left" />
        <CustomButton text="Login" icon={<>icon</>} iconPosition="left" />
      </div>
    </div>
  )
}

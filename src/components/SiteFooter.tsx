import Image from "next/image"
import React from "react"
import { CustomButton } from "./CustomButton"
import { IoIosArrowForward } from "react-icons/io"
import { LuMailPlus } from "react-icons/lu"
import { MdAddCall } from "react-icons/md"
import { FaInstagram, FaTelegramPlane, FaWhatsapp } from "react-icons/fa"

export const SiteFooter = () => {
  return (
    <div className="bg-blueDeep pt-20 overflow-hidden text-white">
      <div className="flex items-stretch medium:flex-row flex-col">
        <div className="basis-1/2 px-[7%] pb-22">
          <Image
            src="/images/logo-white.png"
            alt="Logo"
            width={100}
            height={50}
          />
          <div className="text-xl font-sora  my-10">
            Accuracore a complete, enterprise ready platform to manage your
            business from start to finish, absolutely free.
          </div>

          <CustomButton
            text="Book Demo"
            icon={<IoIosArrowForward />}
            iconPosition="right"
            className="bg-blueDark"
          />
        </div>
        <div className="basis-1/2 px-15 pt-10 relative w-full bg-[#0C2D4E] rounded-tl-[8rem] border-t-1 border-l-1 border-blue-500">
          <Image
            src="/svgs/glowing-dotted-circles.svg"
            alt="Logo"
            width={500}
            height={500}
            className="absolute top-[-10rem] left-[8rem]"
          />
          <div className="font-bold mb-4">CONTACT</div>
          <div className="flex items-center gap-1">
            <MdAddCall />
            999-999-999
          </div>
          <div className="flex items-center gap-1">
            <LuMailPlus />
            accuracore@.com
          </div>
          <div className="mt-24 mb-10 text-gray-400 text-msm">
            @2023 - copyright
          </div>

          <div className="absolute top-10 left-[20rem]">
            <div>Follow Us</div>
            <div className="flex items-center gap-2 mt-4">
              <div className="bg-[#6073c7] rounded-full p-2 hover:opacity-80 cursor-pointer">
                <FaInstagram />
              </div>

              <div className="bg-[#6073c7] rounded-full p-2 hover:opacity-80 cursor-pointer">
                <FaWhatsapp />
              </div>

              <div className="bg-[#6073c7] rounded-full p-2 hover:opacity-80 cursor-pointer">
                {" "}
                <FaTelegramPlane />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

"use client"
import React, { useState } from "react"
import { CustomButton } from "./CustomButton"
import { IoIosArrowForward } from "react-icons/io"
import { DropDownButton } from "./DropDownButton"
import { FiKey } from "react-icons/fi"
import { HiMenu, HiX } from "react-icons/hi"

export const ResponsiveNav = () => {
  const [menuOpen, setMenuOpen] = useState(false)

  const navItems = [
    { text: "About", dropMenu: [{ text: "", link: "" }] },
    { text: "Features", dropMenu: [{ text: "", link: "" }] },
    { text: "Solutions", dropMenu: [{ text: "", link: "" }] },
    { text: "Pricing", dropMenu: [{ text: "", link: "" }] },
    { text: "Contact", dropMenu: [{ text: "", link: "" }] },
  ]

  return (
    <>
      <div className="hidden medium:flex items-center justify-between w-full">
        <div className="flex gap-4 text-white">
          {navItems.map((item, i) => (
            <DropDownButton
              key={i}
              buttonText={item.text}
              dropMenu={item.dropMenu}
            />
          ))}
        </div>

        <div className="flex gap-4 medium:ml-5">
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

      <div className="flex medium:hidden items-center justify-between w-fit">
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="text-white text-3xl"
        >
          {menuOpen ? (
            <HiX className="cursor-pointer" />
          ) : (
            <HiMenu className="cursor-pointer" />
          )}
        </button>
      </div>

      {menuOpen && (
        <div className="medium:hidden absolute top-20 left-0 w-full bg-[#556684] text-white flex flex-col items-center p-6 space-y-4 z-50 rounded-2xl">
          {navItems.map((item, i) => (
            <DropDownButton
              key={i}
              buttonText={item.text}
              dropMenu={item.dropMenu}
            />
          ))}
          <div className="flex flex-col gap-4 w-full">
            <CustomButton
              text="Login"
              icon={<FiKey className="text-[1rem]" />}
              iconPosition="left"
              className="bg-white text-blueDark w-full"
            />
            <CustomButton
              text="Book Demo"
              icon={<IoIosArrowForward />}
              iconPosition="right"
              className="bg-blueDark text-white w-full"
            />
          </div>
        </div>
      )}
    </>
  )
}

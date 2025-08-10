import Image from "next/image"
import { ResponsiveNav } from "./ResponsiceNav"
import Link from "next/link"

export const SiteHeader = () => {
  return (
    <div className="font-sora absolute left-[50%] -translate-x-[50%] top-6 bg-blueLight p-4 px-6 pl-8 w-[90%] flex text-sm justify-between items-center rounded-full">
      <div className="basis-1/2">
        <Link href="/">
          <Image
            priority
            src="/images/logo-white.png"
            alt="Logo"
            width={80}
            height={40}
          />
        </Link>
      </div>
      <ResponsiveNav />
    </div>
  )
}

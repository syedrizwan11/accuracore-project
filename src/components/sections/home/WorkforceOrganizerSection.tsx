import Image from "next/image"
export const WorkforceOrganizerSection = () => {
  return (
    <div className="min-h-screen bg-background px-[5%] pt-20">
      <div className="flex justify-between items-center gap-4 medium:flex-row flex-col">
        <div className="basis-2/5">
          <div className="text-3xl font-semibold pb-4 font-sora">
            Organize Your Company & Empower Your Team
          </div>
          <div className="text-md font-outfit text-gray-500 font-semibold">
            Easily create your company profile, onboard team members with ease,
            assign custom roles, set permissions, and manage user access - all
            from one powerful, centralized dashboard built for control and
            clarity.
          </div>
        </div>
        <div className="basis-1/2 relative min-h-[80vh] medium:min-w-1/2 min-w-[90%] bg-gray-50 border-2 border-white rounded-xl">
          <Image
            src="/images/company-organizer.png"
            alt="dashboard-banner"
            fill
            className=" object-contain object-center p-8"
          />
        </div>
      </div>
      <div className="pt-20">
        <div className="flex justify-between items-center gap-4 medium:flex-row flex-col">
          <div className="basis-1/2 relative min-h-[80vh] medium:min-w-1/2 min-w-[90%]  bg-gray-50 border-2 border-white rounded-xl">
            <Image
              src="/images/notes-management.png"
              alt="dashboard-banner"
              fill
              className=" object-contain object-center p-4"
            />
          </div>
          <div className="basis-2/5">
            <div className="text-3xl font-semibold pb-4 font-sora">
              Integrated Notes & File Management
            </div>
            <div className="text-md font-outfit text-gray-500 font-semibold">
              Maintain a complete and organized record by linking notes,
              documents, and images to every contact, task, or claim within
              Accuracore — ensuring your team always has the right information
              at the right time, with nothing lost, missed, or out of place.
            </div>
          </div>
        </div>
      </div>

      <div className="bg-blueDeep relative rounded-[4rem] px-22 min-h-[65vh] mt-22 mb-4 overflow-hidden flex justify-center items-center text-center">
        <Image
          src="/svgs/glowing-dotted-circles.svg"
          alt="dashboard-banner"
          width={600}
          height={600}
          className="absolute top-[-17rem] left-[-17rem] rotate-170"
        />
        <Image
          src="/svgs/glowing-dotted-circles.svg"
          alt="dashboard-banner"
          width={600}
          height={600}
          className="absolute bottom-[-17rem] right-[-17rem] -rotate-10"
        />
        <div className="text-5xl font-semibold text-white font-sora">
          <span>Loved by people</span>
          <Image
            className="inline"
            src="/images/boy-icon-1.png"
            alt="smiling-boy"
            width={100}
            height={50}
          />{" "}
          and finance teams that{" "}
          <Image
            className="inline"
            src="/images/boy-icon-2.png"
            alt="smiling-boy"
            width={100}
            height={50}
          />{" "}
          care about their{" "}
          <Image
            className="inline"
            src="/images/boy-icon-3.png"
            alt="smiling-boy"
            width={100}
            height={50}
          />{" "}
          people and their finances
        </div>
      </div>
    </div>
  )
}

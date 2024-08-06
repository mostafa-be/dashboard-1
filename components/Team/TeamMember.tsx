import React from "react";
import img from "../../public/assests/project-images/original-771cc5024f1323f6882777ddb7e4a6d1.png";
import img2 from "../../public/assests/project-images/original-2a6cd43dcfa55ea75e9a354eea30f09c.png";
import avatar1 from "../../public/assests/Avatar/avatar2.jpg";
import avatar2 from "../../public/assests/Avatar/avatar3.jpg";
import avatar3 from "../../public/assests/Avatar/avatar4.jpg";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";

type Props = {
  open: boolean;
  setOpen: (value: boolean) => void;
};

const TeamMember = ({ open, setOpen }: Props) => {
  return (
    <div
      className={`${
        open ? " hidden  " : " flex p-2"
      } absolute 800px:relative z-40 h-full top-0 left-0 !w-[90%] 800px:!w-1/3  rounded-l-xl  flex-col items-start overflow-y-hidden bg-white p-3`}
    >
      <div className="w-full my-2 flex items-center justify-between 800px:justify-center">
        <h2 className="text-xl font-bold text-black">My Chat</h2>
        <div className="flex 800px:hidden items-center justify-center bg-zinc-200 rounded-lg text-black p-2">
          {open ? (
            <ChevronRight size={20} onClick={() => setOpen(!open)} />
          ) : (
            <ChevronLeft size={20} onClick={() => setOpen(!open)} />
          )}
        </div>
      </div>
      <h6 className="h5 text-gray-700 text-xl font-semibold">Roms</h6>
      <div className="my-2 w-full flex flex-col gap-y-3 items-start">
        <div className="w-full flex items-center justify-start gap-4  py-2 px-3 rounded-lg  hover:bg-zinc-100 cursor-pointer">
          <Image
            src={img}
            alt="logo"
            className="w-10 h-10 object-cover  rounded-full"
          />
          <span className="text-sm font-semibold text-black">
            Web Develepment
          </span>
        </div>
        <div className="w-full flex items-center justify-start gap-4  py-2 px-3 rounded-lg  hover:bg-zinc-100 cursor-pointer">
          <Image
            src={img2}
            alt="logo"
            className="w-10 h-10 object-cover rounded-full"
          />
          <span className="text-sm font-semibold text-black">Supports</span>
        </div>
      </div>
      <h6 className="h5 text-gray-700 text-xl font-semibold">Users</h6>
      <div className="mt-2 w-full flex flex-col gap-y-3 items-start">
        <div className="w-full flex items-center justify-start gap-4  py-2 px-3 rounded-lg  hover:bg-zinc-100 cursor-pointer">
          <Image
            src={avatar1}
            alt="logo"
            className="w-10 h-10 object-cover  rounded-full"
          />
          <span className="text-sm font-semibold text-black">Jhon Erat</span>
        </div>
        <div className="w-full flex items-center justify-start gap-4  py-2 px-3 rounded-lg  hover:bg-zinc-100 cursor-pointer">
          <Image
            src={avatar3}
            alt="logo"
            className="w-10 h-10 object-cover rounded-full"
          />
          <span className="text-sm font-semibold text-black">David lyson</span>
        </div>
      </div>
    </div>
  );
};

export default TeamMember;

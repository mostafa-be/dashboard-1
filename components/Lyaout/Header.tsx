import {
  Bell,
  ChevronFirst,
  ChevronLast,
  MessageSquareText,
  Search,
  Settings,
} from "lucide-react";
import Image from "next/image";

import React, { useState } from "react";
import avatar from "../../public/assests/Avatar/avatar2.jpg";
import ThemeSwitcher from "@/app/utils/ThemeSwitcher";
import moment from "moment";

type Props = {
  title: string;
  expanded: boolean;
  setExpanded: (open: boolean) => void;
};

const Header = ({ title, expanded, setExpanded }: Props) => {
  const [active, SetActive] = useState(false);
  if (typeof window !== "undefined") {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 80) {
        SetActive(true);
      } else {
        SetActive(false);
      }
    });
  }

  return (
    <div
      className={`w-[95%] z-20 rounded-[10px] px-5 py-3 transition-all m-auto mt-0  sticky  ${
        active ? "top-2 backdrop-blur-[40px]   shadow " : "bg-transparent"
      }`}
    >
      <div
        className={`w-full    flex flex-wrap items-center justify-between gap-3 `}
      >
        <div className="flex items-center justify-start gap-x-3">
          <button
            onClick={() => setExpanded(!expanded)}
            className="800px:hidden p-1.5 rounded-lg bg-gray-50 hover:bg-gray-100 z-50"
          >
            {expanded ? <ChevronFirst /> : <ChevronLast />}
          </button>
          <div className="flex flex-col gap-y-1 items-start justify-center">
            <div className="flex items-center justify-start gap-1">
              <h2 className="text-black text-xl font-bold">{title}</h2>
            </div>
            <div className="flex items-start justify-start gap-1">
              <span className="text-gray-500 text-[16px] font-[400]">
                {moment().format("MMM Do YY")}
              </span>
            </div>
          </div>
        </div>

        <div className="flex items-center justify-end gap-6">
          <div className="flex items-center">
            <div className="h-[40px] rounded-l-full flex items-center w-[50px] bg-zinc-200 pl-3">
              <Search className="text-gray-800" />
            </div>
            <input
              type="text"
              name="search"
              id=""
              placeholder="Searche"
              className="rounded-r-full h-[40px] w-0 800px:w-[300px] outline-none bg-zinc-200 text-gray-800 "
            />
          </div>
          <ThemeSwitcher />
          <div className="flex items-center justify-end relative p-2 bg-zinc-200 rounded-full pointer">
            <MessageSquareText className="text-white/90" />
            <span className="p-1 text-center rounded-full bg-green-500 text-white  absolute top-1 right-1.5"></span>
          </div>
          <div className="flex items-center gap-3">
            <Image
              src={avatar}
              alt="avatar"
              className="overflow-hidden transition-all rounded-full w-10"
            />
            <span className="text-black hidden 800px:block text-sm font-semibold">John Smith</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;

"use client";
import React, { createContext, FC, useContext, useState } from "react";
import { ChevronFirst, ChevronLast, LogOut, MoreVertical } from "lucide-react";
import { FaAngleDown } from "react-icons/fa6";
import Link from "next/link";
import avatar from "../../public/assests/Avatar/avatar2.jpg";
import Image from "next/image";

const SidebarContext = createContext();
type PropsSidebar = {
  expanded: boolean;
  setExpanded: (open: boolean) => void;
  children: React.ReactNode;
};

const SideBar = ({ expanded, setExpanded, children }: PropsSidebar) => {
  return (
    <aside
      className={`border-t ${
        expanded ? "h-screen  " : "hidden 800px:block h-screen "
      } w-min fixed left-0  z-50 800px:sticky top-0 `}
    >
      <nav
        className={` ${
          expanded
            ? "h-full bg-white shadow-sm border-r "
            : "  800px:h-full 800px:bg-white 800px:shadow-sm 800px:border-r "
        } transition-all  z-50 flex flex-col       `}
      >
        <div className="p-4 pb-2 flex justify-between items-center">
          <div className="flex items-center justify-start gap-3">
            <Image
              src={avatar}
              className={`overflow-hidden transition-all rounded-full ${
                expanded ? " w-14" : "w-0"
              }`}
              alt="logo flex box"
            />
            <div className={`flex flex-col ${expanded ? "" : "hidden"}`}>
              <span className="text-black text-xl font-[500] ">John Smith</span>
              <p className="text-gray-600 text-sm font-[400] mt-2 ">
                CEO,Oxish
              </p>
            </div>
          </div>
          <button
            onClick={() => setExpanded(!expanded)}
            className={`p-1.5 rounded-lg bg-gray-50 hover:bg-gray-100 z-50  `}
          >
            {expanded ? <ChevronFirst /> : <ChevronLast />}
          </button>
        </div>
        <SidebarContext.Provider value={{ expanded }}>
          <ul
            className={`mt-4 ${
              expanded ? "" : " hidden 800px:block !px-3 "
            } flex-1 px-3 800px:px-6 h-[90%] overflow-x-hidden overflow-y-auto carousel-layout`}
          >
            {children}
          </ul>
        </SidebarContext.Provider>
        <div
          className={` ${
            expanded ? "" : " hidden 800px:flex"
          } flex items-center justify-center p-3 800px:px-5 py-10 gap-3 pointer `}
        >
          <LogOut size={20} className={` `} />

          <div
            className={`flex justify-between items-center overflow-hidden transition-all ${
              expanded ? "" : "hidden"
            } `}
          >
            <h4 className="font-semibold"> Log Out</h4>
          </div>
        </div>
      </nav>
    </aside>
  );
};

type Props = {
  icon: JSX.Element;
  text: string;
  active: boolean;
  alert: boolean;
  link: boolean;
  url?: string;
  groupLinks?: any;
};

export const SideBarItem = ({
  icon,
  text,
  active,
  alert,
  link,
  groupLinks,
  url,
}: Props) => {
  const { expanded } = useContext(SidebarContext);
  const [openLinks, setOpenLinks] = useState("");
  const openSlideLinks = (text: string) => {
    if (openLinks === text) {
      setOpenLinks("");
    } else {
      setOpenLinks(text);
    }
  };
  return (
    <>
      <Link
        href={`/${url}`}
        className={`
relative flex items-center py-3 px-3 my-2 font-medium rounded-md cursor-pointer transition-colors group
${
  active
    ? "bg-gradient-to-tr from-indigo-400 to-indigo-300 text-white"
    : "hover:bg-indigo-50 text-gray-600"
}
`}
      >
        {icon}
        <span
          className={`overflow-hidden transition-all ${
            expanded ? "w-52 ml-3" : "w-0"
          }`}
        >
          {text}
        </span>
        {alert && (
          <div
            className={` absolute right-2 w-2 h-2 rounded bg-indigo-400 ${
              expanded ? "" : "top-2"
            }`}
          />
        )}
        {!expanded && (
          <div
            className={`z-50 absolute left-full rounded-md px-2 py-1 ml-6 bg-indigo-50 text-indigo-800 invisible opacity-20 transition-all
          group-hover:visible  group-hover:opacity-100 group-hover:translate-x-0`}
          >
            {text}
          </div>
        )}
      </Link>
    </>
  );
};

export default SideBar;

import React from "react";
import Image from "next/image";
import avatar from "../../public/assests/Avatar/avatar2.jpg";
import { BadgeCheck } from "lucide-react";
type Props = {};

const HeadAccount = (props: Props) => {
  return (
    <div
      id="profile"
      className="w-full bg-white rounded-[10px] shadow px-6 py-4"
    >
      <div className="w-full flex flex-wrap gap-y-3 items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-[50px] h-[50px] rounded">
            <Image src={avatar} alt="avatar" className="rounded" />
          </div>
          <div className="flex flex-col items-center">
            <div className=" flex items-center gap-1">
              <h5 className="text-lg text-black font-[500] uppercase">
                John Smith
              </h5>
              <BadgeCheck className="text-blue-600 text-lg" />
            </div>
            <h6 className="text-sm text-slate-500 uppercase">CEO,Oxish</h6>
          </div>
        </div>
        <div className="flex items-center">
          <label className="inline-flex items-center me-5 cursor-pointer">
            <span className="ms-3 text-sm font-[400] text-gray-400 800px:pb-5 mr-2">
              Switch to invisible
            </span>
            <input type="checkbox" value="" className="sr-only peer" />
            <div className="relative w-11 h-6 bg-gray-200 rounded-full peer dark:bg-gray-700 peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all  peer-checked:bg-blue-600"></div>
          </label>
        </div>
      </div>
    </div>
  );
};

export default HeadAccount;

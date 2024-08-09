import { Facebook, Github, Instagram, Twitter } from "lucide-react";
import React from "react";

type Props = {};

const Accounts = (props: Props) => {
  return (
    <div
      id="accounts"
      className="w-full bg-white rounded-[10px] shadow px-6 py-4 mt-6"
    >
      <h5 className="text-[20px] font-[600] text-gray-900">Accounts</h5>
      <div className="w-full flex flex-wrap gap-y-3 items-center justify-between mt-3">
        <div className="w-full 800px:w-[48%]">
          <div className="w-full flex items-center justify-start gap-x-2">
            <Facebook absoluteStrokeWidth />
            <h6 className="text-[16px] font-[400] text-gray-800 pl-1">
              {" "}
              Facebook Username{" "}
            </h6>
          </div>
          <div className="w-full mt-2 flex items-center justify-start">
            <div className="h-[40px] bg-transparent text-[16px] text-slate-400 border border-r-0 border-slate-200 font-[400] px-3 py-2 text-center rounded-l-lg">
              <p>https://faceboock.com/</p>
            </div>
            <input
              type="text"
              placeholder="User name"
              className="w-full outline-none p-2 bg-transparent border placeholder-gray-500 border-l-0 border-slate-200 rounded-r-lg  h-[40px]"
            />
          </div>
        </div>
        <div className="w-full 800px:w-[48%]">
          <div className="w-full flex items-center justify-start gap-x-2">
            <Instagram absoluteStrokeWidth />
            <h6 className="text-[16px] font-[400] text-gray-800 pl-1">
              {" "}
              Instagram Username{" "}
            </h6>
          </div>
          <div className="w-full mt-2 flex items-center justify-start">
            <div className="h-[40px] bg-transparent text-[16px] text-slate-400 border border-r-0 border-slate-200 font-[400] px-3 py-2 text-center rounded-l-lg">
              <p>https://faceboock.com/</p>
            </div>
            <input
              type="text"
              placeholder="User name"
              className="w-full outline-none p-2 bg-transparent border placeholder-gray-500 border-l-0 border-slate-200 rounded-r-lg  h-[40px]"
            />
          </div>
        </div>
        <div className="w-full 800px:w-[48%]">
          <div className="w-full flex items-center justify-start gap-x-2">
            <Twitter absoluteStrokeWidth />
            <h6 className="text-[16px] font-[400] text-gray-800 pl-1">
              Twitter Username{" "}
            </h6>
          </div>
          <div className="w-full mt-2 flex items-center justify-start">
            <div className="h-[40px] bg-transparent text-[16px] text-slate-400 border border-r-0 border-slate-200 font-[400] px-3 py-2 text-center rounded-l-lg">
              <p>https://faceboock.com/</p>
            </div>
            <input
              type="text"
              placeholder="User name"
              className="w-full outline-none p-2 bg-transparent border placeholder-gray-500 border-l-0 border-slate-200 rounded-r-lg  h-[40px]"
            />
          </div>
        </div>
        <div className="w-full 800px:w-[48%]">
          <div className="w-full flex items-center justify-start gap-x-2">
            <Github absoluteStrokeWidth />
            <h6 className="text-[16px] font-[400] text-gray-800 pl-1">
              Github Username{" "}
            </h6>
          </div>
          <div className="w-full mt-2 flex items-center justify-start">
            <div className="h-[40px] bg-transparent text-[16px] text-slate-400 border border-r-0 border-slate-200 font-[400] px-3 py-2 text-center rounded-l-lg">
              <p>https://faceboock.com/</p>
            </div>
            <input
              type="text"
              placeholder="User name"
              className="w-full outline-none p-2 bg-transparent border placeholder-gray-500 border-l-0 border-slate-200 rounded-r-lg  h-[40px]"
            />
          </div>
        </div>
      </div>
      <div className="w-full mt-6 flex items-center justify-end">
        <div className="flex items-center py-2 px-3 bg-gray-900 shadow rounded-[10px] cursor-pointer">
          <p className="text-[16px] font-[500] text-white">save</p>
        </div>
      </div>
    </div>
  );
};

export default Accounts;

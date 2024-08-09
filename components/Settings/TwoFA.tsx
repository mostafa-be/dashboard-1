import React from "react";

type Props = {};

const TwoFA = (props: Props) => {
  return (
    <div
      id="fa"
      className="w-full bg-white rounded-[10px] shadow px-6 py-4 mt-6"
    >
      <div className="w-full flex items-center justify-between">
        <h5 className="text-[20px] font-[600] text-gray-900">
          Two-factor authentication
        </h5>
        <div className="px-3 py-2 text-white text-[13px] font-[400] shadow bg-green-300 text-center rounded">
          Enabled
        </div>
      </div>
      <div className="w-full flex flex-wrap gap-y-3 items-center justify-between mt-3">
        <div className="w-full flex flex-wrap items-center justify-between pb-2 border-b border-slate-100">
          <p className="text-[14px] text-gray-800">Security keys</p>
          <div className="flex items-center justify-end gap-3">
            <p className="text-[12px] text-gray-500">No Security keys</p>
            <div className="px-3 py-2 text-center text-[13px] font-[400] shadow bg-white text-black cursor-pointer hover:text-blue-500 hover:border hover:border-blue-500 rounded uppercase">
              add
            </div>
          </div>
        </div>
        <div className="w-full flex flex-wrap items-center justify-between pb-2 border-b border-slate-100">
          <p className="text-[14px] text-gray-800">SMS number</p>
          <div className="flex items-center justify-end gap-3">
            <p className="text-[12px] text-gray-500">No SMS number</p>
            <div className="px-3 py-2 text-center text-[13px] font-[400] shadow bg-white text-black cursor-pointer hover:border hover:text-blue-500  hover:border-blue-500 rounded uppercase">
              add
            </div>
          </div>
        </div>
        <div className="w-full flex flex-wrap items-center justify-between pb-2 border-b border-slate-100">
          <p className="text-[14px] text-gray-800">Authenticator app</p>
          <div className="flex items-center justify-end gap-3">
            <p className="text-[12px] text-gray-500">Not Configured</p>
            <div className="px-3 py-2 text-center text-[13px] font-[400] shadow bg-white text-black cursor-pointer hover:text-blue-500 hover:border  hover:border-blue-500 rounded uppercase">
              set up
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TwoFA;

import React from "react";

type Props = {
  isSecurity?: boolean;
};

const ChangePasswordAccount = ({ isSecurity }: Props) => {
  return (
    <div
      id="change-password"
      className={` ${
        isSecurity ? "flex-1" : "w-full mt-6"
      }  bg-white rounded-[10px] shadow px-6 py-4 `}
    >
      <h5 className="text-[20px] font-[600] text-gray-900">Change Password</h5>
      <div className="w-full flex flex-wrap gap-y-3 items-center justify-between mt-3">
        <div className="w-full ">
          <h6 className="text-[16px] font-[400] text-gray-800 pl-1">
            Current password
          </h6>
          <input
            type="text"
            placeholder="Current password"
            className="w-full outline-none p-2 bg-transparent border placeholder-gray-500 border-slate-200 rounded-lg mt-2 h-[40px]"
          />
        </div>
        <div className="w-full ">
          <h6 className="text-[16px] font-[400] text-gray-800 pl-1">
            New password
          </h6>
          <input
            type="text"
            placeholder="New password"
            className="w-full outline-none p-2 bg-transparent border placeholder-gray-500 border-slate-200 rounded-lg mt-2 h-[40px]"
          />
        </div>
        <div className="w-full ">
          <h6 className="text-[16px] font-[400] text-gray-800 pl-1">
            Confirm new password
          </h6>
          <input
            type="text"
            placeholder="Confirm new password"
            className="w-full outline-none p-2 bg-transparent border placeholder-gray-500 border-slate-200 rounded-lg mt-2 h-[40px]"
          />
        </div>
      </div>
      <div className="w-full flex items-center justify-end mb-3 mt-6">
        <div className="px-3 py-2 bg-blue-500 shadow rounded-[10px] flex items-center  cursor-pointer">
          <p className="text-[16px] font-[500] text-white">update password</p>
        </div>
      </div>
    </div>
  );
};

export default ChangePasswordAccount;

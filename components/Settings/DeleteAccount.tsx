import React from "react";

type Props = {};

const DeleteAccount = (props: Props) => {
  return (
    <div
      id="delete-account"
      className="w-full bg-white rounded-[10px] shadow px-6 py-4 mt-6"
    >
      <h5 className="text-[20px] font-[600] text-gray-900">Delete Account</h5>
      <p className="text-[13px] font-[400] text-gray-400 mt-3">
        Once you delete your account, there is no going back. Please be certain.
      </p>

      <div className="w-full  mt-3 ">
        <div className="w-full flex items-center flex-wrap justify-between">
          <div className="flex items-center gap-3">
            <div className="flex items-center">
              <label className="inline-flex items-center me-5 cursor-pointer">
                <input type="checkbox" value="" className="sr-only peer" />
                <div className="relative w-11 h-6 bg-gray-200 rounded-full peer  peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all  peer-checked:bg-blue-600"></div>
              </label>
            </div>
            <div className="flex flex-col gap-y-2">
              <h5 className="text-sm font-semibold text-gray-800">Confirm</h5>
              <p className="text-[13px] text-gray-500 ">
                I want to delete my account.
              </p>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <div className="px-5 py-3 bg-transparent rounded-xl border text-center text-sm font-bold cursor-pointer  flex items-center justifu-center hover:scale-105 transition-transform">
              <span>DEACTIVITE</span>
            </div>
            <div className="px-5 py-3 text-white  bg-rose-500 rounded-xl border text-center text-sm font-bold cursor-pointer  flex items-center justifu-center hover:scale-105 transition-transform">
              <span>DELETE</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DeleteAccount;

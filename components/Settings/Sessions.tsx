import {
  ArrowRight,
  Laptop,
  MonitorSmartphone,
  Smartphone,
} from "lucide-react";
import React from "react";

type Props = {};

const Sessions = (props: Props) => {
  return (
    <div
      id="sessions"
      className="w-full bg-white rounded-[10px] shadow px-6 py-4 mt-6"
    >
      <h5 className="text-[20px] font-[600] text-gray-900">Sessions</h5>
      <p className="text-[13px] font-[400] text-gray-400 mt-3">
        This is a list of devices that have logged into your account. Remove
        those that you do not recognize.
      </p>

      <div className="w-full  mt-3 ">
        <div className="w-full py-3 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <MonitorSmartphone size={40} className="text-gray-600" />
            <div className="flex items-center flex-col">
              <h5 className=" text-sm text-gray-600 font-semibold">
                Bucharest 68.133.163.201
              </h5>
              <p className="text-sm text-gray-600 font-normal mt-2">
                Your current session
              </p>
            </div>
          </div>
          <div className="flex items-center gap-3 cursor-pointer">
            <span className="px-3 text-sm py-2 bg-green-100 text-green-600 rounded">
              Active
            </span>
            <span className="text-sm font-bold text-gray-600">EU</span>

            <div className="flex items-center gap-3">
              <span className="text-indigo-500 text-sm font-semibold ">
                {" "}
                See More
              </span>
              <ArrowRight className="text-indigo-500 text-sm font-semibold " />
            </div>
          </div>
        </div>
        <div className="w-full border-t py-3 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Laptop size={40} className="text-gray-600" />
            <div className="flex items-center flex-col">
              <h5 className=" text-sm text-gray-600 font-semibold">
                Chrome on macOS
              </h5>
            </div>
          </div>
          <div className="flex items-center gap-3 cursor-pointer">
            {/*<span className="px-3 text-sm py-2 bg-green-100 text-green-600 rounded">
              Active
            </span>*/}
            <span className="text-sm font-bold text-gray-600">US</span>

            <div className="flex items-center gap-3">
              <span className="text-indigo-500 text-sm font-semibold ">
                {" "}
                See More
              </span>
              <ArrowRight className="text-indigo-500 text-sm font-semibold " />
            </div>
          </div>
        </div>
        <div className="w-full border-t py-3 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Smartphone size={40} className="text-gray-600" />
            <div className="flex items-center flex-col">
              <h5 className=" text-sm text-gray-600 font-semibold">
                Safari on iPhone
              </h5>
            </div>
          </div>
          <div className="flex items-center gap-3 cursor-pointer">
            {/*<span className="px-3 text-sm py-2 bg-green-100 text-green-600 rounded">
              Active
            </span>*/}
            <span className="text-sm font-bold text-gray-600">US</span>

            <div className="flex items-center gap-3">
              <span className="text-indigo-500 text-sm font-semibold ">
                {" "}
                See More
              </span>
              <ArrowRight className="text-indigo-500 text-sm font-semibold " />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sessions;

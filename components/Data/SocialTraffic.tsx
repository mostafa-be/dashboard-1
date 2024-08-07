import { ArrowUp, ChevronDown, ChevronUp } from "lucide-react";
import React, { useState } from "react";

type Props = {};

const SocialTraffic = (props: Props) => {
  const [text, setText] = useState("Today");
  const [show, setShow] = useState(false);
  return (
    <div className="w-full 800px:flex-1 bg-white rounded-t-[10px] shadow">
      <div className="w-full px-6 py-4 bg-transparent flex items-center justify-between">
        <h5 className="text-[20px] text-black font-[500]">Social traffic</h5>
        <div className="relative border border-gray-800 rounded-lg w-30 py-2 px-3 flex items-center justify-between gap-3">
          <span className="text-sm font-semibold">{text}</span>
          {show ? (
            <ChevronUp
              size={20}
              className=" cursor-pointer"
              onClick={() => setShow(!show)}
            />
          ) : (
            <ChevronDown
              size={20}
              className=" cursor-pointer"
              onClick={() => setShow(!show)}
            />
          )}
          {show && (
            <div className=" w-44 bg-white rounded-lg absolute top-12 right-0 z-20 shadow">
              <div
                className=" cursor-pointer py-2 px-3 flex items-center justify-center"
                onClick={() => {
                  setShow(!show);
                  setText("Today");
                }}
              >
                <span className="text-sm font-semibold">Today</span>
              </div>
              <div
                className=" cursor-pointer border-t py-2 px-3 flex items-center justify-center"
                onClick={() => {
                  setShow(!show);
                  setText("Monthly");
                }}
              >
                <span className="text-sm font-semibold">Monthly</span>
              </div>
              <div
                className=" cursor-pointer border-t py-2 px-3 flex items-center justify-center"
                onClick={() => {
                  setShow(!show);
                  setText("Yearly");
                }}
              >
                <span className="text-sm font-semibold">Yearly</span>
              </div>
            </div>
          )}
        </div>
      </div>

      <div className="w-full relative overflow-x-auto  table-auto">
        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3">
                REFERRAL
              </th>
              <th scope="col" className="px-6 py-3">
                VISITORS
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
              <th
                scope="row"
                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                Facebbock
              </th>
              <td className="px-6 py-4">4,569</td>
            </tr>
            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
              <th
                scope="row"
                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                Insagram
              </th>
              <td className="px-6 py-4">4,569</td>
            </tr>
            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
              <th
                scope="row"
                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                Linkden
              </th>
              <td className="px-6 py-4">4,569</td>
            </tr>
            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
              <th
                scope="row"
                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                Snapchat
              </th>
              <td className="px-6 py-4">4,569</td>
            </tr>
            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
              <th
                scope="row"
                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                Chrom
              </th>
              <td className="px-6 py-4">4,569</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default SocialTraffic;

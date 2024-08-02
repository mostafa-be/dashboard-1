import Image from "next/image";
import Link from "next/link";
import React from "react";
import avatar from "../../public/assests/Avatar/avatar4.jpg";
type Props = {};

const TransactionsTable = (props: Props) => {
  return (
    <div className="w-full mt-10 h-full 800px:flex-1 bg-white rounded-[10px] shadow ">
      <div className="w-full px-6 py-4 bg-transparent flex items-center justify-between">
        <h5 className="text-[20px] text-black font-[500]">Transactions</h5>
        <Link
          href={"/"}
          className=" bg-indigo-500 text-white shadow rounded px-3 py-2 text-center text-[16px] font-[400]"
        >
          See All
        </Link>
      </div>
      <div className="w-full relative overflow-x-auto   rounded-b-[10px]">
        <table className="w-full table-auto text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-transparent dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-4 min-w-[100px]">
                Name
              </th>
              <th scope="col" className="px-6 py-4 min-w-[100px]">
                Status
              </th>
              <th scope="col" className="px-6 py-4 min-w-[100px]">
                Date
              </th>
              <th scope="col" className="px-6 py-4 min-w-[100px]">
                Amount
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className="bg-white border-t dark:bg-gray-800 dark:border-gray-700">
              <th
                scope="row"
                className="px-6 py-4 min-w-[100px] font-medium text-gray-900 whitespace-nowrap dark:text-white "
              >
                <div className="w-full flex  items-center gap-2 justify-start">
                  <Image
                    src={avatar}
                    alt="avatar"
                    className="w-10 rounded-full"
                  />
                  <span className=" cursor-pointer">MOSTAFA BELKHIAT</span>
                </div>
              </th>
              <td className="px-6 py-4 min-w-[100px] ">
                <div className="w-full flex items-center justify-center gap-2 px-3 py-2 rounded-full bg-orange-100 ">
                  <span className=" text-orange-700">Pending</span>
                </div>
              </td>

              <td className=" px-6 py-4 min-w-[200px] ">
                <div className="w-full flex items-center justify-start gap-2">
                  <span className="text-black font-semibold">June 14,2023</span>
                </div>
              </td>
              <td className=" px-6 py-4 min-w-[200px] ">
                <div className="w-full flex items-center justify-start gap-2">
                  <span className=" text-green-600 font-semibold">
                    + $2438.71
                  </span>
                </div>
              </td>
            </tr>
            <tr className="bg-white border-t dark:bg-gray-800 dark:border-gray-700">
              <th
                scope="row"
                className="px-6 py-4 min-w-[100px] font-medium text-gray-900 whitespace-nowrap dark:text-white "
              >
                <div className="w-full flex  items-center gap-2 justify-start">
                  <Image
                    src={avatar}
                    alt="avatar"
                    className="w-10 rounded-full"
                  />
                  <span className=" cursor-pointer">MOSTAFA BELKHIAT</span>
                </div>
              </th>
              <td className="px-6 py-4 min-w-[100px] ">
                <div className="w-full flex items-center justify-center gap-2 px-3 py-2 rounded-full bg-blue-100 ">
                  <span className="text-blue-600">Done</span>
                </div>
              </td>

              <td className=" px-6 py-4 min-w-[200px] ">
                <div className="w-full flex items-center justify-start gap-2">
                  <span className="text-black font-semibold">June 12,2023</span>
                </div>
              </td>
              <td className=" px-6 py-4 min-w-[200px] ">
                <div className="w-full flex items-center justify-start gap-2">
                  <span className=" text-red-600 font-semibold">- $599.81</span>
                </div>
              </td>
            </tr>
            <tr className="bg-white border-t dark:bg-gray-800 dark:border-gray-700">
              <th
                scope="row"
                className="px-6 py-4 min-w-[100px] font-medium text-gray-900 whitespace-nowrap dark:text-white "
              >
                <div className="w-full flex  items-center gap-2 justify-start">
                  <Image
                    src={avatar}
                    alt="avatar"
                    className="w-10 rounded-full"
                  />
                  <span className=" cursor-pointer">MOSTAFA BELKHIAT</span>
                </div>
              </th>
              <td className="px-6 py-4 min-w-[100px] ">
                <div className="w-full flex items-center justify-center gap-2 px-3 py-2 rounded-full bg-orange-100 ">
                  <span className=" text-orange-700">Pending</span>
                </div>
              </td>

              <td className=" px-6 py-4 min-w-[200px] ">
                <div className="w-full flex items-center justify-start gap-2">
                  <span className="text-black font-semibold">June 14,2023</span>
                </div>
              </td>
              <td className=" px-6 py-4 min-w-[200px] ">
                <div className="w-full flex items-center justify-start gap-2">
                  <span className=" text-green-600 font-semibold">
                    + $2438.71
                  </span>
                </div>
              </td>
            </tr>
            <tr className="bg-white border-t dark:bg-gray-800 dark:border-gray-700">
              <th
                scope="row"
                className="px-6 py-4 min-w-[100px] font-medium text-gray-900 whitespace-nowrap dark:text-white "
              >
                <div className="w-full flex  items-center gap-2 justify-start">
                  <Image
                    src={avatar}
                    alt="avatar"
                    className="w-10 rounded-full"
                  />
                  <span className=" cursor-pointer">MOSTAFA BELKHIAT</span>
                </div>
              </th>
              <td className="px-6 py-4 min-w-[100px] ">
                <div className="w-full flex items-center justify-center gap-2 px-3 py-2 rounded-full bg-blue-100 ">
                  <span className="text-blue-600">Done</span>
                </div>
              </td>

              <td className=" px-6 py-4 min-w-[200px] ">
                <div className="w-full flex items-center justify-start gap-2">
                  <span className="text-black font-semibold">June 12,2023</span>
                </div>
              </td>
              <td className=" px-6 py-4 min-w-[200px] ">
                <div className="w-full flex items-center justify-start gap-2">
                  <span className=" text-red-600 font-semibold">- $599.81</span>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TransactionsTable;

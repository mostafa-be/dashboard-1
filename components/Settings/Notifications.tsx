import React from "react";

type Props = {};

const Notifications = (props: Props) => {
  return (
    <div
      id="notifications"
      className="w-full bg-white rounded-[10px] shadow px-6 py-4 mt-6"
    >
      <h5 className="text-[20px] font-[600] text-gray-900">Notification</h5>
      <p className="text-[13px] font-[400] text-gray-400 mt-3">
        Choose how you receive notifications. These notification settings apply
        to the things you’re watching.
      </p>

      <div className="w-full  mt-3 relative overflow-x-auto">
        <table className="w-full table-auto 	 text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 capitalize bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-3 py-3 ">
                activite
              </th>
              <th scope="col" className="px-3 py-3">
                email
              </th>
              <th scope="col" className="px-3 py-3">
                push
              </th>
              <th scope="col" className="px-3 py-3">
                SMS
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
              <th
                scope="row"
                className="px-3 py-4 font-medium text-gray-900 whitespace-nowrap "
              >
                <h5 className="">Mentions</h5>
                <p className="text-[13px] font-[400] text-gray-400 mt-1">
                  Notify when another user mentions you in a comment
                </p>
              </th>
              <td className="px-3 py-4">
                <div className="flex items-center">
                  <label className="inline-flex items-center me-5 cursor-pointer">
                    <input type="checkbox" value="" className="sr-only peer" />
                    <div className="relative w-11 h-6 bg-gray-200 rounded-full peer  peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all  peer-checked:bg-blue-600"></div>
                  </label>
                </div>
              </td>
              <td className="px-3 py-4">
                <div className="flex items-center">
                  <label className="inline-flex items-center me-5 cursor-pointer">
                    <input type="checkbox" value="" className="sr-only peer" />
                    <div className="relative w-11 h-6 bg-gray-200 rounded-full peer  peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all  peer-checked:bg-blue-600"></div>
                  </label>
                </div>
              </td>
              <td className="px-3 py-4">
                <div className="flex items-center">
                  <label className="inline-flex items-center me-5 cursor-pointer">
                    <input type="checkbox" value="" className="sr-only peer" />
                    <div className="relative w-11 h-6 bg-gray-200 rounded-full peer  peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all  peer-checked:bg-blue-600"></div>
                  </label>
                </div>
              </td>
            </tr>
            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
              <th
                scope="row"
                className="px-3 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                <h5 className="">Comments</h5>
                <p className="text-[13px] font-[400] text-gray-400 mt-1">
                  Notify when another user comments your item
                </p>
              </th>
              <td className="px-3 py-4">
                <div className="flex items-center">
                  <label className="inline-flex items-center me-5 cursor-pointer">
                    <input type="checkbox" value="" className="sr-only peer" />
                    <div className="relative w-11 h-6 bg-gray-200 rounded-full peer  peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all  peer-checked:bg-blue-600"></div>
                  </label>
                </div>
              </td>
              <td className="px-3 py-4">
                <div className="flex items-center">
                  <label className="inline-flex items-center me-5 cursor-pointer">
                    <input type="checkbox" value="" className="sr-only peer" />
                    <div className="relative w-11 h-6 bg-gray-200 rounded-full peer  peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all  peer-checked:bg-blue-600"></div>
                  </label>
                </div>
              </td>
              <td className="px-3 py-4">
                <div className="flex items-center">
                  <label className="inline-flex items-center me-5 cursor-pointer">
                    <input type="checkbox" value="" className="sr-only peer" />
                    <div className="relative w-11 h-6 bg-gray-200 rounded-full peer  peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all  peer-checked:bg-blue-600"></div>
                  </label>
                </div>
              </td>
            </tr>
            <tr className="bg-white border-b dark:bg-gray-800">
              <th
                scope="row"
                className="px-3 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                <h5 className="">Follows</h5>
                <p className="text-[13px] font-[400] text-gray-400 mt-1">
                  Notify when another user follows you
                </p>
              </th>
              <td className="px-3 py-4">
                <div className="flex items-center">
                  <label className="inline-flex items-center me-5 cursor-pointer">
                    <input type="checkbox" value="" className="sr-only peer" />
                    <div className="relative w-11 h-6 bg-gray-200 rounded-full peer  peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all  peer-checked:bg-blue-600"></div>
                  </label>
                </div>
              </td>
              <td className="px-3 py-4">
                <div className="flex items-center">
                  <label className="inline-flex items-center me-5 cursor-pointer">
                    <input type="checkbox" value="" className="sr-only peer" />
                    <div className="relative w-11 h-6 bg-gray-200 rounded-full peer  peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all  peer-checked:bg-blue-600"></div>
                  </label>
                </div>
              </td>
              <td className="px-3 py-4">
                <div className="flex items-center">
                  <label className="inline-flex items-center me-5 cursor-pointer">
                    <input type="checkbox" value="" className="sr-only peer" />
                    <div className="relative w-11 h-6 bg-gray-200 rounded-full peer  peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all  peer-checked:bg-blue-600"></div>
                  </label>
                </div>
              </td>
            </tr>
            <tr className="bg-white dark:bg-gray-800">
              <th
                scope="row"
                className="px-3 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                <p className="text-[13px] font-[400] text-gray-400 mt-1">
                  Log in from a new device
                </p>
              </th>
              <td className="px-3 py-4">
                <div className="flex items-center">
                  <label className="inline-flex items-center me-5 cursor-pointer">
                    <input type="checkbox" value="" className="sr-only peer" />
                    <div className="relative w-11 h-6 bg-gray-200 rounded-full peer  peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all  peer-checked:bg-blue-600"></div>
                  </label>
                </div>
              </td>
              <td className="px-3 py-4">
                <div className="flex items-center">
                  <label className="inline-flex items-center me-5 cursor-pointer">
                    <input type="checkbox" value="" className="sr-only peer" />
                    <div className="relative w-11 h-6 bg-gray-200 rounded-full peer  peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all  peer-checked:bg-blue-600"></div>
                  </label>
                </div>
              </td>
              <td className="px-3 py-4">
                <div className="flex items-center">
                  <label className="inline-flex items-center me-5 cursor-pointer">
                    <input type="checkbox" value="" className="sr-only peer" />
                    <div className="relative w-11 h-6 bg-gray-200 rounded-full peer  peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all  peer-checked:bg-blue-600"></div>
                  </label>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Notifications;

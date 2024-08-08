import React from "react";
import CardsReportsStatus from "./CardsReportsStatus";
import TablReports from "./TablReports";
import Image from "next/image";
import avatar2 from "../../public/assests/Avatar/avatar2.jpg";
import avatar3 from "../../public/assests/Avatar/avatar3.jpg";
import avatar4 from "../../public/assests/Avatar/avatar4.jpg";
type Props = {};

const ReportsContent = (props: Props) => {
  return (
    <div className="w-full  px-5   h-full my-10 flex flex-wrap  800px:flex-nowrap 800px:flex items-start justify-between gap-7">
      <div className="w-full 800px:w-3/4">
        <CardsReportsStatus />
        <TablReports />
      </div>
      <div className="w-full grid grid-cols-1 gap-4 800px:w-1/4">
        <div className=" bg-white shadow rounded-2xl py-3 px-3">
          <div className="w-32 cursor-pointer rounded-full px-2 py-2 text-blue-600 bg-blue-100 flex justify-center items-center">
            <span className="font-semibold text-sm">Team Review</span>
          </div>
          <div className="w-full mt-4 flex flex-col items-start justify-start">
            <h5 className="text-xl font-semibold text-black">
              Oxish Project Team
            </h5>
            <p className="text-gray-600 text-[14px]">
              tagret manager this included success
            </p>
          </div>
          <div className="w-full mt-3 flex flex-wrap items-center gap-3">
            <span className="text-sm font-semibold">14,10,2023</span>
            <div className="py-1 px-2 bg-slate-100 rounded-full flex items-center justify-center">
              <span className="text-gray-800 text-sm  font-semibold">
                15 Members
              </span>
            </div>
          </div>
          <div className="w-full mt-3 flex flex-wrap items-center justify-between gap-3">
            <div className="px-3 py-2 bg-slate-100 rounded-lg flex items-center justify-center">
              <span className="text-sm font-semibold">Notion file</span>
            </div>
            <div className="flex items-center">
              <Image
                src={avatar2}
                alt="avatar"
                className="w-10  rounded-full"
              />
              <Image
                src={avatar3}
                alt="avatar"
                className="w-10 -ml-3 rounded-full"
              />
              <Image
                src={avatar4}
                alt="avatar"
                className="w-10 -ml-3 rounded-full"
              />
            </div>
          </div>
        </div>
        <div className=" bg-white shadow rounded-2xl py-3 px-3">
          <div className="w-32 cursor-pointer rounded-full px-2 py-2 text-blue-600 bg-blue-100 flex justify-center items-center">
            <span className="font-semibold text-sm">Team Review</span>
          </div>
          <div className="w-full mt-4 flex flex-col items-start justify-start">
            <h5 className="text-xl font-semibold text-black">
              Oxish Project Team
            </h5>
            <p className="text-gray-600 text-[14px]">
              tagret manager this included success
            </p>
          </div>
          <div className="w-full mt-3 flex flex-wrap items-center gap-3">
            <span className="text-sm font-semibold">14,10,2023</span>
            <div className="py-1 px-2 bg-slate-100 rounded-full flex items-center justify-center">
              <span className="text-gray-800 text-sm  font-semibold">
                15 Members
              </span>
            </div>
          </div>
          <div className="w-full mt-3 flex flex-wrap items-center justify-between gap-3">
            <div className="px-3 py-2 bg-slate-100 rounded-lg flex items-center justify-center">
              <span className="text-sm font-semibold">Notion file</span>
            </div>
            <div className="flex items-center">
              <Image
                src={avatar2}
                alt="avatar"
                className="w-10  rounded-full"
              />
              <Image
                src={avatar3}
                alt="avatar"
                className="w-10 -ml-3 rounded-full"
              />
              <Image
                src={avatar4}
                alt="avatar"
                className="w-10 -ml-3 rounded-full"
              />
            </div>
          </div>
        </div>
        <div className=" bg-white shadow rounded-2xl py-3 px-3">
          <div className="w-32 cursor-pointer rounded-full px-2 py-2 text-blue-600 bg-blue-100 flex justify-center items-center">
            <span className="font-semibold text-sm">Team Review</span>
          </div>
          <div className="w-full mt-4 flex flex-col items-start justify-start">
            <h5 className="text-xl font-semibold text-black">
              Oxish Project Team
            </h5>
            <p className="text-gray-600 text-[14px]">
              tagret manager this included success
            </p>
          </div>
          <div className="w-full mt-3 flex flex-wrap items-center gap-3">
            <span className="text-sm font-semibold">14,10,2023</span>
            <div className="py-1 px-2 bg-slate-100 rounded-full flex items-center justify-center">
              <span className="text-gray-800 text-sm  font-semibold">
                15 Members
              </span>
            </div>
          </div>
          <div className="w-full mt-3 flex flex-wrap items-center justify-between gap-3">
            <div className="px-3 py-2 bg-slate-100 rounded-lg flex items-center justify-center">
              <span className="text-sm font-semibold">Notion file</span>
            </div>
            <div className="flex items-center">
              <Image
                src={avatar2}
                alt="avatar"
                className="w-10  rounded-full"
              />
              <Image
                src={avatar3}
                alt="avatar"
                className="w-10 -ml-3 rounded-full"
              />
              <Image
                src={avatar4}
                alt="avatar"
                className="w-10 -ml-3 rounded-full"
              />
            </div>
          </div>
        </div>
        <div className=" bg-white shadow rounded-2xl py-3 px-3">
          <div className="w-32 cursor-pointer rounded-full px-2 py-2 text-blue-600 bg-blue-100 flex justify-center items-center">
            <span className="font-semibold text-sm">Team Review</span>
          </div>
          <div className="w-full mt-4 flex flex-col items-start justify-start">
            <h5 className="text-xl font-semibold text-black">
              Oxish Project Team
            </h5>
            <p className="text-gray-600 text-[14px]">
              tagret manager this included success
            </p>
          </div>
          <div className="w-full mt-3 flex flex-wrap items-center gap-3">
            <span className="text-sm font-semibold">14,10,2023</span>
            <div className="py-1 px-2 bg-slate-100 rounded-full flex items-center justify-center">
              <span className="text-gray-800 text-sm  font-semibold">
                15 Members
              </span>
            </div>
          </div>
          <div className="w-full mt-3 flex flex-wrap items-center justify-between gap-3">
            <div className="px-3 py-2 bg-slate-100 rounded-lg flex items-center justify-center">
              <span className="text-sm font-semibold">Notion file</span>
            </div>
            <div className="flex items-center">
              <Image
                src={avatar2}
                alt="avatar"
                className="w-10  rounded-full"
              />
              <Image
                src={avatar3}
                alt="avatar"
                className="w-10 -ml-3 rounded-full"
              />
              <Image
                src={avatar4}
                alt="avatar"
                className="w-10 -ml-3 rounded-full"
              />
            </div>
          </div>
        </div>

        <div className=" bg-white shadow rounded-2xl py-3 px-3">
          <div className="w-32 cursor-pointer rounded-full px-2 py-2 text-blue-600 bg-blue-100 flex justify-center items-center">
            <span className="font-semibold text-sm">Team Review</span>
          </div>
          <div className="w-full mt-4 flex flex-col items-start justify-start">
            <h5 className="text-xl font-semibold text-black">
              Oxish Project Team
            </h5>
            <p className="text-gray-600 text-[14px]">
              tagret manager this included success
            </p>
          </div>
          <div className="w-full mt-3 flex flex-wrap items-center gap-3">
            <span className="text-sm font-semibold">14,10,2023</span>
            <div className="py-1 px-2 bg-slate-100 rounded-full flex items-center justify-center">
              <span className="text-gray-800 text-sm  font-semibold">
                15 Members
              </span>
            </div>
          </div>
          <div className="w-full mt-3 flex flex-wrap items-center justify-between gap-3">
            <div className="px-3 py-2 bg-slate-100 rounded-lg flex items-center justify-center">
              <span className="text-sm font-semibold">Notion file</span>
            </div>
            <div className="flex items-center">
              <Image
                src={avatar2}
                alt="avatar"
                className="w-10  rounded-full"
              />
              <Image
                src={avatar3}
                alt="avatar"
                className="w-10 -ml-3 rounded-full"
              />
              <Image
                src={avatar4}
                alt="avatar"
                className="w-10 -ml-3 rounded-full"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReportsContent;

import { SquareChartGantt, WalletMinimal } from "lucide-react";
import React from "react";

type Props = {};

const CardsStatus = (props: Props) => {
  return (
    <div className="w-full grid grid-cols-1 800px:grid-cols-3  gap-4">
      <div className=" shadow  bg-indigo-600 !text-white p-2 py-3 rounded-2xl">
        <div className="flex gap-3 items-start justify-start">
          <div className="p-2 rounded-lg bg-indigo-400">
            <SquareChartGantt className="" />
          </div>
          <div className="flex flex-col items-start justify-start">
            <h5 className="text-xl font-semibold">Total Projects</h5>
            <h5 className="text-2xl font-semibold mt-3 lining-nums">10425</h5>
            <p className="text-white text-sm mt-3">
              All running & completed project
            </p>
          </div>
        </div>
      </div>
      <div className="  shadow bg-white p-2 py-3 rounded-2xl">
        <div className="flex gap-3 items-start justify-start">
          <div className="p-2 rounded-lg bg-slate-100">
            <WalletMinimal className="text-gray-600" />
          </div>
          <div className="flex flex-col items-start justify-start">
            <h5 className="text-xl font-semibold">Completed Projects</h5>
            <h5 className="text-2xl font-semibold mt-3 lining-nums">980</h5>
            <p className="text-gray-700 text-sm mt-3">
              <span className="text-indigo-600">+12%</span> Completion rate this
              month
            </p>
          </div>
        </div>
      </div>
      <div className="shadow bg-white p-2 rounded-2xl">
        <div className="flex gap-3 items-start justify-start">
          <div className="p-2 rounded-lg bg-slate-100">
            <SquareChartGantt className="text-gray-600" />
          </div>
          <div className="flex flex-col items-start justify-start">
            <h5 className="text-xl font-semibold">Ranning Projects</h5>
            <h5 className="text-2xl font-semibold mt-3 lining-nums">923</h5>
            <p className="text-gray-700 text-sm mt-3">
            <span className="text-indigo-600">+8%</span> Running project increases
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardsStatus;

import { Hourglass, Shapes, Wallet } from "lucide-react";
import React from "react";

type Props = {};

const CardsReportsStatus = (props: Props) => {
  return (
    <div className="w-full grid grid-cols-1 800px:grid-cols-3  gap-4">
      <div className=" cursor-pointer transition-transform hover:scale-105  shadow bg-white p-2 py-3 rounded-2xl">
        <div className="flex gap-3 items-start justify-start">
          <div className="p-2 rounded-lg bg-slate-100">
            <Wallet className="text-gray-600" />
          </div>
          <div className="flex flex-col items-start justify-start">
            <h5 className="text-xl font-semibold">Wallet</h5>
            <h5 className="text-2xl font-semibold mt-3 lining-nums">$ 1,9K</h5>
            <p className="text-gray-700 text-sm mt-3">
              <span className="text-green-600">+01%</span> Completion rate this
              month
            </p>
          </div>
        </div>
      </div>
      <div className=" cursor-pointer transition-transform hover:scale-105  shadow bg-white p-2 py-3 rounded-2xl">
        <div className="flex gap-3 items-start justify-start">
          <div className="p-2 rounded-lg bg-slate-100">
            <Shapes className="text-gray-600" />
          </div>
          <div className="flex flex-col items-start justify-start">
            <h5 className="text-xl font-semibold">Earnings</h5>
            <h5 className="text-2xl font-semibold mt-3 lining-nums">
              $ 3950,56
            </h5>
            <p className="text-gray-700 text-sm mt-3">
              <span className="text-green-600">+12%</span> Completion rate this
              month
            </p>
          </div>
        </div>
      </div>
      <div className=" cursor-pointer transition-transform hover:scale-105  shadow bg-white p-2 py-3 rounded-2xl">
        <div className="flex gap-3 items-start justify-start">
          <div className="p-2 rounded-lg bg-slate-100">
            <Hourglass className="text-gray-600" />
          </div>
          <div className="flex flex-col items-start justify-start">
            <h5 className="text-xl font-semibold">Work Hours</h5>
            <h5 className="text-2xl font-semibold mt-3 lining-nums">
              325hr55min
            </h5>
            <p className="text-gray-700 text-sm mt-3">
              <span className="text-green-600">+40%</span> Completion rate this
              month
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardsReportsStatus;

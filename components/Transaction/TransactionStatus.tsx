import React from "react";

type Props = {};

const TransactionStatus = (props: Props) => {
  return (
    <div className="w-full grid grid-cols-1 800px:grid-cols-4  gap-4">
      <div className="  shadow bg-white p-2 py-3 rounded-2xl">
        <div className="flex gap-3 items-start justify-start">
          <div className="p-7 rounded-full bg-green-100"></div>
          <div className="flex flex-col items-start justify-start">
            <h5 className="text-xl font-semibold">Total</h5>
            <h5 className="text-2xl font-semibold mt-3 lining-nums">1477</h5>
          </div>
        </div>
      </div>
      <div className="  shadow bg-white p-2 py-3 rounded-2xl">
        <div className="flex gap-3 items-start justify-start">
          <div className="p-7 rounded-full bg-blue-100"></div>
          <div className="flex flex-col items-start justify-start">
            <h5 className="text-xl font-semibold">Done</h5>
            <h5 className="text-2xl font-semibold mt-3 lining-nums">1112</h5>
          </div>
        </div>
      </div>
      <div className="  shadow bg-white p-2 py-3 rounded-2xl">
        <div className="flex gap-3 items-start justify-start">
          <div className="p-7 rounded-full bg-orange-100"></div>
          <div className="flex flex-col items-start justify-start">
            <h5 className="text-xl font-semibold">Pending</h5>
            <h5 className="text-2xl font-semibold mt-3 lining-nums">1112</h5>
          </div>
        </div>
      </div>
      <div className="  shadow bg-white p-2 py-3 rounded-2xl">
        <div className="flex gap-3 items-start justify-start">
          <div className="p-7 rounded-full bg-red-100"></div>
          <div className="flex flex-col items-start justify-start">
            <h5 className="text-xl font-semibold">Rejected</h5>
            <h5 className="text-2xl font-semibold mt-3 lining-nums">76</h5>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TransactionStatus;

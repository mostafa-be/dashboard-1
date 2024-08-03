import React from "react";
import TransactionStatus from "./TransactionStatus";
import TransactionFilter from "./TransactionFilter";
import TableTran from "./TableTran";
import Image from "next/image";
import avatar from "../../public/assests/Avatar/avatar4.jpg";
type Props = {};

const TransactionsContent = (props: Props) => {
  return (
    <div className="w-full  px-5   h-full my-10 flex flex-wrap  800px:flex-nowrap 800px:flex items-start justify-between gap-7">
      <div className="w-full 800px:w-3/4">
        <TransactionStatus />
        <TransactionFilter />
        <TableTran />
      </div>
      <div className="w-full grid grid-cols-1 gap-4 800px:w-1/4">
        <div className=" bg-white shadow rounded-2xl py-3 px-3">
          <h5 className="text-black text-xl font-semibold">team</h5>
          <div className="w-full mt-3">
            <div className="py-3 border-b flex items-center gap-3">
              <Image src={avatar} alt="avatar" className="w-8 rounded-full" />
              <span className="text-black tex-sm font-semibold">
                Mostafa Belkhiat
              </span>
            </div>
            <div className="py-3 border-b flex items-center gap-3">
              <Image src={avatar} alt="avatar" className="w-8 rounded-full" />
              <span className="text-black tex-sm font-semibold">
                Mostafa Belkhiat
              </span>
            </div>
            <div className="py-3 border-b flex items-center gap-3">
              <Image src={avatar} alt="avatar" className="w-8 rounded-full" />
              <span className="text-black tex-sm font-semibold">
                Mostafa Belkhiat
              </span>
            </div>
            <div className="py-3 border-b flex items-center gap-3">
              <Image src={avatar} alt="avatar" className="w-8 rounded-full" />
              <span className="text-black tex-sm font-semibold">
                Mostafa Belkhiat
              </span>
            </div>
            <div className="py-3 border-b flex items-center gap-3">
              <Image src={avatar} alt="avatar" className="w-8 rounded-full" />
              <span className="text-black tex-sm font-semibold">
                Mostafa Belkhiat
              </span>
            </div>
            <div className="py-3 border-b flex items-center gap-3">
              <Image src={avatar} alt="avatar" className="w-8 rounded-full" />
              <span className="text-black tex-sm font-semibold">
                Mostafa Belkhiat
              </span>
            </div>
            <div className="py-3 border-b flex items-center gap-3">
              <Image src={avatar} alt="avatar" className="w-8 rounded-full" />
              <span className="text-black tex-sm font-semibold">
                Mostafa Belkhiat
              </span>
            </div>
            <div className="py-3 border-b flex items-center gap-3">
              <Image src={avatar} alt="avatar" className="w-8 rounded-full" />
              <span className="text-black tex-sm font-semibold">
                Mostafa Belkhiat
              </span>
            </div>
            <div className="py-3 border-b flex items-center gap-3">
              <Image src={avatar} alt="avatar" className="w-8 rounded-full" />
              <span className="text-black tex-sm font-semibold">
                Mostafa Belkhiat
              </span>
            </div>
            <div className="py-3 border-b flex items-center gap-3">
              <Image src={avatar} alt="avatar" className="w-8 rounded-full" />
              <span className="text-black tex-sm font-semibold">
                Mostafa Belkhiat
              </span>
            </div>
            <div className="py-3 border-b flex items-center gap-3">
              <Image src={avatar} alt="avatar" className="w-8 rounded-full" />
              <span className="text-black tex-sm font-semibold">
                Mostafa Belkhiat
              </span>
            </div>
            <div className="py-3 border-b flex items-center gap-3">
              <Image src={avatar} alt="avatar" className="w-8 rounded-full" />
              <span className="text-black tex-sm font-semibold">
                Mostafa Belkhiat
              </span>
            </div>

            <div className="py-3 border-b flex items-center gap-3">
              <Image src={avatar} alt="avatar" className="w-8 rounded-full" />
              <span className="text-black tex-sm font-semibold">
                Mostafa Belkhiat
              </span>
            </div>
            <div className="py-3 border-b flex items-center gap-3">
              <Image src={avatar} alt="avatar" className="w-8 rounded-full" />
              <span className="text-black tex-sm font-semibold">
                Mostafa Belkhiat
              </span>
            </div>
            <div className="py-3 border-b flex items-center gap-3">
              <Image src={avatar} alt="avatar" className="w-8 rounded-full" />
              <span className="text-black tex-sm font-semibold">
                Mostafa Belkhiat
              </span>
            </div>
            <div className="py-3 border-b flex items-center gap-3">
              <Image src={avatar} alt="avatar" className="w-8 rounded-full" />
              <span className="text-black tex-sm font-semibold">
                Mostafa Belkhiat
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TransactionsContent;

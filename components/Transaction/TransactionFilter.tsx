"use client";
import { ChevronDown, ChevronUp } from "lucide-react";
import React, { useState } from "react";

type Props = {};

const TransactionFilter = (props: Props) => {
  const status = ["all", "done", "pending", "rejected"];
  const [show, setShow] = useState(false);
  const [text, setText] = useState("all");
  return (
    <div className="w-full my-7 flex items-center justify-end">
      <div className="relative">
        <div className="rounded-lg border border-gray-700 px-2 py-1 flex items-center justify-between w-40">
          <span className="text-black">{text}</span>
          {show ? (
            <ChevronUp
              onClick={() => setShow(!show)}
              className="text-black"
              size={15}
            />
          ) : (
            <ChevronDown
              onClick={() => setShow(!show)}
              className="text-black"
              size={15}
            />
          )}
        </div>
        {show && (
          <div className="w-full flex flex-col absolute top-10 left-0 rounded bg-white p-1 z-30">
            {status.map((status, index) => (
              <p
                key={index}
                className={`text-black py-2 px-3 border-b border-gray-700 cursor-pointer ${
                  index === 3 && " !border-none "
                }`}
                onClick={() => {
                  setText(status);
                  setShow(!show);
                }}
              >
                {status}
              </p>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default TransactionFilter;

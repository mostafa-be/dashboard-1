import {
  ChevronLeft,
  ChevronRight,
  Laugh,
  Mic,
  Paperclip,
  Share2,
} from "lucide-react";
import React from "react";

type Props = {
  open: boolean;
  setOpen: (value: boolean) => void;
};

const ChatRom = ({ open, setOpen }: Props) => {
  return (
    <div className=" relative  z-0 w-full p-3 800px:w-2/3 h-full bg-slate-100 rounded-lg ">
      <div className=" absolute top-2 left-2 w-min 800px:hidden flex  items-center justify-start bg-zinc-200 rounded-lg text-black p-2">
        {open ? (
          <ChevronRight size={20} onClick={() => setOpen(!open)} />
        ) : (
          <ChevronLeft size={20} onClick={() => setOpen(!open)} />
        )}
          </div>
          <div className="h-[85%]"></div>
      <div className="h-[15%] w-full flex items-center gap-1 justify-end">
        <div className="w-full flex items-center justify-between">
          <input
            type="text"
            className="w-[75%] h-[40px] outline-none rounded-full px-2"
          />
          <div className="text-white/90 p-2 bg-stone-200 rounded-full hover:scale-105 cursor-pointer flex items-center justify-center">
            <Laugh size={20} />
          </div>
          <div className="text-white/90 p-2 bg-stone-200 rounded-full hover:scale-105 cursor-pointer flex items-center justify-center">
            <Paperclip size={20} />
          </div>
          <div className="text-white/90 p-2 bg-stone-200 rounded-full hover:scale-105 cursor-pointer flex items-center justify-center">
            <Mic size={20} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatRom;

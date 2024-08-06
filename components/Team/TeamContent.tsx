import React, { useState } from "react";
import TeamMember from "./TeamMember";
import ChatRom from "./ChatRom";
type Props = {
  expanded: boolean;
};

const TeamContent = ({ expanded }: Props) => {
  const [open, setOpen] = useState(false);
  return (
    <div className=" w-full  px-5   h-full my-10 flex flex-wrap  800px:flex-nowrap 800px:flex items-start justify-between gap-7">
      <div className=" relative w-full flex items-start justify-between gap-4 bg-white rounded-xl h-[85vh] 800px:h-[75vh] px-4 py-5">
        <TeamMember open={open} setOpen={setOpen} />
        <ChatRom open={open} setOpen={setOpen} />
      </div>
    </div>
  );
};

export default TeamContent;

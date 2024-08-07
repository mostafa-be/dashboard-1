import React from "react";
import { UserNavigation } from "./UserNavigation";
import { UserVisitor } from "./UserVisitor";
import UserVisitorTable from "./UserVisitorTable";
import SocialTraffic from "./SocialTraffic";
type Props = {};

const DataContent = (props: Props) => {
  return (
    <div className="w-full  px-5   h-full my-10 grid grid-cols-1 800px:grid-cols-2  gap-7">
      <UserVisitor />
      <UserVisitorTable />
      <UserNavigation />
      <SocialTraffic />
    </div>
  );
};

export default DataContent;

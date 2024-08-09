import React from "react";
import MenuAccount from "./MenuAccount";
import HeadAccount from "./HeadAccount";
import BasicInfoAccount from "./BasicInfoAccount";
import ChangePasswordAccount from "./ChangePasswordAccount";
import TwoFA from "./TwoFA";
import Accounts from "./Accounts";
import Notifications from "./Notifications";
import Sessions from "./Sessions";
import DeleteAccount from "./DeleteAccount";
type Props = {};

const SettingsContent = (props: Props) => {
  return (
    <div className="w-full  px-5   h-full m-auto my-10 z-0">
      <div className="w-full flex flex-wrap items-start justify-between gap-6">
        <MenuAccount />
        <div className="w-full 800px:w-[72%]">
          <HeadAccount />
          <BasicInfoAccount />
          <ChangePasswordAccount />
          <TwoFA />
          <Accounts />
          <Notifications />
          <Sessions />
          <DeleteAccount />
        </div>
      </div>
    </div>
  );
};

export default SettingsContent;

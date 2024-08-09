import React from "react";
import {
  LibraryBig,
  User,
  Key,
  ShieldCheck,
  Waypoints,
  Megaphone,
  Shell,
  Trash,
} from "lucide-react";
import Link from "next/link";
type Props = {};

const MenuAccount = (props: Props) => {
  return (
    <div className="w-full 800px:w-1/4 800px:sticky top-24 flex flex-col items-start justify-start p-3 rounded-lg bg-white shadow-sm">
      <div className="w-full flex  items-center justify-start gap-3 py-3 px-4 rounded  hover:bg-slate-50 cursor-pointer text-gray-500 text-[14px]  font-[400] capitalize ">
        <User />
        <Link href={"/dashboard/settings/#profile"}>profile</Link>
      </div>
      <div className="w-full flex items-center justify-start gap-3 py-3 px-4 rounded  hover:bg-slate-50 cursor-pointer text-gray-500 text-[14px]  font-[400] capitalize ">
        <LibraryBig />
        <Link href={"/dashboard/settings/#basic-info"}>basic info</Link>
      </div>
      <div className="w-full flex items-center justify-start gap-3 py-3 px-4 rounded  hover:bg-slate-50 cursor-pointer text-gray-500 text-[14px]  font-[400] capitalize ">
        <Key />
        <Link href={"/dashboard/settings/#change-password"}>
          change password
        </Link>
      </div>
      <div className="w-full flex items-center justify-start gap-3 py-3 px-4 rounded  hover:bg-slate-50 cursor-pointer text-gray-500 text-[14px]  font-[400] capitalize ">
        <ShieldCheck />
        <Link href={"/dashboard/settings/#fa"}>2FA</Link>
      </div>
      <div className="w-full flex items-center justify-start gap-3 py-3 px-4 rounded  hover:bg-slate-50 cursor-pointer text-gray-500 text-[14px]  font-[400] capitalize ">
        <Waypoints />
        <Link href={"/dashboard/settings/#accounts"}>Accounts</Link>
      </div>
      <div className="w-full flex items-center justify-start gap-3 py-3 px-4 rounded  hover:bg-slate-50 cursor-pointer text-gray-500 text-[14px]  font-[400] capitalize ">
        <Megaphone />
        <Link href={"/dashboard/settings/#notifications"}>Notification</Link>
      </div>
      <div className="w-full flex items-center justify-start gap-3 py-3 px-4 rounded  hover:bg-slate-50 cursor-pointer text-gray-500 text-[14px]  font-[400] capitalize ">
        <Shell />
        <Link href={"/dashboard/settings/#sessions"}>Sessions</Link>
      </div>
      <div className="w-full flex items-center justify-start gap-3 py-3 px-4 rounded  hover:bg-slate-100 cursor-pointer text-gray-500 text-[14px]  font-[400] capitalize ">
        <Trash />
        <Link href={"/dashboard/settings/#delete-account"}>delete account</Link>
      </div>
    </div>
  );
};

export default MenuAccount;

"use client";
import React, { useState } from "react";
import {
  LayoutDashboard,
  ChartSpline,
  ReceiptEuro,
  UsersRound,
  Kanban,
  FileText,
  Bolt,
  Lightbulb,
} from "lucide-react";
import SideBar, { SideBarItem } from "@/components/Lyaout/SideBar";
import Header from "@/components/Lyaout/Header";
import Heading from "@/app/utils/Heading";
import SettingsContent from "../../../components/Settings/SettingsContent";

type Props = {};

const Page = (props: Props) => {
  const [expanded, setExpanded] = useState<boolean>(true);
  return (
    <div>
      <Heading
        title={`Settings`}
        description="When MIP processes a Distribution or Product-combined feed and finds a description template name in the TemplateName field, it uses the description template instead of the standard eBay description file to display the listing. If there is data in the CustomFields field, it pulls the Value part of the Key-value pair in the product feed into the description template, and displays that data in the listing"
        keywords="Template,HTMl,Shopif,E-Commerce,WooCommerce,Wordpress,Google,React,Next,Node Js,Programming"
      />
      <div className="w-full bg-slate-100 flex items-start justify-start">
        <SideBar expanded={expanded} setExpanded={setExpanded}>
          <SideBarItem
            icon={<LayoutDashboard size={20} />}
            text="Dashboard"
            active={false}
            link={false}
            url={"dashboard"}
            alert={false}
          />
          <SideBarItem
            icon={<ChartSpline size={20} />}
            text="Projects"
            active={false}
            link={false}
            url={"dashboard/projects"}
            alert={false}
          />
          <SideBarItem
            icon={<ReceiptEuro size={20} />}
            text="Transactions"
            active={false}
            link={false}
            url={"dashboard/transactions"}
            alert={false}
          />
          <SideBarItem
            icon={<UsersRound size={20} />}
            text="My Team"
            active={false}
            link={false}
            url={"dashboard/team"}
            alert={false}
          />
          <SideBarItem
            icon={<Kanban size={20} />}
            text="Research Data"
            active={false}
            link={false}
            url={"dashboard/research-data"}
            alert={false}
          />
          <SideBarItem
            icon={<FileText size={20} />}
            text="Reports"
            active={false}
            link={false}
            url={"dashboard/reports"}
            alert={false}
          />
          <hr className="w-full my-2" />
          <SideBarItem
            icon={<Bolt size={20} />}
            text="settings"
            active={true}
            link={false}
            url={"dashboard/settings"}
            alert={false}
          />
          <SideBarItem
            icon={<Lightbulb size={20} />}
            text="Help"
            active={false}
            link={false}
            url={"dashboard/help"}
            alert={false}
          />
        </SideBar>
        <div className="w-full  flex flex-col items-start justify-center ">
          <Header
            title="Settings"
            expanded={expanded}
            setExpanded={setExpanded}
          />
          <SettingsContent />
        </div>
      </div>
    </div>
  );
};

export default Page;

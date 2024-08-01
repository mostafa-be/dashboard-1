"use client";
import React, { useState } from "react";
import Heading from "../utils/Heading";
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
type Props = {};

const Page = (props: Props) => {
  const [expanded, setExpanded] = useState<boolean>(true);
  return (
    <div>
      <Heading
        title={`Dashboard`}
        description="When MIP processes a Distribution or Product-combined feed and finds a description template name in the TemplateName field, it uses the description template instead of the standard eBay description file to display the listing. If there is data in the CustomFields field, it pulls the Value part of the Key-value pair in the product feed into the description template, and displays that data in the listing"
        keywords="Template,HTMl,Shopif,E-Commerce,WooCommerce,Wordpress,Google,React,Next,Node Js,Programming"
      />
      <div className="w-full min-h-scren  bg-slate-100 flex items-center justify-start">
        <SideBar expanded={expanded} setExpanded={setExpanded}>
          <SideBarItem
            icon={<LayoutDashboard size={20} />}
            text="Dashboard"
            active={true}
            link={false}
            url={"/dashboard"}
            alert={false}
          />
          <SideBarItem
            icon={<ChartSpline size={20} />}
            text="Projects"
            active={false}
            link={false}
            url={"/projects"}
            alert={false}
          />
          <SideBarItem
            icon={<ReceiptEuro size={20} />}
            text="Transactions"
            active={false}
            link={false}
            url={"/transactions"}
            alert={false}
          />
          <SideBarItem
            icon={<UsersRound size={20} />}
            text="My Team"
            active={false}
            link={false}
            url={"/team"}
            alert={false}
          />
          <SideBarItem
            icon={<Kanban size={20} />}
            text="Research Data"
            active={false}
            link={false}
            url={"/research-data"}
            alert={false}
          />
          <SideBarItem
            icon={<FileText size={20} />}
            text="Reports"
            active={false}
            link={false}
            url={"/reports"}
            alert={false}
          />
          <hr className="w-full my-2" />
          <SideBarItem
            icon={<Bolt size={20} />}
            text="settings"
            active={false}
            link={false}
            url={"/settings"}
            alert={false}
          />
          <SideBarItem
            icon={<Lightbulb size={20} />}
            text="Help"
            active={false}
            link={false}
            url={"/help"}
            alert={false}
          />
        </SideBar>
      </div>
    </div>
  );
};

export default Page;

// charts.tsx/jsx

"use client"; // if you use app dir, don't forget this line

import dynamic from "next/dynamic";
const ApexChart = dynamic(() => import("react-apexcharts"), { ssr: false });

export function UserVisitor() {
  const option: any = {
    chart: {
      type: "area",
    },
    dataLabels: {
      enabled: false,
      style: {
        colors: ["#6366f1", "#F44336", "#E91E63"],
      },
    },
    colors: ["#6366f1", "#F44336", "#E91E63"],
    markers: {
      colors: ["#6366f1", "#F44336", "#E91E63"],
    },
    stroke: {
      curve: "smooth",
    },
    xaxis: {
      type: "datetime",
      categories: [
        "2018-09-18",
        "2018-09-19",
        "2018-09-20",
        "2018-09-21",
        "2018-09-22",
        "2018-09-23",
        "2018-09-24",
        "2018-09-25",
        "2018-09-26",
        "2018-09-27",
        "2018-09-28",
        "2018-09-29",
        "2018-09-30",
        "2018-10-01",
        "2018-10-02",
        "2018-10-03",
        "2018-10-04",
        "2018-10-05",
        "2018-10-06",
      ],
    },
    fill: {
      colors: ["#6366f1", "#F44336", "#E91E63"],
    },
    tooltip: {
      x: {
        format: "dd/MM/yy",
      },
    },
  };

  const series = [
    {
      name: "Visitor",
      data: [10000,15000,30000,40000,10000,75000,500,13000,90000,100000,75000,57920,22147,6000,80000,90888],
    },
  ];

  return (
    <>
      <div className="w-full h-full  bg-white rounded-[10px] shadow p-3">
        <div className="w-full">
          <h4 className="text-[20px] font-[600] text-black">
            User Visitor{" "}
            <span className="text-green-500 bg-green-50 p-1 text-[16px]">
              +4%
            </span>
          </h4>
        </div>
        <div className="mt-3">
          <ApexChart
            type="area"
            height={350}
            width={"100%"}
            options={option}
            series={series}
          />
        </div>
      </div>
    </>
  );
}

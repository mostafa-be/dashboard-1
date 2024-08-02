import dynamic from "next/dynamic";
const ApexChart = dynamic(() => import("react-apexcharts"), { ssr: false });
type Props = {};

const AnalyticsProjects = (props: Props) => {
  const option: any = {
    chart: {
      height: 350,
      type: "bar",
    },
    plotOptions: {
      bar: {
        borderRadius: 5,
        columnWidth: "50%",
      },
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      width: 0,
    },
    grid: {
      row: {
        colors: ["#fff", "#f2f2f2"],
      },
    },
    xaxis: {
      labels: {
        rotate: -45,
      },
      categories: [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "July",
        "Aug",
        "Oct",
        "Nov",
        "Dec",
      ],
      tickPlacement: "on",
    },
    yaxis: {
      title: {
        text: "Count",
      },
    },
    fill: {
      colors: ["#4f46e5"],
      type: "gradient",
      gradient: {
        shade: "light",
        type: "horizontal",
        shadeIntensity: 0.25,
        gradientToColors: undefined,
        inverseColors: true,
        opacityFrom: 0.85,
        opacityTo: 0.85,
        stops: [50, 0, 100],
      },
    },
  };
  const series = [
    {
      name: "Count",
      data: [44, 55, 41, 67, 22, 90, 21, 33, 45, 31, 87],
    },
  ];

  return (
    <div className="w-full overflow-hidden h-full 1000px:flex-1 bg-white rounded-[10px] shadow p-3 mt-10">
      <div className="w-full">
        <h4 className="text-[20px] font-[600] text-black">Project Analysis</h4>
      </div>
      <div className="mt-3">
        <ApexChart
          type="bar"
          height={350}
          width={"100%"}
          options={option}
          series={series}
          className="w-full"
        />
      </div>
    </div>
  );
};

export default AnalyticsProjects;

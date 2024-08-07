'use client'
import dynamic from "next/dynamic";
const ApexChart = dynamic(() => import("react-apexcharts"), { ssr: false });


export function UserNavigation() { 
    const option:any = {
        chart: {
            
            type: 'pie',
        },
        labels: ['Desktop', 'Tablet', 'Mobile'],
        responsive: [{
            breakpoint: 480,
            options: {
                chart: {
                    width: 200
                },
                legend: {
                    position: 'bottom'
                }
            }
        }]
    };
    
    const series =  [140, 55, 13]
    
    return (
        <>
            <div className="w-full h-full bg-white rounded-[10px] shadow p-3">
                <div className="w-full">
                    <h4 className="text-[20px] font-[600] text-black">Leads By Source</h4>
                </div>
                <div className="mt-3">
                    <ApexChart type="pie" height={350} width={ "100%"} options={option} series={series}   />
                </div>
            </div>
            
        </>
    );
}


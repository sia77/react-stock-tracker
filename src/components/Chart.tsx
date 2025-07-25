import { BarData } from "@/Interfaces/historicBarData";
import { ApexOptions } from "apexcharts";
import ReactApexChart from "react-apexcharts";


const Chart = ({data, height}:any) => {

  const safeData = Array.isArray(data) ? data : [];
  
    const pairs = safeData.map((item:BarData ) => ({
        x: new Date(item.t).getTime(), // recommended for ApexCharts
        y: item.c,
      }));

    const options: ApexOptions = {
        chart: {
          type: 'line',
        },
        noData: {
          text: 'No data available',
          align: 'center',
          verticalAlign: 'middle',
          style: {
            color: '#d91818',
            fontSize: '20px',
            fontFamily: 'Helvetica, Arial, sans-serif',
          }
        },
        xaxis: {
            type: 'datetime', // this is key
            labels: {
                datetimeUTC: false, // if you want local time instead of UTC
                format: 'yyyy-MM-dd' // or use 'MMM dd, yyyy', etc.
            }
        },
      };

    // const options: ApexOptions = {
    //     chart: {
    //       type: 'area',
    //       zoom: { enabled: true },
    //     },
    //     xaxis: {
    //       type: 'datetime',
    //     },
    //     dataLabels: {
    //       enabled: false,
    //     },
    //     stroke: {
    //       curve: 'smooth',
    //     },
    //     fill: {
    //       type: 'gradient',
    //       gradient: {
    //         shadeIntensity: 1,
    //         opacityFrom: 0.4,
    //         opacityTo: 0.1,
    //         stops: [0, 90, 100],
    //       },
    //     },
    //     tooltip: {
    //       x: {
    //         format: 'yyyy-MM-dd',
    //       },
    //     },
    //   };
  
    const series =  [
      {
        name: '',
        data: pairs,
      },
    ];


    return(

        <ReactApexChart options={options} series={series} type="line" height={height} />
    )

}


export default Chart;
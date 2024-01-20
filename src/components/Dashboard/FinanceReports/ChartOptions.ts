import { ApexOptions } from "apexcharts";

export const chartOptions: ApexOptions = {
    series: [
      {
        name: "Net Profit",
        data: [15, 25, 15, 40, 20, 50, 70, 90, 90],
      },
    ],
    chart: {
      fontFamily: "inherit",
      type: "area",
      height: 150,
      width: 381,
      toolbar: {
        show: false,
      },
      zoom: {
        enabled: false,
      },
      sparkline: {
        enabled: true,
      },
    },
    plotOptions: {},
    legend: {
      show: false,
    },
    dataLabels: {
      enabled: false,
    },
    fill: {
      type: "solid",
      opacity: 1,
    },
    stroke: {
      curve: "smooth",
      show: true,
      width: 3,
      colors: ["#009ef7"],
    },
    xaxis: {
      categories: ["Feb", "Mar", "Apr", "May", "Jun", "Jul"],
      axisBorder: {
        show: false,
      },
      axisTicks: {
        show: false,
      },
      labels: {
        show: false,
        style: {
          colors: "#CDCDDE",
          fontSize: "12px",
        },
      },
      crosshairs: {
        show: false,
        position: "front",
        stroke: {
          color: "#323248",
          width: 1,
          dashArray: 3,
        },
      },
      tooltip: {
        enabled: false,
      },
    },
    yaxis: {
      min: 0,
      max: 60,
      labels: {
        show: false,
        style: {
          colors: "#CDCDDE",
          fontSize: "12px",
        },
      },
    },
    states: {
      normal: {
        filter: {
          type: "none",
          value: 0,
        },
      },
      hover: {
        filter: {
          type: "none",
          value: 0,
        },
      },
      active: {
        allowMultipleDataPointsSelection: false,
        filter: {
          type: "none",
          value: 0,
        },
      },
    },
    tooltip: {
      style: {
        fontSize: "12px",
      },
      y: {
        formatter: function (val: any) {
          return "$" + val + " thousands";
        },
      },
    },
    colors: ["#212e48"],
    markers: {
      colors: ["#212e48"],
      strokeColors: ["#009ef7"],
      strokeWidth: 3,
    },
  }
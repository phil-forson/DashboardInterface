import { ApexOptions } from "apexcharts";

export const chartOptions: ApexOptions = {
    chart: {
      fontFamily: "inherit",
      type: "area",
      height: 200,
      width: 20,
      toolbar: {
        show: false,
      },
      zoom: {
        enabled: false,
      },
      sparkline: {
        enabled: true,
      },
      dropShadow: {
        enabled: true,
        enabledOnSeries: undefined,
        top: 5,
        left: 0,
        blur: 3,
        color: "##f1416c",
        opacity: 0.2,
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
      opacity: 0,
    },
    stroke: {
      curve: "smooth",
      show: true,
      width: 3,
      colors: ["#cb1e46"],
    },
    xaxis: {
      categories: ["Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug"],
      axisBorder: {
        show: false,
      },
      axisTicks: {
        show: false,
      },
      labels: {
        show: false,
      },
      crosshairs: {
        show: false,
      },
    },
    yaxis: {
      min: 0,
      max: 80,
      labels: {
        show: false,
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
        formatter: function (val: number) {
          return "$" + val + " thousands";
        },
      },
      marker: {
        show: false,
      },
    },
    colors: ["transparent"],
    markers: {
      colors: "#f1416c",
      strokeColors: "#cb1e46",
      strokeWidth: 3,
    },
  };
import React, { useState } from "react";
import CustomCard from "../CustomCard/CustomCard";
import { Box, CardBody, Flex, Text } from "@chakra-ui/react";
import { ApexOptions } from "apexcharts";
import ReactApexChart from "react-apexcharts";

const SalesReport = () => {
  const [series] = useState([
    {
      name: "Net Profit",
      data: [50, 60, 70, 80, 60, 50, 70, 60],
    },
    {
      name: "Revenue",
      data: [50, 60, 70, 80, 60, 50, 70, 60],
    },
  ]);
  const options: ApexOptions = {
    chart: {
      fontFamily: "inherit",
      type: "bar",
      height: 175,
      toolbar: {
        show: false,
      },
    },
    plotOptions: {
      bar: {
        horizontal: false,
        columnWidth: "50%",
        borderRadius: 5,
      },
    },
    legend: {
      show: false,
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      show: true,
      width: 2,
      colors: ["transparent"],
    },
    xaxis: {
      categories: ["Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep"],
      axisBorder: {
        show: false,
      },
      axisTicks: {
        show: false,
      },
      labels: {
        style: {
          colors: "#565674",
          fontSize: "12px",
        },
      },
    },
    yaxis: {
      labels: {
        style: {
          colors: "#565674",
          fontSize: "12px",
        },
      },
    },
    fill: {
      type: "solid",
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
          return "$" + val + " revenue";
        },
      },
    },
    colors: ["#009ef7", "#323248"],
    grid: {
      padding: {
        top: 10,
      },
      borderColor: "#2B2B40",
      strokeDashArray: 4,
      yaxis: {
        lines: {
          show: true,
        },
      },
    },
  };
  //   const options: ApexOptions = {
  //     chart: {
  //       fontFamily: "inherit",
  //       type: "bar",
  //       height: 170,
  //       toolbar: {
  //         show: false,
  //       },
  //     },
  //     plotOptions: {
  //       bar: {
  //         horizontal: false,
  //         columnWidth: "30%",
  //         borderRadius: 5,
  //       },
  //     },
  //     legend: {
  //       show: false,
  //     },
  //     dataLabels: {
  //       enabled: false,
  //     },
  //     stroke: {
  //       show: true,
  //       width: 2,
  //       colors: ["transparent"],
  //     },
  //     xaxis: {
  //       categories: ["Feb", "Mar", "Apr", "May", "Jun", "Jul"],
  //       axisBorder: {
  //         show: false,
  //       },
  //       axisTicks: {
  //         show: false,
  //       },
  //       labels: {
  //         style: {
  //           colors: "#565674",
  //           fontSize: "12px",
  //         },
  //       },
  //     },
  //     yaxis: {
  //       labels: {
  //         style: {
  //           colors: "#565674",
  //           fontSize: "12px",
  //         },
  //       },
  //     },
  //     fill: {
  //       opacity: 1,
  //     },
  //     states: {
  //       normal: {
  //         filter: {
  //           type: "none",
  //           value: 0,
  //         },
  //       },
  //       hover: {
  //         filter: {
  //           type: "none",
  //           value: 0,
  //         },
  //       },
  //       active: {
  //         allowMultipleDataPointsSelection: false,
  //         filter: {
  //           type: "none",
  //           value: 0,
  //         },
  //       },
  //     },
  //     tooltip: {
  //       style: {
  //         fontSize: "12px",
  //       },
  //       y: {
  //         formatter: function (val: number) {
  //           return "$" + val + " thousands";
  //         },
  //       },
  //     },
  //     colors: ["#009ef7", "#323248"],
  //     grid: {
  //       borderColor: "#2B2B40",
  //       strokeDashArray: 4,
  //       yaxis: {
  //         lines: {
  //           show: true,
  //         },
  //       },
  //     },
  //   };
  return (
    <CustomCard
      headerText="Sales"
      headerSubtext="Oct 8 - Oct 26 2021"
      headerRightComponent={
        <Text
          color={"sysblue.100"}
          fontSize={"1.3rem"}
          fontFamily={"PoppinsBold"}
        >
          $15,300
        </Text>
      }
      bg="dark.100"
    >
      <CardBody>
        <ReactApexChart
          series={series}
          options={options}
          height={175}
          type="bar"
        />
      </CardBody>
    </CustomCard>
  );
};

export default SalesReport;

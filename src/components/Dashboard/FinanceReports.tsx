import React, { useState } from "react";
import CustomCard from "../CustomCard/CustomCard";
import { Box, CardBody, Flex, Text } from "@chakra-ui/react";
import ReactApexChart from "react-apexcharts";
import { ApexOptions } from "apexcharts";

const FinanceReports = () => {
  const [options] = useState<ApexOptions>({
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
      width: 'full',
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
  });

  const [series] = useState([
    {
      name: "Net Profit",
      data: [15, 25, 15, 40, 20, 50],
    },
  ]);
  //     chart: {
  //       fontFamily: "inherit",
  //       type: "bar",
  //       height: 150,
  //       toolbar: {
  //         show: false,
  //       },
  //     },
  //     plotOptions: {
  //       bar: {
  //         horizontal: false,
  //         columnWidth: "50%",
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
  //       categories: ["Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep"],
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
  //       type: "solid",
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
  //           return "$" + val + " revenue";
  //         },
  //       },
  //     },
  //     colors: ["#009ef7", "#323248"],
  //     grid: {
  //       padding: {
  //         top: 10,
  //       },
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
      headerText="Generate Reports"
      headerSubtext="Finance and accounting reports"
      headerRightComponent={
        <Text
          color={"sysblue.100"}
          fontSize={"1.3rem"}
          fontFamily={"PoppinsBold"}
        >
          $24,500
        </Text>
      }
      bg="dark.100"
    >
      <CardBody padding={0}>
        <Box id="chart">
          <ReactApexChart
            options={options}
            series={series}
            type="area"
            height={150}
          />
        </Box>
      </CardBody>
    </CustomCard>
  );
};

export default FinanceReports;

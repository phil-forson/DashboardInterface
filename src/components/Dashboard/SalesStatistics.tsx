import React, { useState } from "react";
import {
  Box,
  BoxProps,
  CardBody,
  CardHeader,
  Flex,
  Image,
  Link,
  Text,
} from "@chakra-ui/react";
import CustomCard from "../CustomCard/CustomCard";
import WidgetIcon from "../../assets/icons/WidgetsIcon";
import ReactApexChart from "react-apexcharts";
import { ApexOptions } from "apexcharts";
import ChartIcon from "../../assets/icons/ChartIcon";
import EnvelopeIcon from "../../assets/icons/EnvelopeIcon";
import FolderIcon from "../../assets/icons/FolderIcon";
import OrdersIcon from "../../assets/icons/OrdersIcon";

const SalesStatistics = () => {
  const [options] = useState<ApexOptions>({
    chart: {
      fontFamily: "inherit",
      type: "area",
      height: 200,
      width: "full",
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
  });

  const [series] = useState([
    {
      name: "Net Profit",
      data: [30, 45, 32, 70, 40, 40],
    },
  ]);
  return (
    <CustomCard bg={"sysred.100"} color={"white"} className="rounded-t-lg" >
      <CardHeader
        display={"flex"}
        justifyContent={"space-between"}
        alignItems="stretch"
        padding={"1.25rem 2.25rem"}
        marginTop={4}
        flexWrap={"wrap"}
        bg={"sysred.100"}
      >
        <Text fontSize={"1.275rem"} fontWeight={500} fontFamily={"PoppinsBold"}>
          Sales Statistics
        </Text>
        <WidgetIcon />
      </CardHeader>
      <CardBody padding={0} bg={"dark.200"}>
        <Box
          id="chart"
          height={200}
          bg={"sysred.100"}
          className="block rounded-b-lg"
        >
          <ReactApexChart
            options={options}
            series={series}
            type="area"
            height={200}
          />
        </Box>
        <Box className="py-8 px-9 -mt-20 relative" bg={"transparent"}>
          <Flex direction={{ base: "column", lg: "row" }}>
            {/* First Column */}
            <Card
              icon={<ChartIcon />}
              title="Weekly Sales"
              linkText="Weekly Sales"
              color="#392f28"
              textColor={"#ffc700"}
              marginRight={"1.75rem"}
            />

            {/* Second Column */}
            <Card
              icon={<FolderIcon />}
              title="New Projects"
              linkText="New Projects"
              color="#212e48"
              textColor="#009ef7"
            />
          </Flex>

          {/* Second Row */}
          <Flex direction={{ base: "column", lg: "row" }}>
            {/* Third Column */}
            <Card
              icon={<OrdersIcon />}
              title="Item Orders"
              linkText="Item Orders"
              color="#3a2434"
              textColor={"#f1416c"}
              marginRight={"1.75rem"}
            />

            {/* Fourth Column */}
            <Card
              icon={<EnvelopeIcon />}
              title="Bug Reports"
              linkText="Bug Reports"
              color="#1c3238"
              textColor="#50cd89"
            />
          </Flex>
        </Box>
      </CardBody>
    </CustomCard>
  );
};

export default SalesStatistics;

type CardProps = {
  icon: React.ReactElement;
  title: string;
  linkText: string;
  color: string;
} & BoxProps;
const Card: React.FC<CardProps> = ({
  icon,
  title,
  linkText,
  color,
  textColor,
  ...rest
}) => {
  return (
    <Flex
      direction="column"
      bg={color}
      p={6}
      rounded="0.75rem"
      mb="7"
      flex={"1 1 0"}
      {...rest}
    >
      <Box as="span" className={"block my-2"}>
        {React.cloneElement(icon, { fill: textColor })}
      </Box>
      <Text
        color={textColor}
        fontWeight="bold"
        fontSize="md"
        textDecor={"none"}
      >
        {title}
      </Text>
    </Flex>
  );
};

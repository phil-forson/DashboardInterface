import { useState } from "react";
import { Box, CardBody, Flex } from "@chakra-ui/react";
import CustomCard from "../../CustomCard/CustomCard";
import ReactApexChart from "react-apexcharts";
import { ApexOptions } from "apexcharts";
import ChartIcon from "../../../assets/icons/ChartIcon";
import EnvelopeIcon from "../../../assets/icons/EnvelopeIcon";
import FolderIcon from "../../../assets/icons/FolderIcon";
import OrdersIcon from "../../../assets/icons/OrdersIcon";
import Card from "./Card";
import { chartOptions } from "./ChartOptions";

const SalesStatistics = () => {
  const [options] = useState<ApexOptions>(chartOptions);

  const [series] = useState([
    {
      name: "Net Profit",
      data: [30, 45, 32, 70, 40],
    },
  ]);
  return (
    <CustomCard bg={"sysred.100"} color={"white"} headerText="Sales Statistics">
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



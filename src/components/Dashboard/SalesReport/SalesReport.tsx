import { useState } from "react";
import CustomCard from "../../CustomCard/CustomCard";
import { CardBody, Text } from "@chakra-ui/react";
import ReactApexChart from "react-apexcharts";
import { chartOptions } from "./ChartOptions";

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
          options={chartOptions}
          height={175}
          type="bar"
        />
      </CardBody>
    </CustomCard>
  );
};

export default SalesReport;

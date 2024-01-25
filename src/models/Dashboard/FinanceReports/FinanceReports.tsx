import { useState } from "react";
import { Box, CardBody, Text } from "@chakra-ui/react";
import ReactApexChart from "react-apexcharts";
import { ApexOptions } from "apexcharts";
import { chartOptions } from "./ChartOptions";
import CustomCard from "../../../components/CustomCard/CustomCard";

const FinanceReports = () => {
  const [options] = useState<ApexOptions>(chartOptions);

  const [series] = useState([
    {
      name: "Net Profit",
      data: [15, 25, 15, 40, 20, 50],
    },
  ]);

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
    >
      <CardBody padding={0}>
        <Box id="chart" borderRadius="8px 8px 0 0">
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

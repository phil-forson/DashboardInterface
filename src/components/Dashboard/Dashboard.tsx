import { Flex } from "@chakra-ui/react";
import SalesStatistics from "./SalesStatistics";
import Activities from "./Activities";
import FinanceReports from "./FinanceReports";
import SalesReport from "./SalesReport";

const Dashboard: React.FC<{ isExpanded: boolean }> = ({ isExpanded }) => {
  return (
    <Flex
      bg="dark.700"
      py={"30px"}
      flex={"1 0 auto"}
      flexDirection={"column"}
      marginLeft={isExpanded ? "265px" : "80px"}
      transition="margin-left 0.3s"
      position={"static"}
      gap={"1.5rem"}
    >
      <Flex gap={"2rem"} margin={"auto"} width={"1210px"}>
        <SalesStatistics />
        <Activities />
        <Flex flexDir={"column"} gap={"2rem"}>
          <FinanceReports />
          <SalesReport />
        </Flex>
      </Flex>

      <Flex gap={"2rem"} margin={"auto"} width={"1210px"}>
        <SalesStatistics />
        <SalesStatistics />
        <SalesStatistics />
      </Flex>
    </Flex>
  );
};

export default Dashboard;

import { Flex, Grid, GridItem } from "@chakra-ui/react";
import SalesStatistics from "./SalesStatistics/SalesStatistics";
import Activities from "./Activities/Activities";
import FinanceReports from "./FinanceReports/FinanceReports";
import SalesReport from "./SalesReport/SalesReport";

const Dashboard: React.FC<{ isExpanded: boolean }> = ({ isExpanded }) => {
  return (
    <Grid
      bg="dark.700"
      py={"30px"}
      templateColumns='repeat(3, 1fr)'
      marginLeft={isExpanded ? "265px" : "80px"}
      transition="margin-left 0.3s"
      position={"static"}
      px={isExpanded ? 10: 100}
      gap={"1.5rem"}
    >
      {/* <Flex gap={"2rem"} margin={"auto"} width={"1210px"}>
        <SalesStatistics />
        <Activities />
        <Flex flexDir={"column"} gap={"2rem"}>
          <FinanceReports />
          <SalesReport />
        </Flex>
      </Flex> */}

      <GridItem w={'100%'}>
        <SalesStatistics />
      </GridItem>
      <GridItem w={'100%'}>
        <Activities />
      </GridItem>
      <GridItem display={"flex"} flexDir={"column"} gap={"2rem"} maxW={'400px'}>
        <FinanceReports />
        <SalesReport />
      </GridItem>
      {/* <Flex gap={"2rem"} margin={"auto"} width={"1210px"}>
        <SalesStatistics />
        <SalesStatistics />
        <SalesStatistics />
      </Flex> */}
    </Grid>
  );
};

export default Dashboard;

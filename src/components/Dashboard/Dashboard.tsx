import { Grid, GridItem } from "@chakra-ui/react";
import SalesStatistics from "./SalesStatistics/SalesStatistics";
import Activities from "./Activities/Activities";
import FinanceReports from "./FinanceReports/FinanceReports";
import SalesReport from "./SalesReport/SalesReport";
import Todo from "./Todo/Todo";

const Dashboard: React.FC<{ isExpanded: boolean }> = ({ isExpanded }) => {
  return (
    <Grid
      bg="dark.700"
      py={"30px"}
      templateColumns="repeat(3, 1fr)"
      marginLeft={isExpanded ? "265px" : "80px"}
      transition="margin-left 0.3s"
      position={"static"}
      px={isExpanded ? 10 : 100}
      gap={"1.5rem"}
    >
      <GridItem w={"100%"}>
        <SalesStatistics />
      </GridItem>
      <GridItem w={"100%"}>
        <Activities />
      </GridItem>
      <GridItem display={"flex"} flexDir={"column"} gap={"2rem"} maxW={"400px"}>
        <FinanceReports />
        <SalesReport />
      </GridItem>
      <GridItem>
        <Todo />
      </GridItem>
    </Grid>
  );
};

export default Dashboard;

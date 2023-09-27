import { Box, Center, Container, Flex, Grid, GridItem } from "@chakra-ui/react";
import SalesStatistics from "./SalesStatistics";

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
      className="gap-x-6"
    >
      <Flex gap={"2rem"} margin={"auto"} width={"1210px"}>
        <SalesStatistics />
        <SalesStatistics />
        <SalesStatistics />
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

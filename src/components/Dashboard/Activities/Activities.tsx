import CustomCard from "../../CustomCard/CustomCard";
import { CardBody } from "@chakra-ui/react";
import Timeline from "../../Timeline/Timeline";
import { timelineData } from "./TimelineData";

const Activities = () => {
 
  return (
    <CustomCard
      bg="dark.100"
      marginBottom={10}
      headerText="Activities"
      headerSubtext="890,344 Sales"
    >
      <CardBody paddingTop={2} paddingInline={"2.25rem"}>
        <Timeline timelineData={timelineData} />
      </CardBody>
    </CustomCard>
  );
};

export default Activities;

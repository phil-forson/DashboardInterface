import { CardBody } from "@chakra-ui/react";
import { timelineData } from "./TimelineData";
import CustomCard from "../../../components/CustomCard/CustomCard";
import Timeline from "../../../components/Timeline/Timeline";

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

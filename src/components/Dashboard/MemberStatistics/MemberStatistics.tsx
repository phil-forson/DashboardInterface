import { Text } from "@chakra-ui/react";
import CustomCard from "../../CustomCard/CustomCard";

type Props = {};
const MemberStatistics = (): Props => {
  return (
    <CustomCard headerText="Member Text" headerSubtext="Over 500 members">
      <Text>Hello World</Text>
    </CustomCard>
  );
};

export default MemberStatistics;

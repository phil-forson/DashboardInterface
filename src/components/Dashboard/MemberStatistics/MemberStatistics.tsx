import { Box, CardBody, Text } from "@chakra-ui/react";
import CustomCard from "../../CustomCard/CustomCard";
import CustomButton from "../../Button/CustomButton";
import { FaPlus } from "react-icons/fa";
import CustomTable from "../../Table/Table";

const MemberStatistics = () => {
  return (
    <CustomCard
      headerText="Member Text"
      headerSubtext="Over 500 members"
      headerRightComponent={
        <CustomButton
          label="New Member"
          bgColorHover="sysblue.100"
          bgColor={"sysblue.200"}
          color={"sysblue.100"}
          _hover={{
            textColor: "white",
            bgColor: "sysblue.100",
          }}
          icon={
            <Box>
              <FaPlus />
            </Box>
          }
          cloneIcon={false}
          iconColor="sysblue.100"
        ></CustomButton>
      }
    >
      <CardBody padding={"1.25rem 2.25rem"}>
        <CustomTable />
      </CardBody>
    </CustomCard>
  );
};

export default MemberStatistics;

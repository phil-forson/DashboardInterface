import { Box, CardBody } from "@chakra-ui/react";

import { FaPlus } from "react-icons/fa";
import CustomCard from "../../../components/CustomCard/CustomCard";
import CustomButton from "../../../components/Button/CustomButton";
import CustomTable from "../../../components/Table/Table";

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

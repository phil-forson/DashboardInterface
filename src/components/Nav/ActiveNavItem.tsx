import React from "react";
import { Box, Flex, Text } from "@chakra-ui/react";
import CustomButton from "../Button/CustomButton";
import FilterIcon from "../../assets/icons/FilterIcon";

type ActiveNavItemProps = {
  activeLabel: string;
  isExpanded: boolean;
};

const ActiveNavItem: React.FC<ActiveNavItemProps> = ({
  activeLabel,
  isExpanded,
}) => {
  return (
    <Flex
      pl={8}
      bg="dark.200"
      position={"sticky"}
      top={0}
      marginLeft={isExpanded ? "265px" : "80px"}
      transition="margin-left 0.3s"
      height={65}
      alignItems="center"
      justifyContent="space-between"
      flexDirection={"row"}
    >
      <Text color="white" textTransform={"capitalize"} fontSize={"1.35rem"}>
        {activeLabel}
      </Text>
      <Flex>
        <CustomButton
          label="Filter"
          textClassName="text-[#9899ac]"
          className="bg-[#2B2B40] py-6"
          bgColorHover="sysblue.100"
          textColorHover="white"
          icon={<FilterIcon />}
        />
        <CustomButton
          label="Create"
          textClassName="text-white"
          className="bg-mainBlue py-6 text-white "
        />
      </Flex>
    </Flex>
  );
};

export default ActiveNavItem;

import React from "react";
import { Flex, Text } from "@chakra-ui/react";
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
      top={65}
      marginLeft={isExpanded ? "265px" : "80px"}
      transition="margin-left 0.3s"
      height={55}
      alignItems="center"
      justifyContent="space-between"
      flexDirection={"row"}
      zIndex={1000}
    >
      <Text
        color="white"
        textTransform={"capitalize"}
        fontSize={"1.35rem"}
        fontFamily={"PoppinsBold"}
      >
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
          bgColor={"sysblue.100"}
          py={6}
          textColor={"white"}
          _active={{
            bgColor: "sysblue.100",
          }}
        />
      </Flex>
    </Flex>
  );
};

export default ActiveNavItem;

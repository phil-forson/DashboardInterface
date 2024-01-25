import { Flex,  Text, Tr } from "@chakra-ui/react";
import CustomTableBox from "./TableHeaderBox";
import Avatar from "../Avatar/Avatar";
import AvatarIcon from "../../assets/avatars/300-1.jpg"
import Checkbox from "../Checkbox/Checkbox";
import ProgressBar from "../ProgressBar/ProgressBar";
import { ICompanyUser } from "../../models/Dashboard/MemberStatistics/MemberData";
import { actions } from "./TableActions";
import React from "react";
import TableAction from "./TableAction";

const TableRow: React.FC<{ data: ICompanyUser }> = ({ data }) => {
  return (
    <Tr borderBottomWidth={1} borderStyle={"dashed"} borderColor={"dark.300"} py={20}>
      <CustomTableBox>
        <Checkbox />
      </CustomTableBox>
      <CustomTableBox>
        <Flex gap={2}>
          <Avatar src={AvatarIcon} />
          <Flex flexDir={"column"} justify={"center"} gap={2}>
            <Text
              textTransform={"capitalize"}
              fontWeight={"600"}
              fontFamily={"PoppinsBold"}
              color={"white"}
            >
              {data.name}
            </Text>
            <Text textTransform={"capitalize"} color={"dark.300"}>
              {data.books.join(",")}
            </Text>
          </Flex>
        </Flex>
      </CustomTableBox>
      <CustomTableBox>
        <Flex gap={2} flexDir={"column"}>
          <Text
            textTransform={"capitalize"}
            fontWeight={"600"}
            fontFamily={"PoppinsBold"}
            color={"white"}
          >
            {data.companyName}
          </Text>
          <Text textTransform={"capitalize"} color={"dark.300"}>
            {data.books.join(",")}
          </Text>
        </Flex>
      </CustomTableBox>
      <CustomTableBox>
        <Flex flexDir={"column"} gap={2}>
          <Text
            textTransform={"capitalize"}
            fontWeight={"600"}
            fontFamily={"PoppinsBold"}
            color={"white"}
          >
            {data.progress}%
          </Text>
          <ProgressBar
            progress={data.progress}
            progressColor={data.progressColor}
          />
        </Flex>
      </CustomTableBox>
      <CustomTableBox>
        <Flex justifySelf={"flex-end"}>
          {actions.map((action) => (
            <TableAction action={action}/>
          ))}
        </Flex>
      </CustomTableBox>
    </Tr>
  );
};

export default TableRow;
